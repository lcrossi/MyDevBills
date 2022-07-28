/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';

const Main = () => {
  return (
    <View style={styles.container}>
      <BalancePanel></BalancePanel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 20,
  },
});

export default Main;
