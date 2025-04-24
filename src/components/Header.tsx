import React from 'react';
import { Briefcase } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <Briefcase className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">CompanyName</span>
        </div>
      </div>
    </header>
  );
};

export default Header;