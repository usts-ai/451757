import React, { useState, useEffect } from 'react';

interface QRScannerProps {
  onScan: (code: string) => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScan }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const startScanning = () => {
    setIsScanning(true);
    setScanProgress(0);
    
    // Simuler le scan avec une animation de progression
    const interval = setInterval(() => {
      setScanProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Simuler la détection d'un code QR après le scan
            onScan('QR12345');
            setIsScanning(false);
          }, 300);
          return 100;
        }
        return newProgress;
      });
    }, 30);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64 mb-4">
        {isScanning ? (
          <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v-4m6 6v4m-6-4h6m-6 4h6m6-11h-2m-6 0h-2v-4m0 11v4m6-6v-4m-6 4h6m-6-4h6" />
              </svg>
            </div>
            
            {/* Animation de scan */}
            <div 
              className="absolute left-0 w-full h-1 bg-blue-500 shadow-md"
              style={{ 
                top: `${(scanProgress / 100) * 100}%`,
                boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.5)',
                transition: 'top 0.1s linear'
              }}
            ></div>
            
            {/* Cadre de scan */}
            <div className="absolute inset-0 border-2 border-dashed border-blue-500 rounded-lg"></div>
          </div>
        ) : (
          <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v-4m6 6v4m-6-4h6m-6 4h6m6-11h-2m-6 0h-2v-4m0 11v4m6-6v-4m-6 4h6m-6-4h6" />
            </svg>
          </div>
        )}
      </div>
      
      <button
        onClick={startScanning}
        disabled={isScanning}
        className={`px-6 py-3 rounded-full font-medium text-white shadow-lg transform transition-all ${
          isScanning 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95'
        }`}
      >
        {isScanning ? 'Scan en cours...' : 'Scanner le code QR'}
      </button>
      
      <p className="mt-4 text-gray-600 text-center">
        Placez votre code QR dans le cadre pour l'enregistrement automatique de votre temps de travail
      </p>
    </div>
  );
};

export default QRScanner;
