import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Pode ser 'cover' ou 'contain' para o ajuste da imagem
  },
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
    alignItems: 'center'
  },
  levels: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32
  },
  cards: {
    paddingTop: 32,
  }
});