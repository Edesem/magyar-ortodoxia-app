import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

export default function Index() {
  const [count, setCount] = useState(0);

  const prayerRope = (event: GestureResponderEvent): void => {
    setCount(count + 1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: "center", position: "absolute", paddingTop: 80, left: 36 }}>
          <Text style={{color: "grey", fontFamily: "Alegreya_400Regular_Italic", fontSize: 20, textAlign: "center"}}>„Digitális komboszkini – ez egy kiegészítő, nem helyettesíti a hagyományos komboszkinít.”</Text>
        </View>
        <Pressable
          onPress={prayerRope}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 100, fontFamily: "AlegreyaSC_400Regular" }}>
            {count}
          </Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 40,
    color: "#000",
  },
});
