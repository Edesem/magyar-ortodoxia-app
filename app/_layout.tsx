import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
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

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Alegreya_400Regular,
    Alegreya_400Regular_Italic,
    AlegreyaSC_400Regular,
    AlegreyaSC_700Bold,
    Athonite: require("../assets/fonts/Athonite.ttf"),
  });

  useEffect(() => {
    SplashScreen.hideAsync();
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="prayer/[id]"
        options={{
          headerBackTitle: "Vissza",
          headerBackTitleStyle: { fontFamily: "AlegreyaSC_400Regular" },

          headerLargeTitleEnabled: true,
          headerLargeTitleStyle: {
            fontFamily: "AlegreyaSC_700Bold",
            fontSize: 50,
            color: COLOURS.deep_red,
          },
        }}
      />
    </Stack>
  );
}
