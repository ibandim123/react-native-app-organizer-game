import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { style } from './style';
import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/Buttonicon';
import { useNavigation } from '@react-navigation/core';
import { Background } from '../../components/Background';


export function SignIn() {

  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <Background>
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

          <ButtonIcon
            title="Login with Discord"
            activeOpacity={0.7}
            onPress={handleSignIn}
          />

        </View>

      </View>
    </Background>
  );
}