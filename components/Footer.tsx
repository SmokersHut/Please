import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Smokers Hut. All rights reserved.</p>
        <p className="text-sm mt-2">Please smoke responsibly. Must be of legal age to purchase.</p>
      </div>
    </footer>
  );
};

export default Footer;