import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import EntryListItem from './EntryListItem';

export default function EntryList() {
  return (
    <View>
        <EntryListItem />
        <Text
            style={styles.title}>
            Últimos lançamentos
        </Text>

        <FlatList
            data={[
            {key: 'Padaria Asa Branca: $ 15,00'},
            {key: 'Sonda Supermercado: $ 80,00'},
            {key: 'Posto Ipiranga: $ 12,00'},
            ]}
            renderItem={({item}) => <Text>{item.key}</Text>}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        /*  flex: 1, */
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    }
})
