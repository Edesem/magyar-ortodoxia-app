import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import { Prayer, prayerData } from "../../data/prayers";
import React, { useState } from "react";
import { Link } from "expo-router";
import * as Haptics from "expo-haptics";
import { moderateScale, verticalScale } from "react-native-size-matters";
import useTheme from "../../hooks/useTheme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import useOrientation from "../../hooks/useOrientation";
import { HEADERS } from "../../data/headers";

const prayers: Prayer[] = prayerData;

export default function Index() {
  const [header, setHeader] = useState(0);

  const haptic = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  const theme = useTheme();
  const androidPadding = Platform.OS === "android" ? 80 : 0;

  const orientationHorizontalPadding =
    useOrientation() === "landscape" ? 80 : 25;
  const orientationVerticalPadding = useOrientation() === "landscape" ? 20 : 0;

  const infoPage = () => {
    haptic();
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: orientationHorizontalPadding,
        paddingTop: androidPadding,
      }}
      style={[styles.container, { backgroundColor: theme.bg }]}
    >
      <Link
        href={"./information"}
        style={{ marginTop: orientationVerticalPadding }}
        onPress={infoPage}
      >
        <MaterialCommunityIcons
          name="information-variant-circle"
          size={35}
          color={theme.subtext}
          style={{ position: "absolute" }}
        />
      </Link>

      <Pressable
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          console.log(HEADERS[header]);
          if (header == HEADERS.length - 1) {
            setHeader(0);
          } else {
            setHeader(header + 1);
          }
        }}
      >
        <Text
          style={[styles.banner, { color: theme.header }]}
          numberOfLines={2}
          adjustsFontSizeToFit
        >
          {HEADERS[header]}
        </Text>
      </Pressable>

      {prayers.map((prayer, _) => (
        <View style={{ marginBottom: 10 }} key={prayer.id}>
          {prayer.heading && (
            <>
              <View style={{ alignItems: "center" }}>
                <Text style={[styles.heading, { color: theme.heading }]}>
                  {prayer.heading}
                </Text>
              </View>
              <View
                style={[styles.header_divider, { backgroundColor: theme.text }]}
              />
            </>
          )}
          <View style={styles.card}>
            <Link
              key={prayer.id}
              href={`./prayer/${prayer.id}`}
              style={[styles.prayer, { color: theme.text }]}
              onPress={haptic}
            >
              {prayer.title}
            </Link>
            <View>
              <Image
                source={require("../../assets/orthodox/star1.png")}
                style={[styles.chevron, { tintColor: theme.text }]}
              />
            </View>
          </View>
          <View
            style={[styles.prayer_divider, { backgroundColor: theme.text }]}
          />
        </View>
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    fontSize: moderateScale(70, 0.8),
    fontFamily: "Athonite",
    textAlign: "center",
    paddingVertical: 40,
  },
  heading: {
    fontSize: moderateScale(30, 0.8),
    fontFamily: "AlegreyaSC_400Regular",
  },
  prayer: {
    fontFamily: "Alegreya_400Regular",
    fontSize: moderateScale(25, 0.8),
    maxWidth: "80%",
    flex: 1,
    paddingLeft: 25,
  },
  card: {
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chevron: {
    marginRight: 25,
    opacity: 0.6,
    width: "100%",
    height: verticalScale(20),
  },
  header_divider: {
    height: 1,
    marginVertical: 14,
    opacity: 0.2,
  },
  prayer_divider: {
    height: 0.8,
    width: "85%",
    marginVertical: 8,
    alignSelf: "center",
    opacity: 0.2,
  },
});
