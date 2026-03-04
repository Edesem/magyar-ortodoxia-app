import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Vibration,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import { COLOURS } from "../../constants/colours";

export default function Index() {
  const [count, setCount] = useState(0);
  const [rotation, setRotation] = useState(0);

  const prayerRope = (event: GestureResponderEvent): void => {
    setCount(count + 1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    if (rotation >= 360) {
      setRotation(0);
    }
    setRotation((prevRotation) => prevRotation - 7.2);

    if (count >= 50) {
      Vibration.vibrate();
      setCount(0);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            alignItems: "center",
            position: "absolute",
            paddingTop: 80,
            left: 36,
          }}
        >
          <Text
            style={{
              color: "grey",
              fontFamily: "Alegreya_400Regular_Italic",
              fontSize: 20,
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
              { transform: [{ rotate: `${rotation}deg` }] },
            ]}
          />

          <Text
            style={{
              fontSize: 50,
              fontFamily: "AlegreyaSC_400Regular",
              color: COLOURS.red,
              textAlign: "center",
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
    backgroundColor: COLOURS.background_white,
    paddingTop: 40,
    paddingHorizontal: 40,
    color: "#000",
  },
  komboszkini: {
    width: 400,
    height: 400,
    tintColor: COLOURS.deep_red,
  },
});
