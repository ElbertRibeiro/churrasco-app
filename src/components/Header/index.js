import React from 'react';
import { Text, View, Image } from 'react-native';
import churrasco from '../../../assets/churrasco.jpg'
import style from './style';

export default function Header() {
  return (
    <View style = { style.box }>
        <Image style = { style.boxIcone}  source = { churrasco } />

        <View>
          <Text style = { style.boxTitulo }>
            Churrasco em casa
          </Text>

          <Text style = { style.boxSubtitulo }>
            Calculando a comida e a bebida
          </Text>
        </View>
      </View>
  );
}