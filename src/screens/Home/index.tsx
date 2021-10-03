import React, { useState } from 'react';
import { View,Text } from 'react-native';
import { styles } from './style';
import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd';

export function Home() {
  return (
    <View>
      <View style={styles.header }>
        <Profile />
        <ButtonAdd />
      </View>
      <Text>Hello World, this is Home Page</Text>

    </View>
  );
}