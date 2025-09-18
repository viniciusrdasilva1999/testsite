import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutProps {
  items: CartItem[];
  onBack: () => void;
  onOrderComplete: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack, onOrderComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'creditCard',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 25.00; // Example fixed shipping
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório.';
    if (!formData.email) newErrors.email = 'Email é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido.';
    if (!formData.address) newErrors.address = 'Endereço é obrigatório.';
    if (!formData.city) newErrors.city = 'Cidade é obrigatória.';
    if (!formData.zip) newErrors.zip = 'CEP é obrigatório.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Dados do pedido:', { items, formData, total });
      // Simulate API call
      setTimeout(() => {
        onOrderComplete();
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Finalizar Compra</h1>

        <div className="flex justify-between items-center mb-6">
          <button onClick={onBack} className="text-pink-600 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para a Loja
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Detalhes do Pedido */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Seu Pedido</h2>
            {items.length === 0 ? (
              <p className="text-gray-600">Seu carrinho está vazio.</p>
            ) : (
              <div className="border rounded-lg p-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center mb-4 pb-4 border-b last:border-b-0">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      {item.size && <p className="text-sm text-gray-600">Tamanho: {item.size}</p>}
                      <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
                      <p className="text-pink-600 font-bold">R$ {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Subtotal:</span>
                    <span className="font-semibold">R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Frete:</span>
                    <span className="font-semibold">R$ {shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-pink-600 mt-4">
                    <span>Total:</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Formulário de Checkout */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Informações de Envio e Pagamento</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome Completo:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Endereço:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.address && <p className="text-red-500 text-xs italic mt-1">{errors.address}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">Cidade:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                  {errors.city && <p className="text-red-500 text-xs italic mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label htmlFor="zip" className="block text-gray-700 text-sm font-bold mb-2">CEP:</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                  {errors.zip && <p className="text-red-500 text-xs italic mt-1">{errors.zip}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="paymentMethod" className="block text-gray-700 text-sm font-bold mb-2">Método de Pagamento:</label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="creditCard">Cartão de Crédito</option>
                  <option value="pix">PIX</option>
                  <option value="boleto">Boleto Bancário</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-full transition duration-300 ease-in-out"
                disabled={items.length === 0}
              >
                Confirmar Pedido
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
