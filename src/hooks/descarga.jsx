import { useState } from "react";
import { File, Paths } from "expo-file-system";
import * as FileSystem from "expo-file-system/legacy";
import { ToastAndroid } from "react-native";

export function useDescarga() {
  const [descargando, setDescargando] = useState(false);

  async function descargar(imagen) {
    try {
      setDescargando(true);

      const permiso =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

      if (!permiso.granted) 
        return false;

      const carpeta = 
        permiso.directoryUri;
      const nombre =
        `nasa-${Date.now()}.jpg`;

      const imagenDescargada = await File.downloadFileAsync(
        imagen,
        new File(
          Paths.cache, 
          nombre
        )
      );
      
      const tipoImagen = "image/jpeg";

      const archivoDestino =
        await FileSystem.StorageAccessFramework.createFileAsync(
          carpeta,
          nombre,
          tipoImagen
        );

      const contenido = await FileSystem.readAsStringAsync(
        imagenDescargada.uri,
        { 
          encoding: "base64" 
        }
      );

      await FileSystem.writeAsStringAsync(
        archivoDestino,
        contenido,
        { 
          encoding: "base64" 
        }
      );

      return true;

    } catch (error) {
      console.log("Error al descargar la imagen:", error);
      return false;

    } finally {
      setDescargando(false);
    }
  }

  return {
    descargando,
    descargar,
  };
}