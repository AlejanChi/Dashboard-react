import React, { useState, useEffect } from 'react';
import fs from 'fs'; // Asegúrate de importar fs solo si estás ejecutando en un entorno Node.js
import Card from '../components/Card';

function Articulos() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Ruta del archivo JSON
    const rutaArchivo = 'datos.json';

    // Lee el archivo JSON
    fs.readFileSync(rutaArchivo, 'utf8', (error, datos) => {
      if (error) {
        console.error('Error al leer el archivo:', error);
        return;
      }

      try {
        // Parsea los datos como JSON
        const datosJSON = JSON.parse(datos);

        // Actualiza el estado con los datos
        setDatos(datosJSON);
      } catch (parseError) {
        console.error('Error al parsear JSON:', parseError);
      }
    });
  }, []); // El segundo argumento del useEffect es un array de dependencias para que se ejecute solo una vez al montar el componente

  return (
    <div>
      {/* Renderiza tu componente con los datos */}
      <OtroComponente datos={datos} />
    </div>
  );
}

function OtroComponente({ datos }) {
  // Aquí puedes utilizar los datos como sea necesario
  return (
    <ul>
      {datos.map((dato, index) => (
        <Card props={dato}/>
      ))}
    </ul>
  );
}

export default Articulos;
