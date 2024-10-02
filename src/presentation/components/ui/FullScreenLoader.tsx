import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';

export const FullScreenLoader = () => {
    //El tema lo puedo tomas de Contex, useTheme de react-native-paper o useTheme de react-navigation/native
    //En este caso lo vamos a tomas de paper.
    const { colors } = useTheme();


  return (
    <View style={[styles.container,{backgroundColor: colors.background}]}>
        <ActivityIndicator size="large"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
