import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function MainComponent() {

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
            mode="contained"  onPress={() => console.log('Pressed')}>
                Começar
        </Button>

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
    width: 320,
    height: 320,
  },
  button: {
    paddingVertical: 3,
    borderRadius: 5,
    width: 175,
    backgroundColor: '#1fb6ff',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1fb6ff',
    marginBottom: 40
  }
});

