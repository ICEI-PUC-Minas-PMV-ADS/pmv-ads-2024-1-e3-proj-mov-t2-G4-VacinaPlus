import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BarraNavegacao from '../components/BarraNavegacao';
import firebase from '../config/firebase';

const { width, height } = Dimensions.get('window');

const TelaHome = () => {
  const navigation = useNavigation();
  const [expandedCard, setExpandedCard] = useState(null);
  const [usuarioNome, setUsuarioNome] = useState("");

  const toggleExpandedCard = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

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
        <View style={[styles.sectionCard, styles.sectionCardWithImageRight]}>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Vacinação aberta, a partir desta sexta-feira (19)</Text>
            <Text style={styles.cardContent} numberOfLines={expandedCard === 1 ? undefined : 3}>
              Para evitar a perda de imunizantes e garantir a vacinação da população, a partir desta sexta-feira (19), a Prefeitura de Belo Horizonte vai concentrar a oferta das vacinas. A doses contra dengue serão ofertadas em 13 postos de saúde e contra a covid-19 em 30 unidades. Os endereços dos locais que vão ofertar os imunizantes em cada regional, por tipo, podem ser verificados on-line.
            </Text>
            <TouchableOpacity onPress={() => toggleExpandedCard(1)}>
              <Text style={styles.readMore}>{expandedCard === 1 ? 'Ler menos' : 'Ler mais'}</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../../assets/vacinacovid.jpg')} style={styles.imageRight} />
        </View>
        <View style={[styles.sectionCard, styles.sectionCardWithImageRight]}>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Vacinação aberta, a partir desta sexta-feira (19)</Text>
            <Text style={styles.cardContent} numberOfLines={expandedCard === 2 ? undefined : 3}>
              Para evitar a perda de imunizantes e garantir a vacinação da população, a partir desta sexta-feira (19), a Prefeitura de Belo Horizonte vai concentrar a oferta das vacinas. A doses contra dengue serão ofertadas em 13 postos de saúde e contra a covid-19 em 30 unidades. Os endereços dos locais que vão ofertar os imunizantes em cada regional, por tipo, podem ser verificados on-line.
            </Text>
            <TouchableOpacity onPress={() => toggleExpandedCard(2)}>
              <Text style={styles.readMore}>{expandedCard === 2 ? 'Ler menos' : 'Ler mais'}</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../../assets/vacinacovid.jpg')} style={styles.imageRight} />
        </View>
        <View style={[styles.sectionCard, styles.sectionCardWithImageRight]}>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Vacinação aberta, a partir desta sexta-feira (19)</Text>
            <Text style={styles.cardContent} numberOfLines={expandedCard === 3 ? undefined : 3}>
              Para evitar a perda de imunizantes e garantir a vacinação da população, a partir desta sexta-feira (19), a Prefeitura de Belo Horizonte vai concentrar a oferta das vacinas. A doses contra dengue serão ofertadas em 13 postos de saúde e contra a covid-19 em 30 unidades. Os endereços dos locais que vão ofertar os imunizantes em cada regional, por tipo, podem ser verificados on-line.
            </Text>
            <TouchableOpacity onPress={() => toggleExpandedCard(3)}>
              <Text style={styles.readMore}>{expandedCard === 3 ? 'Ler menos' : 'Ler mais'}</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../../assets/vacinacovid.jpg')} style={styles.imageRight} />
        </View>
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
  },
  section: {
    padding: 20,
    alignItems: 'center',
  },
  sectionCard: {
    flexDirection: 'row',
    borderRadius: 10, // Bordas mais arredondadas
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    padding: 15, // Mais espaçamento interno
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: 18, // Aumentado para mais destaque
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14, // Levemente maior
    textAlign: 'justify',
    lineHeight: 22, // Melhor espaçamento entre linhas
  },
  sectionCardWithImageRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageRight: {
    width: width / 3,
    height: height / 7.5,
    resizeMode: 'cover', // Melhor preenchimento
    alignSelf: 'flex-start',
    marginLeft: 15, // Mais espaçamento à esquerda
    borderRadius: 8, // Bordas arredondadas
  },
  textContainer: {
    flex: 1,
  },
  sectionText: {
    marginTop: 10,
  },
  readMore: {
    color: '#1e90ff', // Azul mais vibrante
    fontSize: 15, // Levemente maior
    marginTop: 10, // Mais espaçamento superior
  },
});

export default TelaHome;
