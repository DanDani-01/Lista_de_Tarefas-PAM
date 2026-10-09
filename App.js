import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen.js';
import Perfil from './components/Perfil.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Lista de Tarefas' }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={Perfil} 
          options={{ title: 'Perfil do Usuário' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}