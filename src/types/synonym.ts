export interface SynonymWord {
  id: string;
  word: string;
  synonyms: string[];
}

export interface OddOneOutQuestion {
  word: string;
  options: string[];
  oddOne: string;
}