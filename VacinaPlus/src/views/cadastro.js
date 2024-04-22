import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import firebase from '../../firebase';
import { useNavigation } from '@react-navigation/native';

const CadastroComponent = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [datanascimento, setDataNascimento] = useState("");
  const [cnis, setCnis] = useState("");
  const [senha, setSenha] = useState("");

  const handle = async (e) => {
    e.preventDefault();

    const novoUsuarioRef = await firebase.firestore().collection("Pessoas").add({
      nome: nome,
      cpf: cpf,
      email: email,
      datanascimento: datanascimento,
      cnis: cnis,
      senha: senha
    })

    alert("Usuário criado com sucesso! ID: " + novoUsuarioRef.id)
  }

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
        onChangeText={text => setNome(text)}
        value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder=" 💳 CPF"
        onChangeText={text => setCpf(text)}
        value={cpf}
      />
      <TextInput
        style={styles.input}
        placeholder=" 📬 E-mail"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder=" 📆 Data nascimento (dd/mm/aaaa)"
        onChangeText={text => setDataNascimento(text)}
        value={datanascimento}
      />
      <TextInput
        style={styles.input}
        placeholder=" 📋 CNIS"
        onChangeText={text => setCnis(text)}
        value={cnis}
      />
      <TextInput
        style={styles.input}
        placeholder=" 🔑 Senha"
        secureTextEntry={true}
        onChangeText={text => setSenha(text)}
        value={senha}
      />
      <TextInput
        style={styles.input}
        placeholder=" 🔑 Confirmar Senha"
        secureTextEntry={true}
      />

      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={handle}>
          <Text style={styles.buttonText}>Criar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Usuarios')}>
          <Text style={styles.buttonText}>Ver lista</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    paddingTop: 50
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
    width: '65%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttons: {
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    justifyContent: "center",
    borderRadius: 20,
    alignItems: 'center',
    width: "35%",
    aspectRatio: 2.10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});

export default CadastroComponent;
