import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParams } from '../../navigator/StackNavigator';
import { useQuery } from '@tanstack/react-query';
import { getPokemonById } from '../../../actions/pokemons';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{}

export const PokemonScreen = ({navigation, route}:Props) => {

  const { pokemonId } = route.params;

  const { isLoading, data: pokemon } = useQuery({
    //         [nombre, valor]
    queryKey: ['pokemon', pokemonId],
    queryFn: ()=> getPokemonById(pokemonId),
    staleTime: 1000 * 60 * 60,

  });

  return (
    <View style={styles.container}>
      <Text>{pokemon?.name}</Text>
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
