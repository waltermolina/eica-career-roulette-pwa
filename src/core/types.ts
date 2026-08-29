export interface Career {
  id: string;
  name: string;
  acronym: string;
  weight: number;
  color?: string;
}

export interface Question {
  id: string;
  careerId: string;
  text: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
}
