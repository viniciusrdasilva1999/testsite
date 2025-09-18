import React from 'react';

const testimonials = [
  {
    name: 'Ana Paula S.',
    text: 'As roupinhas são de uma qualidade impecável e super macias! Meu bebê adora. A entrega foi rápida e o atendimento excelente.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Carlos Eduardo M.',
    text: 'Comprei um móbile musical e meu filho dorme muito melhor agora. Os produtos da SITEeLAVIBABY realmente fazem a diferença.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Mariana L.',
    text: 'Atendimento super atencioso e produtos lindos! Recomendo de olhos fechados para todas as mamães e papais.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">O Que Nossos Clientes Dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-pink-300"
              />
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-pink-600">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
