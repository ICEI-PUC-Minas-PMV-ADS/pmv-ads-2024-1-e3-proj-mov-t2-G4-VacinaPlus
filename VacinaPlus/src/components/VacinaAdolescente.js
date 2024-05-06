import React from 'react';

import { View, Text,StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const VacinaAdolescente = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vacinas Adolescentes</Text>
            <View style={styles.divider} />
            <Text style={styles.description}>
            A caderneta de vacinação deve ser frequentemente atualizada. Algumas vacinas só são administradas na adolescência. Outras precisam de reforço nessa faixa-etária. Além disso, doses atrasadas também podem ser colocadas em dia.
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
    { title: 'Meninas HPV', description: '2 doses com seis meses de intervalo' },
    { title: 'HPV', description: '2 doses com seis meses de intervalo' },
    { title: 'Meningocócica C', description: 'Dose única ou reforço' },
    { title: 'Hepatite B', description: '3 doses, de acordo com a situação vacinal' },
    { title: "Febre Amarela", description: "1 dose se nunca tiver sido vacinado" },
    { title: "Dupla Adulto", description: "Reforço a cada 10 anos" },
    { title: "Tríplice viral", description: "2 doses, a depender da situação vacinal anterior" },
    { title: "Pneumocócica 23 Valente", description: "1 dose a depender da situação vacinal A vacina Pneumocócica 23V está indicada para grupos-alvo específicos" },
    // Adicione outras vacinas conforme necessário
];
export default VacinaAdolescente;