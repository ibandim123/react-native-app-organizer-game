import React from 'react';
import { RectButton } from 'react-native-gesture-handler'
import {  Text } from 'react-native';

import { style } from './style';

type Props =  {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return(
    <RectButton style={style.container } {...rest }>

      <Text style={style.title}>
        { title }
      </Text>
    
    </RectButton>
  );
}