import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.informatique-mania.com/wp-content/uploads/2021/02/guest.png' }} style={styles.foto} />
      <Text style={styles.nome}>Usuário 01</Text>
      <Text style={styles.email}>usuario_01@email.com</Text>
      
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  foto: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  nome: { fontSize: 18, fontWeight: 'bold' },
  email: { color: 'gray', marginBottom: 20 },
});