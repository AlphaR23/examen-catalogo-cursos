// ============================================================
// App.js - Formulario de registro (Laboratorio Sección 3)
// useState + TextInput + Switch + validaciones + reto (Edad)
// Autor: Yostin Steven Salazar Chevez
// ============================================================

import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  Pressable,
  StyleSheet,
  Alert
} from 'react-native';

export default function App() {
  // Estados: guardan los valores que cambian mientras se usa la app
  const [nombre, setNombre] = useState('');   // texto del nombre
  const [correo, setCorreo] = useState('');   // texto del correo
  const [edad, setEdad] = useState('');       // RETO: texto de la edad
  const [acepta, setAcepta] = useState(false); // estado del Switch

  // Función de validación: revisa una condición a la vez.
  // Si hay un error muestra un Alert y "return" detiene la función.
  const guardar = () => {
    if (nombre.trim() === '') {
      Alert.alert('Error', 'Debe escribir su nombre');
      return;
    }
    if (correo.trim() === '') {
      Alert.alert('Error', 'Debe escribir su correo');
      return;
    }
    if (!correo.includes('@')) {
      Alert.alert('Error', 'El correo no es válido');
      return;
    }
    if (!acepta) {
      Alert.alert('Error', 'Debe aceptar las condiciones');
      return;
    }
    // RETO: no permitir el registro si la edad está vacía
    if (edad.trim() === '') {
      Alert.alert('Error', 'Debe escribir su edad');
      return;
    }
    // Si todo es correcto, se muestra el nombre y la edad (RETO)
    Alert.alert(
      'Registro correcto',
      `Bienvenido ${nombre}, tienes ${edad} años`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>

      {/* Campo Nombre */}
      <Text style={styles.etiqueta}>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escriba su nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Campo Correo */}
      <Text style={styles.etiqueta}>Correo:</Text>
      <TextInput
        style={styles.input}
        placeholder="ejemplo@correo.com"
        value={correo}
        onChangeText={setCorreo}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* RETO: campo Edad con teclado numérico */}
      <Text style={styles.etiqueta}>Edad:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escriba su edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
      />

      {/* Switch: opción verdadero/falso */}
      <View style={styles.fila}>
        <Text style={styles.textoSwitch}>Acepto las condiciones</Text>
        <Switch value={acepta} onValueChange={setAcepta} />
      </View>

      {/* Botón: onPress ejecuta la función guardar */}
      <Pressable style={styles.boton} onPress={guardar}>
        <Text style={styles.textoBoton}>Registrar</Text>
      </Pressable>
    </View>
  );
}

// ------------------------------------------------------------
// Estilos (RETO: se modificaron fondo, título, botón y bordes)
// ------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#E8F5E9', // modificado: fondo verde claro
  },
  titulo: {
    fontSize: 32,               // modificado: más grande
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#1B5E20',           // modificado: verde oscuro
  },
  etiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#B8C4CE',
    borderRadius: 12,           // modificado: más redondeado
    padding: 12,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  textoSwitch: {
    fontSize: 15,
  },
  boton: {
    backgroundColor: '#2E7D32', // modificado: botón verde
    padding: 14,
    borderRadius: 24,           // modificado: botón tipo píldora
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});