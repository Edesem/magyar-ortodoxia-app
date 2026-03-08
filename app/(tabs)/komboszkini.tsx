import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Vibration,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import { moderateScale, verticalScale } from "react-native-size-matters";
import useTheme from "../../hooks/useTheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import useOrientation from "../../hooks/useOrientation";

export default function Index() {
  const [count, setCount] = useState(0);
  const [rotation, setRotation] = useState(0);

  const theme = useTheme();
  const orientation = useOrientation();

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

  const reset = (): void => {
    setCount(0);
    setRotation(0);
    Vibration.vibrate();
  };

  const isLandscape = orientation === "landscape";

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: theme.bg,
            flexDirection: isLandscape ? "row" : "column",
            justifyContent: "center",
          },
        ]}
      >
        {isLandscape ? null : (
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: theme.subtext,
                fontFamily: "Alegreya_400Regular_Italic",
                fontSize: moderateScale(20, 1.2),
                textAlign: "center",
              }}
            >
              „Digitális komboszkini – ez egy kiegészítő, nem helyettesíti a
              hagyományos komboszkinít.”
            </Text>
          </View>
        )}

        <Pressable
          onPress={prayerRope}
          onLongPress={reset}
          delayLongPress={1000}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: isLandscape ? "row" : "column",
            gap: 100
          }}
        >
          <Image
            source={require("../../assets/50komboszkini.png")}
            style={[
              styles.komboszkini,
              {
                transform: [{ rotate: `${rotation}deg` }],
                tintColor: theme.heading,
                height: isLandscape ? verticalScale(150) : verticalScale(300),
                width: isLandscape ? verticalScale(250) : verticalScale(300),
              },
            ]}
          />

          <View>
            <Text
              style={{
                fontSize: isLandscape
                  ? moderateScale(30, 1.2)
                  : moderateScale(50, 1.2),
                fontFamily: "AlegreyaSC_400Regular",
                color: theme.heading,
              }}
            >
              50 csomó
            </Text>

            <Text
              style={{
                color: theme.subtext,
                fontFamily: "Alegreya_400Regular",
                marginBottom: 40,
                fontSize: moderateScale(18, 1.2),
              }}
            >
              Hosszan nyomva nullázás
            </Text>
          </View>
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
  horizontalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  komboszkini: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
});
