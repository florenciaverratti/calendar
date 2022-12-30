import { COLORS } from '../../constants/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'Raleway-Regular',
    marginBottom: 10,
  },
  message: {
    marginVertical: 5,
  },
  helperText: {
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
    color: COLORS.helperText,
  },
});
