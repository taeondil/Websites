import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  to: string;
}

export function BackButton({ to }: BackButtonProps) {
  return (
    <Link 
      to={to}
      className="inline-flex items-center text-white/80 hover:text-emerald-400 transition-colors 
                 group whitespace-nowrap text-sm sm:text-base"
    >
      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:-translate-x-1" />
      Geri Dön
    </Link>
  );
}