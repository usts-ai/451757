import React, { useState, useEffect } from 'react';
import QRScanner from '../components/QRScanner';
import TimeCard from '../components/TimeCard';
import { mockUsers, mockTimeEntries } from '../data/mockData';
import { TimeEntry, User } from '../types';

const BadgeusePage: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User>(mockUsers[0]);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  const [isCheckedIn, setIsCheckedIn] = useState<boolean>(false);
  const [checkInTime, setCheckInTime] = useState<Date | null>(null);
  const [recentEntries, setRecentEntries] = useState<TimeEntry[]>([]);
  const [showQRScanner, setShowQRScanner] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [scanAnimation, setScanAnimation] = useState<boolean>(false);

  // Mettre à jour l'heure et la date actuelles
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Vérifier si l'utilisateur est déjà badgé
  useEffect(() => {
    const todayEntries = mockTimeEntries.filter(entry => {
      const today = new Date();
      const entryDate = new Date(entry.checkIn);
      return entry.userId === currentUser.id && 
             entryDate.getDate() === today.getDate() &&
             entryDate.getMonth() === today.getMonth() &&
             entryDate.getFullYear() === today.getFullYear();
    });

    setRecentEntries(todayEntries);

    const lastEntry = todayEntries[0];
    if (lastEntry && lastEntry.status === 'in-progress') {
      setIsCheckedIn(true);
      setCheckInTime(lastEntry.checkIn);
    } else {
      setIsCheckedIn(false);
      setCheckInTime(null);
    }
  }, [currentUser.id]);

  const handleCheckIn = () => {
    setScanAnimation(true);
    
    setTimeout(() => {
      const now = new Date();
      const newEntry: TimeEntry = {
        id: `new-${Date.now()}`,
        userId: currentUser.id,
        checkIn: now,
        checkOut: null,
        duration: 0,
        status: 'in-progress'
      };
      
      setRecentEntries([newEntry, ...recentEntries]);
      setIsCheckedIn(true);
      setCheckInTime(now);
      setSuccessMessage('Badgeage d\'entrée enregistré avec succès !');
      setScanAnimation(false);
      
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }, 1500);
  };

  const handleCheckOut = () => {
    setScanAnimation(true);
    
    setTimeout(() => {
      const now = new Date();
      const updatedEntries = [...recentEntries];
      
      if (updatedEntries.length > 0 && updatedEntries[0].status === 'in-progress') {
        const checkInTime = new Date(updatedEntries[0].checkIn);
        const durationHours = (now.getTime() - checkInTime.getTime()) / (1000 * 60 * 60);
        
        updatedEntries[0] = {
          ...updatedEntries[0],
          checkOut: now,
          duration: parseFloat(durationHours.toFixed(2)),
          status: 'completed'
        };
      }
      
      setRecentEntries(updatedEntries);
      setIsCheckedIn(false);
      setCheckInTime(null);
      setSuccessMessage('Badgeage de sortie enregistré avec succès !');
      setScanAnimation(false);
      
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }, 1500);
  };

  const handleQRScan = (code: string) => {
    // Simuler la recherche d'un utilisateur par code QR
    const user = mockUsers.find(u => u.qrCode === code);
    
    if (user) {
      setCurrentUser(user);
      setShowQRScanner(false);
      
      // Vérifier si l'utilisateur est déjà badgé
      const todayEntry = mockTimeEntries.find(entry => {
        const today = new Date();
        const entryDate = new Date(entry.checkIn);
        return entry.userId === user.id && 
               entryDate.getDate() === today.getDate() &&
               entryDate.getMonth() === today.getMonth() &&
               entryDate.getFullYear() === today.getFullYear() &&
               entry.status === 'in-progress';
      });
      
      if (todayEntry) {
        handleCheckOut();
      } else {
        handleCheckIn();
      }
    }
  };

  const formatDuration = (checkIn: Date | null) => {
    if (!checkIn) return '00:00';
    
    const now = new Date();
    const diffMs = now.getTime() - checkIn.getTime();
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${diffHrs.toString().padStart(2, '0')}:${diffMins.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Badgeuse Horaire</h1>
          <p className="text-gray-600 mb-8">{currentDate}</p>
          
          {/* Carte principale de badgeage */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img 
                    src={currentUser.avatar} 
                    alt={currentUser.name} 
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                  />
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold">{currentUser.name}</h2>
                    <p className="text-blue-100">{currentUser.department}</p>
                  </div>
                </div>
                <div className="text-4xl font-mono font-bold">{currentTime}</div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className={`p-6 rounded-xl border-2 ${isCheckedIn ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">Statut actuel</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isCheckedIn ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-800'}`}>
                        {isCheckedIn ? 'Présent' : 'Absent'}
                      </span>
                    </div>
                    
                    {isCheckedIn ? (
                      <>
                        <div className="flex items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                          </svg>
                          <div>
                            <p className="text-sm text-gray-600">Heure d'arrivée</p>
                            <p className="text-lg font-bold text-gray-900">
                              {checkInTime?.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center mb-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-sm text-gray-600">Durée de présence</p>
                            <p className="text-lg font-bold text-gray-900">{formatDuration(checkInTime)}</p>
                          </div>
                        </div>
                        <button 
                          onClick={handleCheckOut}
                          disabled={scanAnimation}
                          className={`w-full py-3 ${scanAnimation ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg font-medium transition-colors flex items-center justify-center`}
                        >
                          {scanAnimation ? (
                            <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                          )}
                          {scanAnimation ? 'Traitement en cours...' : 'Enregistrer le départ'}
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center mb-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-sm text-gray-600">En attente de badgeage</p>
                            <p className="text-lg font-bold text-gray-900">--:--</p>
                          </div>
                        </div>
                        <button 
                          onClick={handleCheckIn}
                          disabled={scanAnimation}
                          className={`w-full py-3 ${scanAnimation ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg font-medium transition-colors flex items-center justify-center`}
                        >
                          {scanAnimation ? (
                            <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                          )}
                          {scanAnimation ? 'Traitement en cours...' : 'Enregistrer l\'arrivée'}
                        </button>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="p-6 rounded-xl border-2 border-gray-200 h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Scanner un code QR</h3>
                    {showQRScanner ? (
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <QRScanner onScan={handleQRScan} />
                        <button 
                          onClick={() => setShowQRScanner(false)}
                          className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          Annuler
                        </button>
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v-4m6 6v4m-6-4h6m-6 4h6m6-11h-2m-6 0h-2v-4m0 11v4m6-6v-4m-6 4h6m-6-4h6" />
                          </svg>
                        </div>
                        <p className="text-gray-600 text-center mb-6">
                          Utilisez votre code QR personnel pour un badgeage rapide et sécurisé
                        </p>
                        <button 
                          onClick={() => setShowQRScanner(true)}
                          className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                        >
                          Activer le scanner QR
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Message de succès */}
          {successMessage && (
            <div className="fixed top-24 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md animate-fade-in-out">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm">{successMessage}</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Historique récent */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Historique récent</h2>
            {recentEntries.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentEntries.map(entry => (
                  <TimeCard key={entry.id} entry={entry} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">Aucun historique disponible pour aujourd'hui</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeusePage;
