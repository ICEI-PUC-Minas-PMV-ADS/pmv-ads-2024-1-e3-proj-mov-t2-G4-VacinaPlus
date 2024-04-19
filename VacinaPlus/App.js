import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainComponent from './src/views/index';
import LoginComponent from './src/views/login';
import SenhaComponent from './src/views/esqueceuSenha';
import CadastroComponent from './src/views/cadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainComponent} />
        <Stack.Screen name="Login" component={LoginComponent} />
        <Stack.Screen name="EsqueceuSenha" component={SenhaComponent} />
        <Stack.Screen name="Cadastro" component={CadastroComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}