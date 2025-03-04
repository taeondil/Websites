import React from 'react';
import { Link } from 'react-router-dom';
import { BackButton } from './BackButton';

interface NavigationProps {
  showBackButton?: boolean;
  backTo?: string;
}

export function Navigation({ showBackButton = true, backTo = '/' }: NavigationProps) {
  return (
    <nav className="p-4 sm:p-6 mb-8">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
          {/* Sol taraf - Geri dön butonu */}
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-start">
            {showBackButton && <BackButton to={backTo} />}
          </div>

          {/* Orta - Logo ve başlık */}
          <div className="w-full sm:w-1/3 flex justify-center">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group hover:opacity-90 transition-opacity"
            >
              <img 
                src="/images/logo.png" 
                alt="Taeondil Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                TAEONDİL
              </span>
            </Link>
          </div>

          {/* Sağ taraf - Görüş bildir butonu */}
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=taeondil@gmail.com&su=www.taeondil.com Sitesi Hakkında Görüş ve Önerim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full 
                       font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              Görüş Bildir
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}