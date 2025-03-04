import React from 'react';
import { Link } from 'react-router-dom';
import { Timer, Chrome } from 'lucide-react';

export function HomeHeader() {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src="/images/logo.png" 
            alt="Taeondil Logo" 
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-white font-bold text-2xl sm:text-3xl group-hover:text-emerald-400 transition-colors">
            TAEONDİL
          </span>
        </Link>

        {/* Centering the div with the buttons */}
        <div className="flex items-center justify-center gap-4 w-full sm:w-auto">
          <Link 
            to="/countdown"
            className="bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-2.5 rounded-full 
                     font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base
                     hover:scale-105"
          >
            <Timer className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Sınav Takvimi</span>
          </Link>
          
          <a 
            href="https://chrome.google.com/webstore/YOUR_EXTENSION_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                     text-white px-4 sm:px-6 py-2.5 rounded-full font-medium transition-all duration-300 
                     flex items-center justify-center gap-2 text-sm sm:text-base hover:scale-105 shadow-lg"
          >
            <Chrome className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Chrome Eklentisi</span>
          </a>
          
          <Link 
            to="/social-media"
            className="bg-white hover:bg-opacity-90 text-blue-600 px-4 sm:px-6 py-2.5 rounded-full 
                     font-medium transition-all duration-300 flex items-center justify-center text-sm sm:text-base hover:scale-105"
          >
            Sosyal Medya
          </Link>
          
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=taeondil@gmail.com&su=www.taeondil.com Sitesi Hakkında Görüş ve Önerim" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white hover:bg-opacity-90 text-blue-600 px-4 sm:px-6 py-2.5 rounded-full 
                     font-medium transition-all duration-300 flex items-center justify-center text-sm sm:text-base hover:scale-105"
          >
            Görüş Bildir
          </a>
        </div>
      </div>
    </header>
  );
}