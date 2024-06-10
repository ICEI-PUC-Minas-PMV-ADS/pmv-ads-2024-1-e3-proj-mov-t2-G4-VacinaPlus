import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Linking } from 'react-native';
import { format } from 'date-fns';
import { useNotification } from '../context/NotificationContext'; // Importe o contexto

const { width, height } = Dimensions.get('window');

const Noticias = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [articles, setArticles] = useState([]);
  const { setNotificationCount } = useNotification(); // Use o contexto

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=vacina&language=pt&sortBy=popularity&apiKey=4d352007640942af9d9092d6bc6d6da3')
      .then(response => response.json())
      .then(data => {
        const filteredArticles = data.articles
          .filter(article => article.urlToImage && article.title)
          .slice(0, 10);
        setArticles(filteredArticles);
        setNotificationCount(filteredArticles.length); // Atualize o número de notificações
      })
      .catch(error => console.error('Erro ao buscar os dados: ', error));
  }, [setNotificationCount]);

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
        <View key={index} style={styles.sectionCard}>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>{article.title}</Text>
            <Text style={styles.cardContent} numberOfLines={expandedCard === index ? undefined : 2}>
              {cleanDescription(article.description)}
            </Text>
            <View style={styles.footer}>
              <TouchableOpacity onPress={() => openArticle(article.url)}>
                <Text style={styles.readMore}>Leia mais no site</Text>
              </TouchableOpacity>
              <Text style={styles.date}>{format(new Date(article.publishedAt), 'dd/MM/yyyy HH:mm')}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionCard: {
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    padding: 15,
    marginHorizontal: 25,
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: 16.5,
    textAlign: 'justify',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 13,
    lineHeight: 20,
  },
  textContainer: {
    flex: 1,
  },
  readMore: {
    color: '#1e90ff',
    fontSize: 13.5,
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  date: {
    fontSize: 13,
    color: '#222',
    marginLeft: 10,
  },
});

export default Noticias;
