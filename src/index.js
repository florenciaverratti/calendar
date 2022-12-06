import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Home, Welcome } from './screens';

import {colors} from './constants/color';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    'Raleway-Thin': require('../assets/fonts/Raleway-Thin.ttf'),
    'Raleway-Italic': require('../assets/fonts/Raleway-ThinItalic.ttf'),
    'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),

    'Open-Sans-Thin': require('../assets/fonts/OpenSans-Light.ttf'),
    'Open-Sans-Italic': require('../assets/fonts/OpenSans-LightItalic.ttf'),
    'Open-Sans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'Open-Sans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
})

if(!loaded){
  <View>
    <ActivityIndicator size='large' color={colors.gray}/>
  </View>
}

  return (
    <>
    <Home/>
    </>
  );
}