import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { ComponentProps, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Theme } from '@/constants/Theme';
import { FontNames, Fonts } from '@/constants/Fonts';
import 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

const getStackScreenOptions = (
  title: string
): ComponentProps<typeof Stack.Screen>['options'] => ({
  title: title,
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: Colors.delta,
  },
  headerTitleStyle: {
    fontFamily: FontNames.Poppins_600SemiBold,
    color: Colors.beta,
    fontSize: 16,
  },
  headerTitleAlign: 'left',
  contentStyle: {
    borderTopColor: Colors.eta,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts(Fonts);

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style='dark' />
      <ThemeProvider value={Theme}>
        <Stack>
          <Stack.Screen
            name='create-shopping-list'
            options={getStackScreenOptions('Criar lista')}
          />
          <Stack.Screen
            name='edit-shopping-list'
            options={getStackScreenOptions('Editar lista')}
          />
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='+not-found' />
        </Stack>
      </ThemeProvider>
    </>
  );
}
