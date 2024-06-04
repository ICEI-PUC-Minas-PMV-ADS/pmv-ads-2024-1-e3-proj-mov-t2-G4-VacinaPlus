import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Appbar, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import BarraNavegacao from '../components/BarraNavegacao';
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
            {[1, 2, 3].map((cardIndex) => (
                <Card key={cardIndex} style={styles.card}>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.dataTitle}>02/05/2024 - 20:00</Text>
                        <Text variant="titleLarge" style={styles.title}>Vacinação aberta, a partir desta sexta-feira (19)</Text>
                        <Text variant="bodyMedium" style={[styles.text, { lineHeight: 20 }]} 
                            numberOfLines={expandedCard === cardIndex ? undefined : 3}>
                            Para evitar a perda de imunizantes e garantir a vacinação da população, 
                            a partir desta sexta-feira (19), a Prefeitura de Belo Horizonte vai 
                            concentrar a oferta das vacinas. A doses contra dengue serão ofertadas 
                            em 13 postos de saúde e contra a covid-19 em 30 unidades. Os endereços 
                            dos locais que vão ofertar os imunizantes em cada regional, por tipo, 
                            podem ser verificados on-line.
                        </Text>
                        <TouchableOpacity onPress={() => toggleExpandedCard(cardIndex)}>
                            <Text style={styles.readMore}>
                                {expandedCard === cardIndex ? 'Ler menos' : 'Ler mais'}
                            </Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>
            ))}
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
    card: {
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 10,
    },
    dataTitle: {
        fontSize: 14,
        paddingVertical: 10,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16,
        paddingVertical: 5,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'justify',
        fontSize: 14.5,
    },
    readMore: {
        color: 'blue',
        fontSize: 14.5,
        marginTop: 5,
    },
});

export default NotComponent;
