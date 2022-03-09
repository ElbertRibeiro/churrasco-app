import React from 'react';
import { Text, View, Image } from 'react-native';
import cerveja from '../../../assets/cerveja.jpg';
import refrigerante from '../../../assets/refrigerante.jpg';
import convidado from '../../../assets/convidado.jpg';
import carne from '../../../assets/carne.jpg';

import style from './style';

export default function Card() {
  return (
    <View style = { style.boxDados }>
    <View style = { style.boxCard } >
      <Image style = { style.boxCardIcone } source = { convidado }/>

      <Text style = { style.boxCardTexto }>
        Convidados
      </Text>

      <Text style = { style.boxCardValor }>
        1
      </Text>
    </View>

    <View style = { style.boxCard } >
      <Image style = { style.boxCardIcone } source = { carne }/>

      <Text style = { style.boxCardTexto }>
        Carne
      </Text>

      <Text style = { style.boxCardValor }>
        400 GR
      </Text>
    </View>

    <View style = { style.boxCard } >
      <Image style = { style.boxCardIcone } source = { refrigerante }/>

      <Text style = { style.boxCardTexto }>
        Refrigerante
      </Text>

      <Text style = { style.boxCardValor }>
        700 ML
      </Text>
    </View>

    <View style = { style.boxCard } >
      <Image style = { style.boxCardIcone } source = { cerveja }/>

      <Text style = { style.boxCardTexto }>
        Cerveja
      </Text>

      <Text style = { style.boxCardValor }>
        4 Latas
      </Text>
    </View>
  </View>
  );
}