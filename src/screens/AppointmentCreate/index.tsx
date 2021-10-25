import React, { useState } from 'react'
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Background } from '../../components/Background';
import { Smallinput } from '../../components/Smallinput';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header'
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { GuildIcon } from '../../components/GuildIcon'
import { TextArea } from '../../components/TextArea';
import { ListHeader } from '../../components/ListHeader';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/Modal';
import { Guilds } from '../Guilds';

import { styles } from './styles'
import { theme } from '../../global/style/theme';
import { GuildProps } from '../../components/Appointments';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild ] = useState<GuildProps>({} as GuildProps)
  
  function handleOpenGuilds() {
    setOpenGuildsModal(true)
  }

  function handleOpenSelect(guildSelect: GuildProps) {
    setGuild(guildSelect)
    setOpenGuildsModal(false)
  }
    
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>

        <Header
          title="Schedule Match"
        />
        <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>Categories</Text>
        <CategorySelect
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />
        <View style={styles.form}>
          <RectButton onPress={handleOpenGuilds}>
            <View style={styles.select}>
              
              {
                guild.icon ? <GuildIcon /> : <View style={styles.image} /> 
              }

              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  {guild.name ? guild.name: 'Select a Server'}
                </Text>
              </View>
              <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />
            </View>

          </RectButton>

          <View style={styles.field}>
            <View>
              <Text style={styles.label}>
                Day and Mounth
              </Text>

              <View style={styles.column}>
                <Smallinput maxLength={2} />
                <Text style={styles.divider}>
                  /
                </Text>

                <Smallinput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={styles.label}>
                Hours and Minutes
              </Text>

              <View style={styles.column}>
                <Smallinput maxLength={2} />
                <Text style={styles.divider}>:</Text>

                <Smallinput maxLength={2} />
              </View>
            </View>
          </View>

          <View style={styles.description}>
            <ListHeader
              title="
                Description"
              subtitle="max 100 caracters"
            ></ListHeader>

          </View>

          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />

          <View style={styles.footer}>
            <Button title="To schedule"></Button>
          </View>
        </View>


      </ScrollView>

      <ModalView visible={openGuildsModal}>
        <Guilds handleGuildSelect={handleOpenSelect}/>
      </ModalView>

    </KeyboardAvoidingView>
  )
}