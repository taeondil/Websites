export interface GrammarTest {
  id: string;
  title: string;
  description: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

export type ContentSection = {
  type: 'usage' | 'formation' | 'examples' | 'timeExpressions' | 'keyRules' | 'paragraph'| 'notes'| 'tips';
  title?: string;
  items: string[];
}

export interface GrammarTopic {
  id: string;
  title: string;
  description: string;
  content: ContentSection[];
  tests: GrammarTest[];
}