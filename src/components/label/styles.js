import { COLORS } from '../../constants/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    marginVertical: 5,
    color: COLORS.text,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
    marginVertical: 5,
    color: COLORS.gray,
  },
});
