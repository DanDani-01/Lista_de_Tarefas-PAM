import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (texto.trim() === '') return;
    
    const novaTarefa = {
      id: Date.now().toString(),
      texto: texto,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTexto('');
  };

  const removerTarefa = (id) => {
    const listaFiltrada = tarefas.filter((item) => item.id !== id);
    setTarefas(listaFiltrada);
  };

  // Função para marcar/desmarcar como concluída (Bônus)
  const alternarConcluida = (id) => {
    const listaAtualizada = tarefas.map((item) => {
      if (item.id === id) {
        return { ...item, concluida: !item.concluida };
      }
      return item;
    });
    setTarefas(listaAtualizada);
  };

  return (
    <View style={styles.container}>
      {/* Botão para ir à tela de Perfil */}
      <TouchableOpacity
        style={styles.btnPerfil}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.btnPerfilTexto}>Ir para o Perfil 👤</Text>
      </TouchableOpacity>

      {/* Título Principal */}
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      {/* Contador de Tarefas (Bônus) */}
      <Text style={styles.contador}>Total de tarefas: {tarefas.length}</Text>

      {/* Campo de Texto e Botão de Adicionar */}
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          value={texto}
          onChangeText={setTexto}
        />
        <TouchableOpacity style={styles.btnAdicionar} onPress={adicionarTarefa}>
          <Text style={styles.btnAdicionarTexto}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Tarefas com FlatList */}
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemTarefa}>
            <TouchableOpacity 
              style={{ flex: 1 }} 
              onPress={() => alternarConcluida(item.id)}
            >
              <Text
                style={[
                  styles.textoTarefa,
                  item.concluida && styles.textoConcluido,
                ]}
              >
                {item.concluida ? '✓ ' : '○ '}
                {item.texto}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnRemover}
              onPress={() => removerTarefa(item.id)}
            >
              <Text style={styles.btnRemoverTexto}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>Nenhuma tarefa adicionada ainda.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  btnPerfil: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  btnPerfilTexto: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  contador: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  inputArea: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 45,
    backgroundColor: '#FFF',
  },
  btnAdicionar: {
    backgroundColor: '#ffdd00',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderRadius: 8,
    marginLeft: 10,
  },
  btnAdicionarTexto: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemTarefa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#606060',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  textoTarefa: {
    fontSize: 16,
    color: '#f0eded',
  },
  textoConcluido: {
    color: '#09ff00',
  },
  btnRemover: {
    backgroundColor: '#d20a00',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  btnRemoverTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  listaVazia: {
    textAlign: 'center',
    color: '#999',
    marginTop: 30,
  },
});