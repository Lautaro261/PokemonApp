import React, {useContext} from 'react';
import {StyleProp, Image, ImageStyle, StyleSheet} from 'react-native';
import {ThemeContex} from '../../context/ThemeContex';

interface Props {
  style?: StyleProp<ImageStyle>;
}

export const PokeballBg = ({style}: Props) => {
  const {isDark} = useContext(ThemeContex);
  const pokeballImage = isDark
    ? require('../../../assets/pokeball-light.png')
    : require('../../../assets/pokeball-dark.png');

  return <Image source={pokeballImage} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    opacity: 0.3,
  },
});
