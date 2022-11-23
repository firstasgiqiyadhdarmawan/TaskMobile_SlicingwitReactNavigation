import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {HomeScreen} from './pages';

const HomeScreen = () => {
  return (
    <View>
      <Text>Your Balance :</Text>
      <Text>Rp. 1.234.567.000</Text>

      <Text>Top Up</Text>
      <Text>QR Pay</Text>
      <Text>Transfer</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
