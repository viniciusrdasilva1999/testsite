import React from 'react';

interface LoginPromptProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  onRegister: () => void;
}

const LoginPrompt: React.FC<LoginPromptProps> = ({ isOpen, onClose, onLogin, onRegister }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-8 relative text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Você precisa estar logado!</h2>
        <p className="text-gray-600 mb-6">
          Para adicionar itens ao carrinho ou finalizar a compra, por favor, faça login ou crie uma conta.
        </p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={onLogin}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-full transition duration-300 ease-in-out"
          >
            Fazer Login
          </button>
          <button
            onClick={onRegister}
            className="w-full bg-white border border-pink-600 text-pink-600 hover:bg-pink-50 hover:text-pink-700 font-bold py-3 rounded-full transition duration-300 ease-in-out"
          >
            Criar Conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPrompt;
