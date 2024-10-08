import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Flight Search X
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
          <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
          <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;