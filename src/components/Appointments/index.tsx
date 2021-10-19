import React from 'react';
import { RectButton } from 'react-native-gesture-handler'
import { styles } from './styles';
import { View, Text } from 'react-native';
import { GuildIcon } from '../GuildIcon';
import { categories } from '../../utils/categories';
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { theme } from '../../global/style/theme';

export type GuildProps = {
  id: string;
  name: string,
  icon: null,
  owner: boolean,

}

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButton & {
  data: AppointmentProps;
  
}

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category)
  const { owner } = data.guild;
  const { primary, on } = theme.colors
  return (
    <RectButton {...rest} >
      <View style={styles.container}>
        {/* Linear Gradient Future */}
        <GuildIcon />
        <View style={styles.content}>
          
          <View style={styles.header}>
          
            <Text style={styles.title}>
              {data.guild.name}
            </Text>

            <Text style={styles.category}>
              {category.title}
            </Text>

          </View>

          <View style={styles.footer} >
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>
                {data.date}
              </Text>
            </View>

          <View style={styles.playersInfo}>
            <PlayerSvg fill={owner ? primary : on} />

              <Text style={[
                styles.player,
                { color: owner ? primary : on }
              ]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}