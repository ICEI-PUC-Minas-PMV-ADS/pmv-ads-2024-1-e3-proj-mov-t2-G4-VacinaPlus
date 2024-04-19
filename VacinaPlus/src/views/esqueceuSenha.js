import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const SenhaComponent = () => {

  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>

        <Image
            style={styles.Logo}
            source={require('../../assets/logo-plus.png')}
        />

        <Text
            style={styles.h1}>
                Esqueceu a senha
        </Text>
        <Text
            style={styles.text}>
                Faça login para continuar
        </Text>

        <TextInput
            style={styles.input}
            mode="outlined"
            label="Email"
            value={text}
            onChangeText={text => setText(text)} />

        <Button 
            style={styles.button}
            mode="contained"  onPress={() => console.log('Pressed')}>
                Entrar
        </Button>
       
    </ View>

  );
};

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100
      },
      Logo: {
        width: 300,
        height: 300,
      },
      button: {
        paddingVertical: 3,
        borderRadius: 5,
        width: 175,
        backgroundColor: '#1fb6ff',
      },
      text: {
        fontSize: 15,
        color: '#000',
        marginVertical: 10
      },
      textcolor: {
        color: '#1fb6ff',
      },
      h1: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#1fb6ff',
        marginBottom: 10
      },
      h3: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 30
      },
      input: {
        width: 300,
        height: 57,
        marginVertical: 10,
        borderRadius: 3,
      }
});

export default SenhaComponent;