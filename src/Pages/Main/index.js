/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import { saveEntry } from '../../services/Entries';

//() => navigation.navigate('NewEntry')

const Main = ({navigation}) => {
  const currentBalance = 2084.39

  const save = () => {
    saveEntry();
  }

  const entries = [
    {key: '1', description: 'Padaria Asa Branca ', amount: 12},
    {key: '2', description: 'Sonda Supermercado ', amount: 65},
    {key: '3', description: 'Posto Ipiranga ', amount: 150},
  ]

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: '200'},
    {key: '2', description: 'Combustível', amount: '60'},
    {key: '3', description: 'Aluguel', amount: '740'},
    {key: '4', description: 'Lazer', amount: '120'},
    {key: '5', description: 'Outros', amount: '350'},
    ]

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance}/>
      <Button 
        title="Adicionar" 
        onPress={save}/>
      <EntrySummary entriesGrouped={entriesGrouped}/>
      <EntryList entries={entries}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    /* flex: 1, */
    padding: 10,
  },
});

export default Main;
