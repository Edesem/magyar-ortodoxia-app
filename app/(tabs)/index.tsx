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
import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";
import useOrientation from "../../hooks/useOrientation";
import { InformationButton } from "../../components/index/information";
import { Header } from "../../components/index/header";
import { PrayerList } from "../../components/index/prayer_list";
import { BottomImage } from "../../components/index/bottomImage";

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
