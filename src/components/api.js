import { useEffect, useState } from "react";

export function useApi(fecha) {
  const [datos, setDatos] = useState(null);

  const key = process.env.EXPO_PUBLIC_KEY;

  useEffect(() => {
    fetch(
      `https://science.nasa.gov/wp-json/wp/v2/apod-basic?api_key=${key}&date=${fecha}`
    )
      .then(respuesta => respuesta.json())
      .then(datos => {
        console.log("DATOS:", datos);
        console.log("URL:", datos.url);
        console.log("MEDIA TYPE:", datos.media_type);

        setDatos(datos);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, [fecha]);

  return { datos };
}