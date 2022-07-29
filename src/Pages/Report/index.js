import { View, Button, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React from 'react'
import BalanceLabel from '../../components/BalanceLabel'
import EntrySummary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'

export default function Report() {
  return (
    <View>
        <BalanceLabel />
        <View>
            <Picker>
                <Picker.Item label="Todas as categorias" />
            </Picker>
            <Picker>
                <Picker.Item label="Últimos 7 dias" />
            </Picker>
        </View>
        <EntrySummary />
        <EntryList />
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