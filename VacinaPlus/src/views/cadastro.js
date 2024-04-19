import React from 'react';
import { View, Image, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CadastroComponent = () => {

  const navigation = useNavigation();

  return (

    <View style={styles.container}>

        <Image
            style={styles.Logo}
            source={require('../../assets/logo-plus.png')}
        />
       
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
  }
});

export default CadastroComponent;