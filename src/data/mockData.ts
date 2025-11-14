// Datos simulados para el sistema electoral
// Este archivo contiene todos los datos necesarios para el funcionamiento del sistema sin backend

export interface Candidate {
  id: string;
  name: string;
  photo_url: string;
  description: string;
  party_name: string;
  party_logo_url: string | null;
  party_description: string | null;
  academic_formation: string | null;
  professional_experience: string | null;
  campaign_proposal: string | null;
  category: "presidencial" | "distrital" | "regional";
  vote_count: number;
}

export interface Vote {
  id: string;
  voter_dni: string;
  candidate_id: string;
  category: "presidencial" | "distrital" | "regional";
  voted_at: string;
}

export interface Voter {
  dni: string;
  full_name: string;
  address: string;
  district: string;
  province: string;
  department: string;
  birth_date: string;
  photo_url: string | null;
  has_voted: boolean;
}

// Credenciales de administrador simuladas
export const ADMIN_CREDENTIALS = {
  email: "admin@elecciones.pe",
  password: "admin123"
};

// Candidatos simulados
export const MOCK_CANDIDATES: Candidate[] = [
  // Candidatos Presidenciales
  {
    id: "pres-1",
    name: "Alan García Pérez",
    photo_url: "https://imgs.deperu.com/archivos/presidente_alan_garcia_perez.jpg",
    description: "Ex Presidente del Perú (1985-1990, 2006-2011). Abogado y político con amplia trayectoria en la política nacional. Líder del Partido Aprista Peruano.",
    party_name: "Partido Aprista Peruano",
    party_logo_url: null,
    party_description: "Partido político histórico del Perú fundado por Víctor Raúl Haya de la Torre",
    academic_formation: "Derecho - Universidad Nacional Mayor de San Marcos\nEstudios de posgrado en Ciencias Políticas",
    professional_experience: "Ex Presidente de la República del Perú (1985-1990, 2006-2011)\nEx Secretario General de la OEA\nLíder del Partido Aprista Peruano",
    campaign_proposal: "Reactivación económica y creación de empleo\nFortalecimiento de la educación pública\nInversión en infraestructura nacional",
    category: "presidencial",
    vote_count: 342
  },
  {
    id: "pres-2",
    name: "Ollanta Humala Tasso",
    photo_url: "https://www.iperu.org/wp-content/uploads/2016/08/ollanta-humala-tasso.jpg",
    description: "Ex Presidente del Perú (2011-2016). Militar retirado y político. Líder del Partido Nacionalista Peruano.",
    party_name: "Partido Nacionalista Peruano",
    party_logo_url: null,
    party_description: "Partido político de izquierda nacionalista",
    academic_formation: "Escuela Militar de Chorrillos\nMaestría en Ciencias Políticas - Universidad Católica del Perú",
    professional_experience: "Ex Presidente de la República del Perú (2011-2016)\nEx Comandante del Ejército\nLíder político nacionalista",
    campaign_proposal: "Inclusión social y reducción de la pobreza\nFortalecimiento del Estado\nDesarrollo de las regiones del país",
    category: "presidencial",
    vote_count: 298
  },
  {
    id: "pres-3",
    name: "Keiko Fujimori Higuchi",
    photo_url: "https://tse3.mm.bing.net/th/id/OIP.BrpQ3JFMqEC10VqPyVJVkQHaE_?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Política peruana, ex Congresista y líder de Fuerza Popular. Hija del ex Presidente Alberto Fujimori.",
    party_name: "Fuerza Popular",
    party_logo_url: null,
    party_description: "Partido político de centro-derecha",
    academic_formation: "Administración de Empresas - Universidad de Boston\nMaestría en Administración Pública - Universidad de Columbia",
    professional_experience: "Ex Congresista de la República\nLíder de Fuerza Popular\nEx Primera Dama del Perú (1994-2000)",
    campaign_proposal: "Seguridad ciudadana y lucha contra la delincuencia\nCrecimiento económico y empleo\nModernización del Estado",
    category: "presidencial",
    vote_count: 267
  },
  // Candidatos Distritales
  {
    id: "dist-1",
    name: "Jorge Muñoz Wells",
    photo_url: "https://th.bing.com/th/id/R.11a1d627ece27342cb1e2c042009348e?rik=ev1begCzRLb%2fcg&pid=ImgRaw&r=0",
    description: "Ex Alcalde de Lima (2019-2022). Ingeniero y político con experiencia en gestión municipal y desarrollo urbano.",
    party_name: "Acción Popular",
    party_logo_url: null,
    party_description: "Partido político histórico del Perú",
    academic_formation: "Ingeniería Industrial - Universidad Nacional de Ingeniería\nMaestría en Administración - ESAN",
    professional_experience: "Ex Alcalde de Lima (2019-2022)\nEx Alcalde de San Isidro (2011-2018)\nIngeniero consultor",
    campaign_proposal: "Mejora del transporte público y movilidad urbana\nRecuperación de espacios públicos\nModernización de la gestión municipal",
    category: "distrital",
    vote_count: 156
  },
  {
    id: "dist-2",
    name: "Susana Villarán",
    photo_url: "https://tse4.mm.bing.net/th/id/OIP.I2cRDzSX9rMYB2B4RNxhSwHaDt?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Ex Alcaldesa de Lima (2011-2014). Defensora de derechos humanos y líder social con amplia trayectoria en organizaciones civiles.",
    party_name: "Fuerza Social",
    party_logo_url: null,
    party_description: "Movimiento político de izquierda",
    academic_formation: "Derecho - Pontificia Universidad Católica del Perú\nMaestría en Derechos Humanos",
    professional_experience: "Ex Alcaldesa de Lima (2011-2014)\nEx Defensora del Pueblo\nLíder de organizaciones de derechos humanos",
    campaign_proposal: "Participación ciudadana y transparencia\nProtección del medio ambiente urbano\nProgramas sociales para familias vulnerables",
    category: "distrital",
    vote_count: 142
  },
  {
    id: "dist-3",
    name: "Luis Castañeda Lossio",
    photo_url: "https://leeme.pe/wp-content/uploads/Luis-Castaneda-Lossio.jpg",
    description: "Ex Alcalde de Lima (2003-2010, 2015-2018). Médico y político con experiencia en gestión municipal y obras públicas.",
    party_name: "Solidaridad Nacional",
    party_logo_url: null,
    party_description: "Partido político de centro",
    academic_formation: "Medicina - Universidad Nacional Mayor de San Marcos\nEspecialización en Salud Pública",
    professional_experience: "Ex Alcalde de Lima (2003-2010, 2015-2018)\nEx Ministro del Interior\nMédico especialista",
    campaign_proposal: "Obras de infraestructura y mejoramiento urbano\nSeguridad ciudadana\nModernización de servicios municipales",
    category: "distrital",
    vote_count: 128
  },
  // Candidatos Regionales
  {
    id: "reg-1",
    name: "Yván Vásquez Valera",
    photo_url: "https://tse4.mm.bing.net/th/id/OIP.3Kb9XGlGoj6ts7rEPOhOdQHaE-?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Ex Presidente Regional de Loreto. Ingeniero forestal con experiencia en desarrollo regional y gestión de recursos naturales.",
    party_name: "Movimiento Independiente Loreto",
    party_logo_url: null,
    party_description: "Movimiento político regional",
    academic_formation: "Ingeniería Forestal - Universidad Nacional Agraria de la Selva\nMaestría en Gestión Ambiental",
    professional_experience: "Ex Presidente Regional de Loreto\nEx Director Regional de Recursos Naturales\nIngeniero consultor",
    campaign_proposal: "Desarrollo sostenible de la Amazonía\nFortalecimiento de la producción regional\nProtección de recursos naturales",
    category: "regional",
    vote_count: 203
  },
  {
    id: "reg-2",
    name: "Yamila Osorio Delgado",
    photo_url: "https://iletradosweb.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-30-at-2.39.46-PM-1.jpeg",
    description: "Ex Presidenta Regional de Arequipa. Ingeniera y política con experiencia en gestión pública y desarrollo económico regional.",
    party_name: "Alianza para el Progreso",
    party_logo_url: null,
    party_description: "Partido político de centro-derecha",
    academic_formation: "Ingeniería Industrial - Universidad Nacional de San Agustín\nMaestría en Gestión Pública",
    professional_experience: "Ex Presidenta Regional de Arequipa\nEx Gerente Regional de Desarrollo Económico\nIngeniera consultora",
    campaign_proposal: "Desarrollo económico y turismo regional\nFortalecimiento de la agricultura\nInversión en infraestructura regional",
    category: "regional",
    vote_count: 187
  },
  {
    id: "reg-3",
    name: "César Álvarez Aguilar",
    photo_url: "https://e.rpp-noticias.io/xlarge/2020/12/25/402240_1039114.jpg",
    description: "Ex Presidente Regional de Áncash. Abogado y político con experiencia en gestión regional y desarrollo local.",
    party_name: "Movimiento Independiente Regional",
    party_logo_url: null,
    party_description: "Movimiento político regional",
    academic_formation: "Derecho - Universidad Nacional Mayor de San Marcos\nEspecialización en Derecho Administrativo",
    professional_experience: "Ex Presidente Regional de Áncash\nEx Director Regional de Desarrollo Social\nAbogado consultor",
    campaign_proposal: "Desarrollo económico y minero responsable\nFortalecimiento de la agricultura\nMejora de servicios de salud y educación",
    category: "regional",
    vote_count: 165
  }
];

