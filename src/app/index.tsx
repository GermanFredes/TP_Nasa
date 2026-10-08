import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  Button,
  ScrollView
} from "react-native";
import { useApi } from "../hooks/api.jsx";
import { styles } from "../components/color.jsx";
import { BotonFecha } from "../components/fecha.jsx";

export default function Index() {
  const [mostrar, setMostrar] = useState(false);
  const [fecha, setFecha] = useState(new Date());
  const { datos } = useApi(fecha);

  function limpiarTexto(texto) {
    return texto.replace(/<[^>]*>/g, "");
  }

  return (
    <ScrollView style={styles.Scrol}>
      <View style={styles.container}>

        <Text style={styles.encabezado}>
          <Text style={styles.titulo}>
            NASA API
          </Text>
        </Text>

        {datos ? (
          <>
            <View style={styles.contenedorFecha}>

              {!mostrar && (
                <Button
                  title="YYYY/MM/DD"
                  onPress={() => setMostrar(true)}
                />
              )}

              {mostrar && (
                <BotonFecha
                  fecha={fecha}
                  setFecha={setFecha}
                />
              )}

            </View>

            <View style={styles.contenido}>

              <Text style={styles.nombre}>
                {datos.title}
              </Text>

              <Image
                source={{ uri: datos.hdurl }}
                style={styles.imagen}
              />

              <Text style={styles.text}>
                {limpiarTexto(datos.explanation)}
              </Text>

            </View>
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}

      </View>
    </ScrollView>
  );
}