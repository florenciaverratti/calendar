import { PantallaPrincipal, Welcome } from './screens';
import { StyleSheet, View } from 'react-native';

import {colors} from './constants/color';
import {useFonts} from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    //100
    'Raleway-Thin': require('../assets/fonts/Raleway-Thin.ttf'),
    'Raleway-Italic': require('../assets/fonts/Raleway-ThinItalic.ttf'),
    //400
    'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
    //500
    'Raleway-Medium': require('../assets/fonts/Raleway-Medium.ttf'),
    //700
    'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),

    //300
    'Open-Sans-Thin': require('../assets/fonts/OpenSans-Light.ttf'),
    'Open-Sans-Italic': require('../assets/fonts/OpenSans-LightItalic.ttf'),
    //400
    'Open-Sans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    //500
    'Open-Sans-Medium': require('../assets/fonts/OpenSans-Medium.ttf'),
    //700
    'Open-Sans-Bold': require('../assets/fonts/OpenSans-Bold.ttf')
});


  return (
   // <Welcome/>
    <Text> dsadsad </Text>
    //<PantallaPrincipal/>
  );
}

