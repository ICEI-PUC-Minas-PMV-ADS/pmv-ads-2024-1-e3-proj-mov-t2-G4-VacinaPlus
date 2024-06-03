import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput, Appbar, Button, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firebase from '../config/firebase';
import BarraNavegacao from '../components/BarraNavegacao';

const { width } = Dimensions.get('window');

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1fb6ff',
  },
};

const PerfilComponent = () => {

  // função para renderizar o nome do usario
  const [usuarioNome, setUsuarioNome] = useState("");
  useEffect(() => {
    const fetchUsuarioNome = async () => {
      const user = firebase.auth().currentUser;
      if (user) {
        const userDoc = await firebase.firestore().collection("Pessoas").doc(user.uid).get();
        if (userDoc.exists) {
          setUsuarioNome(userDoc.data().nome);
        }
      }
    };

    fetchUsuarioNome();
  }, []);

  const navigation = useNavigation();

  // função para buscar os dados do usuario no banco 
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [datanascimento, setDataNascimento] = useState('');
  const [cns, setCns] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = firebase.auth().currentUser.uid;
        const userDoc = await firebase.firestore().collection('Pessoas').doc(userId).get();
        if (userDoc.exists) {
          const userData = userDoc.data();
          setNome(userData.nome);
          setCpf(userData.cpf);
          setEmail(userData.email);
          setDataNascimento(userData.datanascimento);
          setCns(userData.cns);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário: ", error);
        Alert.alert("Erro", "Não foi possível carregar os dados do perfil.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // função para salvar e atualizar os dados do usuario
  const handleSave = async () => {
    try {
      const userId = firebase.auth().currentUser.uid; // Obtém o ID do usuário logado
      await firebase.firestore().collection('Pessoas').doc(userId).update({
        nome,
        cpf,
        email,
        datanascimento,
        cns
      });
      Alert.alert("Sucesso", "Dados do perfil atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar os dados do usuário: ", error);
      Alert.alert("Erro", "Não foi possível atualizar os dados do perfil.");
    }
  };

  // função para deslogout da conta
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('Login'); // Redireciona para a tela de login após o logout
    } catch (error) {
      console.error("Erro ao sair da conta: ", error);
      Alert.alert("Erro", "Não foi possível sair da conta.");
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <Appbar.BackAction style={styles.appbar} onPress={() => navigation.goBack()} />
            <Text style={styles.welcome}>Perfil</Text>
            <TouchableOpacity style={styles.notificationButton}>
              <Icon name="notifications" size={25} color="#00BFFF" onPress={() => navigation.navigate('Notificacao')} />
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{usuarioNome ? usuarioNome : 'Usuário'}</Text>
            <Image style={styles.profileImage} source={require('../../assets/Profile.png')} />

            <TextInput
              style={styles.input}
              label="Nome"
              value={nome}
              onChangeText={setNome}
              theme={{ colors: { primary: '#1fb6ff' } }}
            />
            <TextInput
              style={styles.input}
              label="Data de Nascimento"
              value={datanascimento}
              onChangeText={setDataNascimento}
              keyboardType="numeric"
              theme={{ colors: { primary: '#1fb6ff' } }}
            />
            <TextInput
              style={styles.input}
              label="CPF"
              value={cpf}
              onChangeText={setCpf}
              keyboardType="numeric"
              theme={{ colors: { primary: '#1fb6ff' } }}
            />
            <TextInput
              style={styles.input}
              label="CNS"
              value={cns}
              onChangeText={setCns}
              keyboardType="numeric"
              theme={{ colors: { primary: '#1fb6ff' } }}
            />
            <TextInput
              style={styles.input}
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              theme={{ colors: { primary: '#1fb6ff' } }}
            />
            {/*
            <TextInput
              style={styles.input}
              label="Telefone"
              value={telefone}
              keyboardType="numeric"
              theme={{ colors: { primary: '#1fb6ff' } }}
            />

            <View style={styles.generoContainer}>
              <Text style={styles.generoLabel}>Gênero:</Text>
              <View style={styles.checkboxContainer}>
                <View style={styles.checkbox}>
                  <Checkbox
                    status={genero === 'Homem' ? 'checked' : 'unchecked'}
                    onPress={() => handleGeneroChange('Homem')}
                    color="#1fb6ff"
                  />
                  <Text>Homem</Text>
                </View>
                <View style={styles.checkbox}>
                  <Checkbox
                    status={genero === 'Mulher' ? 'checked' : 'unchecked'}
                    onPress={() => handleGeneroChange('Mulher')}
                    color="#1fb6ff"
                  />
                  <Text>Mulher</Text>
                </View>
              </View>
            </View>

            <TextInput
              style={[styles.input, styles.largeInput]}
              label="Alergias/Restrições"
              value={alergias}
              multiline={true}
              numberOfLines={4}
              theme={{ colors: { primary: '#1fb6ff' } }}
            />
            */}
            <View style={styles.buttonContainer}>
              <Button mode="contained" onPress={handleLogout} style={styles.button}>Sair</Button>
              <Button mode="contained" onPress={handleSave} style={styles.button}>Salvar</Button>
            </View>
          </View>
        </ScrollView>
        <BarraNavegacao />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    marginBottom: 70,
  },
  header: {
    width: width,
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  appbar: {
    size: 22,
    marginLeft: -5,
  },
  welcome: {
    fontSize: 22,
    textAlign: 'left',
    margin: 10,
    marginLeft: -3,
  },
  notificationButton: {
    padding: 10,
    marginLeft: 'auto',
  },
  section: {
    padding: 15,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    color: '#8792A1',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  input: {
    width: width * 0.85,
    backgroundColor: '#fff',
    borderColor: '#D4D4D4',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    
  },
  largeInput: {
    height: 100,
  },
  generoContainer: {
    width: width * 0.9,
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#f0f0f0',
    borderWidth: 1,
  },
  generoLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    marginTop: 10,
  },
  button: {
    flex: 1,
    margin: 10,
    borderRadius: 17,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PerfilComponent;
