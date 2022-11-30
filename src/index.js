import { StyleSheet, View } from 'react-native';

import { Welcome } from './screens';
import {colors} from './constants/color';

export const styles = StyleSheet.create({
  inicio:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  }, 
})

export default function App() {
 
  return (
    <View style={styles.inicio}>
      <Welcome/>
    </View>
  );
}

