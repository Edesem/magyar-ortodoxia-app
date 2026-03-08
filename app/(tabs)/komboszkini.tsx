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

  function PortraitLayout() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
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
          <Pressable
            onPress={prayerRope}
            onLongPress={reset}
            delayLongPress={1000}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../../assets/50komboszkini.png")}
              style={[
                styles.komboszkini,
                {
                  transform: [{ rotate: `${rotation}deg` }],
                  tintColor: theme.heading,
                  height: verticalScale(400),
                },
              ]}
            />

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontSize: moderateScale(50, 1.2),
                  fontFamily: "AlegreyaSC_400Regular",
                  color: theme.heading,
                }}
              >
                50 csomó
              </Text>

              <FontAwesome
                name="chevron-circle-down"
                size={40}
                color={theme.heading}
              />
            </Pressable>
            <Text
              style={{
                color: theme.subtext,
                fontFamily: "Alegreya_400Regular",
                marginBottom: 40,
                fontSize: 20,
              }}
            >
              Hosszan nyomva nullázás
            </Text>
          </Pressable>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  function LandscapeLayout() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container, { backgroundColor: theme.bg, flexDirection: "row" }]}>
          <View style={styles.horizontalContainer}>
            <Pressable
              onPress={prayerRope}
              onLongPress={reset}
              delayLongPress={1000}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/50komboszkini.png")}
                style={[
                  styles.komboszkini,
                  {
                    transform: [{ rotate: `${rotation}deg` }],
                    tintColor: theme.heading,
                    height: verticalScale(250),
                  },
                ]}
              />
            </Pressable>
          </View>

          <View style={styles.horizontalContainer}>
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

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                gap: 20,
                marginTop: 50,
              }}
            >
              <Text
                style={{
                  fontSize: moderateScale(50, 1.2),
                  fontFamily: "AlegreyaSC_400Regular",
                  color: theme.heading,
                }}
              >
                50 csomó
              </Text>

              <FontAwesome
                name="chevron-circle-down"
                size={40}
                color={theme.heading}
              />
            </Pressable>
            <Text
              style={{
                color: theme.subtext,
                fontFamily: "Alegreya_400Regular",
                marginBottom: 40,
                fontSize: 20,
              }}
            >
              Hosszan nyomva nullázás
            </Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return orientation === "landscape" ? <LandscapeLayout /> : <PortraitLayout />;
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
