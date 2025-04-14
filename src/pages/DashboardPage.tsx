import React, { useState } from 'react';
import StatCard from '../components/StatCard';
import TimeCard from '../components/TimeCard';
import ActivityChart from '../components/ActivityChart';
import { mockTimeEntries, mockUsers, mockStats } from '../data/mockData';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'employees' | 'departments'>('overview');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  // Filtrer les entrées de temps pour n'afficher que les plus récentes
  const recentEntries = mockTimeEntries.slice(0, 5);

  // Préparer les données pour le graphique d'activité hebdomadaire
  const weeklyActivityData = {
    labels: mockStats.weeklyActivity.map(item => item.day),
    values: mockStats.weeklyActivity.map(item => item.hours)
  };

  // Préparer les données pour le graphique par département
  const departmentData = {
    labels: mockStats.departmentStats.map(item => item.department),
    values: mockStats.departmentStats.map(item => item.averageHours)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de bord</h1>
            <p className="text-gray-600">Visualisez et analysez les données de temps de travail</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="relative inline-block">
              <select 
                className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="all">Tous les départements</option>
                <option value="Développement">Développement</option>
                <option value="Marketing">Marketing</option>
                <option value="Direction">Direction</option>
                <option value="Ressources Humaines">Ressources Humaines</option>
                <option value="Comptabilité">Comptabilité</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Onglets */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Vue d'ensemble
              </button>
              <button
                onClick={() => setActiveTab('employees')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'employees'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Employés
              </button>
              <button
                onClick={() => setActiveTab('departments')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'departments'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Départements
              </button>
            </nav>
          </div>
        </div>

        {/* Contenu de l'onglet Vue d'ensemble */}
        {activeTab === 'overview' && (
          <>
            {/* Statistiques générales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Utilisateurs actifs"
                value={mockStats.activeUsers}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                }
                color="bg-blue-100"
                change={{ value: 5.2, isPositive: true }}
              />
              <StatCard
                title="Heures moyennes / jour"
                value={`${mockStats.averageHoursPerDay}h`}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                color="bg-green-100"
                change={{ value: 1.8, isPositive: true }}
              />
              <StatCard
                title="Total d'heures ce mois"
                value={mockStats.totalHoursThisMonth}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
                color="bg-purple-100"
                change={{ value: 3.4, isPositive: true }}
              />
              <StatCard
                title="Utilisateurs totaux"
                value={mockStats.totalUsers}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
                color="bg-indigo-100"
                change={{ value: 2.1, isPositive: true }}
              />
            </div>

            {/* Graphiques */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <ActivityChart 
                data={weeklyActivityData} 
                title="Activité hebdomadaire (heures)" 
                color="rgba(59, 130, 246, 0.7)" 
              />
              <ActivityChart 
                data={departmentData} 
                title="Heures moyennes par département" 
                color="rgba(139, 92, 246, 0.7)" 
              />
            </div>

            {/* Entrées récentes */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">Entrées récentes</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recentEntries.map(entry => {
                    const user = mockUsers.find(u => u.id === entry.userId);
                    return <TimeCard key={entry.id} entry={entry} user={user} />;
                  })}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Contenu de l'onglet Employés */}
        {activeTab === 'employees' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Liste des employés</h3>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Ajouter un employé
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Employé
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Département
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Heures ce mois
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockUsers.map(user => {
                    // Simuler des heures aléatoires pour chaque utilisateur
                    const hours = Math.floor(Math.random() * 40) + 120;
                    const isActive = Math.random() > 0.3;
                    
                    return (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={user.avatar} alt={user.name} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{user.department}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {isActive ? 'Actif' : 'Inactif'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {hours} heures
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Voir</button>
                          <button className="text-gray-600 hover:text-gray-900">Modifier</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Affichage de <span className="font-medium">1</span> à <span className="font-medium">{mockUsers.length}</span> sur <span className="font-medium">{mockStats.totalUsers}</span> résultats
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50">
                  Précédent
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contenu de l'onglet Départements */}
        {activeTab === 'departments' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {mockStats.departmentStats.map((dept, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
                  <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    <h3 className="text-xl font-bold">{dept.department}</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Employés</p>
                        <p className="text-2xl font-bold text-gray-900">{dept.totalEmployees}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Heures moyennes</p>
                        <p className="text-2xl font-bold text-gray-900">{dept.averageHours}h</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Taux de présence</span>
                        <span className="text-sm font-medium text-gray-700">
                          {Math.floor(Math.random() * 15) + 85}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${Math.floor(Math.random() * 15) + 85}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                        Voir les détails
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">Comparaison des départements</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {mockStats.departmentStats.map((dept, index) => {
                    const randomPercentage = Math.floor(Math.random() * 15) + 85;
                    return (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{dept.department}</span>
                          <span className="text-sm font-medium text-gray-700">
                            {dept.averageHours}h / {randomPercentage}% présence
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div 
                            className={`h-4 rounded-full ${
                              index % 3 === 0 ? 'bg-blue-600' : 
                              index % 3 === 1 ? 'bg-purple-600' : 'bg-indigo-600'
                            }`}
                            style={{ width: `${(dept.averageHours / 10) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
