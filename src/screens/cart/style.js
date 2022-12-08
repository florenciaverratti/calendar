import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#D8E7E9',
  },
  listContainer: {
    flex: 1,
  },
  footer: {
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.primary,
    paddingVertical: 10,
  },
  buttonConfirm: {
    backgroundColor: COLORS.primaryDark,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  buttonDisabledConfirm: {
    backgroundColor: COLORS.gray,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  textButtonConfirm: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
  },
  totalContainer: {
    paddingBottom:2,
    marginBottom:2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTotalTitle: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
  },
  textTotal: {
    fontSize: 16,
    fontFamily: 'Raleway-Bold',
  },
})