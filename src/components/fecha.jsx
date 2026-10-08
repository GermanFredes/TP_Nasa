import React, { useState } from 'react';
import { Pressable, Text, View } from "react-native";
export function BotonFecha({ fecha, setFecha }) {
  const añoActual = new Date(fecha).getFullYear();
  const mesActual = new Date(fecha).getMonth() + 1;

  const [indice, setIndice] = useState(añoActual);
  const [indice_m, setIndice_m] = useState(mesActual);

  function restar_indice() {
    setIndice(indice - 1);
  }

  function sumar_indice() {
    if (indice < 2026) {
      setIndice(indice + 1);
    }
  }

  function restar_mes() {
    if (indice_m > 1) {
      setIndice_m(indice_m - 1);
    }
  }

  function sumar_mes() {
    if (indice_m < 12) {
      setIndice_m(indice_m + 1);
    }
  }

  const cantidadDias = new Date(indice, indice_m, 0).getDate();

  let dias = [];

  function generarDias(dias) {
    for (let i = 1; i <= cantidadDias; i++) {
      dias.push(i);
    }
  }

  function seleccionarDia(dia) {
    const nuevaFecha = new Date(indice, indice_m - 1, dia);

    console.log("DIA:", dia);
    console.log("FECHA:", nuevaFecha);

    setFecha(nuevaFecha);
  }

  generarDias(dias);

  return (
    <View style={styles.botonFecha}>

      <View style={styles.component}>

        <Pressable
          onPress={restar_indice}
          style={styles.component_button}>
          <Text>{"<"}</Text>
        </Pressable>

        <Text>
          {indice}
        </Text>

        <Pressable
          onPress={sumar_indice}
          style={styles.component_button}>
          <Text>{">"}</Text>
        </Pressable>

        <View style={styles.component_meses}>

          <Pressable
            onPress={restar_mes}
            style={styles.component_button}>
            <Text>{"<"}</Text>
          </Pressable>

          <Text>
            {indice_m}
          </Text>

          <Pressable
            onPress={sumar_mes}
            style={styles.component_button}>
            <Text>{">"}</Text>
          </Pressable>

        </View>

      </View>

      <View style={styles.component_dias}>
        {dias.map((dia) => {
          return (
            <Pressable
              onPress={() => seleccionarDia(dia)}
              key={dia}
              style={styles.dia}>
              <Text>{dia}</Text>
            </Pressable>
          );
        })}
      </View>

    </View>
  );
}