import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Prayer, prayerData } from "../../data/prayers";

export default function PrayerScreen() {
  const { id } = useLocalSearchParams();
  
  // For prayers (p) check p.id and see if it's equal to id
  const prayer: Prayer = prayerData.find(p => p.id === Number(id))!;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView>
          <Text style={styles.text}>{prayer.text}</Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: "left",
  }
});