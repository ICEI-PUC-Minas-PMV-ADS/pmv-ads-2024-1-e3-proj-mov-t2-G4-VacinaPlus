import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { recuperarVacinasUsuario } from '../backend/db_firebase'; // Corrigido para a função correta
import BarraNavegacao from '../components/BarraNavegacao';
import CardDoses from '../components/CardDoses';
import firebase from '../config/firebase';
import { useNotification } from '../context/NotificationContext';

const { width } = Dimensions.get('window');

const VacinaComponent = () => {
  const navigation = useNavigation();
  const [vacinas, setVacinas] = useState([]);
  const { notificationCount } = useNotification();

  useEffect(() => {
    const fetchVacinas = async () => {
      try {
        const user = firebase.auth().currentUser;
        if (user) {
          const vacinasData = await recuperarVacinasUsuario(user.uid);
          if (vacinasData) {
            setVacinas(vacinasData);
          }
        } else {
          console.error('Usuário não está logado.');
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
        {/* Header */}
        <View style={styles.header}>
          <Appbar.BackAction style={styles.appbar} onPress={() => navigation.goBack()} />
          <Text style={styles.welcome}>Vacinas</Text>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.notificationButton} onPress={() => navigation.navigate('Notificacao')}>
              <Icon name="notifications" size={25} color="#00BFFF" />
              {notificationCount > 0 && (
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationCount}>{notificationCount}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Lista de Vacinas */}
        <View style={styles.section}>
          <ScrollView style={styles.vacinasList}>
            <Text style={styles.text02}>Minhas Vacinas</Text>
            {vacinas.map((vacina, index) => (
              <View key={index} style={styles.vacinaItem}>
                <View style={styles.vacinaInfo}>
                  <Text style={styles.vacinaNome}>{vacina.vacina}</Text>
                  <Text>Dose: {vacina.dose}</Text>
                  <Text>Data de Aplicação: {vacina.dataAplicacao}</Text>
                  <Text>Local da Aplicação: {vacina.localAplicacao}</Text>
                </View>
                <Icon name="checkmark-circle" size={24} color="green" style={styles.checkIcon} />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Cards de doses por idade */}
        <CardDoses />
        <View>
            <Button
                style={[styles.button, { backgroundColor: '#00BFFF' }]} // Altera a cor de fundo do botão
                icon={({ color, size }) => <Icon name="download" color="green" size={size} />} // Define a cor verde para o ícone
                mode="contained"
                onPress={() => console.log('Pressed')}
                >
                Baixar Carteira Nacional de Vacinação
            </Button>
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
    marginLeft: -3
  },
  notificationContainer: {
    marginLeft: 'auto',
    position: 'relative',
  },
  notificationButton: {
    padding: 15,
  },
  notificationBadge: {
    position: 'absolute',
    right: 7,
    top: 6,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCount: {
    color: 'white',
    fontSize: 12,
  },
  section: {
    marginLeft: 15,
    marginTop: -15,
    alignItems: 'left',
  },
  text02: {
    fontSize: 24,
    color: '#8792A1',
    marginTop: 35,
    marginBottom: 5
  },
  vacinasList: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    maxHeight: 400, // Defina a altura máxima para ativar a barra de rolagem
  },
  vacinaItem: {
    flexDirection: 'row', // Para alinhar o texto e o ícone horizontalmente
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#8792A0',
    borderRadius: 10,
    borderWidth: 1.5,
  },
  vacinaInfo: {
    flex: 1,
  },
  vacinaNome: {
    fontSize: 16
  },
  checkIcon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#00BFFF',
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
  },
});

export default VacinaComponent;
