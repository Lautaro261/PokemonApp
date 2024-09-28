import React from 'react';
import '../gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigator/StackNavigator';
//import { View, Text, StyleSheet } from 'react-native';

export const App = () => {
  return (
    <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
  );
};

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 */
