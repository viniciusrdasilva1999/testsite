import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-pink-100 h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative z-10 text-center text-white p-8">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Bem-vindo ao Mundo Mágico do Bebê
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Descubra roupas adoráveis, brinquedos educativos e acessórios essenciais para o seu pequeno.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Ver Coleção
          </button>
          <button className="bg-white text-pink-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Nossas Ofertas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
