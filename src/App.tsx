import React from 'react';
import '../gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { PaperProvider } from 'react-native-paper';
//import { View, Text, StyleSheet } from 'react-native';

export const App = () => {
  return (
    <PaperProvider>
    <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
    </PaperProvider>
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
