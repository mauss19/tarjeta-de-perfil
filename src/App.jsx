// import React from 'react';
// import './App.css';

// export default function TarjetaPerfil() {aqui--->es un componente estatico y cerrado por eso cambia la dela linea 29*****
// //   return (
//     <div className="proye">
//       <img 
//         src="https://via.placeholder.com/100" 
//         alt="Foto de perfil" 
//       />
//       <h3>Sofía Mausss</h3>
//       <p className="profesion">Diseñadora UX/UI</p>
      
//       <p className="estadisticas">
//         <span><strong>1.2k</strong> Seguidores</span>
//         <span><strong>45</strong> Posts</span>
//       </p>

//       <span className="verificado">Perfil verificado</span>
//  este era un ejemplo yo lo modifique lo hice que una sola funcion se reutilizara******************************** 
// 9 veces, es menos codigo mas practico y es el onbjetivo de usar react  *****************************************
//     </div>
//   );
// }
import React from 'react';
import './App.css';

// 1. Componente que recibe props
//este recive informacion incluye parametros por eso cambio a dif del lin 2**
function TarjetaPerfil({ nombre, profesion }) {
  return (
    <div className="proye">
      <img 
        src="https://via.placeholder.com/100" 
        alt="Foto de perfil" 
      />
      <h3>{nombre}</h3>
      <p className="profesion">{profesion}</p>
      
      <p className="estadisticas">
        <span><strong>1.2k</strong> Seguidores</span>
        <span><strong>45</strong> Posts</span>
      </p>

      <span className="verificado">Perfil verificado</span>
    </div>
  );
}

// 2. Componente principal donde puedes poner las tarjetas
export default function App() {
  return (
    //<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>*/}
    <div className="reproducir">
      {/* Aquí llamas a tu tarjeta 9 veces con nombres diferentes */}
      <TarjetaPerfil nombre="Sofía Martínez" profesion="Diseñadora UX/UI" />
      <TarjetaPerfil nombre="Carlos Gómez" profesion="Desarrollador Front-End" />
      <TarjetaPerfil nombre="Ana López" profesion="Project Manager" />
      <TarjetaPerfil nombre="Luis Torres" profesion="Data Scientist" />
      <TarjetaPerfil nombre="María Pérez" profesion="QA Engineer" />
      <TarjetaPerfil nombre="Jorge Ramírez" profesion="DevOps Engineer" />
      <TarjetaPerfil nombre="Lucía Fernández" profesion="Marketing Digital" />
      <TarjetaPerfil nombre="Pedro Sánchez" profesion="Backend Developer" />
      <TarjetaPerfil nombre="Carmen Ruiz" profesion="Product Owner" />
    </div>
  );
}

{/* este aun se puede hacer mas corto severia como esto 

  Como siguiente paso o reto personal, cuando tengas listas muy grandes,
   podrías guardar esos datos en un arreglo (array) y recorrerlo con 
  .map() para no tener que escribir la etiqueta <TarjetaPerfil/> nueve veces a mano.
  const listaPerfiles = [
  { nombre: "Sofía Martínez", profesion: "Diseñadora UX/UI" },
  { nombre: "Carlos Gómez", profesion: "Desarrollador Front-End" },
  // ... demás perfiles
];

export default function App() {
  return (
    <div className="reproducir">
      {listaPerfiles.map((perfil, index) => (
        <TarjetaPerfil key={index} nombre={perfil.nombre} profesion={perfil.profesion} />
      ))}
    </div>
  );
}*******************por que no lo ago asy por falta de tiempo pero la idea es simpre tratar de hacerlo mas corto
y reutilizable escribir menos codigo y que sea mas directo */}