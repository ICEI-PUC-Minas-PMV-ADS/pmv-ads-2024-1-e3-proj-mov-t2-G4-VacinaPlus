import React,{useRef} from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput,Appbar,Card,Modal,Portal,PaperProvider ,Button} from 'react-native-paper';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';
import BarraNavegacao from '../components/BarraNavegacao';
import CardDoses from '../components/CardDoses';
import { recuperarVacinas } from '../backend/db_firebase';
const { width, height } = Dimensions.get('window');

const VacinaComponent = () => {

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

   
  const navigation = useNavigation();
    
  const [text, setText] = React.useState("");
  const [Vacina2, setVacina2] = React.useState("");
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

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* Header*/}
                <View style={styles.header}>
                    <Appbar.BackAction  style={styles.appbar}  onPress={() => navigation.goBack()} />
                    <Text style={styles.welcome}>Vacinas</Text>
                    <TouchableOpacity style={styles.notificationButton}>
                    <Icon name="notifications" size={25} color="#00BFFF" onPress={() => navigation.navigate('Notificacao')}/>                        
                    </TouchableOpacity>
                </View>
                 
                {/* Seção de Vacinas */}
                <View style={styles.section}>
                    <Text style={styles.text02}>
                        Minhas Vacinas
                    </Text>                     
                    <TextInput
                        style={styles.input}
                        mode="outlined"
                        label="Vacina 1"
                        value={text}
                        onChangeText={text => setText(text)} />
                    <TextInput
                        style={styles.input}
                        mode="outlined"
                        label="Vacina 2"
                        value={Vacina2}
                        onChangeText={text => setText(Vacina2)} />
                    <TextInput
                        style={styles.input}
                        mode="outlined"
                        label="Vacina 3"
                        value={Vacina2}
                        onChangeText={text => setText(Vacina2)} />
                    <Text
                        style={styles.text01} 
                        onPress={() => navigation.navigate('')}>
                            Histórico de Vacinas
                    </Text>
                    </View>
                    {/* Cards de doses por idade*/}
                    <CardDoses/>
                    {/* Carteira De Vacinação*/}
                    <View style={styles.banner}>
                      <Text 
                        style={styles.text02}>
                          Carteira De Vacinação
                      </Text>
                        <View style={styles.space}>
                            <Image source={{uri: '../../assets/teste.png'}} style={{ width: '100%', height: '100%' }} />
                        </View>
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
  space:{
    borderColor: '#343F4B', 
    borderWidth: 2, 
    width: '95%', 
    height: 222, 
    borderRadius: 10, 
    overflow: 'hidden' 
  },
  banner:{
    marginTop:-1,
    marginLeft:15
  },
  scrollView: {
    marginBottom: 60,
  },
  appbar:{
    size:22,
    marginLeft:-5
  },   
  header: {
    width: width,
    marginTop: 20,
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
    fontSize: 22,
    textAlign: 'left',
    margin: 10,
    marginLeft:-3
  },
  buttons: {
     
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  button: {
    backgroundColor: '#007AFF',
    justifyContent: "center",
    borderRadius: 20,
    alignItems: 'center',
    
    aspectRatio: 2.10,
  },
  buttonText: {
    color: '#fff',
     
  },
  notificationButton: {
    padding: 10,
    marginLeft: 'auto', 
  },
  section: {
    marginLeft:15,
    marginTop:-15,
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
    marginTop:11,
    marginBottom:5
  },
  input: {
    width: 300,
    height: 44,
    marginVertical: 5,
    borderRadius: 3,
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

export default VacinaComponent;
