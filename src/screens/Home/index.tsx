import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './style';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointments';
import { ListDivider } from '../../components/ListDivider'



export function Home() {
  const [category, setCategory] = useState('');

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
    }
  ]
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)

  }
  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader
          title="
          Scheduled Matches"
          subtitle="Total 6"
        />
        
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}

        />



      </View>


    </View>
  );
}