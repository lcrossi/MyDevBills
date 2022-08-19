import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import EntryListItem from './EntryListItem';

export default function EntryList({entries}) {
  return (
    <View>
        <EntryListItem />
        <Text
            style={styles.title}>
            Últimos lançamentos
        </Text>

        <FlatList
            data={entries}
            renderItem={({item}) => (
                <Text style={styles.entry}>
                    {item.description} - ${item.amount}
                </Text>
            )}
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
    },
    entry: {
        
    }
})
