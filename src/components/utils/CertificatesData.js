import certificado1 from '../../assets/certificates/001.jpg'
import certificado2 from '../../assets/certificates/002.jpg'
import certificado3 from '../../assets/certificates/003.jpg'
import certificado4 from '../../assets/certificates/004.jpg'
import certificado5 from '../../assets/certificates/005.jpg'
import certificado6 from '../../assets/certificates/006.jpg'
import certificado7 from '../../assets/certificates/007.jpg'

export const certificatesData = [
  {
    id: 1,
    title: "Transformación Digital en el Perú",
    organization: "ENAP",
    date: "Diciembre 2024",
    category: "Transformación Digital",
    image: certificado1,
  },
  {
    id: 2,
    title: "Estructura, organización y funcionamiento del Estado Peruano",
    organization: "ENAP",
    date: "Diciembre 2024",
    category: "Administración Pública",
    image: certificado2,
  },
  {
    id: 3,
    title: "Remote Work",
    organization: "Certiprof",
    date: "Abril 2024",
    category: "Habilidades Profesionales",
    image: certificado3,
  },
  {
    id: 4,
    title: "Office Intermedio",
    organization: "Fundación Telefónica",
    date: "Abril 2024",
    category: "Ofimática",
    image: certificado4,
  },
  {
    id: 5,
    title: "Programación con Javascript",
    organization: "Fundación Telefónica",
    date: "Mayo 2024",
    category: "Desarrollo Web",
    image: certificado5,
  },
  {
    id: 6,
    title: "Gobierno y gestión de la seguridad de la información",
    organization: "Fundación Telefónica",
    date: "Mayo 2024",
    category: "Ciberseguridad",
    image: certificado6,
  },
  {
    id: 7,
    title: "Hackathon UDH 2024",
    organization: "PAISI",
    date: "Noviembre 2024",
    category: "Universidad",
    image: certificado7,
  }
];

// categorias para el filtro
export const certificateCategories = [
  "Todos",
  "Desarrollo Web",
  "Ciberseguridad",
  "Gestión de Proyectos",
];