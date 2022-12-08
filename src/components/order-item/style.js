import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomColor: COLORS.primaryDark,
    borderBottomWidth: 1,
    backgroundColor: COLORS.cuarty,
    height: 85,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'center',
  },
  headerContainer: {},
  date: {
    marginLeft:20,
    color: COLORS.white,
    fontFamily: 'Raleway-Bold',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  content: {},
  total: {
    marginLeft:20,
    fontSize: 16,
    fontFamily: 'Raleway-Bold',
    color: COLORS.white,
  },
});