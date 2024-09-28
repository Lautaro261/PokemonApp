import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">HomeScreenjs</Text>
      <Button icon="camera" mode="contained" onPress={()=>console.log('Ok')}>
        Prueba
      </Button>
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
