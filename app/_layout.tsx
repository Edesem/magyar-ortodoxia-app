import {
  Alegreya_400Regular,
  Alegreya_400Regular_Italic,
  useFonts,
} from "@expo-google-fonts/alegreya";
import {
  AlegreyaSC_400Regular,
  AlegreyaSC_700Bold,
} from "@expo-google-fonts/alegreya-sc";
import { Stack } from "expo-router";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "expo-router/react-navigation";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Platform, useColorScheme } from "react-native";
import { moderateScale } from "react-native-size-matters";
import useTheme from "../hooks/useTheme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Alegreya_400Regular,
    Alegreya_400Regular_Italic,
    AlegreyaSC_400Regular,
    AlegreyaSC_700Bold,
    Athonite: require("../assets/fonts/Athonite.ttf"),
  });

  const theme = useTheme();

  SplashScreen.setOptions({
    duration: 1500,
    fade: true,
  });

  useEffect(() => {
    SplashScreen.hideAsync();
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="prayer/[id]"
          options={{
            headerBackTitle: "Vissza",

            headerBackTitleStyle: { fontFamily: "AlegreyaSC_400Regular" },

            ...(Platform.OS === "ios" && {
              headerLargeTitleEnabled: true,
              headerLargeTitleStyle: {
                fontFamily: "AlegreyaSC_700Bold",
                fontSize: moderateScale(35, 0.8),
                color: theme.header,
              },
            }),
            ...(Platform.OS === "android" && {
              headerStyle: {
                backgroundColor: theme.bg,
              },
              headerTitleStyle: {
                fontFamily: "AlegreyaSC_700Bold",
                fontSize: moderateScale(35, 0.8),
                color: theme.header,
              },
            }),
          }}
        />

        <Stack.Screen
          name="information"
          options={{
            headerBackTitle: "Vissza",
            headerBackTitleStyle: { fontFamily: "AlegreyaSC_400Regular" },

            ...(Platform.OS === "ios" && {
              headerLargeTitleEnabled: true,
              headerLargeTitleStyle: {
                fontFamily: "AlegreyaSC_700Bold",
                fontSize: moderateScale(50, 0.8),
                color: theme.header,
              },
            }),
            ...(Platform.OS === "android" && {
              headerStyle: {
                backgroundColor: theme.bg,
              },
              headerTitleStyle: {
                fontFamily: "AlegreyaSC_700Bold",
                fontSize: moderateScale(35, 0.8),
                color: theme.header,
              },
            }),
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
