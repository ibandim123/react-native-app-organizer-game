import React from 'react';
import { Text, View, Image, Alert, ActivityIndicator } from 'react-native';
import { style } from './style';
import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/Buttonicon';
import { Background } from '../../components/Background';
import { useAuth } from '../../hooks/auth'
import { useNavigation } from '@react-navigation/core';



export function SignIn() {

  // const { user,loading, signIn } = useAuth()
  const navigation = useNavigation();

async function handleSignIn() {
    try {
      navigation.navigate('Home');
      // await signIn()
    }catch (error) {
      Alert.alert("error")
    }
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

          {
           
            <ButtonIcon
              title="Login with Discord"
              activeOpacity={0.7}
              onPress={handleSignIn}
            />
            // : <ActivityIndicator color={theme.colors.primary} /> 
          }

        </View>

      </View>
    </Background>
  );
}