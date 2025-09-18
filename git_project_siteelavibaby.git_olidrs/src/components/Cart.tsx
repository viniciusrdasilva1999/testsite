import React from 'react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside cart
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Seu Carrinho</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto">
            {items.length === 0 ? (
              <p className="text-gray-600 text-center mt-8">Seu carrinho está vazio.</p>
            ) : (
              items.map((item, index) => (
                <div key={index} className="flex items-center mb-4 pb-4 border-b last:border-b-0">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    {item.size && <p className="text-sm text-gray-600">Tamanho: {item.size}</p>}
                    <p className="text-pink-600 font-bold">R$ {item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => onUpdateQuantity(index, Math.max(1, item.quantity - 1))}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l-md hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r-md hover:bg-gray-300"
                      >
                        +
                      </button>
                      <button
                        onClick={() => onRemoveItem(index)}
                        className="ml-4 text-red-500 hover:text-red-700 text-sm"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-gray-800">Subtotal:</span>
              <span className="text-xl font-bold text-pink-600">R$ {subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              disabled={items.length === 0}
              className={`w-full py-3 rounded-full text-white font-bold transition duration-300 ${
                items.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700'
              }`}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
