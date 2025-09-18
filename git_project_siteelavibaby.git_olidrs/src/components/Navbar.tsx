import React from 'react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onCartClick }) => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <a href="/" className="text-2xl font-bold text-pink-600">SITEeLAVIBABY</a>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#" className="text-gray-700 hover:text-pink-600">Início</a>
        <a href="#" className="text-gray-700 hover:text-pink-600">Produtos</a>
        <a href="#" className="text-gray-700 hover:text-pink-600">Sobre</a>
        <a href="#" className="text-gray-700 hover:text-pink-600">Contato</a>
        {user ? (
          <>
            <span className="text-gray-700">Olá, {user.email}!</span>
            <button onClick={handleLogout} className="text-red-500 hover:text-red-700">Sair</button>
          </>
        ) : (
          <a href="#" className="text-gray-700 hover:text-pink-600">Entrar / Registrar</a>
        )}
        <button onClick={onCartClick} className="relative text-gray-700 hover:text-pink-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
