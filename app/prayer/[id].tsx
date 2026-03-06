import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Prayer, prayerData } from "../../data/prayers";
import { COLOURS } from "../../constants/colours";
import { moderateScale } from "react-native-size-matters";

export default function PrayerScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  // For prayers (p) check p.id and see if it's equal to id
  const prayer: Prayer = prayerData.find((p) => p.id === Number(id))!;
  const sections = prayer.sections;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: prayer.header_title ?? " ",
    });
  }, [navigation, prayer]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingHorizontal: 25,
        paddingBottom: 40,
        paddingTop: 10,
      }}
      style={{ flex: 1 }}
    >
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.background_white,
  },
  text: {
    fontSize: moderateScale(24),
    lineHeight: moderateScale(34),
    textAlign: "left",
    fontFamily: "Alegreya_400Regular",
  },
  heading: {
    fontSize: moderateScale(30),
    textAlign: "center",
    paddingVertical: moderateScale(15),
    color: COLOURS.red,
    fontFamily: "AlegreyaSC_400Regular",
  },
  subheading: {
    fontSize: moderateScale(25),
    textAlign: "center",
    paddingBottom: 25,
    color: COLOURS.light_red,
    fontFamily: "Alegreya_400Regular_Italic",
  },
  postheading: {
    fontSize: moderateScale(24),
    textAlign: "left",
    paddingBottom: 25,
    color: COLOURS.light_red,
    fontFamily: "Alegreya_400Regular_Italic",
  },
  dropCap: {
    lineHeight: moderateScale(40),
    fontSize: moderateScale(32),
    color: COLOURS.red,
  },
});
