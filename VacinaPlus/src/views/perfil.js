import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, Alert, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput, Appbar, Button, Checkbox, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import BarraNavegacao from '../components/BarraNavegacao';
import firebase from '../config/firebase';

const { width, height } = Dimensions.get('window');

const PerfilComponent = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const handleSave = async () => {
      try {
        await firebase.firestore('userData', JSON.stringify(user));
        Alert.alert('Perfil Salvo', 'As alterações foram salvas com sucesso!');
      } catch (error) {
        console.error('Erro ao salvar perfil:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao salvar as alterações.');
      }
      Alert.alert('Perfil Salvo', 'As alterações foram salvas com sucesso!');
    };

    handleSave();
  }, []);

  // função para buscar os dados do usuario no banco 
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [datanascimento, setDataNascimento] = useState('');
  const [cns, setCns] = useState('');
  const [telefone, setTelefone] = useState('');
  const [genero, setGenero] = useState('');
  const [alergias, setAlergias] = useState('');
  
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
          setTelefone(userData.telefone || '');
          setGenero(userData.genero || '');
          setAlergias(userData.alergias || '');
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
      const userId = firebase.auth().currentUser.uid; 
      await firebase.firestore().collection('Pessoas').doc(userId).update({
        nome,
        cpf,
        email,
        datanascimento,
        cns,
        telefone,
        genero,
        alergias
      });
      Alert.alert("Sucesso", "Dados do perfil atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar os dados do usuário: ", error);
      Alert.alert("Erro", "Não foi possível atualizar os dados do perfil.");
    }
  };

  const handlePressVacinas = () => {
    console.log('Vacinas pressionado');
  };

  const handlePressAgenda = () => {
    console.log('Agenda pressionado');
  };

  const handlePressPerfil = () => {
    console.log('Perfil pressionado');
  };

  const modalizeRef = useRef(null);
  function onOpen() {
    modalizeRef.current?.open();
  }
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <Appbar.BackAction style={styles.appbar} onPress={() => navigation.goBack()} />
            <Text style={styles.welcome}>Meu Perfil</Text>
            <TouchableOpacity style={styles.notificationButton}>
              <Icon name="notifications" size={25} color="#00BFFF" onPress={() => navigation.navigate('Notificacao')} />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.Perfil}
            placeholder="Nome"
            onChangeText={text => setNome(text)}
            value={nome}
          />
          <TextInput
            style={styles.Perfil}
            placeholder="Data nascimento (dd/mm/aaaa)"
            onChangeText={text => setDataNascimento(text)}
            keyboardType="numeric"
            value={datanascimento}
          />
          <TextInput
            style={styles.Perfil}
            placeholder="CPF"
            onChangeText={text => setCpf(text)}
            keyboardType="numeric"
            value={cpf}
          />
          <TextInput
            style={styles.Perfil}
            placeholder="CNS"
            onChangeText={text => setCnis(text)}
            keyboardType="numeric"
            value={cnis}
          />
          <TextInput
            style={styles.Perfil}
            placeholder="E-mail"
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            value={email}
          />
          <TextInput
            style={styles.Perfil}
            placeholder="Telefone"
            onChangeText={text => setTelefone(text)}
            keyboardType="numeric"
            value={telefone}
          />
          <TextInput
            style={styles.Perfil}
            placeholder="Gênero"
            onChangeText={text => setGenero(text)}
            value={genero}
          />
          <TextInput
            style={styles.Perfil}
            placeholder="País"
            onChangeText={text => setPais(text)}
            value={pais}
          />

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
            <TextInput
              style={styles.input}
              label="Telefone"
              value={telefone}
              onChangeText={setTelefone}
              keyboardType="numeric"
              theme={{ colors: { primary: '#1fb6ff' } }}
            />
            <View style={styles.generoContainer}>
              <Text style={styles.generoLabel}>Gênero:</Text>
              <View style={styles.checkboxContainer}>
                <View style={styles.checkbox}>
                  <Checkbox
                    status={genero === 'Homem' ? 'checked' : 'unchecked'}
                    onPress={() => setGenero('Homem')}
                    color="#1fb6ff"
                  />
                  <Text style={styles.checkboxLabel}>Homem</Text>
                </View>
                <View style={styles.checkbox}>
                  <Checkbox
                    status={genero === 'Mulher' ? 'checked' : 'unchecked'}
                    onPress={() => setGenero('Mulher')}
                    color="#1fb6ff"
                  />
                  <Text style={styles.checkboxLabel}>Mulher</Text>
                </View>
              </View>
            </View>
            <TextInput
              style={[styles.input, styles.largeInput]}
              label="Alergias/Restrições"
              value={alergias}
              onChangeText={setAlergias}
              multiline={true}
              numberOfLines={4}
              theme={{ colors: { primary: '#1fb6ff' } }}
            />
            <View style={styles.buttonContainer}>
              <Button mode="contained" onPress={handleLogout} style={styles.button}>Sair</Button>
              <Button mode="contained" onPress={handleSave} style={styles.button}>Salvar</Button>
            </View>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Lorem Ipsum is simply dummy text of the printing and popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMakerincluding
                    versions of Lorem Ipsum.</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Ok</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Política de Privacidade</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Image
            style={styles.image2}
            source={require('../../assets/imgteste.jpeg')}
          />
        </View>
        <View>
          <Image
            style={styles.image2}
            source={require('../../assets/imgteste.jpeg')}
          />
        </View>
      </ScrollView>
      {/* Barra de Navegação com botões*/}
      <BarraNavegacao />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
    backgroundColor: '#f5f5f5', // Background mais suave
  },
  scrollView: {
      marginBottom: 60,
  },
  header: {
    width: width,
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#fff', // Fundo branco para o header
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Linha sutil no fundo
  },
  appbar: {
    size: 22,
    marginLeft: -5
  },
  welcome: {
    fontSize: 22,
    textAlign: 'left',
    margin: 10,
    marginLeft:-3
  },
  space: {
    borderColor: '#343F4B',
    borderWidth: 2,
    width: '95%',
    height: 222,
    borderRadius: 10,
    overflow: 'hidden'
  },
  notificationButton: {
    padding: 10,
    marginLeft: 'auto',
  },
  section: {
    marginLeft: 15,
    marginTop: -15,
    alignItems: 'left',
  },
  text01: {
    fontSize: 15,
    color: '#1fb6ff',
    marginBottom: 20
  },
  text02: {
    fontSize: 24,
    color: '#8792A1',
    marginTop: 35,
    marginBottom: 5
  },
  Perfil: {
    width: 300,
    height: 40,
    marginHorizontal: 10,
  },
  Meu: {
    width: 350,
    height: 38,
    marginHorizontal: 9,
    marginVertical: 5,
  },
  image: {
    width: 150,
    height: 150,
    marginHorizontal: 85,
    marginVertical: 20,
  },
  input: {
    width: width * 0.85,
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 7,
    borderColor: '#d4d4d4',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  largeInput: {
    height: 110,
  },
  generoContainer: {
    width: width * 0.85,
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 7,
    borderColor: '#d4d4d4',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  generoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    backgroundColor: '#f9f9f9',
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '97%',
    marginTop: 10,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PerfilComponent;