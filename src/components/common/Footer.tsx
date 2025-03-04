import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-4 bg-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white hover:text-gray-400 transition-colors">
              Ana Sayfa
            </Link>
            <Link to="/social-media" className="text-white hover:text-gray-400 transition-colors">
              Sosyal Medya
            </Link>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=taeondil@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
            >
              İletişim
            </a>
          </div>
          
          <div className="text-white text-sm">
            Taeondil © {currentYear} | Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
}
