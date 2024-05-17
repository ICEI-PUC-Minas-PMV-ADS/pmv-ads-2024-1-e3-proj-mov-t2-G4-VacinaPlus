import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, Alert, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput, Appbar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import BarraNavegacao from '../components/BarraNavegacao';
import firebase from '../config/firebase';

const { width, height } = Dimensions.get('window');

const PerfilComponent = () => {

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

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [datanascimento, setDataNascimento] = useState("");
  const [cnis, setCnis] = useState("");
  const [telefone, setTelefone] = useState("");
  const [genero, setGenero] = useState("");
  const [pais, setPais] = useState("");
  const navigation = useNavigation();

  const [text, setText] = React.useState("");
  const handlePressInicio = () => {
    console.log('Início pressionado');
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
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header*/}
        <View style={styles.header}>
          <Appbar.BackAction style={styles.appbar} onPress={() => navigation.goBack()} />
          <Text style={styles.welcome}>Perfil</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications" size={25} color="#00BFFF" onPress={() => navigation.navigate('Notificacao')} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.text02}>
            Meu Perfil
          </Text>

          <View>
            <Image
              style={styles.image}
              source={require('../../assets/Profile.png')}
            />
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

          <SafeAreaView style={styles.container1}>
            <View style={styles.fixToText}>
              <Button mode="contained" onPress={() => Alert.alert('Cancelado')}>
                Cancelar
              </Button>
              <Button mode="contained" onPress={() => Alert.alert('Salvo')}>
                Salvar
              </Button>
            </View>
          </SafeAreaView>
        </View>
        <View>
          <TextInput
            style={styles.Meu}
            placeholder="Cartão Nacional de Saúde"
            onChangeText={text => setCnis(text)}
            value={cnis}
          />
          <TextInput
            style={styles.Meu}
            placeholder="Alergias/Restrições"
            onChangeText={text => setCnis(text)}
            value={cnis}
          />
          <TextInput
            style={styles.Meu}
            placeholder="Alterar Senha"
            onChangeText={text => setCnis(text)}
            value={cnis}
          />
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
              <Text style={styles.textStyle}>Termos e Condições de Uso</Text>
            </Pressable>
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
    backgroundColor: '#fff',
  },
  space: {
    borderColor: '#343F4B',
    borderWidth: 2,
    width: '95%',
    height: 222,
    borderRadius: 10,
    overflow: 'hidden'
  },
  scrollView: {
    marginBottom: 60,
  },
  appbar: {
    size: 22,
    marginLeft: -5
  },
  header: {
    width: width,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  welcome: {
    fontSize: 22,
    textAlign: 'left',
    margin: 10,
    marginLeft: -3
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
    marginTop: 11,
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
  image2: {
    width: 360,
    height: 70,
    marginHorizontal: 10,
    marginVertical: 3,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 20,
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