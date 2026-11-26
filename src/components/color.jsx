import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#0B1D3A",
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },

  encabezado: {
    width: "100%",
    marginBottom: 12,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  contenido: {
    width: "100%",
    alignItems: "center",
  },

  nombre: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 14,
    letterSpacing: 0.3,
    lineHeight: 28,
  },

  imagen: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderRadius: 12,
    resizeMode: "cover",
    backgroundColor: "#14243D",
  },

  explicacion: {
    width: "100%",
    marginTop: 28,
  },

  tituloExplicacion: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "700",
    marginBottom: 12,
  },

  text: {
    color: "#E2E8F0",
    fontSize: 14,
    lineHeight: 23,
    marginTop: 10,
    letterSpacing: 0.1,
  },

  contenedorFecha: {
    zIndex: 10,
  },

  botonFecha: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 10,
    elevation: 4,
  },

  component: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
  },

  component_button: {
    width: 34,
    height: 34,
    backgroundColor: "#E2E8F0",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  component_meses: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  component_dias: {
    width: 200,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2,
  },

  dia: {
    backgroundColor: "#E8EEF6",
    paddingVertical: 5,
    width: "13%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  flecha: {
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false,
    lineHeight: 22,
  },

  visorImagen: {
    flex: 1,
    backgroundColor: "#101A2B",
  },

  imagenAmpliada: {
    width: "100%",
    flex: 1,
    resizeMode: "contain",
  },

  barraSuperior: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  botonDescargar: {
    padding: 10,
  },

  textoDescargar: {
    fontSize: 28,
  },

  botonCerrar: {
    padding: 10,
  },

  textoCerrar: {
    color: "#FFFFFF",
    fontSize: 32,
  },
});