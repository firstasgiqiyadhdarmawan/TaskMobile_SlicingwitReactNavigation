import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.textTitle}>e-wallet apps</Text>
      <Text style={styles.textTitle2}>Final Project</Text>
      <Text style={styles.textTitle2}>React Native</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#005690',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#FFFFFF',
    marginTop: 20,
  },
  textTitle2: {
    fontSize: 24,
    fontFamily: 'Nunito-SemiBold',
    color: '#FFFFFF',
    marginTop: 20,
  },
});
