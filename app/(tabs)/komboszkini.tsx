import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Vibration,
  ScrollView,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import { COLOURS } from "../../constants/colours";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Stack } from "expo-router";
import useTheme from "../../hooks/useTheme";

export default function Index() {
  const [count, setCount] = useState(0);
  const [rotation, setRotation] = useState(0);

  const theme = useTheme();

  const prayerRope = (event: GestureResponderEvent): void => {
    setCount(count + 1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setRotation((prevRotation) => prevRotation - 7.2);

    if (rotation >= 360) {
      setRotation(0);
    }

    if (count >= 49) {
      Vibration.vibrate();
      setCount(0);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, {backgroundColor: theme.bg}]}>
        <View
          style={{
            alignItems: "center",
            //position: "absolute",
          }}
        >
          <Text
            style={{
              color: "grey",
              fontFamily: "Alegreya_400Regular_Italic",
              fontSize: moderateScale(20, 1.2),
              textAlign: "center",
            }}
          >
            „Digitális komboszkini – ez egy kiegészítő, nem helyettesíti a
            hagyományos komboszkinít.”
          </Text>
        </View>
        <Pressable
          onPress={prayerRope}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../../assets/50komboszkini.png")}
            style={[
              styles.komboszkini,
              { transform: [{ rotate: `${rotation}deg` }], tintColor: theme.heading },
            ]}
          />

          <Text
            style={{
              fontSize: moderateScale(50, 1.2),
              fontFamily: "AlegreyaSC_400Regular",
              color: theme.heading,
              textAlign: "center",
              paddingBottom: 20,
            }}
          >
            50 csomó
          </Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 30,
  },
  komboszkini: {
    width: "100%",
    height: verticalScale(400),
    resizeMode: "contain",
  },
});
