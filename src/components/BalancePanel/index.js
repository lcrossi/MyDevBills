import {View, StyleSheet, Button} from 'react-native';
import React from 'react';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

export default function BalancePanel({currentBalance}) {
  return (
    <View style={styles.container}>
        <BalancePanelLabel currentBalance={currentBalance}/>
        <BalancePanelChart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
/*     flex: 1, */
  }
});
//const styles = StyleSheet.create({});
