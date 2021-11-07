import React, { ReactNode } from 'react'
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../global/style/theme';
import { styles } from './style';

type Props = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }: Props) {
  const { secondary100, secondary40, heading } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <LinearGradient style={styles.container}colors={[ secondary100, secondary40 ]}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather
          name="arrow-left"
          size={24}
          style={styles.arrow}
          color={heading} 
        />
      </BorderlessButton>

      <Text style={styles.title}>
        { title }
      </Text>
      {
        action 
        ? 
        <View>
          { action }
        </View>
        :
        <View style={{ width: 20 }}/>
      }
    </LinearGradient>
  )
}