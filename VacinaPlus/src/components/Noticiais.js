import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Linking } from 'react-native';

const { width, height } = Dimensions.get('window');

const Noticias = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=vacina&language=pt&sortBy=popularity&apiKey=4d352007640942af9d9092d6bc6d6da3')
            .then(response => response.json())
            .then(data => {
                // Filtra apenas os artigos que possuem imagens e título
                const filteredArticles = data.articles
                    .filter(article => article.urlToImage && article.title)
                    .slice(0, 5); // Limita a 5 artigos
                setArticles(filteredArticles);
            })
            .catch(error => console.error('Erro ao buscar os dados: ', error));
    }, []);

    const toggleExpandedCard = (cardIndex) => {
        setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
    };

    const openArticle = (url) => {
        Linking.openURL(url);
    };

    const cleanDescription = (description) => {
        const unwantedText = 'appeared first on Giz Brasil.';
        if (description.endsWith(unwantedText)) {
            return description.replace(unwantedText, '').trim();
        }
        return description;
    };

    return (
        <ScrollView>
            {articles.map((article, index) => (
                <View key={index} style={[styles.sectionCard, styles.sectionCardWithImageRight]}>
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>{article.title}</Text>
                        <Text style={styles.cardContent} numberOfLines={expandedCard === index ? undefined : 3}>
                            {cleanDescription(article.description)}
                        </Text>
                        <TouchableOpacity onPress={() => openArticle(article.url)}>
                            <Text style={styles.readMore}>Leia mais no site</Text>
                        </TouchableOpacity>
                    </View>
                    {article.urlToImage && (
                        <Image source={{ uri: article.urlToImage }} style={styles.imageRight} />
                    )}
                </View>
            ))}
        </ScrollView>
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
        fontSize: 16, // Aumentado para mais destaque
        textAlign: 'justify',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardContent: {
        fontSize: 13, // Levemente maior
        textAlign: 'justify',
        lineHeight: 20, // Melhor espaçamento entre linhas
    },
    sectionCardWithImageRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageRight: {
        width: width / 3,
        height: height / 6,
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
        fontSize: 13.5, // Levemente maior
        marginTop: 8, // Mais espaçamento superior
    }
});

export default Noticias;
