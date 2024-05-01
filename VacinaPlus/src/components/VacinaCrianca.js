import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const VacinaCrianca = () => {

    return (
        <View >
            <Text style={styles.text04}>Vacinas Crianças</Text>
            <List.Section style={styles.section}>
                <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
                <List.Item title="Second Item" left={() => <List.Icon color={'green'} icon="folder" />} />
                <List.Item title="Second Item" left={() => <List.Icon color={'green'} icon="folder" />} />
                <List.Item title="Second Item" left={() => <List.Icon color={'green'} icon="folder" />} />
                <List.Item title="Second Item" left={() => <List.Icon color={'green'} icon="folder" />} />
            </List.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        marginLeft: 21,
        marginTop: -1.5,
        textAlign: 'left',
        justifyContent: 'center'
    },
    text04: {
        marginLeft: 21,
        fontSize: 24,
        color: '#8792A1',
        marginTop: 11,
        marginBottom: 5
    },
});

export default VacinaCrianca;