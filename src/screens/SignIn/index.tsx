import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { style } from './style';
import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/Buttonicon';

export function SignIn() {
  return(
    <View style={style.container}>
      <Image 
        source={IlustrationImg}
        style={style.image}
        resizeMode="stretch"
      />

      <View style={style.content}>
        <Text style={style.title}>
          Connect and Organize {'\n'}
          your gaming {'\n'}
          easily {'\n'}
        </Text>

        <Text style={style.subtitle}>
          Create groups for playing your favorite games {'\n'} 
          with your friends
        </Text>

        <ButtonIcon title="Login with Discord" />

      </View>

    </View>
  );
}