import { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// export default function Header(props) {
//     return (
//         <View style={styles.header}>
//             <Text style={styles.headerText}>{props}Lista de Tarefas</Text>
//         </View>
//     );
// }

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{this.props.titulo}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        padding: 20,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 33,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
    },
});