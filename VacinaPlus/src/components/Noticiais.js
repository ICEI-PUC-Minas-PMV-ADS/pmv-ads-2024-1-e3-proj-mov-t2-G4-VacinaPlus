import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Noticias = () => {
    const [expandedCard, setExpandedCard] = useState(null);


    const toggleExpandedCard = (cardIndex) => {
        setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
    };
    
    return (

        <View style={[styles.sectionCard, styles.sectionCardWithImageRight]}>
            <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>Vacinação aberta, a partir desta sexta-feira (19)</Text>
                <Text style={styles.cardContent} numberOfLines={expandedCard === 1 ? undefined : 3}>
                    Para evitar a perda de imunizantes e garantir a vacinação da população, a partir desta sexta-feira (19), a Prefeitura de Belo Horizonte vai concentrar a oferta das vacinas. A doses contra dengue serão ofertadas em 13 postos de saúde e contra a covid-19 em 30 unidades. Os endereços dos locais que vão ofertar os imunizantes em cada regional, por tipo, podem ser verificados on-line.
                </Text>
                <TouchableOpacity onPress={() => toggleExpandedCard(1)}>
                    <Text style={styles.readMore}>{expandedCard === 1 ? 'Ler menos' : 'Ler mais'}</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../../assets/vacinacovid.jpg')} style={styles.imageRight} />
        </View>
    );
};

const styles = StyleSheet.create({

    sectionCard: {
        flexDirection: 'row',
        borderRadius: 10, // Bordas mais arredondadas
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        padding: 15, // Mais espaçamento interno
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    cardTitle: {
        fontSize: 18, // Aumentado para mais destaque
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardContent: {
        fontSize: 14, // Levemente maior
        textAlign: 'justify',
        lineHeight: 22, // Melhor espaçamento entre linhas
    },
    sectionCardWithImageRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageRight: {
        width: width / 3,
        height: height / 7.5,
        resizeMode: 'cover', // Melhor preenchimento
        alignSelf: 'flex-start',
        marginLeft: 15, // Mais espaçamento à esquerda
        borderRadius: 8, // Bordas arredondadas
    },
    textContainer: {
        flex: 1,
    },
    readMore: {
        color: '#1e90ff', // Azul mais vibrante
        fontSize: 15, // Levemente maior
        marginTop: 10, // Mais espaçamento superior
    }
});

export default Noticias;
