import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">SITEeLAVIBABY</h3>
          <p className="text-sm leading-relaxed">
            Sua loja online de produtos infantis, com amor e carinho em cada detalhe.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-instagram"></i> {/* Placeholder for social icons */}
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-facebook"></i> {/* Placeholder for social icons */}
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Início</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Produtos</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Contato</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Política de Privacidade</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Atendimento</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Meus Pedidos</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Trocas e Devoluções</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Fale Conosco</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
          <p className="text-sm">Email: contato@siteelavibaby.com</p>
          <p className="text-sm">Telefone: (XX) XXXX-XXXX</p>
          <p className="text-sm">Endereço: Rua Exemplo, 123, Cidade, Estado</p>
          <p className="text-sm mt-4">Horário de Atendimento: Seg-Sex, 9h-18h</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} SITEeLAVIBABY. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
