import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
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
