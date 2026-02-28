import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import {
  useFonts,
  Alegreya_400Regular,
  Alegreya_400Regular_Italic,
} from "@expo-google-fonts/alegreya";
import {
  AlegreyaSC_400Regular,
  AlegreyaSC_700Bold,
} from "@expo-google-fonts/alegreya-sc";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Alegreya_400Regular,
    Alegreya_400Regular_Italic,
    AlegreyaSC_400Regular,
    AlegreyaSC_700Bold,
  });

  useEffect(() => {
    SplashScreen.hide();
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
