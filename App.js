import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import ListaEstado from './src/components/ListaEstados';
export default function App() {
  return (
    <View style={styles.container}>
      <Header titulo="Lista de alunos" />
      <Header titulo="Lista de professores" />
      <Header titulo="Lista de desatentos" />
      <ListaEstado />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
