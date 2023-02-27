import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
export default function App() {
  const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5'];
  const objetos = [{
    "arroz": "100KCAL",
    "banana": "50KCAL",
    "maçã": "75KCAL",
    "feijão": "150KCAL",
  }];
  return (
    <View style={styles.container}>
      <Header />
      {/* <View>
        <FlatList data={tasks} renderItem={({ item }) => <Text>{item}</Text>} />
      </View> */}
      <View>
        <FlatList data={objetos} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
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