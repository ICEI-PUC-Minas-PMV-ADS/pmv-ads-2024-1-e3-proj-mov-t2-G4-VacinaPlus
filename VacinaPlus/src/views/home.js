import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BarraNavegacao from '../components/BarraNavegacao';
import firebase from '../config/firebase';
import Noticias from '../components/Noticiais';

const { width, height } = Dimensions.get('window');

const TelaHome = () => {
  const navigation = useNavigation();
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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../../assets/logo-plus.png')} style={styles.logo} />
          <Text style={styles.welcome}>Olá, {usuarioNome ? usuarioNome : 'Usuário'}</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications" size={25} color="#00BFFF" onPress={() => navigation.navigate('Notificacao')} />
          </TouchableOpacity>
        </View>
        {/* Seção de Imagens */}
        <View style={styles.swiperContainer}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={4}
          >
            <View style={styles.slide}>
              <Image source={require('../../assets/vacina.jpg')} style={styles.image} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../../assets/vacina.jpg')} style={styles.image} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../../assets/vacina.jpg')} style={styles.image} />
            </View>
          </Swiper>
        </View>
        {/* Seção de Notícias */}
        <Noticias/>
      </ScrollView>
      {/* Barra de Navegação com botões */}
      <BarraNavegacao />
    </View>
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
    marginTop: 35, // Reduzido para diminuir o espaçamento
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#fff', // Fundo branco para o header
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Linha sutil no fundo
  },
  logo: {
    width: 65, 
    height: 65, 
    marginRight: 5,
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
  image: {
    width: '95%', // Ocupa toda a largura do dispositivo
    height: '85%', // Ocupa toda a altura do contêiner
    resizeMode: 'cover', // Cobre todo o espaço do contêiner
    borderRadius: 8,
  },
  swiperContainer: {
    height: height / 4, // Ajuste a altura do Swiper conforme necessário
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default TelaHome;
