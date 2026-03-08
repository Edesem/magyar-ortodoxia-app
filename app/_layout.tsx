import { Stack } from "expo-router";
import React, { useEffect } from "react";
import {
  useFonts,
  Alegreya_400Regular,
  Alegreya_400Regular_Italic,
} from "@expo-google-fonts/alegreya";
import {
  AlegreyaSC_400Regular,
  AlegreyaSC_700Bold,
} from "@expo-google-fonts/alegreya-sc";
import { COLOURS } from "../constants/colours";
import { Platform, useColorScheme } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { moderateScale } from "react-native-size-matters";
import useTheme from "../hooks/useTheme";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

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
                fontSize: 50,
                color: theme.header,
              },
            }),
            ...(Platform.OS === "android" && {
              headerStyle: {
                backgroundColor: theme.bg,
              },
              headerTitleStyle: {
                fontFamily: "AlegreyaSC_700Bold",
                fontSize: moderateScale(35, 1.2),
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
                fontSize: 50,
                color: theme.header,
              },
            }),
            ...(Platform.OS === "android" && {
              headerStyle: {
                backgroundColor: theme.bg,
              },
              headerTitleStyle: {
                fontFamily: "AlegreyaSC_700Bold",
                fontSize: moderateScale(35, 1.2),
                color: theme.header,
              },
            }),
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
