import { View } from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import Calendario from '../components/Calendario'



const Agenda = () => {
 

  return (
    <View style={{ flex: 1, marginTop: 20, marginHorizontal: 8 }}>
      <Calendario/>
      <BarraNavegacao />
    </View>
  );
};

export default Agenda;
