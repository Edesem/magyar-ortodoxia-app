import React from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { BottomImage } from "../../components/index/bottomImage";
import { Header } from "../../components/index/header";
import { InformationButton } from "../../components/index/information";
import { PrayerList } from "../../components/index/prayer_list";
import useOrientation from "../../hooks/useOrientation";
import useTheme from "../../hooks/useTheme";

export default function Index() {
  const theme = useTheme();
  const androidPadding = Platform.OS === "android" ? 80 : 0;

  const orientationHorizontalPadding =
    useOrientation() === "landscape" ? 80 : 25;

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: orientationHorizontalPadding,
        paddingTop: androidPadding,
      }}
      style={[styles.container, { backgroundColor: theme.bg }]}
    >
      <InformationButton />

      <Header />

      <PrayerList />

      <BottomImage />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
