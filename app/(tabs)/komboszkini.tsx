import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Vibration,
  Modal,
  Button,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import { moderateScale, verticalScale } from "react-native-size-matters";
import useTheme from "../../hooks/useTheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import useOrientation from "../../hooks/useOrientation";
import { Picker } from "@react-native-picker/picker";

export default function Index() {
  const [count, setCount] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [komboszkini, setKomboszkini] = useState<100 | 50 | 33>(100);
  const [showPicker, setShowPicker] = useState(false);

  const theme = useTheme();
  const orientation = useOrientation();

  const images = {
    100: require(`../../assets/komboszkini/komboszkini_100.png`),
    50: require(`../../assets/komboszkini/komboszkini_50.png`),
    33: require(`../../assets/komboszkini/komboszkini_33.png`),
  };

  const prayerRope = (event: GestureResponderEvent): void => {
    setCount(count + 1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setRotation((prevRotation) => prevRotation - 360 / komboszkini);

    if (rotation >= 360) {
      setRotation(0);
    }

    if (count >= komboszkini - 1) {
      Vibration.vibrate();
      setCount(0);
      ``;
    }
  };

  const reset = (): void => {
    setCount(0);
    setRotation(0);
    Vibration.vibrate();
  };

  const isLandscape = orientation === "landscape";
  const pickerPadding = Platform.OS === "ios" ? "35" : "25";
  const pickerHeight = Platform.OS === "ios" ? 220 : 50;
  const androidGap = Platform.OS === "ios" ? 0 : 20;

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
            gap: isLandscape ? 100 : 0,
          }}
        >
          <Image
            source={images[komboszkini]}
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
            <Pressable onPress={() => setShowPicker(true)}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  gap: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: isLandscape
                      ? moderateScale(30, 1.2)
                      : moderateScale(50, 1.2),
                    fontFamily: "AlegreyaSC_400Regular",
                    color: theme.heading,
                  }}
                >
                  {komboszkini} csomó
                </Text>

                <FontAwesome
                  name="chevron-circle-down"
                  size={40}
                  color={theme.heading}
                />
              </View>

              <Modal visible={showPicker} transparent animationType="fade">
                <Pressable
                  style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)" }}
                  onPress={() => setShowPicker(false)}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "flex-end",
                      backgroundColor: "rgba(0,0,0,0.4)",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: theme.bg,
                        height: `${pickerPadding}%`,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        gap: androidGap,
                      }}
                    >
                      <Pressable onPress={() => {}}>
                        <Picker
                          mode="dropdown"
                          style={{
                            height: pickerHeight,
                            width: 250,
                            alignSelf: "center",
                          }}
                          selectedValue={komboszkini}
                          onValueChange={(komboszkini) =>
                            setKomboszkini(komboszkini)
                          }
                          itemStyle={{
                            fontSize: 25,
                            color: "#111",
                          }}
                        >
                          <Picker.Item label="100 csomó" value={100} />
                          <Picker.Item label="50 csomó" value={50} />
                          <Picker.Item label="33 csomó" value={33} />
                        </Picker>
                      </Pressable>

                      <Pressable
                        onPress={() => setShowPicker(false)}
                        style={{ alignItems: "center" }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            color: "#111",
                          }}
                        >
                          Kész
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </Pressable>
              </Modal>
            </Pressable>

            <Text
              style={{
                color: theme.subtext,
                fontFamily: "Alegreya_400Regular",
                marginBottom: 40,
                fontSize: moderateScale(18, 1.2),
                alignSelf: "center"
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
