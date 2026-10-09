import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (texto === '') {
      return;
    }
    const novaTarefa = {
      id: Math.random().toString(),
      texto: texto,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTexto('');
  };

  const removerTarefa = (idParaRemover) => {
    const listaAtualizada = tarefas.filter((item) => item.id !== idParaRemover);
    setTarefas(listaAtualizada);
  };

  const alternarConcluida = (idParaAlternar) => {
    const listaAtualizada = tarefas.map((item) => {
      if (item.id === idParaAlternar) {
        return { ...item, concluida: !item.concluida };
      }
      return item;
    });
    setTarefas(listaAtualizada);
  };

  const tarefasPendentes = tarefas.filter((item) => item.concluida === false).length;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.textoPerfil}>Ir para o Perfil</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Minhas Tarefas: </Text>
      {tarefasPendentes === 0 && (
        <Text style={styles.contador}>Todas as tarefas foram concluídas</Text>
      )}
      {tarefasPendentes === 1 && (
        <Text style={styles.contador}>Faltam fazer: {tarefasPendentes} tarefa</Text>
      )}
      {tarefasPendentes > 1 && (
        <Text style={styles.contador}>Faltam fazer: {tarefasPendentes} tarefas</Text>
      )}
      
      <View style={styles.areaInput}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          value={texto}
          onChangeText={(valor) => setTexto(valor)}
        />
        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
          <Text style={styles.textoBotaoAdicionar}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View 
            style={[
              styles.itemDaLista, 
              item.concluida && styles.itemConcluido
            ]}
          >

            <TouchableOpacity 
              style={{ flex: 1 }} 
              onPress={() => alternarConcluida(item.id)}
            >
              <Text 
                style={[
                  styles.textoTarefa, 
                  item.concluida && styles.textoVerde
                ]}
              >
                {item.concluida ? '✓ ' : '○ '}
                {item.texto}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.botaoExcluir} 
              onPress={() => removerTarefa(item.id)}
            >
              <Text style={styles.textoExcluir}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
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
  textoPerfil: {
    alignSelf: 'flex-start',
    color: 'blue',
    fontSize: 16,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contador: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  areaInput: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    height: 50,
  },
  botaoAdicionar: {
    backgroundColor: '#039900',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 3,
    marginLeft: 5,
  },
  textoBotaoAdicionar: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemDaLista: {
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#a8a8a8',
  },
  itemConcluido: {
    backgroundColor: '#FFFFFF',
    borderColor: '#28A745',
  },
  textoTarefa: {
    fontSize: 16,
    color: '#000',
  },
  textoVerde: {
    color: '#28A745',
  },
  botaoExcluir: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  textoExcluir: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});