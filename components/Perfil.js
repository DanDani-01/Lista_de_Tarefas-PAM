import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://pt.quizur.com/_image?href=https:%2F%2Fimg.quizur.com%2Ff%2Fimg63127e656ae279.74897924.jpeg%3FlastEdited%3D1662156395&w=600&h=600&f=webp' }} style={styles.foto} />
      <Text style={styles.nome}>Arthur Mattenhauer</Text>
      <Text style={styles.email}>arthur_games@email.com</Text>
      
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