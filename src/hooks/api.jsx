
import { useEffect, useState } from 'react';

export function useApi(fecha) {
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);
  const [intento, setIntento] = useState(0);
  const [cargando, setCargando] = useState(true);

  const reintentar = () => setIntento((prev) => prev + 1);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        setCargando(true);
        setError(null);

        const fechaNASA = `${String(fecha.getFullYear()).slice(-2)}${String(fecha.getMonth() + 1).padStart(2, "0")}${String(fecha.getDate()).padStart(2, "0")}`;

        const url = `https://science.nasa.gov/wp-json/wp/v2/apod-basic/${fechaNASA}`;

        const respuesta = await fetch(url);

        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        setDatos(await respuesta.json());

        
      } catch (error) {
        setError(error.message);

      } finally {
        setCargando(false);
      }
    }

    obtenerDatos();

  }, [fecha, intento]);

  return { datos, error, reintentar, cargando };
}
