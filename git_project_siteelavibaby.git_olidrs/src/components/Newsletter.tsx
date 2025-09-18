import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com um serviço de newsletter (e.g., Mailchimp, SendGrid)
    console.log('Assinar newsletter com:', email);
    setMessage('Obrigado por se inscrever! Fique de olho nas nossas novidades.');
    setEmail('');
    setTimeout(() => setMessage(''), 5000); // Clear message after 5 seconds
  };

  return (
    <section className="py-16 bg-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Receba Nossas Novidades!</h2>
        <p className="text-xl mb-8">
          Assine nossa newsletter e receba ofertas exclusivas, dicas para bebês e muito mais.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="flex-grow p-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-white text-pink-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Assinar
          </button>
        </form>
        {message && <p className="mt-4 text-lg">{message}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
