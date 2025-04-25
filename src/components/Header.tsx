import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Esconde a navbar ao descer
      } else {
        setIsVisible(true); // Mostra a navbar ao subir
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`bg-white shadow-sm fixed top-0 w-full z-10 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center">
          <img 
            src="https://lrytvlsyuvctghzqsjic.supabase.co/storage/v1/object/public/logo//Stagelink-logotipo-black.png"
            alt="Stagelink Logo" 
            className="h-12"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;