/* eslint-disable prettier/prettier */
import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

export default function BalancePanel() {
  return (
    <View>
        <BalancePanelLabel></BalancePanelLabel>
        <BalancePanelChart></BalancePanelChart>
    </View>
  );
}

const styles = StyleSheet.create({});
//const styles = StyleSheet.create({});
