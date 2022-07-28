/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function BalancePanelLabel() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>$2.102,55</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    /* flex: 1, */
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 22,
  },
});
