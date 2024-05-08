import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const VacinaIdoso = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vacinas Idosos</Text>
            <View style={styles.divider} />
            <Text style={styles.description}>
            São três as vacinas disponíveis para pessoas acima de 60 anos, além da campanha de vacinação contra gripe.
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
                        <List.Item title={item.title} description={item.description} />
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
        paddingHorizontal: 20,
        paddingTop: 20,
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
    { title: 'Hepatite B', description: 'Dose única' },
    { title: 'Febre amarela', description: 'Dose única, verificar situação vacinal' },
    { title: 'Tríplice viral', description: 'Se nunca vacinado: 2 Doses (20 a 29 anos)e 1 Dose (30 a 49 anos)' },
    { title: 'Dupla adulto (DT)', description: 'Reforço a cada 10 anos' },
    { title: "Pneumocócica 23 Valente", description: "1 Dose é indicada para grupos-alvo específicos a depender da situação vacinal" },
    // Adicione outras vacinas conforme necessário
];
export default VacinaIdoso;