import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import BarraNavegacao from '../components/BarraNavegacao';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
};

LocaleConfig.defaultLocale = 'pt-br';

const MyCalendarAdmin = () => {
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const addMarkedDates = () => {
      const periodosVerdeAgua = criarPeriodos('2024-05-05', '2024-06-10', '#7fffd4');
      const periodosAzul = criarPeriodos('2024-06-12', '2024-07-15', '#1e90ff');
      const periodosRoxo = criarPeriodos('2024-07-20', '2024-08-20', '#8a2be2');

      setMarkedDates({
        ...periodosVerdeAgua,
        ...periodosAzul,
        ...periodosRoxo
      });
    };

    addMarkedDates();
  }, []);

  const criarPeriodos = (dataInicial, dataFinal, cor) => {
    let newMarkedDates = { ...markedDates }; // Copia do estado atual
    let currentDate = new Date(dataInicial);
    let endDate = new Date(dataFinal);
  
    while (currentDate <= endDate) {
      let dateString = currentDate.toISOString().split('T')[0];
      let isStartingDay = dateString === dataInicial;
      let isEndingDay = dateString === dataFinal;
  
      if (!newMarkedDates[dateString]) {
        newMarkedDates[dateString] = {};
      }
  
      // Adicionando marcação para o período
      if (isStartingDay && isEndingDay) {
        newMarkedDates[dateString] = { startingDay: true, endingDay: true, color: cor, textColor: 'black' };
      } else if (isStartingDay) {
        newMarkedDates[dateString] = { startingDay: true, color: cor };
      } else if (isEndingDay) {
        newMarkedDates[dateString] = { endingDay: true, color: cor, textColor: 'black' };
      } else {
        newMarkedDates[dateString] = { color: cor };
      }
  
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return newMarkedDates;
  };
  

  return (
    <View style={{ flex: 1, marginTop: 20, marginHorizontal: 8 }}>
      <Calendar
        markingType="period"
        markedDates={markedDates}
      />
      <BarraNavegacao />
    </View>
  );
};

export default MyCalendarAdmin;
