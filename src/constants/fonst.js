import {useFonts} from 'expo-font';

const [loaded] = useFonts({
    //100
    'Raleway-Thin': require('./assets/fonts/raleway/Raleway-Thin.ttf'),
    'Raleway-Italic': require('./assets/fonts/raleway/Raleway-ThinItalic.ttf'),
    //400
    'Raleway-Regular': require('./assets/fonts/raleway/Raleway-Regular.ttf'),
    //500
    'Raleway-Medium': require('./assets/fonts/raleway/Raleway-Medium.ttf'),
    //700
    'Raleway-Bold': require('./assets/fonts/raleway/Raleway-Bold.ttf'),

    //300
    'Open-Sans-Thin': require('./assets/fonts/open-sans/OpenSans-Light.ttf'),
    'Open-Sans-Italic': require('./assets/fonts/open-sans/OpenSans-LightItalic.ttf'),
    //400
    'Open-Sans-Regular': require('./assets/fonts/open-sans/OpenSans-Regular.ttf'),
    //500
    'Open-Sans-Medium': require('./assets/fonts/open-sans/OpenSans-Medium.ttf'),
    //700
    'Open-Sans-Bold': require('./assets/fonts/open-sans/OpenSans-Bold.ttf')
});
