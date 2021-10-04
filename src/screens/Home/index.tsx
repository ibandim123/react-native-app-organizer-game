import React, { useState } from 'react';
import { View,Text } from 'react-native';
import { styles } from './style';
import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';

export function Home() {
  return (
    <View>
      <View style={styles.header }>
        <Profile />
        <ButtonAdd />
      </View>
     
      <View>
        <CategorySelect categorySelected={'category'} />
      </View>

    </View>
  );
}