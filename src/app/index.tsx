import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  Button,
  ScrollView,
  Pressable,
} from "react-native";

import { useApi } from "../hooks/api.jsx";
import { styles } from "../components/color.jsx";
import { BotonFecha } from "../components/fecha.jsx";
import { VisorImagen } from "../components/visorImagen.jsx";

export default function Index() {
  const [mostrar, setMostrar] = useState(false);
  const [mostrarImagen, setMostrarImagen] = useState(false);
  const [fecha, setFecha] = useState(new Date());

  const { datos, error, reintentar, cargando } = useApi(fecha);

  function limpiarTexto(texto) {
    return texto
      .replace(/<[^>]*>/g, "")
      .replace(/Explanation:/, "")
      .replace(/Tomorrow's picture:.*/s, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={[styles.encabezado, styles.titulo]}>
          NASA API
        </Text>

        <View style={styles.contenedorFecha}>
          {mostrar ? (
            <BotonFecha fecha={fecha} setFecha={setFecha} />
          ) : (
            <Button
              title="YYYY/MM/DD"
              onPress={() => setMostrar(true)}
            />
          )}
        </View>

        {cargando ? (
          <ActivityIndicator size="large" />
        ) : error ? (
          <View>
            <Text style={styles.text}>
              Error al consultar NASA: {error}
            </Text>

            <Button title="Reintentar" onPress={reintentar} />
          </View>
        ) : datos ? (
          <>
            <View style={styles.contenido}>
              <Text style={styles.nombre}>
                {datos.title}
              </Text>

              <Pressable onPress={() => setMostrarImagen(true)}>
                <Image
                  source={{ uri: datos.hdurl }}
                  style={styles.imagen}
                />
              </Pressable>

              <View style={styles.explicacion}>
                <Text style={styles.tituloExplicacion}>
                  Descripción
                </Text>

                <Text style={styles.text}>
                  {limpiarTexto(datos.explanation)}
                </Text>
              </View>
            </View>

            <VisorImagen
              visible={mostrarImagen}
              imagen={datos.hdurl}
              cerrar={() => setMostrarImagen(false)}
            />
          </>
        ) : null}
      </View>
    </ScrollView>
  );
}