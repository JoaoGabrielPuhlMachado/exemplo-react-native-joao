import { Component } from "react";
import { FlatList, Text } from "react-native";
import ItemEstado from './ItemEstado';
export default class ListaEstado extends Component {
    state = {
        estados: [
            { sigla: 'SC', capital: 'Florianópolis' },
            { sigla: 'RS', capital: 'Porto Alegre' },
            { sigla: 'SP', capital: 'São Paulo' },
            { sigla: 'AM', capital: 'Manaus' },
            { sigla: 'GO', capital: 'Goiânia' },
            { sigla: 'MG', capital: 'Belo Horizonte' },
        ],
    };
    render() {
        return (
            <>
                <FlatList data={this.state.estados} renderItem={({ item }) => <ItemEstado estado={item} />} />
                <Text>Total: {this.state.estados.length}</Text>
            </>
        );
    }
}