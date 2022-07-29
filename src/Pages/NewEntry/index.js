import { View, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'
import BalanceLabel from '../../components/BalanceLabel'

export default function NewEntry() {
  return (
    <View style={styles.container}>
        <BalanceLabel />

        <View>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <Button title="GPS"/>
            <Button title="Câmera"/>
        </View>
        <View>
            <Button title="Adicionar"/>
            <Button title="Cancelar"/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        /* flex: 1, */
        padding: 10,
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,

    }
})