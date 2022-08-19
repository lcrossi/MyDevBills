import { View, Button, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React from 'react'
import BalanceLabel from '../../components/BalanceLabel'
import EntrySummary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'

export default function Report() {
    const currentBalance = 2084.39

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
        <View>
            <BalanceLabel currentBalance={currentBalance}/>
            <View>
                <Picker>
                    <Picker.Item label="Todas as categorias" />
                </Picker>
                <Picker>
                    <Picker.Item label="Últimos 7 dias" />
                </Picker>
            </View>
            <EntrySummary entriesGrouped={entriesGrouped}/>
            <EntryList entries={entries}/>
            <View>
                <Button title="Salvar"/>
                <Button title="Fechar"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        /* flex: 1, */
    }
})