import React from 'react';
import { CountdownTimer } from './CountdownTimer';
import { countdownEvents } from '../../data/countdownEvents';
import { Timer } from 'lucide-react';

export function CountdownSection() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center space-x-2 mb-8">
          <Timer className="w-6 h-6 text-white" />
          <h2 className="text-3xl font-bold text-white">Yaklaşan Sınavlar</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countdownEvents.map(event => (
            <CountdownTimer key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}