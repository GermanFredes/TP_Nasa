import { useEffect, useState } from "react";

export function useApi(fecha) {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const fechaApi = fecha.toISOString().split("T")[0];

        const respuesta = await fetch(
          `https://science.nasa.gov/wp-json/wp/v2/apod-basic?date=${fechaApi}`
        );

        const respuestaApi = await respuesta.json();

        if (Array.isArray(respuestaApi)) {
          const dato = respuestaApi.find(
            (item) => item.date === fechaApi
          );

          setDatos(dato);
        } else {
          setDatos(respuestaApi);
        }
      } catch (error) {
        console.log("ERROR:", error);
      }
    }

    obtenerDatos();
  }, [fecha]);

  return { datos };
}