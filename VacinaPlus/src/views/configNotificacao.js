import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Appbar, Switch  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ConfigNotComponent = () => {

    const navigation = useNavigation();

    const [switchStates, setSwitchStates] = useState({
        notificacao: false,
        alerta: false,
        calendario: false,
        vacinas: false,
        noticias: false,
        vibrar: false,
    });

    const onToggleSwitch = (key) => {
        setSwitchStates(prevState => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Appbar.BackAction style={styles.appbar} onPress={() => navigation.goBack()} />
                    <Text style={styles.welcome}>Configurações</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.opcBody}>
                        <View style={styles.switchContainer}>
                            <Text style={styles.text}>Ativar Notificações</Text>
                            <Switch  
                            value={switchStates.notifications} 
                            onValueChange={() => onToggleSwitch('notifications')}
                            trackColor={{ false: "#8b8b8b", true: "#aae4ff" }}
                            thumbColor={switchStates.notifications ? '#1fb6ff' : '#f4f3f4'}/>
                        </View>
                    </View>
                    <View style={styles.opcBody}>
                        <Text style={styles.title}>Me alerte</Text>
                        <View style={styles.switchContainer}>
                            <Text style={styles.text}>Avisos e Alertas</Text>
                            <Switch  
                            value={switchStates.alerta} 
                            onValueChange={() => onToggleSwitch('alerta')}
                            trackColor={{ false: "#8b8b8b", true: "#aae4ff" }}
                            thumbColor={switchStates.alerta ? '#1fb6ff' : '#f4f3f4'} />
                        </View>
                        <View style={styles.switchContainer}>
                            <Text style={styles.text}>Calendario</Text>
                            <Switch  
                            value={switchStates.calendario} 
                            onValueChange={() => onToggleSwitch('calendario')}
                            trackColor={{ false: "#8b8b8b", true: "#aae4ff" }}
                            thumbColor={switchStates.calendario ? '#1fb6ff' : '#f4f3f4'} />
                        </View>
                        <View style={styles.switchContainer}>
                            <Text style={styles.text}>Vacinas</Text>
                            <Switch  
                            value={switchStates.vacinas} 
                            onValueChange={() => onToggleSwitch('vacinas')}
                            trackColor={{ false: "#8b8b8b", true: "#aae4ff" }}
                            thumbColor={switchStates.vacinas ? '#1fb6ff' : '#f4f3f4'} />
                        </View>
                        <View style={styles.switchContainer}>
                            <Text style={styles.text}>Noticias</Text>
                            <Switch  
                            value={switchStates.noticias} 
                            onValueChange={() => onToggleSwitch('noticias')}
                            trackColor={{ false: "#8b8b8b", true: "#aae4ff" }}
                            thumbColor={switchStates.noticias ? '#1fb6ff' : '#f4f3f4'} />
                        </View>
                    </View>
                    <View style={styles.opcBody}>
                        <Text style={styles.title}>Ajustes Gerais</Text>
                        <View style={styles.switchContainer}>
                            <Text style={styles.text}>Vibrar ao notificar</Text>
                            <Switch  
                            value={switchStates.vibrar} 
                            onValueChange={() => onToggleSwitch('vibrar')}
                            trackColor={{ false: "#8b8b8b", true: "#aae4ff" }}
                            thumbColor={switchStates.vibrar ? '#1fb6ff' : '#f4f3f4'} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const switchStyles = {
    switch: {
        marginBottom: 10
    }
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
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
    },
    body: {
        width: width,
        marginTop: 10,
        padding: 10,
    },
    opcBody: {
        marginBottom: 20,
        paddingHorizontal: 15,
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
    title: {
        fontSize: 20,
        marginBottom: 15, 
        fontWeight: 'bold',
        color: '#1fb6ff'
    },
    text: {
        fontSize:15,
        flex: 1, 
    },
    switchContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0' ,
    },
});

export default ConfigNotComponent;
