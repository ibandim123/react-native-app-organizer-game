import { StyleSheet } from 'react-native'
import { theme } from '../../global/style/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  share: {
    top: 10,
  },
  ImageBanner: {
    width: '100%',
    height: 234,
    marginBottom: 30,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 30
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    lineHeight: 21,
  },
  members: {
    marginLeft: 27,
    marginTop: 27,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: 20
  },
  description: {
    paddingHorizontal: 24,
  }
})