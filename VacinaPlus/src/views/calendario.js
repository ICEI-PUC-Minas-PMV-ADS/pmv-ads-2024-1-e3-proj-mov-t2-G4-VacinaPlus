import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
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
  const [legendas, setLegendas] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedColor, setSelectedColor] = useState('red'); // Cor padrão
  const [legendDescription, setLegendDescription] = useState('');
  const [colorFilters, setColorFilters] = useState({});
  const [legendIdCounter, setLegendIdCounter] = useState(0);

  const navigation = useNavigation();

  const colors = [
    { label: 'Vermelho', value: 'red' },
    { label: 'Azul', value: 'blue' },
    { label: 'Verde', value: 'green' },
    { label: 'Amarelo', value: 'yellow' },
    { label: 'Rosa', value: 'pink' },
    { label: 'Marrom', value: 'brown' }
  ];

  // Função para converter a data de "dd/mm/aaaa" para "YYYY-MM-DD"
  const converterData = (data) => {
    const [dia, mes, ano] = data.split('/');
    return `${ano}-${mes}-${dia}`;
  };

  // Função para adicionar legenda
  const addLegenda = (description, color) => {
    const newLegend = { id: legendIdCounter, description, color };
    setLegendas(prevLegendas => [...prevLegendas, newLegend]);
    setLegendIdCounter(prevCounter => prevCounter + 1);
  };

  // Função para remover legenda
  const removeLegenda = (id) => {
    setLegendas(prevLegendas => prevLegendas.filter(legenda => legenda.id !== id));
  };

  // Função para adicionar períodos marcados no calendário
  const addPeriod = () => {
    const formattedStartDate = converterData(startDate);
    const formattedEndDate = converterData(endDate);

    const period = { startingDay: false, endingDay: false, color: selectedColor || 'red' };
    let date = new Date(formattedStartDate);
    const end = new Date(formattedEndDate);
    
    while (date <= end) {
      const dateString = date.toISOString().split('T')[0];
      setMarkedDates(prevMarkedDates => ({
        ...prevMarkedDates,
        [dateString]: {
          periods: [
            ...(prevMarkedDates[dateString]?.periods || []),
            period,
          ],
        },
      }));
      date.setDate(date.getDate() + 1);
    }
  };

  // Função para remover períodos marcados no calendário pela cor selecionada
  const removePeriodsBySelectedColor = () => {
    setMarkedDates(prevMarkedDates => {
      const updatedMarkedDates = {};
      // Itera sobre as datas marcadas
      Object.keys(prevMarkedDates).forEach(date => {
        // Filtra os períodos da data atual
        const filteredPeriods = prevMarkedDates[date].periods.filter(period => {
          // Retorna verdadeiro se a cor do período for diferente da cor selecionada
          return period.color !== selectedColor;
        });
        // Se houverem períodos restantes, adiciona a data com os períodos filtrados
        if (filteredPeriods.length > 0) {
          updatedMarkedDates[date] = { periods: filteredPeriods };
        }
      });
      return updatedMarkedDates;
    });
  };

  // Função principal para processar as datas e adicionar/remover períodos
  const main = () => {
    // Verifica se as datas de início e término são válidas antes de processá-las
    if (startDate && endDate) {
      addPeriod();
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 20, marginHorizontal:8 }}>
      <Calendar
        markingType="multi-period"
        markedDates={markedDates}
      />
      <TextInputMask
        placeholder="Data de Início (dd/mm/aaaa)"
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY'
        }}
        value={startDate}
        onChangeText={text => setStartDate(text)}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInputMask
        placeholder="Data de Término (dd/mm/aaaa)"
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY'
        }}
        value={endDate}
        onChangeText={text => setEndDate(text)}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text>Selecione a Cor:</Text>
        {colors.map(colorOption => (
          <TouchableOpacity
            key={colorOption.value}
            style={{ marginLeft: 10 }}
            onPress={() => {
              setColorFilters(prevFilters => ({
                ...prevFilters,
                [colorOption.value]: !prevFilters[colorOption.value],
              }));
              setSelectedColor(colorOption.value);
            }}
          >
            <View style={{
              backgroundColor: colorOption.value,
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: selectedColor === colorOption.value ? 'black' : 'transparent',
            }} />
          </TouchableOpacity>
        ))}
      </View >
      <TouchableOpacity onPress={removePeriodsBySelectedColor}>
        <Text>Remover Intervalos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={main}>
        <Text>Adicionar Intervalo</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Descrição da Legenda"
        onChangeText={text => setLegendDescription(text)}
        value={legendDescription}
      />
      <TouchableOpacity onPress={() => addLegenda(legendDescription, selectedColor)}>
        <Text>Adicionar Legenda</Text>
      </TouchableOpacity>
      <View >
        {legendas.map((legenda, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
            <View style={{ width: 20, height: 20, backgroundColor: legenda.color, marginRight: 5 }} />
            <Text>{legenda.description}</Text>
            <TouchableOpacity onPress={() => removeLegenda(index)}>
              <Text style={{ color: 'red', marginLeft: 5 }}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <BarraNavegacao/>
    </View>
  );
};

export default MyCalendarAdmin;
