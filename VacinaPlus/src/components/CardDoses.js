import React, { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import VacinaCrianca from '../components/VacinaCrianca';
import VacinaAdolescente from '../components/VacinaAdolescente'
import VacinaAdulto from '../components/VacinaAdulto'
import VacinaGestante from '../components/VacinaGestante';
import VacinaIdoso from '../components/VacinaIdoso';


const CardDoses = () => {

    const modalizeAdolescente = useRef(null);

     const onOpen = () => {
        modalizeCrianca.current?.open();}
    
        const modalizeCrianca = useRef(null);
    function OnAdo() {
        modalizeAdolescente.current?.open();
    }
    const modalizeAdulto = useRef(null);
    function OnAdult() {
        modalizeAdulto.current?.open();
    }
    const modalizeGestante = useRef(null);
    function OnGestante() {
        modalizeGestante.current?.open();
    }
    const modalizeIdoso = useRef(null);
    function OnIdoso() {
        modalizeIdoso.current?.open();
    }
    return (

        <View style={styles.cards}>
            <Text style={styles.text03}>
                Doses para Tomar
            </Text>
            <Modalize
                style={{ alignItems: 'center', justifyContent: 'center' }}
                handleStyle={styles.handle__shape}
                ref={modalizeCrianca}
                snapPoint={644}
                modalHeight={650}>
                <ScrollView>
                <VacinaCrianca />
                </ScrollView>
            </Modalize>
            <Modalize
                style={{ alignItems: 'center', justifyContent: 'center' }}
                handleStyle={styles.handle__shape}
                ref={modalizeAdolescente}
                snapPoint={444}
                modalHeight={650}>
                <VacinaAdolescente />
            </Modalize>
            <Modalize
                style={{ alignItems: 'center', justifyContent: 'center' }}
                handleStyle={styles.handle__shape}
                ref={modalizeAdulto}
                snapPoint={444}
                modalHeight={650}>
                <VacinaAdulto />
            </Modalize>
            <Modalize
                style={{ alignItems: 'center', justifyContent: 'center' }}
                handleStyle={styles.handle__shape}
                ref={modalizeGestante}
                snapPoint={344}
                modalHeight={650}>
                <VacinaGestante />
            </Modalize>
            <Modalize
                style={{ alignItems: 'center', justifyContent: 'center' }}
                handleStyle={styles.handle__shape}
                ref={modalizeIdoso}
                snapPoint={344}
                modalHeight={650}>
                <VacinaIdoso />
            </Modalize>
            <ScrollView horizontal>
                <View style={styles.doses}>
                        <TouchableOpacity style={activeOpacity=0.1}onPress={onOpen}>
                            <Card style={styles.card}>
                                <Card.Cover style={styles.Cover} source={require('../../assets/crianca.png')} />
                                <Card.Title style={styles.title1} title="Criança" />
                            </Card>
                        </TouchableOpacity>
                    <View>
                        <TouchableOpacity onPress={OnAdo}>
                            <Card style={styles.card}>
                                <Card.Cover style={styles.Cover} source={require('../../assets/adolescentes.png')} />
                                <Card.Title style={styles.title2} title="Adolescente" />
                            </Card>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={OnAdult}>
                        <Card style={styles.card}>
                            <Card.Cover style={styles.Cover} source={require('../../assets/adulto.png')} />
                            <Card.Title style={styles.title3} title="Adulto" />
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={OnGestante}> 
                    <Card style={styles.card}>
                        <Card.Cover style={styles.Cover} source={require('../../assets/gestante.png')} />
                        <Card.Title style={styles.title4} title="Gestante" />
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={OnIdoso}> 
                    <Card style={styles.card}>

                        <Card.Cover style={styles.Cover} source={require('../../assets/idoso2.png')} />
                        <Card.Title style={styles.title5} title="Idoso" />
                    </Card>
                    </TouchableOpacity>
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
    handle__shape: {
        alignSelf: 'center',
    
        top: 8,
    
        width: 45,
        height: 5,
    
        borderRadius: 5,
        backgroundColor: '#1fb6ff',
      },
});
 
export default CardDoses;