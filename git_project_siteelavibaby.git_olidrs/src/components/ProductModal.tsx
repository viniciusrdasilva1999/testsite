import React, { useState, useEffect } from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (isOpen) {
      setSelectedSize(product.sizes[0] || '');
      setQuantity(1);
    }
  }, [isOpen, product]);

  if (!isOpen) return null;

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      alert('Por favor, selecione um tamanho.');
      return;
    }
    onAddToCart(product, selectedSize, quantity);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full flex flex-col md:flex-row overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="md:w-1/2 p-6">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-baseline space-x-2 mb-4">
              <span className="text-3xl font-bold text-pink-600">R$ {product.price.toFixed(2)}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-gray-500 line-through text-lg">R$ {product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-4">
                <label htmlFor="size" className="block text-gray-700 font-semibold mb-2">
                  Tamanho:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded-full text-sm font-medium ${
                        selectedSize === size
                          ? 'bg-pink-600 text-white border-pink-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-pink-400'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="quantity" className="block text-gray-700 font-semibold mb-2">
                Quantidade:
              </label>
              <div className="flex items-center border border-gray-300 rounded-full w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-l-full"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full text-center border-x border-gray-300 py-2 focus:outline-none"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-r-full"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-full transition duration-300 ease-in-out"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
