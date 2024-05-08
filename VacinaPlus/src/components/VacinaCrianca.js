import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const VacinaCrianca = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vacinas Crianças</Text>
            <View style={styles.divider} />
            <Text style={styles.description}>
                Para vacinar, basta levar a criança a um posto ou Unidade Básica de Saúde (UBS) com o cartão da criança. O ideal é que toda dose seja administrada na idade recomendada mas, se perdeu o prazo vá à unidade de saúde e atualize as vacinas.
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
    { title: 'BCG (Bacilo Calmette-Guerin)', description: 'Dose única' },
    { title: 'Hepatite B', description: 'Dose única' },
    { title: 'Pentavalente (DTP/HB/Hib)', description: '1ª Dose' },
    { title: 'VIP (Poliomielite inativada)', description: '1ª Dose' },
    { title: "Pneumocócica 10V", description: "1ª Dose" },
    { title: "Vacina rotavirus humano G1P1", description: "1ª Dose" },
    { title: "Meningocócica C conjugada", description: "2ª Dose" },
    { title: "Pentavalente (DTP/HB/Hib)", description: "2ª Dose" },
    { title: "VIP (Poliomielite inativada)", description: "2ª Dose" },
    { title: "Pneumocócica 10V ", description: "2ª Dose" },
    { title: "Vacina rotavirus humano G1P1", description: "2ª Dose" },
    { title: "Meningocócica C conjugada", description: "2ª Dose" },
    { title: "Pentavalente (DTP/HB/Hib)", description: "3ª Dose" },
    { title: "VIP (Poliomielite inativada)", description: "3ª Dose" },
    { title: "Pneumocócica 10V ", description: "2ª Dose" },
    { title: "Febre amarela", description: "Dose única" },
    { title: "Pneumocócica 10 Valente", description: "Reforço" },
    { title: "Tríplice Viral", description: "1ª Dose" },
    { title: "Hepatite A", description: "Dose única" },
    { title: "Poliomielite oral VOP", description: "1° Reforço" },
    { title: "DTP", description: "1º Reforço" },
    { title: "Tetra viral oo tríplice viral + varicela", description: "Dose única" },
    { title: "DTP", description: " 2º Reforço" },
    { title: "Vacina Oral Poliomielite (VOP)", description: "2º Reforço" },
    { title: "Varicela atenuada", description: "Previne varicela/catapora" },
    // Adicione outras vacinas conforme necessário
];

export default VacinaCrianca;