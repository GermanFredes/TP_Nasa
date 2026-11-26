import { useEffect, useState } from 'react';
import { Pressable, Text, View } from "react-native";
import { styles } from "./color";

export function BotonFecha({ fecha, setFecha }) {
  const añoActual = fecha.getFullYear();
  const mesActual = fecha.getMonth() + 1;

  const fechaMinima = new Date(1995, 5, 16);
  const fechaMaxima = new Date();

  const [indice, setIndice] = useState(añoActual);
  const [indice_m, setIndice_m] = useState(mesActual);

  useEffect(() => {
    setIndice(fecha.getFullYear());
    setIndice_m(fecha.getMonth() + 1);
  }, [fecha]);

  function cambiarMes(cantidad) {
    const nuevaFecha = new Date(indice, indice_m - 1 + cantidad, 1);

    const mesMinimo = new Date(
      fechaMinima.getFullYear(),
      fechaMinima.getMonth(),
      1
    );

    const mesMaximo = new Date(
      fechaMaxima.getFullYear(),
      fechaMaxima.getMonth(),
      1
    );

    if (nuevaFecha < mesMinimo || nuevaFecha > mesMaximo) {
      return;
    }

    setIndice(nuevaFecha.getFullYear());
    setIndice_m(nuevaFecha.getMonth() + 1);
  }

  let cantidadDias = new Date(indice, indice_m, 0).getDate();

  if (
    indice === fechaMaxima.getFullYear() && indice_m === fechaMaxima.getMonth() + 1) {
    cantidadDias = fechaMaxima.getDate();
  }
  let dias = [];

  for (let i = 1; i <= cantidadDias; i++) {
  dias.push(i);
  }

  function seleccionarDia(dia) {
    const nuevaFecha = new Date(indice, indice_m - 1, dia);

    if (nuevaFecha < fechaMinima || nuevaFecha > fechaMaxima) {
      return;
    }

    setFecha(nuevaFecha);
  }

  return (
    <View style={styles.botonFecha}>

      <View style={styles.component}>

        <Pressable
          onPress={() => cambiarMes(-12)}
          style={styles.component_button}>
          <Text style={styles.flecha}>
            {"<"}
          </Text>
        </Pressable>

        <Text>
          {indice}
        </Text>

        <Pressable
          onPress={() => cambiarMes(12)}
          style={styles.component_button}>
          <Text style={styles.flecha}>
            {">"}
          </Text>
        </Pressable>

        <View style={styles.component_meses}>

          <Pressable
            onPress={() => cambiarMes(-1)}
            style={styles.component_button}>
            <Text>{"<"}</Text>
          </Pressable>

          <Text>
            {indice_m}
          </Text>

          <Pressable
            onPress={() => cambiarMes(1)}
            style={styles.component_button}>
            <Text>{">"}</Text>
          </Pressable>

        </View>

      </View>

      <View style={styles.component_dias}>
        {dias.map((dia) => {
          const diaFecha = new Date(indice, indice_m - 1, dia);

          return (
            <Pressable
              onPress={() => seleccionarDia(dia)}
              key={dia}
              disabled={diaFecha < fechaMinima || diaFecha > fechaMaxima}
              style={styles.dia}>
              <Text>{dia}</Text>
            </Pressable>
          );
        })}
      </View>

    </View>
  );
}