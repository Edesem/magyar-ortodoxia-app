import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../hooks/useTheme";
import * as Application from "expo-application";
import { moderateScale } from "react-native-size-matters";
import useOrientation from "../hooks/useOrientation";

export default function info() {
  const navigation = useNavigation();
  const theme = useTheme();
  const orientationHorizontalPadding = useOrientation() === 'landscape' ? 60 : 10;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Információ",
    });
  }, [navigation]);

  const version = Application.nativeApplicationVersion;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingHorizontal: orientationHorizontalPadding,
        paddingBottom: 40,
        paddingTop: 10,
      }}
      style={{ backgroundColor: theme.bg }}
    >
      <View style={{ margin: 10 }}>
        <Text
          style={[styles.text, { color: theme.text }]}
        >{`Ennek az alkalmazásnak a célja, hogy egy digitális platformot biztosítson a magyar ortodox keresztények számára hitük gyakorlására, a fizikai eszközök kiegészítéseként.

Ezt az alkalmazást Őeminenciája Arszeniosz, Ausztria Metropolitája, Magyarország és Közép-Európa Exarchája megáldotta.

A szöveg fő forrása a 2025-ben kiadott I. kiadású Imakönyv.

Megjegyzendő, hogy az alkalmazás offline módban is használható.

Minden kérdéssel kérjük, vegye fel velem a kapcsolatot 

Zoltán Levente Róbert, 
robertlzoltan@gmail.com`}</Text>

        <Text
          style={[
            styles.text,
            { color: theme.subtext, alignSelf: "center", marginTop: 100  },
          ]}
        >
          {version} verzió
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(24),
    lineHeight: moderateScale(34),
    textAlign: "left",
    fontFamily: "Alegreya_400Regular",
  },
});
