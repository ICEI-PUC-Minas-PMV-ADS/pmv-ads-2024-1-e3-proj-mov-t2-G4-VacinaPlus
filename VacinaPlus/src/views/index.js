import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function MainComponent() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

        <Image
            style={styles.Logo}
            source={require('../../assets/logo-plus.png')}
        />

        <Text
            style={styles.text}>
                Seja Bem-vindo
        </Text>

        <Button 
            style={styles.button}
            mode="contained"  onPress={() => navigation.navigate('Login')}>
                Começar
        </Button>

        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 Vacina +. Todos os direitos reservados.</Text>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  Logo: {
    width: 250,
    height: 250,
  },
  button: {
    paddingVertical: 3,
    borderRadius: 20,
    width: 175,
    backgroundColor: '#1fb6ff',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1fb6ff',
    marginBottom: 40
  },
  footer: {
    position: 'absolute',
    bottom: -100,
    backgroundColor: '#f2f2f2',
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  }
});
