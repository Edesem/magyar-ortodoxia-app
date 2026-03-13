import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, StyleSheet, ScrollView, View, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { BOTH_NOW, GLORY, GLORY_BOTH, GLORY_TO_YOU, MOST_HOLY, Prayer, prayerData, TRISAGION, U_I_12, U_I_3, U_I_40 } from "../../data/prayers";
import { COLOURS } from "../../constants/colours";
import { moderateScale } from "react-native-size-matters";
import useTheme from "../../hooks/useTheme";
import useOrientation from "../../hooks/useOrientation";

export default function PrayerScreen() {
  const [progress, setProgress] = useState(0);
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const theme = useTheme();

  // For prayers (p) check p.id and see if it's equal to id
  const prayer: Prayer = prayerData.find((p) => p.id === Number(id))!;
  const sections = prayer.sections;

  const imageSize = prayer.imageSize ? prayer.imageSize: 100;

  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;

    const scrollY = contentOffset.y;
    const height = contentSize.height - layoutMeasurement.height;

    if (height > 0) {
      setProgress(scrollY / height);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: prayer.header_title ?? " ",
    });
  }, [navigation, prayer]);

  const orientationPadding = useOrientation() === "landscape" ? 80 : 25;

  return (
    <View style={{ flexDirection: "row" }}>
      <ScrollView
        onScroll={handleScroll}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          paddingHorizontal: orientationPadding,
          paddingBottom: 40,
          paddingTop: 10,
        }}
        style={{ flex: 1, backgroundColor: theme.bg }}
      >
        {sections.map((section, sectionIndex) => {
          const paragraphs = section.text.split("\n");

          return (
            <React.Fragment key={sectionIndex}>
              {/* heading */}
              {section.heading && (
                <Text style={[styles.heading, { color: theme.header }]}>
                  {section.heading}
                </Text>
              )}

              {/* subheading */}
              {section.subheading && (
                <Text style={[styles.subheading, { color: theme.header }]}>
                  {section.subheading}
                </Text>
              )}

              {/* paragraphs */}
              {paragraphs.map((paragraph, paragraphIndex) => {
                const firstLetter = paragraph.charAt(0);
                const firstChunk = paragraph.slice(1);

                const centered = [U_I_3, U_I_12, U_I_40,GLORY, BOTH_NOW, GLORY_TO_YOU, MOST_HOLY, TRISAGION].includes(paragraph)

                const centering = centered ? "center" : "left"

                const regex = /\(\d{1,2}x\)/;
                let match = null;
                let rest = firstChunk;

                if (regex.test(firstChunk)) {
                  match = firstChunk.match(regex);
                  rest = firstChunk.replace(regex, "");
                }

                return (
                  <Text
                    style={[styles.text, { color: theme.text, textAlign: centering }]}
                    key={paragraphIndex}
                  >
                    <Text style={[styles.dropCap, { color: theme.subheading }]}>
                      {firstLetter}
                    </Text>
                    {rest}
                    <Text style={[styles.text, { color: theme.subheading }]}>
                      {match}
                    </Text>
                  </Text>
                );
              })}
            </React.Fragment>
          );
        })}

        <View style={{alignItems: "center", paddingTop: 70}}>
          <Image
            source={prayer.image}
            style={{ height: imageSize, resizeMode: "contain", tintColor: theme.heading }}
          />
        </View>
      </ScrollView>

      <View style={{ width: 10, height: "100%", position: "absolute" }}>
        <View
          style={{
            width: "100%",
            backgroundColor: theme.header,
            height: `${progress * 100}%`,
            borderBottomRightRadius: 10,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: "AlegreyaSC_400Regular",
  },
  subheading: {
    fontSize: moderateScale(25),
    textAlign: "center",
    paddingBottom: 25,
    fontFamily: "Alegreya_400Regular_Italic",
  },
  postheading: {
    fontSize: moderateScale(24),
    textAlign: "left",
    paddingBottom: 25,
    fontFamily: "Alegreya_400Regular_Italic",
  },
  dropCap: {
    lineHeight: moderateScale(40),
    fontSize: moderateScale(32),
  },
});
