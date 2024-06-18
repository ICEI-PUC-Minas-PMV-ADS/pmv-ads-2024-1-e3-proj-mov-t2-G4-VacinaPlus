import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button, TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firebase from '../config/firebase';
import { associarVacinasAoUsuario } from '../backend/db_firebase'; // Importa a função específica
import Icon from 'react-native-vector-icons/Ionicons';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1fb6ff',
  },
};

const LoginComponent = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async () => {
    try {
      if (email === '' || password === '') {
        alert("Preencha os campos");
        return;
      }

      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Após o login bem-sucedido, obtenha o ID do usuário atual
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const userId = currentUser.uid;

      // Associe as vacinas ao usuário
      await associarVacinasAoUsuario(userId);

      // Navegue para a tela Home
      navigation.navigate('Home');
    } else {
      alert("Erro ao obter informações do usuário.");
    }
  } catch (error) {
    alert("Erro ao fazer login: " + error.message);
  }
};

const PasswordIcon = ({ showPassword = false, togglePasswordVisibility = () => {}, color, size }) => (
  <Icon
    name={showPassword ? 'eye-off' : 'eye'}
    size={size}
    color={color}
    onPress={togglePasswordVisibility}
  />
);


return (
  <PaperProvider theme={theme}>
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require('../../assets/logo-plus.png')}
      />
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder='Email'
        onChangeText={setEmail}
        theme={{ colors: { primary: '#1fb6ff' } }}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder='Sua senha'
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        theme={{ colors: { primary: '#1fb6ff' } }}
        right={
          <TextInput.Icon
            icon={() => (
              // Adicionando o componente PasswordIcon 
              <PasswordIcon
                showPassword={showPassword}
                togglePasswordVisibility={togglePasswordVisibility}
                color='#1fb6ff' // Cor inserida como propriedade
                size={24} // Tamanho inserido como propriedade
              />
            )}
          />
        }
      />
      <Button
        style={styles.button}
        mode="contained" onPress={handleSignIn}>
        Entrar
      </Button>
      <View style={styles.footer}>
        <Text
          style={styles.createAccount}>
          Não tem uma Conta? <Text style={styles.textLink} onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</Text>
        </Text>
      </View>
    </View>
  </PaperProvider>
);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '25%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1fb6ff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 3,
  },
  Logo: {
    width: 230,
    height: 230,
  },
  button: {
    marginTop: 10,
    paddingVertical: 3,
    borderRadius: 20,
    width: '50%',
    backgroundColor: '#1fb6ff',
  },
  createAccount: {
    fontSize: 17,
    marginVertical: 20,
  },
  textLink: {
    color: '#1fb6ff',
  },
  input: {
    width: '75%',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default LoginComponent;