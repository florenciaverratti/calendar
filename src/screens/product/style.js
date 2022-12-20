import { COLORS } from '../../constants/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
  },
  title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 20,
    color: COLORS.text,
  },
});