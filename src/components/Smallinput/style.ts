import { StyleSheet } from 'react-native'
import { theme } from '../../global/style/theme'

export const styles = StyleSheet.create({
  container: {
   width: 48,
   height: 48,
   backgroundColor: theme.colors.secondary40,
   color: theme.colors.heading,
   borderRadius: 8,
   fontFamily: theme.fonts.text400,
   fontSize: 13,
   marginRight: 4,
   borderWidth: 1,
   borderColor: theme.colors.secondary50,
   paddingLeft: 16,
   paddingTop: 16,
   textAlignVertical:'top'
  },
})