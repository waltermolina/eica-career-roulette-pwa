import type { Career, Question } from './types';

// MOCK TEMPORAL: reemplazar por los datos reales de la colección "careers" en Firestore.
export const MOCK_CAREERS: Career[] = [
  { id: 'career-1', name: 'Carrera EICA 1 (TODO: reemplazar)', acronym: 'EICA 1', weight: 1, color: '#6023a3' },
  { id: 'career-2', name: 'Carrera EICA 2 (TODO: reemplazar)', acronym: 'EICA 2', weight: 1, color: '#7b2fc9' },
  { id: 'career-3', name: 'Carrera EICA 3 (TODO: reemplazar)', acronym: 'EICA 3', weight: 1, color: '#9c5ee0' },
  { id: 'career-4', name: 'Carrera EICA 4 (TODO: reemplazar)', acronym: 'EICA 4', weight: 1, color: '#4b1683' },
  { id: 'career-5', name: 'Carrera EICA 5 (TODO: reemplazar)', acronym: 'EICA 5', weight: 1, color: '#c49bf0' },
  { id: 'career-6', name: 'Carrera EICA 6 (TODO: reemplazar)', acronym: 'EICA 6', weight: 1, color: '#3c0d63' },
];

// MOCK TEMPORAL: reemplazar por los datos reales de la colección "questions" en Firestore.
export const MOCK_QUESTIONS: Question[] = [
  {
    id: 'question-career-1',
    careerId: 'career-1',
    text: 'Pregunta de ejemplo para la Carrera EICA 1 (TODO: reemplazar)',
    options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
    correctIndex: 0,
  },
  {
    id: 'question-career-2',
    careerId: 'career-2',
    text: 'Pregunta de ejemplo para la Carrera EICA 2 (TODO: reemplazar)',
    options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
    correctIndex: 0,
  },
  {
    id: 'question-career-3',
    careerId: 'career-3',
    text: 'Pregunta de ejemplo para la Carrera EICA 3 (TODO: reemplazar)',
    options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
    correctIndex: 0,
  },
  {
    id: 'question-career-4',
    careerId: 'career-4',
    text: 'Pregunta de ejemplo para la Carrera EICA 4 (TODO: reemplazar)',
    options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
    correctIndex: 0,
  },
  {
    id: 'question-career-5',
    careerId: 'career-5',
    text: 'Pregunta de ejemplo para la Carrera EICA 5 (TODO: reemplazar)',
    options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
    correctIndex: 0,
  },
  {
    id: 'question-career-6',
    careerId: 'career-6',
    text: 'Pregunta de ejemplo para la Carrera EICA 6 (TODO: reemplazar)',
    options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
    correctIndex: 0,
  },
];
