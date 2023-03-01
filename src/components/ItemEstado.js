import { View, Text, StyleSheet } from 'react-native';
export default function ItemEstado(props) {
    return (
        <View style={styles.item}>
            <Text style={styles.textItem}>{props.estado.capital} - ({props.estado.sigla})</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#00ff32',
        padding: 10,
        borderRadius: 10,
    },
    textItem: {
        color: 'white',
    },
});