import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts, Alegreya_400Regular, Alegreya_400Regular_Italic } from "@expo-google-fonts/alegreya";
import { AlegreyaSC_400Regular } from "@expo-google-fonts/alegreya-sc";
import AppLoading from "expo-app-loading";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Alegreya_400Regular,
    Alegreya_400Regular_Italic,
    AlegreyaSC_400Regular,
  });

  useEffect(() => {
    SplashScreen.hide();
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return <Stack />;
}
