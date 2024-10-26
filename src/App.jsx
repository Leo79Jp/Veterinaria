import './style/App.css'
import Veterinaria from './components/Veterinaria'
const Caninos = [

  {

    id:1,

    nombre: "Firulais",

    edad: 3 + " Años Humanos",

    sexo: "Macho",

    raza: "pastor aleman",

    tamaño: "grande",

    imagen: "https://www.lanacion.com.ar/resizer/v2/entre-la-fortaleza-y-la-fragilidad-el-pastor-7XUR5MFZDRD3DGLFNMFZFS55YI.jpg?auth=e487c663eb053c598e5dfd4830145c78ecc6015ee9af0f5dbe95fedb86567734&width=420&height=280&quality=70&smart=true"

  },

  {

    id:2,

    nombre: "Maya",

    edad: 4 + " Años Humanos",

    sexo: "Hembra",

    raza: "pug",

    tamaño: "chico",

    imagen: 'https://es.mypet.com/wp-content/uploads/sites/23/2021/03/ThinkstockPhotos-454238885.jpg?w=300'

  },

  {

    id:3,

    nombre: "Pipo",

    edad: 5 + " Años Humanos",

    sexo: "Macho",

    raza: "pastor",

    tamaño: "mediano",

    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5PgpcASFi4Fb_66uVKXz2ggLZFSTKKMpAw&s'

  },

  {

    id:4,

    nombre: "pacha",

    edad: 4 + " Años Humanos",

    sexo: "Hembra",

    raza: "salchicha",

    tamaño: "chico",

    imagen: 'https://doggiesintown.com/wp-content/uploads/2023/08/El-Fascinante-Mundo-del-Perro-Salchicha-Explorando-su-Historia-Crianza-y-Personalidad-Unica-Doggies-in-Town-1200x676-5.jpg'

  },

  {

    id: 5,

    nombre: "Tara",

    edad: 8 + " Años Humanos",

    sexo: "Hembra",

    raza: "Pitbull",

    tamaño: "grande",

    imagen: 'https://nfnatcane.es/blog/wp-content/uploads/2020/10/pitbull-sobre-el-cesped.jpg'

  }

];

function App() {
  
  return (
    <main className='App'>
    <h1>Clientes caninos de Veterinaria</h1>
    <Veterinaria state={Caninos} />
    </main>
  )
}

export default App
