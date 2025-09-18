import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface User {
  uid: string;
  email: string;
  role?: string;
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        // Fetch user profile from our 'users' table
        const { data, error } = await supabase
          .from('users')
          .select('id, email, role')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.error('Error fetching user profile:', error);
          setUser(null);
          setIsAdmin(false);
          return;
        }

        if (data) {
          const currentUser: User = {
            uid: data.id,
            email: data.email,
            role: data.role,
            isAdmin: data.role === 'admin',
          };
          setUser(currentUser);
          setIsAdmin(currentUser.isAdmin || false);
        } else {
          // This case should ideally not happen if RLS is set up correctly for inserts
          // but handles if a user is authenticated but no profile exists in 'users' table
          setUser(null);
          setIsAdmin(false);
        }
      } else {
        setUser(null);
        setIsAdmin(false);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Login failed:', error.message);
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: 'user', // Default role for new registrations
        },
      },
    });

    if (error) {
      console.error('Registration failed:', error.message);
      throw error;
    }

    if (data.user) {
      // Insert into our public.users table
      const { error: insertError } = await supabase
        .from('users')
        .insert([
          {
            id: data.user.id,
            email: data.user.email,
            role: 'user',
            name: '', // Default empty name
            aceitaNewsletter: false, // Default
          },
        ]);

      if (insertError) {
        console.error('Error inserting user into public.users:', insertError.message);
        // You might want to handle this by deleting the auth user if profile creation fails
        throw insertError;
      }
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout failed:', error.message);
      throw error;
    }
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
