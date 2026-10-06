import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1847dd",
    flex: 1,
    alignItems: "center",
  },

  encabezado: {
    textAlign: "right",
  },

  titulo: {
    color: "white",
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
  },

  nombre: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },

  contenido: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },

  imagen: {
    width: "80%",
    height: "60%",
  },

  text: {
    color: "white",
    height: "40%",
    margin: 15,
    fontSize: 15,
    lineHeight: 22,
    textAlign: "justify",
  },
});