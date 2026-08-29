import { collection, getDocs } from 'firebase/firestore';
import { CAREERS_COLLECTION, QUESTIONS_COLLECTION, db } from './firebase';
import { MOCK_CAREERS, MOCK_QUESTIONS } from './mocks';
import type { Career, Question } from './types';

export async function fetchCareers(): Promise<Career[]> {
  try {
    const snapshot = await getDocs(collection(db, CAREERS_COLLECTION));

    if (snapshot.empty) {
      return MOCK_CAREERS;
    }

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Career);
  } catch {
    return MOCK_CAREERS;
  }
}

export async function fetchQuestions(): Promise<Question[]> {
  try {
    const snapshot = await getDocs(collection(db, QUESTIONS_COLLECTION));

    if (snapshot.empty) {
      return MOCK_QUESTIONS;
    }

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Question);
  } catch {
    return MOCK_QUESTIONS;
  }
}
