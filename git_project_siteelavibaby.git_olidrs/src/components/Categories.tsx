import React from 'react';

interface CategoriesProps {
  onCategorySelect: (category: string | null) => void;
}

const categories = [
  { name: 'Roupas', image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Brinquedos', image: 'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Acessórios', image: 'https://images.pexels.com/photos/1005000/pexels-photo-1005000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Quarto do Bebê', image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const Categories: React.FC<CategoriesProps> = ({ onCategorySelect }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Explore Nossas Categorias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              onClick={() => onCategorySelect(category.name)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => onCategorySelect(null)}
          className="mt-12 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Ver Todos os Produtos
        </button>
      </div>
    </section>
  );
};

export default Categories;
