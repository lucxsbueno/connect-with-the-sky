import React from 'react';

import theme from './src/theme/theme';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { ThemeProvider } from 'styled-components/native';

/**
 *
 * Screens
 */
import Missions from './src/screens/Missions';

export default function App() {
   const [ fontsLoaded, error ] = useFonts({
      'Jost-Bold': require('./assets/fonts/Jost-Bold.ttf'),
      'Jost-Medium': require('./assets/fonts/Jost-Medium.ttf'),
      'Jost-Regular': require('./assets/fonts/Jost-Regular.ttf'),
   });

   if (!fontsLoaded) {
      return <AppLoading/>
   }

   if (error) {
      alert('Não foi possível carregar as fontes.');
   }

   return (
      <ThemeProvider theme={theme}>
         <Missions/>
      </ThemeProvider>
   );
}