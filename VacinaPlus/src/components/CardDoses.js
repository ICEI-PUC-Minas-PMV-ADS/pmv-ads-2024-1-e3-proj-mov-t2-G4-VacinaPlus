import React, { useRef } from 'react';
import { useState } from 'react';
import { Modalize } from 'react-native-modalize';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Card, List, MD3Colors } from 'react-native-paper';

const CardDoses = () => {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [datanascimento, setDataNascimento] = useState("");
    const [cnis, setCnis] = useState("");
    const modalizeRef = useRef(null);
    function onOpen() {
        modalizeRef.current?.open();
    }
    return (
         
        <View style={styles.cards}>
            <Text style={styles.text03}>
                Doses para Tomar
            </Text>
            <Modalize
                style={{ alignItems: 'center', justifyContent: 'center' }}
                ref={modalizeRef}
                snapPoint={345}
                modalHeight={650}
                >
                    <View >
                        <Text style={styles.text04}>Vacinas Crianças</Text>
                        <List.Section style={styles.section}>
                            <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
                            <List.Item title="Second Item" left={() => <List.Icon color={'green'} icon="folder" />}/>
                            <List.Item title="Second Item" left={() => <List.Icon color={'green'} icon="folder" />}/>
                            <List.Item title="Second Item" left={() => <List.Icon color={'green'} icon="folder" />}/>
                            <List.Item title="Second Item" left={() => <List.Icon color={'green'} icon="folder" />}/>  
                        </List.Section>
                    </View>
            </Modalize>
            <ScrollView horizontal>
                <View style={styles.doses}>
                    <View>
                        
                        <TouchableOpacity onPress={onOpen}>
                            <Card style={styles.card}>
                                <Card.Cover style={styles.Cover} source={require('../../assets/crianca.png')} />
                                <Card.Title style={styles.title1} title="Criança" />
                            </Card>
                        </TouchableOpacity>

                    </View>
                    <Card style={styles.card}>
                        <Card.Cover style={styles.Cover} source={require('../../assets/adolescentes.png')} />
                        <Card.Title style={styles.title2} title="Adolescente" />
                    </Card>
                    <Card style={styles.card}>
                        <Card.Cover style={styles.Cover} source={require('../../assets/adulto.png')} />
                        <Card.Title style={styles.title3} title="Adulto" />
                    </Card>
                    <Card style={styles.card}>
                        <Card.Cover style={styles.Cover} source={require('../../assets/gestante.png')} />
                        <Card.Title style={styles.title4} title="Gestante" />
                    </Card>
                    <Card style={styles.card}>

                        <Card.Cover style={styles.Cover} source={require('../../assets/idoso2.png')} />
                        <Card.Title style={styles.title5} title="Idoso" />
                    </Card>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    doses: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cards: {
        marginRight: 15,
        marginTop: -15,
        marginLeft: 15
    },
    text03: {
        fontSize: 24,
        color: '#8792A1',
        marginTop: 11,
        marginBottom: 5
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 11,
        width: 118,
        height: 145,
        marginHorizontal: 2,
        marginBottom: 6,
        marginTop: 4,
        justifyContent: 'center'
    },
    Cover: {
        marginLeft: 16.5,
        marginTop: 7,
        height: 85,
        borderRadius: 43,
        width: 85,
        justifyContent: 'center',
        backgroundColor: '#1FB6FF'
    },
    title1: {
        marginLeft: 14,
        marginTop: -1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title2: {
        marginLeft: -4.45,
        marginTop: -1.5,
        justifyContent: 'center'
    },
    title3: {
        marginLeft: 20,
        marginTop: -1.5,
        textAlign: 'left',
        justifyContent: 'center'
    },
    title4: {
        marginLeft: 9,
        marginTop: -1.5,
        textAlign: 'left',
        justifyContent: 'center'
    },
    title5: {
        marginLeft: 21,
        marginTop: -1.5,
        textAlign: 'left',
        justifyContent: 'center'
    },
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

export default CardDoses;