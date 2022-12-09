import { ActivityIndicator, StyleSheet, View } from 'react-native';

import AppNavigator from './navegation';
import {COLORS} from './constants/themes';
import { Provider } from 'react-redux';
import store from './store'
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
  return(
    <View>
      <ActivityIndicator size='large' color={COLORS.gray}/>
    </View>
  )
}
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}