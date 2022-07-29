import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BalanceLabel() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>$ 1.345,54</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        /* flex: 1, */
        alignItems: 'center',
    },
    label: {
        fonSize: 12,
    },
    value: {
        fonSize: 18,
    },
})