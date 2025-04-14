import React from 'react';
import { TimeEntry, User } from '../types';

interface TimeCardProps {
  entry: TimeEntry;
  user?: User;
}

const TimeCard: React.FC<TimeCardProps> = ({ entry, user }) => {
  const formatTime = (date: Date | null) => {
    if (!date) return '--:--';
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const formatDuration = (duration: number) => {
    const hours = Math.floor(duration);
    const minutes = Math.round((duration - hours) * 60);
    return `${hours}h${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-102 hover:shadow-lg">
      <div className={`h-2 ${entry.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{formatDate(entry.checkIn)}</h3>
            <div className="mt-1 flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formatTime(entry.checkIn)} - {formatTime(entry.checkOut)}</span>
            </div>
          </div>
          <div className="text-right">
            {entry.status === 'completed' ? (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Terminé
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                En cours
              </span>
            )}
            {entry.status === 'completed' && (
              <div className="mt-1 text-lg font-bold text-gray-800">{formatDuration(entry.duration)}</div>
            )}
          </div>
        </div>
        
        {user && (
          <div className="mt-3 flex items-center">
            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
            <div>
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.department}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeCard;
