import React from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface HomeFeatureCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  iconColor?: string;
}

export function HomeFeatureCard({ 
  to, 
  icon: Icon, 
  title, 
  description, 
  delay = 0, 
  iconColor = "emerald-400"
}: HomeFeatureCardProps) {
  return (
    <Link 
      to={to} 
      className="group relative flex flex-col items-center text-center overflow-hidden bg-white/10 
                 backdrop-blur-xl rounded-3xl p-6 transition-all transform hover:scale-105 hover:shadow-lg duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 group-hover:from-white/10 
                      transition-all duration-300 rounded-xl" />
      
      {/* Icon Section */}
      <div 
        className={`flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-${iconColor}/20 
                    group-hover:scale-110 group-hover:bg-${iconColor}/30 transition-all duration-300`}
      >
        <Icon className={`w-10 h-10 text-${iconColor}`} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-white/80 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Arrow Icon Animation */}
      <div 
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform 
                   translate-x-4 group-hover:translate-x-0 transition-all duration-300"
      >
        <svg 
          className="w-6 h-6 text-emerald-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </div>
    </Link>
  );
}
