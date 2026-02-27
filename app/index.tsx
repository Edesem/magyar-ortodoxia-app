import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Prayer, prayerData } from "../data/prayers";
import React, { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

const prayers: Prayer[] = prayerData;

export default function Index() {
  const [selectedPrayerId, setSelectedPrayerId] = useState<number | null>(null);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView>
          {prayers.map((prayer, _) => (
            <View style={{ marginBottom: 50 }}>
              <Link
                key={prayer.id}
                href={`./prayer/${prayer.id}`}
                style={{ fontWeight: "bold" }}
              >
                {prayer.title}
              </Link>
            </View>
          ))}
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    paddingHorizontal: 40,
  },
});
