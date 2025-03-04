import React, { useState, useEffect } from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CountdownEvent, TimeLeft } from '../../types/countdown';

interface CountdownTimerProps {
  event: CountdownEvent;
}

export function CountdownTimer({ event }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(event.date).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [event.date]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`bg-gradient-to-br ${event.color || 'from-blue-500 to-indigo-600'} rounded-2xl p-6 text-white shadow-xl`}>
      <div className="flex items-center space-x-2 mb-4">
        <Calendar className="w-5 h-5" />
        <h3 className="text-xl font-bold">{event.title}</h3>
      </div>
      
      <p className="text-white/80 mb-6">{event.description}</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
    <div className="text-2xl sm:text-3xl font-bold mb-1">{formatNumber(timeLeft.days)}</div>
    <div className="text-xs sm:text-sm text-white/80">Gün</div>
  </div>
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
    <div className="text-2xl sm:text-3xl font-bold mb-1">{formatNumber(timeLeft.hours)}</div>
    <div className="text-xs sm:text-sm text-white/80">Saat</div>
  </div>
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
    <div className="text-2xl sm:text-3xl font-bold mb-1">{formatNumber(timeLeft.minutes)}</div>
    <div className="text-xs sm:text-sm text-white/80">Dakika</div>
  </div>
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
    <div className="text-2xl sm:text-3xl font-bold mb-1">{formatNumber(timeLeft.seconds)}</div>
    <div className="text-xs sm:text-sm text-white/80">Saniye</div>
  </div>
</div>


      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-white/80">
          <Clock className="w-4 h-4" />
          <span>Tarih: {new Date(event.date).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</span>
        </div>

        <Link
          to={`/countdown/${event.id}`}
          className="flex items-center space-x-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 
                   rounded-lg transition-colors text-sm group"
        >
          <span>Detaylar</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}