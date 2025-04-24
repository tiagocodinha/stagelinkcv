import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} Stagelink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;