import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



const BarraNavegacao = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
                <Icon name="home" size={25} color="#00BFFF" />
                <Text style={styles.navButtonText}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Vacina')}>
                <Icon name="medkit" size={25} color="#00BFFF" />
                <Text style={styles.navButtonText}>Vacinas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Calendario')}>
                <Icon name="calendar" size={25} color="#00BFFF" />
                <Text style={styles.navButtonText}>Agenda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Perfil')}>
                <Icon name="person" size={25} color="#00BFFF" />
                <Text style={styles.navButtonText}>Perfil</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 13,
    },
    navButton: {
        alignItems: 'center',
    },
    navButtonText: {
        color: '#00BFFF',
    }
});


export default BarraNavegacao;