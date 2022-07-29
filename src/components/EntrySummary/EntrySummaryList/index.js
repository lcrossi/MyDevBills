import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

export default function EntrySummaryList() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Categorias</Text>
        <FlatList
            data={[
            {key: 'Alimentação: $ 200,00'},
            {key: 'Combustível: $ 12,00'},
            {key: 'Aluguel: $ 120,00'},
            {key: 'Lazer: $ 250,00'},
            {key: 'Outros: $ 1200,00'},
            ]}
            renderItem={({item}) => <Text>{item.key}</Text>}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        /* flex: 1, */
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    }
})