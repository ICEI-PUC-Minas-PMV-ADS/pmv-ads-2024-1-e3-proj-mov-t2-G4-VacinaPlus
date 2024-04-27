import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BarraNavegacao from '../components/BarraNavegacao';

const { width, height } = Dimensions.get('window');

const TelaHome = () => {
  
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
        {/* Seção de Imagens */}
        <View style={styles.section}>
          <Image source={require('../../assets/vacina.jpg')} style={styles.image} />
          <Text style={styles.sectionText}></Text>
        </View>
        {/* Seção de Notícias */}
        <View style={styles.section}>
            <Image source={require('../../assets/vacinacovid.jpg')} style={styles.image} />
            <Text style={{ textAlign: 'justify' }}>Para evitar a perda de imunizantes e garantir a vacinação da população, a partir desta sexta-feira (19), a Prefeitura de Belo Horizonte vai concentrar a oferta das vacinas. A doses contra dengue serão ofertadas em 13 postos de saúde e contra a covid-19 em 30 unidades. Os endereços dos locais que vão ofertar os imunizantes em cada regional, por tipo, podem ser verificados on-line.</Text>
        </View>
        <View style={styles.section}>
          <Image source={require('../../assets/kidvacina.jpg')} style={styles.image} />
            <Text style={{ textAlign: 'justify' }}>
              A Prefeitura de Belo Horizonte ampliou os locais de vacinação contra a gripe e covid-19 nas regionais Nordeste e Barreiro. A aplicação das doses na Universo - Campus Belo Horizonte, que fica na Rua Paru, 762 - Nova Floresta, foi iniciada nesta quarta-feira (10). O local vacina o público em dias úteis, das 9h às 12h e das 13h às 16h. Já a partir desta quinta-feira (11) as vacinas serão aplicadas no Via Shopping, na Avenida Afonso Vaz de Melo, 640 - Barreiro, também de segunda a sexta-feira, das 11h às 19h30. Cabe destacar que nesses locais as doses serão administradas exclusivamente no público adulto.
            </Text>
        </View>
      </ScrollView>
      {/* Barra de Navegação com botões*/}
      <BarraNavegacao/>
    </View>
  );
}

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
