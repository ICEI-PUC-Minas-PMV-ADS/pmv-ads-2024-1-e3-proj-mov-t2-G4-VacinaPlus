import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = () => {
    const [markedDates, setMarkedDates] = useState({});

    useEffect(() => {
        const addMarkedDates = () => { //ps as datas estão no formato ANO-MES-DIA
            const periodosVerdeAgua = criarPeriodos('2024-05-05', '2024-06-10', '#7fffd4');
            const periodosAzul = criarPeriodos('2024-06-05', '2024-07-15', '#1e90ff');
            const periodosRoxo = criarPeriodos('2024-07-20', '2024-08-20', '#8a2be2');

            const mergedMarkedDates = mergeMarkedDates([periodosVerdeAgua, periodosAzul, periodosRoxo]);

            setMarkedDates(mergedMarkedDates);
        };

        addMarkedDates();
    }, []);

    const criarPeriodos = (dataInicial, dataFinal, cor) => {
        let newMarkedDates = {};

        let currentDate = new Date(dataInicial);
        let endDate = new Date(dataFinal);

        while (currentDate <= endDate) {
            let dateString = currentDate.toISOString().split('T')[0];
            let isStartingDay = dateString === dataInicial;
            let isEndingDay = dateString === dataFinal;

            if (!newMarkedDates[dateString]) {
                newMarkedDates[dateString] = { periods: [] };
            }

            // Verificar se já existe um período para esta data e cor
            const existingPeriodIndex = newMarkedDates[dateString].periods.findIndex(period => period.color === cor);

            // Se não existir, adicionamos o período
            if (existingPeriodIndex === -1) {
                newMarkedDates[dateString].periods.push({
                    startingDay: isStartingDay,
                    endingDay: isEndingDay,
                    color: cor
                });
            }

            currentDate.setDate(currentDate.getDate() + 1);
        }

        return newMarkedDates;
    };

    const mergeMarkedDates = (markingsArray) => {
        let mergedMarkedDates = {};

        markingsArray.forEach(markings => {
            Object.keys(markings).forEach(date => {
                if (!mergedMarkedDates[date]) {
                    mergedMarkedDates[date] = { periods: [] };
                }
                mergedMarkedDates[date].periods.push(...markings[date].periods);
            });
        });

        return mergedMarkedDates;
    };

    return (
        <View style={{ flex: 1, marginTop: 20, marginHorizontal: 8 }}>
            <Calendar
                markingType="multi-period"
                markedDates={markedDates}
            />
            <View style={styles.legendContainer}>
                <View style={styles.legendItem}>
                    <View style={[styles.colorSquare, { backgroundColor: '#7fffd4' }]} />
                    <Text style={styles.legendText}>Campanha Vacina da Gripe 65+</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.colorSquare, { backgroundColor: '#1e90ff' }]} />
                    <Text style={styles.legendText}>Campanha vacina da dengue entre 10 e 12 anos</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.colorSquare, { backgroundColor: '#8a2be2' }]} />
                    <Text style={styles.legendText}>Campanha Vacina da Gripe Público Geral</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 8,
    },
    legendContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    colorSquare: {
        width: 10,
        height: 10,
        marginRight: 5,
    },
    legendText: {
        fontSize: 14,
    },
});

export default MyCalendar;
