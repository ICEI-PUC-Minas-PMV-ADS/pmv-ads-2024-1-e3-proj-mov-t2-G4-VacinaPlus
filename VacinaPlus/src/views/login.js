import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginComponent = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    if (email === '' || password === '') {
      alert("Preencha os campos")
      return;
    }
    const data = {
      email,
      password
    }

    console.log(data);
  }

  return (
    <View style={styles.container}>

      <Image
        style={styles.Logo}
        source={require('../../assets/logo-plus.png')}
      />

      <Text
        style={styles.h1}>
        Bem-vindo
      </Text>

      <Text
        style={styles.h3}>
        Faça login para continuar
      </Text>

      <TextInput
        style={styles.input}
        value={email}
        placeholder='Email'
        onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        value={password}
        placeholder='Sua senha'
        onChangeText={setPassword}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />} />

      <Text
        style={styles.esqueceuSenha} onPress={() => navigation.navigate('EsqueceuSenha')}>
        Esqueceu a senha ?
      </Text>

      <Button
        style={styles.button}
        mode="contained" onPress={() => navigation.navigate('Home')}>
        Entrar
      </Button>

      <View style={styles.footer}>
        <Text
          style={styles.CadastreSe}>
          Não tem uma Conta? <Text style={styles.textcolor} onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</Text>
        </Text>
      </View>

    </ View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    paddingTop: 50
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 3,
  },
  Logo: {
    width: 300,
    height: 300,
  },
  button: {
    marginTop: 10,
    paddingVertical: 3,
    borderRadius: 20,
    width: '50%',
    backgroundColor: '#1fb6ff',
  },
  esqueceuSenha: {
    marginRight: 165,
    fontSize: 15,
    color: '#1fb6ff',
    marginBottom: 20
  },
  CadastreSe: {
    fontSize: 15,
    color: '#000',
    marginVertical: 20
  },
  textcolor: {
    color: '#1fb6ff',
  },
  h1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1fb6ff',
    marginBottom: 10
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30
  },
  input: {
    width: '75%',
    height: 45,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  }
});

export default LoginComponent;