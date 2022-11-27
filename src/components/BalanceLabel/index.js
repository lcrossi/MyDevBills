import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BalanceLabel({currentBalance}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        /* flex: 1, */
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
    },
    value: {
        fontSize: 18,
    },
})