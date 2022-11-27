import { View, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BalanceLabel from '../../components/BalanceLabel'
import { saveEntry } from '../../services/Entries';

export default function NewEntry({navigation}) {
    const currentBalance = 1111.22;
    const [amount, setAmount] = useState('0.00');
    const save = () => {
        const value = {
            amount: parseFloat(amount),
        }
        console.log("NewEntry :: save ", amount)
        saveEntry(value);
    }

    return (
    <View style={styles.container}>
        <BalanceLabel currentBalance={currentBalance}/>
        <View>
            <TextInput 
                style={styles.input} 
                onChangeText={text => setAmount(text)}
                value={amount}
            />
            <TextInput style={styles.input} />
            <Button title="GPS"/>
            <Button title="Câmera"/>
        </View>
        <View>
            <Button title="Adicionar" onPress={save}/>
            <Button 
                title="Cancelar"
                onPress={() => navigation.goBack()}
                />
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