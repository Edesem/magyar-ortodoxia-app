import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
} from "react-native";
import { Prayer, prayerData } from "../../data/prayers";
import React, { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { COLOURS } from "../../constants/colours";
import * as Haptics from "expo-haptics";
import { moderateScale, verticalScale } from "react-native-size-matters";
import useTheme from "../../hooks/useTheme";

const prayers: Prayer[] = prayerData;

export default function Index() {
  const haptic = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 25, paddingBottom: 80 }}
      style={[styles.container, { backgroundColor: theme.bg }]}
    >
      <Text
        style={[styles.banner, { color: theme.header }]}
        numberOfLines={2}
        adjustsFontSizeToFit
      >
        Magyar Ortodoxia
      </Text>

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
                style={[
                  styles.header_divider,
                  { backgroundColor: theme.text },
                ]}
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
            style={[
              styles.prayer_divider,
              { backgroundColor: theme.text },
            ]}
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
    fontSize: moderateScale(70, 1.2),
    fontFamily: "Athonite",
    textAlign: "center",
    paddingVertical: 40,
  },
  heading: {
    fontSize: moderateScale(30, 1.2),
    fontFamily: "AlegreyaSC_400Regular",
  },
  prayer: {
    fontFamily: "Alegreya_400Regular",
    fontSize: moderateScale(25, 1.2),
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
