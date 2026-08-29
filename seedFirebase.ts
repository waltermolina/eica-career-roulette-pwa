// ---------------------------------------------
// Mock de carreras
// ---------------------------------------------
interface CareerSeed {
  id: string;
  name: string;
  acronym: string;
  weight: number;
  color: string;
}

const careersMock: CareerSeed[] = [
  { id: "pu", name: "Programador Universitario de Sistemas", acronym: "PU", weight: 1, color: "#6023a3" },
  { id: "isi", name: "Ingeniería en Sistemas de Información", acronym: "ISI", weight: 1, color: "#7b2fc9" },
  { id: "bio", name: "Bioingeniería", acronym: "BIO", weight: 1, color: "#9c5ee0" },
  { id: "agroin", name: "Ingeniería en Agroindustria", acronym: "IAI", weight: 1, color: "#4b1683" },
  { id: "amb", name: "Tecnicatura Superior en Gestión Ambiental", acronym: "TSGA", weight: 1, color: "#c49bf0" },
  { id: "agroal", name: "Tecnicatura Universitaria en Agroalimentos", acronym: "IAA", weight: 1, color: "#3c0d63" },
];

// ---------------------------------------------
// Inicialización de Firebase (Node)
// ---------------------------------------------
import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getFirestore, collection, writeBatch, doc } from "firebase/firestore";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "VITE_");

function requireEnv(name: string): string {
  const value = env[name];

  if (!value) {
    throw new Error(`Falta la variable de entorno ${name}`);
  }

  return value;
}

const firebaseConfig: FirebaseOptions = {
  apiKey: requireEnv("VITE_FIREBASE_API_KEY"),
  authDomain: requireEnv("VITE_FIREBASE_AUTH_DOMAIN"),
  projectId: requireEnv("VITE_FIREBASE_PROJECT_ID"),
  storageBucket: requireEnv("VITE_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: requireEnv("VITE_FIREBASE_MESSAGING_SENDER_ID"),
  appId: requireEnv("VITE_FIREBASE_APP_ID"),
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ---------------------------------------------
// Función para seedear carreras
// ---------------------------------------------
export async function seedCareers(careers: CareerSeed[]) {
  try {
    const batch = writeBatch(db);
    const colRef = collection(db, "careers");

    careers.forEach((career) => {
      if (!career.id || !career.name) {
        throw new Error(`Career inválida: ${JSON.stringify(career)}`);
      }

      const docRef = doc(colRef, career.id);
      batch.set(docRef, {
        name: career.name,
        acronym: career.acronym,
        weight: career.weight ?? 1,
        color: career.color ?? "#000000",
      });
    });

    await batch.commit();
    console.log(`Seed completado: ${careers.length} carreras cargadas.`);
    return true;

  } catch (error) {
    console.error("Error en seed:", error);
    return false;
  }
}

// ---------------------------------------------
// Script ejecutable con Node
// ---------------------------------------------
(async () => {
  console.log("Iniciando seed de carreras...");
  await seedCareers(careersMock);
  console.log("Proceso finalizado.");
})();
