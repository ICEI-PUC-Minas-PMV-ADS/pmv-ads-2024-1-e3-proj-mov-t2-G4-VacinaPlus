import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, ScrollView, Pressable, } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { useState } from 'react';
import firebase from '../config/firebase';
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
<ScrollView style={styles.scrollView}>
  <View style={styles.container}>
    
      <Image
            style={styles.logo}
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
</ScrollView> 
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff', // Cor de fundo do ScrollView
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: widthPercentageToDP('5%'), // Margem responsiva
    paddingTop: heightPercentageToDP('-1%'), // Padding superior responsivo
  },
  logo: {
    width: widthPercentageToDP('50%'), // Largura responsiva
    height: heightPercentageToDP('20%'), // Altura responsiva
    marginBottom: heightPercentageToDP('5%'), // Margem inferior responsiva
  },
  title: {
    fontSize: widthPercentageToDP('5%'), // Tamanho de fonte responsivo
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP('2%'), // Margem inferior responsiva
  },
  subtitle: {
    fontSize: widthPercentageToDP('3%'), // Tamanho de fonte responsivo
    marginBottom: heightPercentageToDP('5%'), // Margem inferior responsiva
  },
  input: {
    width: widthPercentageToDP('65%'), // Largura responsiva
    height: heightPercentageToDP('5%'), // Altura responsiva
    marginVertical: heightPercentageToDP('1%'), // Margem vertical responsiva
    paddingHorizontal: widthPercentageToDP('3%'), // Padding horizontal responsivo
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttons: {
    width: widthPercentageToDP('65%'), // Largura responsiva
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPercentageToDP('3%'), // Margem superior responsiva
  },
  button: {
    backgroundColor: '#007AFF',
    justifyContent: "center",
    borderRadius: 20,
    alignItems: 'center',
    width: widthPercentageToDP('24%'), // Largura responsiva
    aspectRatio: 2.10,
  },
  buttonText: {
    color: '#fff',
    fontSize: widthPercentageToDP('3%'), // Tamanho de fonte responsivo
  },
});

export default CadastroComponent;