// Generar más de 1000 votos simulados
function generateMockVotes(): Vote[] {
  const votes: Vote[] = [];
  const categories: ("presidencial" | "distrital" | "regional")[] = ["presidencial", "distrital", "regional"];
  
  // Generar DNIs aleatorios de 8 dígitos
  const generateDNI = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  };
  
  // Generar fecha aleatoria en los últimos 30 días
  const generateDate = () => {
    const now = new Date();
    const daysAgo = Math.floor(Math.random() * 30);
    const date = new Date(now);
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString();
  };
  
  // Generar 1200 votos (más de 1000 como solicitado)
  for (let i = 0; i < 1200; i++) {
    const dni = generateDNI();
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    // Seleccionar candidato aleatorio de la categoría correspondiente
    const candidatesInCategory = MOCK_CANDIDATES.filter(c => c.category === category);
    const randomCandidate = candidatesInCategory[Math.floor(Math.random() * candidatesInCategory.length)];
    
    votes.push({
      id: `vote-${i + 1}`,
      voter_dni: dni,
      candidate_id: randomCandidate.id,
      category: category,
      voted_at: generateDate()
    });
  }
  
  return votes;
}

// Actualizar conteos de votos en candidatos basado en los votos generados
function updateCandidateVoteCounts(candidates: Candidate[], votes: Vote[]): Candidate[] {
  const voteCounts = new Map<string, number>();
  
  // Contar votos por candidato
  votes.forEach(vote => {
    const current = voteCounts.get(vote.candidate_id) || 0;
    voteCounts.set(vote.candidate_id, current + 1);
  });
  
  // Actualizar candidatos con los conteos reales
  return candidates.map(candidate => ({
    ...candidate,
    vote_count: voteCounts.get(candidate.id) || candidate.vote_count
  }));
}

