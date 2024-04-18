import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MainComponent from './src/views/index';

export default function App() {
  return (
    <View style={styles.container}>
      <MainComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});