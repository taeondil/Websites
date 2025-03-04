export interface ContentItem {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  duration: string;
  type: 'reading' | 'listening';
  imageUrl: string;
  content?: string;
  audioFile?: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blanks';
  question: string;
  options?: string[];
  answer: string | boolean;
}

export const levelColors = {
  'A1': 'bg-green-500',       // A1 seviyesi için açık yeşil
  'A2': 'bg-emerald-500',     // A2 seviyesi için biraz daha koyu yeşil
  'B1': 'bg-blue-500',        // B1 seviyesi için açık mavi
  'B1+': 'bg-blue-600',       // B1+ seviyesi için daha koyu mavi
  'B2': 'bg-indigo-500',      // B2 seviyesi için açık çivit mavisi
  'B2+': 'bg-indigo-600',     // B2+ seviyesi için daha koyu çivit mavisi
  'C1': 'bg-purple-500',      // C1 seviyesi için açık mor
  'C1+': 'bg-purple-600'      // C1+ seviyesi için daha koyu mor
};