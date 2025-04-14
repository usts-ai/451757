export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  department: string;
  avatar: string;
  qrCode: string;
}

export interface TimeEntry {
  id: string;
  userId: string;
  checkIn: Date;
  checkOut: Date | null;
  duration: number;
  status: 'completed' | 'in-progress';
}

export interface Department {
  id: string;
  name: string;
  employeeCount: number;
}

export interface DepartmentStat {
  department: string;
  averageHours: number;
  totalEmployees: number;
}

export interface WeeklyActivity {
  day: string;
  hours: number;
}
