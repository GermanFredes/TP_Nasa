import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export function BotonFecha({ fecha, setFecha}) {
  const añoActual = new Date(fecha).getFullYear();

  const [indice, setIndice] = useState(añoActual);

  function restar_indice() {
    setIndice(indice - 1);
  }

    function sumar_indice() {
    setIndice(indice + 1);
  }
  

  

  return (
    <View>
      <Pressable onPress={restar_indice}>
        <Text>-</Text>
      </Pressable>

      <Text>
        {indice}
      </Text>

      <Pressable>
        <Text>+</Text>
      </Pressable>
    </View>
  );
}