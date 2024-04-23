import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainComponent from './src/views/index';
import LoginComponent from './src/views/login';
import CadastroComponent from './src/views/cadastro';
import SenhaComponent from './src/views/esqueceuSenha';
import TelaHome from './src/views/home';
import VacinaComponent from './src/views/vacina';
import PerfilComponent from './src/views/perfil';
import UsuariosComponent from './src/views/usuarios';
import MyCalendarAdmin from './src/views/calendario';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Login" component={LoginComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Cadastro" component={CadastroComponent} options={{ header:() => null}}/>
        <Stack.Screen name="EsqueceuSenha" component={SenhaComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Home" component={TelaHome} options={{header:() => null}}/>
        <Stack.Screen name="Vacina" component={VacinaComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Perfil" component={PerfilComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Usuarios" component={UsuariosComponent} options={{ header:() => null}}/>
        <Stack.Screen name="Calendario" component={MyCalendarAdmin} options={{ header:() => null}}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}