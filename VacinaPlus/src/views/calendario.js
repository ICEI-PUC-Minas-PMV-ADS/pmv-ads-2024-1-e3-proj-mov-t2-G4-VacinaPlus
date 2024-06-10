import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BarraNavegacao from '../components/BarraNavegacao';
import Calendario from '../components/Calendario'
import { useNotification } from '../context/NotificationContext';

const { width} = Dimensions.get('window');

const Agenda = () => {

  const navigation = useNavigation();
  const { notificationCount } = useNotification();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header*/}
        <View style={styles.header}>
          <Appbar.BackAction style={styles.appbar} onPress={() => navigation.goBack()} />
          <Text style={styles.welcome}>Meu Calendario</Text>
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
      <Calendario/>
      </ScrollView>
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
});

export default Agenda;
