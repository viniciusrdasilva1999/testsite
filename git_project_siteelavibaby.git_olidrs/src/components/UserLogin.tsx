import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface UserLoginProps {
  onClose: () => void;
  onSwitchToRegister: () => void;
  onSuccess: () => void;
}

const UserLogin: React.FC<UserLoginProps> = ({ onClose, onSwitchToRegister, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      onSuccess();
    } catch (err: any) {
      setError(err.message || 'Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Entrar</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Senha:</label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-full transition duration-300 ease-in-out"
          >
            Entrar
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Não tem uma conta?{' '}
          <button onClick={onSwitchToRegister} className="text-pink-600 hover:underline font-semibold">
            Registre-se
          </button>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
