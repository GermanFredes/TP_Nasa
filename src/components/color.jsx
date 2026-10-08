import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#0B1D3A", // Azul oscuro/espacial de mejor contraste
  },
  container: {
    backgroundColor: "#0B1D3A",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },
  headerRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  contenido: {
    width: "100%",
    alignItems: "center",
  },
  nombre: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 15,
  },
  imagen: {
    width: width - 40,
    height: (width - 40) * 0.75,
    borderRadius: 8,
    resizeMode: "cover",
  },
  text: {
    color: "#E2E8F0",
    fontSize: 15,
    lineHeight: 24,
    textAlign: "justify",
    marginTop: 20,
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#E2E8F0",
    borderRadius: 4,
  },
  component_meses: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  component_dias: {
    width: 210,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2,
  },
  dia: {
    backgroundColor: "#EDF2F7",
    paddingVertical: 6,
    width: "13%",
    textAlign: "center",
    borderRadius: 3,
    fontSize: 12,
  },
});