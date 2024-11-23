import {type FC, type ReactNode} from 'react'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/app/_hooks/use-color-scheme.hook';

import '@/app/_styles/global.css'
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout: FC = (): ReactNode => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('./_assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <Stack screenOptions={ { animation: 'fade' } }>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name='(routes)/onboarding/index' options={{headerShown: false}}/>
        <Stack.Screen name='(routes)/(categories)/tvc/index' options={{title: 'TVC'}} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default RootLayout;