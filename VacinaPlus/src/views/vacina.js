import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput,Appbar,Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const TelaHome = () => {

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

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* Header*/}
                <View style={styles.header}>
                    <Appbar.BackAction  style={styles.appbar} onPress={() => {}} />
                    <Text style={styles.welcome}>Vacinas</Text>
                    <TouchableOpacity style={styles.notificationButton}>
                    <Icon name="notifications" size={25} color="#00BFFF" />                        
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
                        style={styles.text01} onPress={() => navigation.navigate('')}>
                            Histórico de Vacinas
                    </Text>
                    </View>
                    {/* Cards de doses por idade*/}
                    <View style={styles.cards}>
                        <Text style={styles.text02}>
                           Doses para Tomar
                        </Text>
                        <ScrollView horizontal>
                            <View style={{...styles.cardContainer, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Card style={styles.card}>
                                    <Card.Cover style={styles.Cover} source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIqDF-F2_tSXys9VvU7mRI6QmSmvkSpfSGeFBxlpLhf3Yt_x_9' }} />
                                    <Card.Title style={styles.title} title="Criança" />
                                </Card>
                                <Card style={styles.card}>
                                    <Card.Cover style={styles.Cover} source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIqDF-F2_tSXys9VvU7mRI6QmSmvkSpfSGeFBxlpLhf3Yt_x_9' }} />
                                    <Card.Title style={styles.title} title="Adolescente" />
                                </Card>
                                <Card style={styles.card}>
                                    <Card.Cover style={styles.Cover} source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIqDF-F2_tSXys9VvU7mRI6QmSmvkSpfSGeFBxlpLhf3Yt_x_9' }} />
                                    <Card.Title style={styles.title} title="Adulto" />
                                </Card>
                                <Card style={styles.card}>
                                    <Card.Cover style={styles.Cover} source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIqDF-F2_tSXys9VvU7mRI6QmSmvkSpfSGeFBxlpLhf3Yt_x_9' }} />
                                    <Card.Title style={styles.title} title="Gestante" />
                                </Card>
                                <Card style={styles.card}>
                                    <Card.Cover style={styles.Cover} source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIqDF-F2_tSXys9VvU7mRI6QmSmvkSpfSGeFBxlpLhf3Yt_x_9' }} />
                                    <Card.Title style={styles.title} title="Idoso" />
                                </Card>
                            </View>
                        </ScrollView>
                    </View>
                    {/* Carteira De Vacinação*/}
                    <View style={styles.banner}>
                        <Text style={styles.text02}>
                            Carteira De Vacinação
                        </Text>
                        <View style={styles.space}>
                            <Image source={{uri: '../../assets/teste.png'}} style={{ width: '100%', height: '100%' }} />
                        </View>
                    </View>
            </ScrollView>
        
                    {/* Barra de Navegação com botões*/}
                    <View style={styles.navBar}>
                        <TouchableOpacity style={styles.navButton} onPress={handlePressInicio}>
                            <Icon name="home" size={25} color="#00BFFF" />
                            <Text style={styles.navButtonText}>Início</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navButton} onPress={handlePressVacinas}>
                            <Icon name="medkit" size={25} color="#00BFFF" />
                            <Text style={styles.navButtonText}>Vacinas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navButton} onPress={handlePressAgenda}>
                            <Icon name="calendar" size={25} color="#00BFFF" />
                            <Text style={styles.navButtonText}>Agenda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navButton} onPress={handlePressPerfil}>
                            <Icon name="person" size={25} color="#00BFFF" />
                            <Text style={styles.navButtonText}>Perfil</Text>
                        </TouchableOpacity>
                     </View>
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
  cards:{
    marginTop:-15,
    marginLeft:15
  },
  card:{
    backgroundColor: '#fff',
    borderRadius: 11,
    width: 94,
    height:135,
    marginHorizontal:3,
    marginBottom:6,
     
  },
  Cover:{
    marginLeft:4.25,
    marginTop:6,
    height:85,
    borderRadius:43,
    width:85,
    justifyContent:'center'
  },
  title:{
    marginLeft:2,
    marginTop:-1,
    textAlign:'center',
     
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
  button:{
     backgroundColor:'green',   
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
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#00BFFF', 
  },
});

export default TelaHome;
