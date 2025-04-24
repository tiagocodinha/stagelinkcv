import React from 'react';
import { Briefcase } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <img 
            src="./Stagelink-logotipo-04.png" 
            alt="Stagelink Logo" 
            className="ml-2 h-8"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;