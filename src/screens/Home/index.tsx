import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './style';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointments';
import { ListDivider } from '../../components/ListDivider'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core';
import { AppointmentCreate } from '../AppointmentCreate';
import { Background } from '../../components/Background';



export function Home() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Legends',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 at 20:40h',
      description: 'Today we  will go bring challenger without lost any part '
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Legends',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 at 20:40h',
      description: 'Today we  will go bring challenger without lost any part '
    },
  ]
  
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  return (
    <Background>
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd  onPress={() => handleAppointmentCreate()}/>
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}

      />

      <View style={styles.content}>
        <View style={styles.description}>
          <ListHeader
            title="
            Scheduled Matches"
            subtitle="Total 6"
          />
        </View>      
      </View>

    </View>
    <FlatList
      data={appointments}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
      <Appointment 
        data={item}
        onPress={() => handleAppointmentDetails()}
      />
      )}
      ItemSeparatorComponent={() => <ListDivider />}
      contentContainerStyle={{paddingBottom: 69}}
      style={styles.matches}
      showsVerticalScrollIndicator={false}

    />
    </Background>
  );
}