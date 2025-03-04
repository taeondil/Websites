import React from 'react';
import { X, MapPin, Clock, FileText, CreditCard, AlertCircle, CheckCircle2 } from 'lucide-react';
import type { CountdownEvent } from '../../types/countdown';

interface ExamDetailsProps {
  event: CountdownEvent;
  onClose: () => void;
}

export function ExamDetails({ event, onClose }: ExamDetailsProps) {
  if (!event.details) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-gray-600">{event.description}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 bg-gray-50 rounded-xl p-4">
              <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Sınav Yeri</h3>
                <p className="text-gray-600">{event.details.location}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-gray-50 rounded-xl p-4">
              <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Süre</h3>
                <p className="text-gray-600">{event.details.duration}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-gray-50 rounded-xl p-4">
              <FileText className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Soru Sayısı</h3>
                <p className="text-gray-600">{event.details.questionCount}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-gray-50 rounded-xl p-4">
              <CreditCard className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Sınav Ücreti</h3>
                <p className="text-gray-600">{event.details.fee}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Gerekli Belgeler</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              {event.details.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-start space-x-3 bg-blue-50 rounded-xl p-4">
            <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-900">Önemli Not</h3>
              <p className="text-gray-600">{event.details.notes}</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Sınav Tarihi: {new Date(event.date).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}