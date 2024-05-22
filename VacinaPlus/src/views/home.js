import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
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
              <Icon name="notifications" size={25} color="#00BFFF" onPress={() => navigation.navigate('Notificacao')}/>                        
            </TouchableOpacity>
        </View>
        {/* Seção de Imagens */}
        <View style={styles.section}>
          <Image source={require('../../assets/vacina.jpg')} style={styles.imageBanner} />
        </View>
        {/* Seção de Notícias */}
        <View style={[styles.sectionCard, styles.sectionCardWithImageRight]}>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Título do meu card</Text>
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
            <Text style={styles.cardTitle}>Título do meu card</Text>
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
            <Text style={styles.cardTitle}>Título do meu card</Text>
            <Text style={styles.cardContent} numberOfLines={expandedCard === 2 ? undefined : 3}>
              A Prefeitura de Belo Horizonte ampliou os locais de vacinação contra a gripe e covid-19 nas regionais Nordeste e Barreiro. A aplicação das doses na Universo - Campus Belo Horizonte, que fica na Rua Paru, 762 - Nova Floresta, foi iniciada nesta quarta-feira (10). O local vacina o público em dias úteis, das 9h às 12h e das 13h às 16h. Já a partir desta quinta-feira (11) as vacinas serão aplicadas no Via Shopping, na Avenida Afonso Vaz de Melo, 640 - Barreiro, também de segunda a sexta-feira, das 11h às 19h30. Cabe destacar que nesses locais as doses serão administradas exclusivamente no público adulto.
            </Text>
            <TouchableOpacity onPress={() => toggleExpandedCard(2)}>
              <Text style={styles.readMore}>{expandedCard === 2 ? 'Ler menos' : 'Ler mais'}</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../../assets/kidvacina.jpg')} style={styles.imageRight} />
        </View>
      </ScrollView>
      {/* Barra de Navegação com botões */}
      <BarraNavegacao/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Background mais suave
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
    backgroundColor: '#fff', // Fundo branco para o header
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Linha sutil no fundo
  },
  logo: {
    width: 60, 
    height: 60, 
    marginRight: 10,
  },
  welcome: {
    fontSize: 22,
    textAlign: 'left',
    margin: 10,
    marginLeft:-3
  },
  notificationButton: {
    padding: 10,
    marginLeft: 'auto', 
  },
  imageBanner: {
    width: width - 40, 
    height: height / 4, 
    resizeMode: 'contain', 
    borderRadius: 10, // Adicionado borda arredondada
    marginBottom: 10, // Espaçamento inferior
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
