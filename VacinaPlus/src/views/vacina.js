import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { recuperarVacinas } from '../backend/db_firebase';
import BarraNavegacao from '../components/BarraNavegacao';
import CardDoses from '../components/CardDoses';

const { width, height } = Dimensions.get('window');

const VacinaComponent = () => {
  const navigation = useNavigation();
  const [vacinas, setVacinas] = useState([]);

  useEffect(() => {
    const fetchVacinas = async () => {
      try {
        const vacinasData = await recuperarVacinas();
        if (vacinasData) {
          setVacinas(vacinasData);
        }
      } catch (error) {
        console.error('Erro ao recuperar dados das vacinas:', error);
      }
    };

    fetchVacinas();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header*/}
        <View style={styles.header}>
          <Appbar.BackAction style={styles.appbar} onPress={() => navigation.goBack()} />
          <Text style={styles.welcome}>Vacinas</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications" size={25} color="#00BFFF" onPress={() => navigation.navigate('Notificacao')} />
          </TouchableOpacity>
        </View>

        {/* Seção de Vacinas */}
        <View style={styles.section}>
          <Text style={styles.text02}>Minhas Vacinas</Text>
          <TextInput style={styles.input} mode="outlined" label="Vacina 1" value="" />
          <TextInput style={styles.input} mode="outlined" label="Vacina 2" value="" />
          <TextInput style={styles.input} mode="outlined" label="Vacina 3" value="" />
          <Text style={styles.text01} onPress={() => navigation.navigate('')}>Histórico de Vacinas</Text>
        </View>

        {/* Cards de doses por idade*/}
        <CardDoses />
           
        {/* Lista de Vacinas */}
        <ScrollView style={styles.vacinasList}>
            <Text 
              style={styles.text02}>
              Carteira De Vacinação
            </Text>
          {vacinas.map((vacina, index) => (
            <View key={index} style={styles.vacinaItem}>
              <Text>Vacina: {vacina.vacina}</Text>
              <Text>Data de Aplicação: {vacina.dataAplicacao}</Text>
              <Text>Local de Aplicação: {vacina.localAplicacao}</Text>
              <Text>Nome do Proprietário: {vacina.nomeProprietario}</Text>
            </View>
          ))}
        </ScrollView>
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
  scrollView: {
    marginBottom: 60,
  },
  appbar: {
    size: 22,
    marginLeft: -5
  },
  header: {
    width: width,
    marginTop: 20,
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
  input: {
    width: 300,
    height: 44,
    marginVertical: 5,
    borderRadius: 3,
  },
  vacinasList: {
    marginTop: 20,
    marginBottom:20,
    paddingHorizontal: 15,
    maxHeight: 200, // Defina a altura máxima para ativar a barra de rolagem
  },
  vacinaItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
});

export default VacinaComponent;
