import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginComponent = () => {

  const navigation = useNavigation();

  const [text, setText] = React.useState("");

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
            mode="outlined"
            label="Email"
            value={text}
            onChangeText={text => setText(text)} />
        <TextInput
            style={styles.input}
            mode="outlined"
            label="Senha"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />} />
        
        <Text
            style={styles.text01} onPress={() => navigation.navigate('EsqueceuSenha')}>
                Esqueceu a senha ?
        </Text>

        <Button 
            style={styles.button}
            mode="contained"  onPress={() => console.log('Pressed')}>
                Entrar
        </Button>

        <Text
            style={styles.text02}>
                Não tem uma Conta? <Text style={styles.textcolor} onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</Text>
        </Text>

    </ View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  Logo: {
    width: 300,
    height: 300,
  },
  button: {
    paddingVertical: 3,
    borderRadius: 5,
    width: 175,
    backgroundColor: '#1fb6ff',
  },
  text01: {
    fontSize: 15,
    color: '#1fb6ff',
    marginBottom: 20
  },
  text02: {
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
    width: 300,
    height: 57,
    marginVertical: 10,
    borderRadius: 3,
  }
});

export default LoginComponent;