import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Prayer, prayerData } from "../../data/prayers";
import { COLOURS } from "../../constants/colours";
import { AlegreyaSC_400Regular } from "@expo-google-fonts/alegreya-sc";
import { Alegreya_400Regular } from "@expo-google-fonts/alegreya";

export default function PrayerScreen() {
  const { id } = useLocalSearchParams();

  // For prayers (p) check p.id and see if it's equal to id
  const prayer: Prayer = prayerData.find((p) => p.id === Number(id))!;
  const sections = prayer.sections;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView>
          {sections.map((section, _) =>
            section.heading ? (
              <>
                <Text style={styles.heading}>{section.heading}</Text>
                {section.subheading ? (
                  <Text style={styles.subheading}>{section.subheading}</Text>
                ) : null}
                <Text style={styles.text}>{section.text}</Text>
              </>
            ) : (
              <>
                <Text style={styles.text}>{section.text}</Text>

                {section.postheading ? (
                  <Text style={styles.postheading}>{section.postheading}</Text>
                ) : null}
              </>
            )
          )}
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
    fontSize: 24,
    lineHeight: 34,
    textAlign: "left",
    fontFamily: "Alegreya_400Regular",
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    paddingVertical: 15,
    color: COLOURS.red,
    fontFamily: "AlegreyaSC_400Regular",
  },
  subheading: {
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 25,
    color: COLOURS.red,
    fontFamily: "Alegreya_400Regular_Italic",
  },
  postheading: {
    fontSize: 24,
    textAlign: "left",
    paddingBottom: 25,
    color: COLOURS.red,
    fontFamily: "Alegreya_400Regular_Italic",
  },
});
