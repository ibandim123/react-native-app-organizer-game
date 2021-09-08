import React, { useState } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { style } from './style';
import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/Buttonicon';

export function SignIn() {
  return(
    <View style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Image 
        source={IlustrationImg}
        style={style.image}
        resizeMode="stretch"
      />

      <View style={style.content}>
        <Text style={style.title}>
          Organize {'\n'}
          your gaming {'\n'}
          easily {'\n'}
        </Text>

        <Text style={style.subtitle}>
          Create groups for playing your favorite games {'\n'} 
          with your friends
        </Text>

        <ButtonIcon title="Entrar com o Discord" />

      </View>

    </View>
  );
}