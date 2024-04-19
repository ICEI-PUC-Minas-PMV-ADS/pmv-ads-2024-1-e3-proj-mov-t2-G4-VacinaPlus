import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const TelaHome = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Olá, Nome Sobrenome</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Imagens/Avisos</Text>
        <View style={styles.imageGrid}>
          {/* ícone ou imagens aqui */}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notícias</Text>
        <View style={styles.newsList}>
          {/*  itens de notícias aqui */}
        </View>
      </View>
      <View style={styles.navBar}>
        {/*ícones de navegação aqui */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  section: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // Adicione mais estilos 
  },
  newsList: {
    //  estilos para lista de notícias
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default TelaHome;
