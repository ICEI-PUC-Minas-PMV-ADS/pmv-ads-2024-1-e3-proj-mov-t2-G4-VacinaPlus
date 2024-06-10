import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Appbar, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import BarraNavegacao from '../components/BarraNavegacao';
import Notificacao from '../components/Notificacao';
const { width } = Dimensions.get('window');

const NotComponent = () => {

    const navigation = useNavigation();

    const [expandedCard, setExpandedCard] = useState(null);

    const toggleExpandedCard = (cardIndex) => {
        setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
    };
    
    return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.header}>
                <Appbar.BackAction style={styles.appbar} onPress={() => navigation.goBack()} />
                    <Text style={styles.welcome}>Notificações</Text>
                <TouchableOpacity style={styles.notificationButton}>
                    <Icon name="settings" size={25} color="#00BFFF" onPress={() => navigation.navigate('Configuracoes')} />
                </TouchableOpacity>
            </View>
            <Notificacao />
        </ScrollView>
        <BarraNavegacao />
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
    notificationButton: {
        padding: 10,
        marginLeft: 'auto',
    },
});

export default NotComponent;
