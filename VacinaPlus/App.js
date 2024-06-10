import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainComponent from './src/views/index';
import { NotificationProvider } from './src/context/NotificationContext';
import LoginComponent from './src/views/login';
import CadastroComponent from './src/views/cadastro';
import TelaHome from './src/views/home';
import VacinaComponent from './src/views/vacina';
import PerfilComponent from './src/views/perfil';
import UsuariosComponent from './src/views/usuarios';
import MyCalendarAdmin from './src/views/calendario';
import NotComponent from './src/views/notificacao';
import ConfigNotComponent from './src/views/configNotificacao';
import inserirDadosVacinas from './src/backend/db_firebase'; // Importe a função de inserção de dados

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    // Chama a função de inserção de dados quando o componente for montado
    inserirDadosVacinas();
  }, []); // O array vazio como segundo argumento garante que a função seja chamada apenas uma vez, quando o componente for montado

  return (
  <NotificationProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Login" component={LoginComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Cadastro" component={CadastroComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Home" component={TelaHome} options={{header:() => null}}/>
        <Stack.Screen name="Vacina" component={VacinaComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Perfil" component={PerfilComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Usuarios" component={UsuariosComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Calendario" component={MyCalendarAdmin} options={{ header:() => null}}/>
        <Stack.Screen name="Notificacao" component={NotComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Configuracoes" component={ConfigNotComponent} options={{ header:() => null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  </NotificationProvider>
  );
}
