import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Prayer, prayerData } from "../../data/prayers";
import { COLOURS } from "../../constants/colours";

export default function PrayerScreen() {
  const { id } = useLocalSearchParams();

  // For prayers (p) check p.id and see if it's equal to id
  const prayer: Prayer = prayerData.find((p) => p.id === Number(id))!;
  const sections = prayer.sections;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView>
          {sections.map((section, sectionIndex) => {
            const paragraphs = section.text.split("\n");

            return (
              <React.Fragment key={sectionIndex}>
                {/* heading */}
                {section.heading && (
                  <Text style={styles.heading}>{section.heading}</Text>
                )}

                {/* subheading */}
                {section.subheading && (
                  <Text style={styles.subheading}>{section.subheading}</Text>
                )}

                {/* paragraphs */}
                {paragraphs.map((paragraph, paragraphIndex) => {
                  const firstLetter = paragraph.charAt(0);
                  const rest = paragraph.slice(1);

                  return (
                    <Text style={styles.text} key={paragraphIndex}>
                      <Text style={styles.dropCap}>{firstLetter}</Text>
                      {rest}
                    </Text>
                  );
                })}
              </React.Fragment>
            );
          })}
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
    color: COLOURS.light_red,
    fontFamily: "Alegreya_400Regular_Italic",
  },
  postheading: {
    fontSize: 24,
    textAlign: "left",
    paddingBottom: 25,
    color: COLOURS.light_red,
    fontFamily: "Alegreya_400Regular_Italic",
  },
  dropCap: {
    lineHeight: 40,
    fontSize: 32,
    color: COLOURS.red,
  },
});
