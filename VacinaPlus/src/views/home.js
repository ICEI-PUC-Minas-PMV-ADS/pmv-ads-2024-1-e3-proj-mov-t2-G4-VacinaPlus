import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BarraNavegacao from '../components/BarraNavegacao';
const { width, height } = Dimensions.get('window');

const TelaHome = () => {
  
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

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        <View style={styles.header}>
          <Image source={require('../../assets/logo-plus.png')} style={styles.logo} />
          <Text style={styles.welcome}>Olá, Usuário!</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications" size={25} color="#00BFFF" />
          </TouchableOpacity>
        </View>
        
        {/* Seção de Imagens/Anúncios */}
        <View style={styles.section}>
          <Image source={{ uri: '../../assets/.jpg' }} style={styles.image} />
          <Text style={styles.sectionText}>Anúncios</Text>
        </View>
        
        
      </ScrollView>
      
      {/* Barra de Navegação com botões*/}
       <BarraNavegacao/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginBottom: 60,
  },
  header: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  logo: {
    width: 50, 
    height: 50, 
    marginRight: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  notificationButton: {
    padding: 10,
    marginLeft: 'auto', 
  },
  section: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: width - 40, 
    height: height / 4, 
    resizeMode: 'contain',
  },
  sectionText: {
    marginTop: 10,
  }
});

export default TelaHome;
