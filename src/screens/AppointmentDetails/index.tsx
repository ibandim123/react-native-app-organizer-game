import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header'
import { ListHeader } from '../../components/ListHeader';
import ImageBanner from '../../assets/banner.png'
import { Fontisto } from '@expo/vector-icons'
import { theme } from '../../global/style/theme';
import { styles } from './styles'
import { Member } from '../../components/members'
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/Buttonicon'

export function AppointmentDetails() {
  const members = [
    {
      id: 1,
      username: 'Rodrigo',
      avatar_url:'https://github.com/rodrigogtic.png',
      status: 'online'
    },
    {
      id: 2,
      username: 'Isaac',
      avatar_url:'https://github.com/ibandim123.png',
      status: 'Occupied'
    },
  ]

  return (
    <Background>
      <Header
        title="Details"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
              style={styles.share}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground
        source={ImageBanner}
        style={styles.ImageBanner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}> Legends </Text>
          <Text style={styles.subtitle}> Today we will go to challenge without lose a game </Text>
        </View>
      </ImageBackground>
      
      <View style={styles.description}>
        <ListHeader 
          title="Players"
          subtitle="Total 3"
        />
      </View>

      <FlatList 
       data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Enjoy the game"/>
      </View>
    </Background>
  )
}