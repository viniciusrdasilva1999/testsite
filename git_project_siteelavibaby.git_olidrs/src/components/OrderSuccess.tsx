import React from 'react';

interface OrderSuccessProps {
  onBackToHome: () => void;
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-8">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center max-w-md w-full">
        <div className="text-green-500 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Pedido Realizado com Sucesso!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Obrigado pela sua compra! Seu pedido foi processado e será enviado em breve.
        </p>
        <p className="text-md text-gray-500 mb-8">
          Você receberá um e-mail de confirmação com os detalhes do seu pedido.
        </p>
        <button
          onClick={onBackToHome}
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Voltar para a Página Inicial
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
