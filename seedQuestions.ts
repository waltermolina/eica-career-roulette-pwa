// ---------------------------------------------------------
// Preguntas unificadas (todas las carreras)
// ---------------------------------------------------------
const questions = [
  // PU ----------------------------------------------------
  {
    careerId: "pu",
    text: "¿Qué es un algoritmo?",
    options: ["Una secuencia de pasos", "Un lenguaje de programación", "Un archivo ejecutable", "Un tipo de variable"],
    correctIndex: 0,
  },
  {
    careerId: "pu",
    text: "¿Qué estructura permite repetir instrucciones?",
    options: ["Condicional", "Bucle", "Función", "Clase"],
    correctIndex: 1,
  },
  {
    careerId: "pu",
    text: "¿Qué es una variable?",
    options: ["Un valor fijo", "Un contenedor de datos", "Un archivo", "Un proceso del sistema"],
    correctIndex: 1,
  },
  {
    careerId: "pu",
    text: "¿Qué es un lenguaje compilado?",
    options: ["Se ejecuta línea por línea", "Se traduce a código máquina", "No necesita sintaxis", "Solo funciona en Linux"],
    correctIndex: 1,
  },
  {
    careerId: "pu",
    text: "¿Qué es Git?",
    options: ["Un sistema operativo", "Un gestor de paquetes", "Un sistema de control de versiones", "Un lenguaje de scripting"],
    correctIndex: 2,
  },
  {
    careerId: "pu",
    text: "¿Qué es una función?",
    options: ["Un bucle", "Un bloque reutilizable de código", "Un archivo de configuración", "Una variable global"],
    correctIndex: 1,
  },
  {
    careerId: "pu",
    text: "¿Qué es un bug?",
    options: ["Un error en el código", "Una mejora", "Un comentario", "Un archivo corrupto"],
    correctIndex: 0,
  },
  {
    careerId: "pu",
    text: "¿Qué es un IDE?",
    options: ["Un editor de texto simple", "Un entorno de desarrollo integrado", "Un compilador", "Un sistema de archivos"],
    correctIndex: 1,
  },
  {
    careerId: "pu",
    text: "¿Qué es un servidor?",
    options: ["Una computadora que provee servicios", "Un archivo ejecutable", "Un lenguaje de programación", "Un router doméstico"],
    correctIndex: 0,
  },
  {
    careerId: "pu",
    text: "¿Qué es una API?",
    options: ["Una base de datos", "Una interfaz para comunicarse con servicios", "Un archivo JSON", "Un protocolo de red"],
    correctIndex: 1,
  },

  // ISI ---------------------------------------------------
  {
    careerId: "isi",
    text: "¿Qué es un sistema de información?",
    options: ["Un conjunto de datos aislados", "Un sistema que procesa y distribuye información", "Un lenguaje de programación", "Un servidor web"],
    correctIndex: 1,
  },
  {
    careerId: "isi",
    text: "¿Qué es un diagrama ER?",
    options: ["Un modelo de red", "Un modelo entidad-relación", "Un modelo de clases", "Un modelo de procesos"],
    correctIndex: 1,
  },
  {
    careerId: "isi",
    text: "¿Qué es la normalización?",
    options: ["Optimizar consultas", "Reducir redundancia en tablas", "Crear índices", "Eliminar claves primarias"],
    correctIndex: 1,
  },
  {
    careerId: "isi",
    text: "¿Qué es un KPI?",
    options: ["Un indicador clave de desempeño", "Un protocolo de red", "Un tipo de base de datos", "Un algoritmo de búsqueda"],
    correctIndex: 0,
  },
  {
    careerId: "isi",
    text: "¿Qué es un proceso ETL?",
    options: ["Extraer, transformar y cargar datos", "Ejecutar tareas locales", "Enviar logs al servidor", "Crear tablas temporales"],
    correctIndex: 0,
  },
  {
    careerId: "isi",
    text: "¿Qué es un dashboard?",
    options: ["Un panel de visualización de datos", "Un servidor de aplicaciones", "Un compilador", "Un sistema operativo"],
    correctIndex: 0,
  },
  {
    careerId: "isi",
    text: "¿Qué es un modelo de negocio?",
    options: ["Una base de datos", "Una representación de cómo una organización crea valor", "Un sistema operativo", "Un lenguaje de scripting"],
    correctIndex: 1,
  },
  {
    careerId: "isi",
    text: "¿Qué es un diagrama de flujo?",
    options: ["Un mapa de red", "Una representación gráfica de procesos", "Un modelo de clases", "Un archivo XML"],
    correctIndex: 1,
  },
  {
    careerId: "isi",
    text: "¿Qué es un backlog?",
    options: ["Un error del sistema", "Una lista de tareas pendientes", "Un archivo corrupto", "Un protocolo de red"],
    correctIndex: 1,
  },
  {
    careerId: "isi",
    text: "¿Qué es un sistema CRM?",
    options: ["Gestión de relaciones con clientes", "Gestión de inventarios", "Gestión de servidores", "Gestión de redes"],
    correctIndex: 0,
  },

  // BIO ---------------------------------------------------
  {
    careerId: "bio",
    text: "¿Qué estudia la bioingeniería?",
    options: ["Procesos químicos industriales", "Aplicación de ingeniería a la biología y salud", "Diseño de redes", "Programación avanzada"],
    correctIndex: 1,
  },
  {
    careerId: "bio",
    text: "¿Qué es un biosensor?",
    options: ["Un sensor biológico", "Un sensor que detecta parámetros fisiológicos", "Un sensor de movimiento", "Un sensor de temperatura industrial"],
    correctIndex: 1,
  },
  {
    careerId: "bio",
    text: "¿Qué es un biomaterial?",
    options: ["Un material biodegradable", "Un material compatible con tejidos vivos", "Un material sintético", "Un material metálico"],
    correctIndex: 1,
  },
  {
    careerId: "bio",
    text: "¿Qué es la biomecánica?",
    options: ["Estudio del movimiento humano", "Estudio de redes neuronales", "Estudio de proteínas", "Estudio de circuitos"],
    correctIndex: 0,
  },
  {
    careerId: "bio",
    text: "¿Qué es un marcapasos?",
    options: ["Un sensor de presión", "Un dispositivo que regula el ritmo cardíaco", "Un implante óseo", "Un monitor de glucosa"],
    correctIndex: 1,
  },
  {
    careerId: "bio",
    text: "¿Qué es la bioinformática?",
    options: ["Análisis de datos biológicos mediante computación", "Diseño de prótesis", "Estudio de tejidos", "Análisis químico"],
    correctIndex: 0,
  },
  {
    careerId: "bio",
    text: "¿Qué es un electrocardiograma?",
    options: ["Un análisis de sangre", "Un registro de la actividad eléctrica del corazón", "Una radiografía", "Un análisis de ADN"],
    correctIndex: 1,
  },
  {
    careerId: "bio",
    text: "¿Qué es una prótesis?",
    options: ["Un medicamento", "Un dispositivo que reemplaza una parte del cuerpo", "Un análisis clínico", "Un tejido sintético"],
    correctIndex: 1,
  },
  {
    careerId: "bio",
    text: "¿Qué es un cultivo celular?",
    options: ["Un análisis químico", "Una técnica para crecer células en laboratorio", "Una prueba de ADN", "Una medición de glucosa"],
    correctIndex: 1,
  },
  {
    careerId: "bio",
    text: "¿Qué es un TAC?",
    options: ["Una ecografía", "Una tomografía computada", "Un análisis de sangre", "Un estudio de ADN"],
    correctIndex: 1,
  },

  // AGROIN ------------------------------------------------
  {
    careerId: "agroin",
    text: "¿Qué es la agroindustria?",
    options: ["Producción de software", "Transformación de productos agrícolas", "Diseño de maquinaria pesada", "Gestión de redes"],
    correctIndex: 1,
  },
  {
    careerId: "agroin",
    text: "¿Qué es la cadena de valor?",
    options: ["Un proceso de facturación", "Etapas que agregan valor a un producto", "Un sistema de control", "Un protocolo de red"],
    correctIndex: 1,
  },
  {
    careerId: "agroin",
    text: "¿Qué es la trazabilidad?",
    options: ["Seguimiento del origen y proceso de un producto", "Control de inventarios", "Análisis químico", "Gestión de ventas"],
    correctIndex: 0,
  },
  {
    careerId: "agroin",
    text: "¿Qué es un silo?",
    options: ["Un depósito para granos", "Un laboratorio", "Un sistema de riego", "Un tractor"],
    correctIndex: 0,
  },
  {
    careerId: "agroin",
    text: "¿Qué es la pasteurización?",
    options: ["Congelar alimentos", "Calentar para eliminar patógenos", "Deshidratar alimentos", "Fermentar alimentos"],
    correctIndex: 1,
  },
  {
    careerId: "agroin",
    text: "¿Qué es un fertilizante?",
    options: ["Un pesticida", "Un producto que mejora el suelo", "Un herbicida", "Un fungicida"],
    correctIndex: 1,
  },
  {
    careerId: "agroin",
    text: "¿Qué es la agricultura de precisión?",
    options: ["Uso de tecnología para optimizar cultivos", "Cultivo manual", "Cultivo hidropónico", "Cultivo orgánico"],
    correctIndex: 0,
  },
  {
    careerId: "agroin",
    text: "¿Qué es un invernadero?",
    options: ["Un depósito de agua", "Una estructura para controlar el clima de cultivos", "Un sistema de riego", "Un laboratorio"],
    correctIndex: 1,
  },
  {
    careerId: "agroin",
    text: "¿Qué es la molienda?",
    options: ["Separar semillas", "Reducir tamaño de granos", "Fermentar alimentos", "Pasteurizar leche"],
    correctIndex: 1,
  },
  {
    careerId: "agroin",
    text: "¿Qué es la logística?",
    options: ["Gestión de transporte y distribución", "Análisis químico", "Control de calidad", "Producción agrícola"],
    correctIndex: 0,
  },

  // AMB ---------------------------------------------------
  {
    careerId: "amb",
    text: "¿Qué es el impacto ambiental?",
    options: ["Un análisis económico", "Alteración del ambiente por actividades humanas", "Un proceso químico", "Un fenómeno meteorológico"],
    correctIndex: 1,
  },
  {
    careerId: "amb",
    text: "¿Qué es la huella de carbono?",
    options: ["Cantidad de CO₂ emitido", "Cantidad de agua consumida", "Cantidad de residuos generados", "Cantidad de energía renovable"],
    correctIndex: 0,
  },
  {
    careerId: "amb",
    text: "¿Qué es el reciclaje?",
    options: ["Eliminar residuos", "Transformar materiales para reutilizarlos", "Quemar residuos", "Enterrar residuos"],
    correctIndex: 1,
  },
  {
    careerId: "amb",
    text: "¿Qué es un ecosistema?",
    options: ["Un sistema informático", "Conjunto de organismos y su entorno", "Un proceso químico", "Un tipo de suelo"],
    correctIndex: 1,
  },
  {
    careerId: "amb",
    text: "¿Qué es la contaminación del aire?",
    options: ["Presencia de gases tóxicos", "Aumento de humedad", "Disminución de temperatura", "Aumento de viento"],
    correctIndex: 0,
  },
  {
    careerId: "amb",
    text: "¿Qué es la gestión de residuos?",
    options: ["Control de inventarios", "Manejo adecuado de desechos", "Producción agrícola", "Análisis químico"],
    correctIndex: 1,
  },
  {
    careerId: "amb",
    text: "¿Qué es un recurso renovable?",
    options: ["Se agota rápidamente", "Se regenera naturalmente", "Es siempre artificial", "Es un metal"],
    correctIndex: 1,
  },
  {
    careerId: "amb",
    text: "¿Qué es la biodiversidad?",
    options: ["Variedad de especies", "Cantidad de agua", "Cantidad de CO₂", "Cantidad de suelo fértil"],
    correctIndex: 0,
  },
  {
    careerId: "amb",
    text: "¿Qué es la energía solar?",
    options: ["Energía del viento", "Energía del sol", "Energía del agua", "Energía de biomasa"],
    correctIndex: 1,
  },
  {
    careerId: "amb",
    text: "¿Qué es un área protegida?",
    options: ["Zona industrial", "Zona con conservación especial", "Zona agrícola", "Zona urbana"],
    correctIndex: 1,
  },

  // AGROAL ------------------------------------------------
  {
    careerId: "agroal",
    text: "¿Qué es un alimento procesado?",
    options: ["Alimento crudo", "Alimento modificado industrialmente", "Alimento orgánico", "Alimento congelado"],
    correctIndex: 1,
  },
  {
    careerId: "agroal",
    text: "¿Qué es la inocuidad alimentaria?",
    options: ["Calidad estética", "Seguridad para consumo humano", "Precio del producto", "Cantidad de calorías"],
    correctIndex: 1,
  },
  {
    careerId: "agroal",
    text: "¿Qué es el pH?",
    options: ["Nivel de acidez", "Nivel de temperatura", "Nivel de humedad", "Nivel de azúcar"],
    correctIndex: 0,
  },
  {
    careerId: "agroal",
    text: "¿Qué es la fermentación?",
    options: ["Proceso químico que transforma azúcares", "Proceso de congelación", "Proceso de pasteurización", "Proceso de molienda"],
    correctIndex: 0,
  },
  {
    careerId: "agroal",
    text: "¿Qué es la deshidratación?",
    options: ["Agregar agua", "Eliminar agua", "Agregar azúcar", "Agregar sal"],
    correctIndex: 1,
  },
  {
    careerId: "agroal",
    text: "¿Qué es un conservante?",
    options: ["Un colorante", "Un aditivo que prolonga vida útil", "Un fertilizante", "Un antioxidante natural"],
    correctIndex: 1,
  },
  {
    careerId: "agroal",
    text: "¿Qué es la pasteurización?",
    options: ["Calentar para eliminar patógenos", "Congelar alimentos", "Deshidratar alimentos", "Fermentar alimentos"],
    correctIndex: 0,
  },
  {
    careerId: "agroal",
    text: "¿Qué es un análisis microbiológico?",
    options: ["Estudio de microorganismos en alimentos", "Estudio de minerales", "Estudio de proteínas", "Estudio de vitaminas"],
    correctIndex: 0,
  },
  {
    careerId: "agroal",
    text: "¿Qué es la cadena de frío?",
    options: ["Transporte sin control", "Mantener temperatura adecuada", "Almacenar a temperatura ambiente", "Congelar todo"],
    correctIndex: 1,
  },
  {
    careerId: "agroal",
    text: "¿Qué es un aditivo alimentario?",
    options: ["Sustancia que modifica características del alimento", "Un fertilizante", "Un pesticida", "Un colorante industrial"],
    correctIndex: 0,
  },
];

// ---------------------------------------------------------
// Inicialización Firebase (Node)
// ---------------------------------------------------------
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

// ⚠️ Reemplazar con tu config real
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

// ---------------------------------------------------------
// Seeder
// ---------------------------------------------------------
async function seedQuestions() {
  try {
    const batch = writeBatch(db);
    const colRef = collection(db, "questions");

    questions.forEach((q) => {
      const docRef = doc(colRef); // ID autogenerado
      batch.set(docRef, q);
    });

    await batch.commit();
    console.log(`Seed completado: ${questions.length} preguntas cargadas.`);
  } catch (err) {
    console.error("Error en seed:", err);
  }
}

// ---------------------------------------------------------
// Ejecutar
// ---------------------------------------------------------
(async () => {
  console.log("Iniciando seed de preguntas...");
  await seedQuestions();
  console.log("Proceso finalizado.");
})();
