import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

export default function TextComponents() {
  return (
    <View style = { style.boxTexto }>
      <Text style = { style.boxTextoTitulo }>
        Vai fazer um churrasco mas não sabe o que comprar?
      </Text>

      <Text style = { style.boxTextoSubtitulo }>
        Final de semana chegando e vem aquela vontade de fazer um
        churrasco. Nessa hora bate uma dúvida da quantidade de
        carne e de bebidas que cada convidado vai consumir.
        Veja abaixo uma média do consumo por pessoa.
      </Text>
    </View>
  );
}