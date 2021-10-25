import React from 'react'

import { View, TextInput, TextInputProps  } from 'react-native';
import { styles } from './style'

export function Smallinput({...rest}: TextInputProps) {
  return (
      <TextInput 
        style={styles.container}
        keyboardType="numeric"
        {...rest}
      />
  )
}