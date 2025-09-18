import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/3661206/pexels-photo-3661206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Mãe e bebê felizes"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossa História</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Na SITEeLAVIBABY, acreditamos que cada bebê merece o melhor. Fundada com amor e paixão por produtos infantis de alta qualidade, nossa missão é oferecer itens que combinem segurança, conforto e estilo. Desde roupinhas macias até brinquedos educativos, cada produto é cuidadosamente selecionado para garantir a felicidade e o desenvolvimento do seu pequeno.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Somos uma família servindo a sua família, e nos dedicamos a criar uma experiência de compra online que seja tão acolhedora e confiável quanto um abraço de mãe. Junte-se a nós e descubra um mundo de encanto para o seu bebê!
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
