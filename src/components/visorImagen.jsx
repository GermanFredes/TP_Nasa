import { Modal, Image, View, Pressable, Text } from "react-native";
import { styles } from "./color";
import { useDescarga } from "../hooks/descarga.jsx";

export function VisorImagen({ visible, imagen, cerrar }) {
  const { descargar, descargando } = useDescarga();

  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={cerrar}
    >
      <View style={styles.visorImagen}>
        <Image
          source={{ uri: imagen }}
          style={styles.imagenAmpliada}
        />

        <View style={styles.barraSuperior}>
          <Pressable
            onPress={() => descargar(imagen)}
            style={styles.botonDescargar}
            disabled={descargando}
          >
            <Text style={styles.textoDescargar}>  {descargando ? "⏳" : "📼"}
            </Text>
          </Pressable>

          <Pressable
            onPress={cerrar}
            style={styles.botonCerrar}
          >
            <Text style={styles.textoCerrar}>×</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}