export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: 'student' | 'admin';
  student_id?: string;
  department?: string;
  year?: number;
  created_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  max_participants?: number;
  current_participants: number;
  category: 'academic' | 'cultural' | 'sports' | 'workshop' | 'meeting';
  image_url?: string;
  created_by: string;
  created_at: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
  created_by: string;
  created_at: string;
  expires_at?: string;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  logo_url?: string;
  category: string;
  member_count: number;
  president_id: string;
  created_at: string;
}