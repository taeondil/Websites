import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Clock, FileText, CreditCard, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { countdownEvents } from '../data/countdownEvents';
import { Navigation } from '../components/common/Navigation';

export default function ExamDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = countdownEvents.find(e => e.id === id);

  if (!event || !event.details) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <Navigation />
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Sınav bulunamadı</h1>
          <button
            onClick={() => navigate('/countdown')}
            className="text-white hover:text-emerald-400 transition-colors inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Geri Dön</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/countdown')}
          className="text-white hover:text-emerald-400 transition-colors inline-flex items-center space-x-2 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Geri Dön</span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 bg-gradient-to-r from-indigo-500 to-purple-500">
            <h1 className="text-3xl font-bold text-white mb-2">{event.title}</h1>
            <p className="text-white/80">{event.description}</p>
          </div>

          <div className="p-6 space-y-8">
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
                  <p className="text-gray-600">{event.details.questionCount} </p>
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
                <span>Sınav Hakkında </span>
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

            <div className="text-center border-t border-gray-100 pt-6">
              <p className="text-gray-500">
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
    </div>
  );
}