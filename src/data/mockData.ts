import { User, TimeEntry, Department } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Thomas Dubois',
    email: 'thomas.dubois@entreprise.fr',
    role: 'user',
    department: 'Développement',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    qrCode: 'QR12345',
  },
  {
    id: '2',
    name: 'Sophie Martin',
    email: 'sophie.martin@entreprise.fr',
    role: 'user',
    department: 'Marketing',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    qrCode: 'QR67890',
  },
  {
    id: '3',
    name: 'Jean Dupont',
    email: 'jean.dupont@entreprise.fr',
    role: 'admin',
    department: 'Direction',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    qrCode: 'QR24680',
  },
  {
    id: '4',
    name: 'Marie Leroy',
    email: 'marie.leroy@entreprise.fr',
    role: 'user',
    department: 'Ressources Humaines',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    qrCode: 'QR13579',
  },
  {
    id: '5',
    name: 'Pierre Moreau',
    email: 'pierre.moreau@entreprise.fr',
    role: 'user',
    department: 'Comptabilité',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    qrCode: 'QR97531',
  }
];

export const mockTimeEntries: TimeEntry[] = [
  {
    id: '1',
    userId: '1',
    checkIn: new Date('2025-04-14T08:03:12'),
    checkOut: new Date('2025-04-14T17:15:45'),
    duration: 9.2,
    status: 'completed',
  },
  {
    id: '2',
    userId: '1',
    checkIn: new Date('2025-04-13T08:15:22'),
    checkOut: new Date('2025-04-13T16:45:10'),
    duration: 8.5,
    status: 'completed',
  },
  {
    id: '3',
    userId: '2',
    checkIn: new Date('2025-04-14T09:05:33'),
    checkOut: new Date('2025-04-14T18:10:45'),
    duration: 9.1,
    status: 'completed',
  },
  {
    id: '4',
    userId: '3',
    checkIn: new Date('2025-04-14T08:30:00'),
    checkOut: null,
    duration: 0,
    status: 'in-progress',
  },
  {
    id: '5',
    userId: '4',
    checkIn: new Date('2025-04-14T08:45:12'),
    checkOut: new Date('2025-04-14T17:30:45'),
    duration: 8.75,
    status: 'completed',
  }
];

export const mockDepartments: Department[] = [
  { id: '1', name: 'Développement', employeeCount: 12 },
  { id: '2', name: 'Marketing', employeeCount: 8 },
  { id: '3', name: 'Direction', employeeCount: 3 },
  { id: '4', name: 'Ressources Humaines', employeeCount: 5 },
  { id: '5', name: 'Comptabilité', employeeCount: 6 }
];

export const mockStats = {
  totalUsers: 45,
  activeUsers: 38,
  averageHoursPerDay: 8.2,
  totalHoursThisMonth: 6240,
  departmentStats: [
    { department: 'Développement', averageHours: 8.5, totalEmployees: 12 },
    { department: 'Marketing', averageHours: 8.1, totalEmployees: 8 },
    { department: 'Direction', averageHours: 9.2, totalEmployees: 3 },
    { department: 'Ressources Humaines', averageHours: 7.9, totalEmployees: 5 },
    { department: 'Comptabilité', averageHours: 8.0, totalEmployees: 6 }
  ],
  weeklyActivity: [
    { day: 'Lundi', hours: 380 },
    { day: 'Mardi', hours: 395 },
    { day: 'Mercredi', hours: 410 },
    { day: 'Jeudi', hours: 385 },
    { day: 'Vendredi', hours: 360 }
  ]
};
