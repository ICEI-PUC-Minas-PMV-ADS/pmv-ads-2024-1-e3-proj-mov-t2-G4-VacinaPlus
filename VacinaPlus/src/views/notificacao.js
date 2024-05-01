import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Appbar, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import BarraNavegacao from '../components/BarraNavegacao';
const { width, height } = Dimensions.get('window');

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
                    <Icon name="settings" size={25} color="#00BFFF" />
                </TouchableOpacity>
            </View>
            {[1, 2, 3, 4, 5].map((cardIndex) => (
                    <Card key={cardIndex} style={styles.card}>
                        <Card.Content>
                            <Text variant="titleLarge" style={styles.dataTitle}>02/05/2024 - 20:00</Text>
                            <Text variant="titleLarge" style={styles.title}>Lorem Ipsum</Text>
                            <Text variant="bodyMedium" style={[styles.text, { lineHeight: 20 }]} 
                                numberOfLines={expandedCard === cardIndex ? undefined : 3} >
                                Lorem Ipsum is simply dummy text of the printing and popularised in the 1960s 
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                                recently with desktop publishing software like Aldus PageMakerincluding 
                                versions of Lorem Ipsum.
                            </Text>
                            {expandedCard !== cardIndex && (
                                <TouchableOpacity onPress={() => toggleExpandedCard(cardIndex)}>
                                    <Text style={styles.readMore}>Ler mais</Text>
                                </TouchableOpacity>
                            )}
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
        backgroundColor: '#fff',
    },
    scrollView: {
        marginBottom: 60,
    },
    header: {
        width: width,
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
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
    notificationButton: {
        padding: 10,
        marginLeft: 'auto',
    },
    card: {
        backgroundColor: '#f0f0f0',
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