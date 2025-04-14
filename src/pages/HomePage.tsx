import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Section Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 transform -skew-y-6 origin-top-left -translate-y-24 z-0"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Simplifiez la gestion de votre temps de travail
              </h1>
              <p className="text-blue-100 text-xl mb-8 max-w-lg">
                ChronoTrack est une solution moderne et intuitive pour enregistrer vos heures de travail et suivre votre activité professionnelle.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Link 
                  to="/badgeuse" 
                  className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1"
                >
                  Commencer maintenant
                </Link>
                <Link 
                  to="/dashboard" 
                  className="px-8 py-4 bg-blue-800 bg-opacity-50 text-white rounded-full font-bold border border-blue-400 hover:bg-opacity-70 transition-all"
                >
                  Voir le tableau de bord
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative transform transition-all hover:scale-105 duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl transform rotate-3 scale-105 opacity-30 blur-xl"></div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10">
                  <div className="h-10 bg-gray-100 flex items-center px-4 border-b">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Badgeuse Horaire</h3>
                        <p className="text-gray-500">Lundi 14 Avril 2025</p>
                      </div>
                      <div className="text-3xl font-mono font-bold text-blue-600">09:32</div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex justify-between items-center">
                        <div>
                          <div className="text-sm text-blue-600 font-medium">Arrivée</div>
                          <div className="text-lg font-bold">08:30</div>
                        </div>
                        <div className="bg-blue-600 text-white p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg border border-gray-200 flex justify-between items-center">
                        <div>
                          <div className="text-sm text-gray-600 font-medium">Départ</div>
                          <div className="text-lg font-bold">--:--</div>
                        </div>
                        <div className="bg-gray-100 text-gray-500 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                        </div>
                      </div>
                      <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Enregistrer le départ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fonctionnalités principales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez comment ChronoTrack peut transformer votre gestion du temps de travail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Badgeuse horaire</h3>
              <p className="text-gray-600">
                Enregistrez facilement vos heures d'arrivée et de départ grâce à notre interface intuitive ou en scannant votre code QR personnel.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Statistiques détaillées</h3>
              <p className="text-gray-600">
                Visualisez et analysez vos temps de travail avec des graphiques clairs et des rapports personnalisés pour une meilleure gestion.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gestion des équipes</h3>
              <p className="text-gray-600">
                Les administrateurs peuvent facilement gérer les utilisateurs, visualiser les temps de travail par département et exporter les données.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ils nous font confiance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que nos utilisateurs disent de ChronoTrack
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 mb-6">
                  "ChronoTrack a complètement transformé notre façon de gérer les temps de travail. L'interface est intuitive et les rapports sont très utiles pour notre service RH."
                </p>
                <div className="flex items-center">
                  <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Sophie Martin" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sophie Martin</h4>
                    <p className="text-gray-500 text-sm">Directrice RH, Entreprise ABC</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 mb-6">
                  "La fonction de scan QR est géniale ! Plus besoin de se souvenir de badger, c'est rapide et efficace. Les statistiques me permettent de mieux organiser mon temps."
                </p>
                <div className="flex items-center">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Thomas Dubois" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">Thomas Dubois</h4>
                    <p className="text-gray-500 text-sm">Développeur, Tech Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 mb-6">
                  "En tant que responsable d'équipe, ChronoTrack me fait gagner un temps précieux dans la gestion des plannings et le suivi des heures de mon équipe."
                </p>
                <div className="flex items-center">
                  <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="Marie Leroy" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">Marie Leroy</h4>
                    <p className="text-gray-500 text-sm">Chef de projet, Innov Corp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à simplifier votre gestion du temps ?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez les milliers d'utilisateurs qui font confiance à ChronoTrack pour la gestion de leur temps de travail.
          </p>
          <Link 
            to="/badgeuse" 
            className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1 inline-block"
          >
            Commencer maintenant
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
