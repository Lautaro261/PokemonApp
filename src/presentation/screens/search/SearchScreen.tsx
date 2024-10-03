/* eslint-disable react/no-unstable-nested-components */
import React, { useMemo, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActivityIndicator, TextInput, Text } from 'react-native-paper';
import { PokemonCard } from '../../components/pokemons/PokemonCard';
import { Pokemon } from '../../../domain/entities/pokemon';
import { useQuery } from '@tanstack/react-query';
import { getPokemonNameWithId } from '../../../actions/pokemons';

export const SearchScreen = () => {

  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');

  const {isLoading ,data: pokemonNames = []} = useQuery({
    queryKey: ['pokemons', 'all'],
    queryFn: ()=>getPokemonNameWithId(),
  });

  const pokemonNameIdList = useMemo(()=>{

  },[term]);

  return (
    <View style={[globalTheme.globalMargin, {paddingTop: top + 10}]}>
      <TextInput
      placeholder="Buscar pokémon"
      mode="flat"
      autoFocus
      autoCorrect={false}
      onChangeText={(value)=>setTerm(value)}
      value={term}
      />

{/*       <ActivityIndicator
      style={styles.activityIndicator}
      /> */}

<FlatList
       data={ [] as Pokemon[] }
       keyExtractor={(pokemon, index)=> `${pokemon.id}-${index}`}
       numColumns={2}
       style={{paddingTop: top + 20}}
       renderItem={({item})=>(
        <PokemonCard pokemon={item}/>
       )}
       showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator:{
    paddingTop: 20,
  },
});
