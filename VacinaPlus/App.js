import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainComponent from './src/views/index';
import LoginComponent from './src/views/login';
import SenhaComponent from './src/views/esqueceuSenha';
import VacinaComponent from './src/views/vacina';
import CadastroComponent from './src/views/cadastro';
import TelaHome from './src/views/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Vacina" component={VacinaComponent} options={{ title: ''}}/>
        <Stack.Screen name="Home" component={TelaHome} options={{ title: ''}}/>
        <Stack.Screen name="Main" component={MainComponent} options={{ title: ''}}/>
        <Stack.Screen name="Login" component={LoginComponent} options={{ title: ''}}/>
        <Stack.Screen name="Cadastro" component={CadastroComponent} options={{ title: ''}}/>
        <Stack.Screen name="EsqueceuSenha" component={SenhaComponent} options={{ title: ''}}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}