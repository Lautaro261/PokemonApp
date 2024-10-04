/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable curly */
import React, {useMemo, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {globalTheme} from '../../../config/theme/global-theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import {PokemonCard} from '../../components/pokemons/PokemonCard';
import {useQuery} from '@tanstack/react-query';
import {
  getPokemonNameWithId,
  gtePokemonsByIds,
} from '../../../actions/pokemons';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';
import {useDebouncedValue} from '../../hooks/useDebouncedvalue';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');
  const debouncedValue = useDebouncedValue(term, 500);

  const {isLoading, data: pokemonNames = []} = useQuery({
    queryKey: ['pokemons', 'all'],
    queryFn: () => getPokemonNameWithId(),
  });

  const pokemonNameIdList = useMemo(() => {
    //Caso de que el termino de busqueda es un numero
    if (!isNaN(Number(term))) {
      const pokemon = pokemonNames.find(pokemon => pokemon.id === Number(term));
      return pokemon ? [pokemon] : [];
    }

    //Caso de el termino de busqueda es igual a 0
    if (term.length === 0) return [];
    if (term.length < 3) return [];

    return pokemonNames.filter(pokemon =>
      pokemon.name.includes(term.toLowerCase()),
    );
  }, [debouncedValue]);

  const {isLoading: isLoadingPokemons, data: pokemons = []} = useQuery({
    queryKey: ['pokemons', 'by', pokemonNameIdList],
    queryFn: () =>
      gtePokemonsByIds(pokemonNameIdList.map(pokemon => pokemon.id)),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <View style={[globalTheme.globalMargin, {paddingTop: top + 10}]}>
      <TextInput
        placeholder="Buscar pokémon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={value => setTerm(value)}
        value={term}
      />
      {isLoadingPokemons && (
        <ActivityIndicator style={styles.activityIndicator} />
      )}

      {/* <Text>{JSON.stringify(pokemonNameIdList, null, 2)}</Text> */}

      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{paddingTop: top + 20}}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={styles.viewFooter} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    paddingTop: 20,
  },
  viewFooter: {
    height: 120,
  },
});
