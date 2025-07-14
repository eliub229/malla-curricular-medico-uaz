const semestres = [
  {
    nombre: "PRIMER SEMESTRE",
    materias: [
      "BIOLOGIA CELULAR",
      "EMBRIOLOGÍA",
      "FISIOLOGIA Y NEUROFISIOLOGIA BASICA",
      "FUNDAMENTOS Y ANATOMIA GENERAL",
      "INTRODUCCIÓN A CIENCIAS DE LA SALUD"
    ]
  },
  {
    nombre: "SEGUNDO SEMESTRE",
    materias: [
      "BIOESTADISTICA",
      "BIOQUIMICA",
      "FISIOLOGÍA DE APARATOS Y SISTEMAS",
      "HISTOLOGÍA",
      "NEUROANATOMIA Y ANATOMIA GENERAL"
    ]
  },
  {
    nombre: "TERCER SEMESTRE",
    materias: [
      "HISTORIA Y FILOSOFIA DE LA MEDICINA",
      "METODOLOGÍA DE LA INVESTIGACION",
      "MICROBIOLOGÍA Y PARASITOLOGIA",
      "BIOLOGÍA MOLECULAR",
      "FARMACOLOGÍA",
      "PSICOLOGIA MEDICA"
    ]
  },
  {
    nombre: "CUARTO SEMESTRE",
    materias: [
      "BIOETICA",
      "EDUCACION Y TECNICAS QUIRURGICAS",
      "INTRODUCCION A LA CLINICA MEDICA",
      "HISTOPATOLOGIA",
      "FISIOPATOLOGIA"
    ]
  },
  {
    nombre: "QUINTO SEMESTRE",
    materias: [
      "BIOINFORMATICA MEDICA",
      "GENETICA",
      "INMUNOLOGIA",
      "HEMATOLOGÍA",
      "INFECTOLOGÍA",
      "NUTRICION",
      "PRACTICA CLINICA GENERAL"
    ]
  },
  {
    nombre: "SEXTO SEMESTRE",
    materias: [
      "IMAGENOLOGIA",
      "TRAUMATOLOGIA Y ORTOPEDIA",
      "GASTROENTEROLOGÍA",
      "OTORRINOLARINGOLOGIA",
      "UROLOGIA",
      "OFTALMOLOGIA",
      "SALUD PUBLICA",
      "PRACTICA CLINICA QUIRURGICA"
    ]
  },
  {
    nombre: "SEPTIMO SEMESTRE",
    materias: [
      "MEDICINA SOCIAL",
      "CARDIOLOGIA",
      "NEUMOLOGIA",
      "NEFROLOGIA",
      "NEUROLOGIA",
      "ONCOLOGIA",
      "PRACTICA CLINICA DE MEDICINA INTERNA"
    ]
  },
  {
    nombre: "OCTAVO SEMESTRE",
    materias: [
      "TERAPEUTICA",
      "PREVENCION EN SALUD",
      "ENDOCRINOLOGIA",
      "REUMATOLOGIA",
      "DERMATOLOGIA",
      "PRACTICA CLINICA DE MEDICINA INTERNA Y CUIDADOS PALIA",
      "CUIDADOS PALIATIVOS",
      "PATOLOGIA CLINICA"
    ]
  },
  {
    nombre: "NOVENO SEMESTRE",
    materias: [
      "PSIQUIATRIA",
      "PEDIATRIA",
      "OBSTETRICIA",
      "MEDICINA LEGAL",
      "PRACTICA CLINICA DE OBSTETRICIA Y PREINTERNADO"
    ]
  },
  {
    nombre: "DECIMO SEMESTRE",
    materias: [
      "MEDICINA COMUNITARIA",
      "PEDIATRIA II",
      "GINECOLOGIA",
      "GERIATRIA",
      "PRACTICA CLINICA GINECOLOGIA Y PREINTERNADO"
    ]
  }
];

const contenedor = document.getElementById("malla-curricular");

semestres.forEach(semestre => {
  const div = document.createElement("div");
  div.className = "semestre";
  div.innerHTML = `
    <h2>${semestre.nombre}</h2>
    <ul>
      ${semestre.materias.map(materia => `<li>${materia}</li>`).join("")}
    </ul>
  `;
  contenedor.appendChild(div);
});
