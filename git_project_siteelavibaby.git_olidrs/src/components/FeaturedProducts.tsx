import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import ProductModal from './ProductModal';

interface FeaturedProductsProps {
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  selectedCategory: string | null;
}

const dummyProducts: Product[] = [
  {
    id: 1,
    name: 'Conjunto Body e Calça Algodão',
    price: 89.90,
    originalPrice: 120.00,
    image: 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    badge: 'Mais Vendido',
    badgeColor: 'bg-green-500',
    description: 'Conjunto super confortável de body e calça, feito 100% em algodão orgânico. Ideal para a pele sensível do bebê.',
    sizes: ['RN', 'P', 'M', 'G'],
    colors: ['Branco', 'Rosa', 'Azul'],
    category: 'Roupas',
    inStock: true,
  },
  {
    id: 2,
    name: 'Móbile Musical de Berço',
    price: 149.90,
    originalPrice: 180.00,
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
    badge: 'Novo',
    badgeColor: 'bg-blue-500',
    description: 'Móbile com melodias suaves e personagens fofos para acalmar e entreter o bebê no berço.',
    sizes: ['Único'],
    colors: ['Colorido'],
    category: 'Brinquedos',
    inStock: true,
  },
  {
    id: 3,
    name: 'Kit Mamadeira Anti-Cólica',
    price: 79.90,
    originalPrice: 95.00,
    image: 'https://images.pexels.com/photos/1005000/pexels-photo-1005000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    badge: 'Promoção',
    badgeColor: 'bg-red-500',
    description: 'Kit com 3 mamadeiras com sistema anti-cólica avançado, bicos de silicone macio.',
    sizes: ['120ml', '240ml'],
    colors: ['Transparente'],
    category: 'Acessórios',
    inStock: true,
  },
  {
    id: 4,
    name: 'Tapete de Atividades Interativo',
    price: 229.90,
    originalPrice: 280.00,
    image: 'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    badge: '',
    badgeColor: '',
    description: 'Tapete colorido com arcos e brinquedos pendurados para estimular o desenvolvimento do bebê.',
    sizes: ['Único'],
    colors: ['Multicolorido'],
    category: 'Brinquedos',
    inStock: true,
  },
  {
    id: 5,
    name: 'Macacão de Plush com Capuz',
    price: 119.90,
    originalPrice: 150.00,
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    badge: 'Inverno',
    badgeColor: 'bg-purple-500',
    description: 'Macacão quentinho de plush com capuz, perfeito para os dias mais frios.',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Cinza', 'Rosa', 'Azul Marinho'],
    category: 'Roupas',
    inStock: true,
  },
  {
    id: 6,
    name: 'Cadeira de Alimentação Portátil',
    price: 199.90,
    originalPrice: 250.00,
    image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.4,
    badge: '',
    badgeColor: '',
    description: 'Cadeira de alimentação compacta e fácil de transportar, com bandeja removível.',
    sizes: ['Único'],
    colors: ['Bege', 'Cinza'],
    category: 'Acessórios',
    inStock: true,
  },
];

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onAddToCart, selectedCategory }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(dummyProducts);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(dummyProducts.filter(product => product.category === selectedCategory));
    } else {
      setFilteredProducts(dummyProducts);
    }
  }, [selectedCategory]);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCartFromModal = (product: Product, size: string, quantity: number) => {
    onAddToCart(product, size, quantity);
    closeProductModal();
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          {selectedCategory ? `Produtos em ${selectedCategory}` : 'Produtos em Destaque'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => openProductModal(product)}
            >
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                {product.badge && (
                  <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="text-yellow-400 flex">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">({product.rating})</span>
                </div>
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-2xl font-bold text-pink-600">R$ {product.price.toFixed(2)}</span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-gray-500 line-through">R$ {product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent modal from opening when clicking add to cart
                    openProductModal(product); // Open modal to select size/quantity
                  }}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={closeProductModal}
          onAddToCart={handleAddToCartFromModal}
        />
      )}
    </section>
  );
};

export default FeaturedProducts;
