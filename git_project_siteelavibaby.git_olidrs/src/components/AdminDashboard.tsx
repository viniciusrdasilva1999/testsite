import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Painel de Administração</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sair
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Bem-vindo, {user?.email}!</h2>
        <p className="text-gray-700">
          Aqui você pode gerenciar produtos, pedidos, usuários e configurações do site.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">Gerenciar Produtos</h3>
            <p className="text-gray-600">Adicione, edite ou remova produtos do seu catálogo.</p>
            <button className="mt-4 text-blue-600 hover:underline">Ir para Produtos</button>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">Ver Pedidos</h3>
            <p className="text-gray-600">Acompanhe e gerencie todos os pedidos dos clientes.</p>
            <button className="mt-4 text-green-600 hover:underline">Ir para Pedidos</button>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">Gerenciar Usuários</h3>
            <p className="text-gray-600">Visualize e edite informações dos usuários.</p>
            <button className="mt-4 text-yellow-600 hover:underline">Ir para Usuários</button>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">Configurações do Site</h3>
            <p className="text-gray-600">Ajuste as configurações gerais da loja.</p>
            <button className="mt-4 text-purple-600 hover:underline">Ir para Configurações</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
