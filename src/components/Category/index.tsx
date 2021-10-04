import React from 'react';
import { SvgProps } from 'react-native-svg'
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { theme } from '../../global/style/theme';
import { View, Text } from 'react-native';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props) {
  const { secondary50, secondary40 , secondary80 } = theme.colors

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary40 ]}
      >
        <LinearGradient 
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[ checked ? secondary80 : secondary50, secondary40 ]}
        >
          <View style={[styles.content, { opacity: checked ? 1: 0.4}]}>
            <View style={checked ? styles.checked: styles.check }>
              <Icon 
                width={48} 
                height={48}
              />
            </View>
              <Text style={styles.title}>
                { title }
              </Text>
          </View>    
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}