import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SenhaComponent = () => {

  return (
    <View style={styles.container}>

        <Image
            style={styles.Logo}
            source={require('../../assets/logo-plus.png')}
        />

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
});

export default SenhaComponent;