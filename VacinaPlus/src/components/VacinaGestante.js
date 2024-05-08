import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const VacinaGestante = () => {

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Vacinas Gestantes</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
        A vacina para mulheres grávidas é essencial para prevenir doenças para si e para o bebê. Elas não podem tomar as mesmas vacinas que qualquer adulto e, portanto, têm um esquema vacinal diferenciado.
        </Text>
        <List.Section>
            {vaccineItems.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                    {index > 0 && <View style={styles.verticalLine} />}
                    <View style={styles.iconContainer}>
                        <View style={styles.circleOutline}>
                            <List.Icon color="#007AFF" icon={require('../../assets/seringa.png')} />
                        </View>
                    </View>
                    <List.Item style={styles.cont} title={item.title} description={item.description} />
                </View>
            ))}
        </List.Section>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 20,
},
cont:{
    width:'100%'
},
title: {
    fontSize: 24,
    color: '#8792A1',
    marginBottom: 10,
},
divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#C9CCD1',
    marginBottom: 10,
},
description: {
    fontSize: 14,
    color: '#8792A1',
    marginBottom: 20,
},
itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
},
iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
},
circleOutline: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
},
verticalLine: {
    width: 1,
    height: '60%',
    backgroundColor: '#C9CCD1',
    position: 'absolute',
    left: 20, // Ajuste conforme necessário para alinhar com o ícone
    top: -25,
},
});

const vaccineItems = [
{ title: 'Hepatite B', description: '3 Doses a depender da situação vacinal' },
{ title: 'Dupla adulto (DT)', description: '3 Doses, de acordo com a situação vacinal' },
{ title: 'dTPa (Tríplice bacteriana acelular do tipo adulto)', description: 'Uma Dose a cada gestação a partir da 20a semana de gestação ou no puerpério (até 45 dias após o parto)' },
// Adicione outras vacinas conforme necessário
];

export default VacinaGestante;