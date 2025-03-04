export interface CountdownEvent {
  id: string;
  title: string;
  description: string;
  date: string; // ISO string format
  color?: string;
  details?: {
    location: string;
    duration: string;
    questionCount: string;
    fee: string;
    requirements: string[];
    notes: string;
  };
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}