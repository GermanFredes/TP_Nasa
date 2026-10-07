import { useEffect, useState } from "react";

export function useApi(fecha) {
  const [datos, setDatos] = useState(null);

  const key = process.env.EXPO_PUBLIC_KEY;

  function years(fecha) {
    return new Date(fecha).getFullYear();
  }

  function months(fecha) {
    return new Date(fecha).getMonth() + 1;
  }

  function days(fecha) {
    return new Date(fecha).getDate();
  }

  useEffect(() => {
    fetch(
      `https://science.nasa.gov/wp-json/wp/v2/apod-basic?api_key=${key}&date=${fecha}`
    )
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setDatos(datos);
      });
  }, [fecha]);

  return { datos, years, months, days };
}