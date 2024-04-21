import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CadastroComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
            style={styles.Logo}
            source={require('../../assets/logo-plus.png')}
        />
      <Text style={styles.title}>Vamos lá!</Text>
      <Text style={styles.subtitle}>Crie uma conta para continuar</Text>

      <TextInput
        style={styles.input}
        placeholder=" 👨🏽‍⚕️ Nome"
      />
      <TextInput
        style={styles.input}
        placeholder=" 💳 CPF"
      />
      <TextInput
        style={styles.input}
        placeholder=" 📬 E-mail"
      />
      <TextInput
        style={styles.input}
        placeholder=" 📆 Data nascimento (dd/mm/aaaa)"
      />
      <TextInput
        style={styles.input}
        placeholder=" 📋 CNIS"
      />
      <TextInput
        style={styles.input}
        placeholder=" 🔑 Senha"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder=" 🔑 Confirmar Senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: -55,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1fb6ff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '60%',
    marginTop:'10%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CadastroComponent;
