import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import React, {useState} from 'react';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <View style={styles.logo}>
          <ILLogo />
          <Text style={styles.textTitle}>e-wallet</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flex: 1,
  },
  textTitle: {
    fontSize: 28,
    marginTop: 10,
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
