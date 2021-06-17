import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  AppLoading   from 'expo-app-loading';
import {Archivo_400Regular ,Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo'

import {Roboto_400Regular,Roboto_500Medium} from '@expo-google-fonts/roboto'
import AppStack from './src/routes/AppStack';


export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }
  else{
    return (
      <>
        <AppStack />
        <StatusBar style="auto" />
      </>    
    );
  }
  
}