import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Button, Text } from 'react-native-paper';
import { getPokemons } from '../../../actions/pokemons';
import { useQuery } from '@tanstack/react-query';

export const HomeScreen = () => {

  const {isLoading, data} = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(),
    staleTime: 1000 * 60 * 60, //60 minutos
  });


  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">HomeScreenjs</Text>

      {
        isLoading ? (<ActivityIndicator/>) :
      (<Button icon="camera" mode="contained" onPress={()=>console.log('Ok')}>
        Prueba
      </Button>)
      }


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
