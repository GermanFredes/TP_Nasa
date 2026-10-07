import { useState } from "react";

import {
  ActivityIndicator,
  Image,
  Text,
  View,
} from "react-native";

import { useApi } from "../components/api.js";

import { styles } from "../components/color.js";

import { BotonFecha } from "../components/fecha.js";

export default function Index() {

  const hoy = new Date();

  const [fecha, setFecha] = useState(
    hoy.toISOString().split("T")[0]
  );

  const { datos } = useApi(fecha);

  return (
    <View style={styles.container}>

      <text style={styles.encabezado}>

        <Text style={styles.titulo}>
          NASA API
        </Text>

        <BotonFecha
          fecha={fecha}
          setFecha={setFecha}
        />

      </text>

      {datos ? (
        <>
          <Text style={styles.nombre}>
            {datos.title}
          </Text>

          <View style={styles.contenido}>

            <Image
              source={{ uri: datos.hdurl }}
              style={styles.imagen}
            />

            <Text style={styles.text}>
              {datos.explanation}
            </Text>

          </View>
        </>
      ) : (
        <ActivityIndicator size="large" />
      )}

    </View>
  );
}