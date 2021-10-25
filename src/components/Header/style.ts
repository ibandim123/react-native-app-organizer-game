import { StyleSheet } from 'react-native'
import { theme } from '../../global/style/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    // paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    top: 10,
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.heading,
  },
  arrow: {
    top: 10,
  }
})