// Generar votos y actualizar candidatos
const MOCK_VOTES = generateMockVotes();
export const CANDIDATES_WITH_VOTES = updateCandidateVoteCounts(MOCK_CANDIDATES, MOCK_VOTES);

// Almacenamiento simulado en memoria (simula una base de datos)
class MockDatabase {
  private votes: Vote[] = [...MOCK_VOTES];
  private voters: Map<string, Voter> = new Map();
  private candidates: Candidate[] = [...CANDIDATES_WITH_VOTES];
  
  // Métodos para votos
  getVotes() {
    return [...this.votes];
  }
  
  getVotesByVoter(dni: string) {
    return this.votes.filter(v => v.voter_dni === dni);
  }
  
  getVotesByCategory(category: string) {
    return this.votes.filter(v => v.category === category);
  }
  
  addVote(vote: Omit<Vote, "id">) {
    const newVote: Vote = {
      ...vote,
      id: `vote-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      voted_at: new Date().toISOString()
    };
    this.votes.push(newVote);
    
    // Actualizar conteo del candidato
    const candidate = this.candidates.find(c => c.id === vote.candidate_id);
    if (candidate) {
      candidate.vote_count++;
    }
    
    return newVote;
  }
  
  // Métodos para votantes
  getVoter(dni: string): Voter | null {
    return this.voters.get(dni) || null;
  }
  
  addVoter(voter: Voter) {
    this.voters.set(voter.dni, voter);
    return voter;
  }
  
  updateVoter(dni: string, updates: Partial<Voter>) {
    const voter = this.voters.get(dni);
    if (voter) {
      const updated = { ...voter, ...updates };
      this.voters.set(dni, updated);
      return updated;
    }
    return null;
  }
  
  // Métodos para estadísticas
  getTotalVotes() {
    return this.votes.length;
  }

  getTotalVoters() {
    // Si hay votantes registrados, usar ese número
    if (this.voters.size > 0) {
      return this.voters.size;
    }
    
    // Si no hay votantes registrados, calcular basado en DNIs únicos de los votos
    const uniqueDNIs = new Set(this.votes.map(v => v.voter_dni));
    const uniqueVotersCount = uniqueDNIs.size;
    
    // Si hay votos pero queremos un número más realista de votantes totales,
    // usar un multiplicador para simular que no todos los votantes han votado
    // Por ejemplo, si hay 1200 votos de 400 DNIs únicos, asumimos que hay más votantes registrados
    if (uniqueVotersCount > 0) {
      // Estimar que hay aproximadamente 3-4 veces más votantes registrados que los que han votado
      // Esto da una tasa de participación más realista
      return Math.max(uniqueVotersCount * 3, 5000); // Mínimo 5000 votantes registrados
    }
    
    // Si no hay votos ni votantes, devolver un número fijo por defecto
    return 5000;
  }
  
  getCandidates() {
    return [...this.candidates];
  }
  
  getCandidateById(id: string) {
    return this.candidates.find(c => c.id === id) || null;
  }
}

// Instancia única de la base de datos simulada
export const mockDB = new MockDatabase();

