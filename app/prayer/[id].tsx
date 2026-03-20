import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  BOTH_NOW,
  GLORY,
  GLORY_BOTH,
  GLORY_TO_YOU,
  MOST_HOLY,
  Prayer,
  prayerData,
  TRISAGION,
  U_I_12,
  U_I_3,
  U_I_40,
  XAIRE,
} from "../../data/prayers";
import { COLOURS } from "../../constants/colours";
import { moderateScale } from "react-native-size-matters";
import useTheme from "../../hooks/useTheme";
import useOrientation from "../../hooks/useOrientation";
import { storage } from "../../services/storage";
import { STORAGE_KEYS } from "../../services/storageKeys";
import { Ionicons } from "@expo/vector-icons";
import { bookmarkService } from "../../services/bookmarkService";
import { haptic } from "../../utils/haptic";

export default function PrayerScreen() {
  const [progress, setProgress] = useState(0);
  const [isBookmarked, setIsBookedmarked] = useState(false);

  const { id } = useLocalSearchParams();
  const prayerId = id as string;
  const navigation = useNavigation();
  const theme = useTheme();

  // For prayers (p) check p.id and see if it's equal to id
  const prayer: Prayer = prayerData.find((p) => p.id === id)!;
  const sections = prayer.sections;

  const imageSize = prayer.imageSize ? prayer.imageSize : 100;

  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;

    const scrollY = contentOffset.y;
    const height = contentSize.height - layoutMeasurement.height;

    if (height > 0) {
      setProgress(scrollY / height);
    }
  };

  useEffect(() => {
    const loadBookmark = async () => {
      const saved = bookmarkService.isBookmarked(prayerId);
      setIsBookedmarked(await saved);
    };

    loadBookmark();
  }, [prayerId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: prayer.header_title ?? " ",
      headerRight: () => (
        <Pressable
          onPress={async () => {
            const next = await bookmarkService.toggle(prayerId);
            setIsBookedmarked(next);
            haptic();
          }}
          style={{ paddingHorizontal: 8 }}
        >
          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={24}
            color={theme.text}
          />
        </Pressable>
      ),
    });
  }, [navigation, prayer, isBookmarked]);

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
                const dropCap = paragraph.charAt(0);
                const paragraphBody = paragraph.slice(1);

                const isCenteredParagraph = [
                  U_I_3,
                  U_I_12,
                  U_I_40,
                  GLORY,
                  BOTH_NOW,
                  GLORY_TO_YOU,
                  MOST_HOLY,
                  TRISAGION,
                ].includes(paragraph);
                const isRightAlignedParagraph = [XAIRE].includes(paragraph);

                const textAlign: "left" | "center" | "right" =
                  isCenteredParagraph
                    ? "center"
                    : isRightAlignedParagraph
                    ? "right"
                    : "left";

                const repetitionMarkerRegex = /\(\d{1,2}x\)/;
                let repetitionMarker = null;
                let bodyWithoutRepetitionMarker = paragraphBody;

                if (repetitionMarkerRegex.test(paragraphBody)) {
                  repetitionMarker = paragraphBody.match(repetitionMarkerRegex);
                  bodyWithoutRepetitionMarker = paragraphBody.replace(
                    repetitionMarkerRegex,
                    ""
                  );
                }

                const verseLabelRegex = /\d?.? ?vers:/g;
                let verseLabel = null;
                let bodyWithoutVerseLabel = bodyWithoutRepetitionMarker;

                if (verseLabelRegex.test(paragraph)) {
                  verseLabel = paragraph.match(verseLabelRegex);
                  bodyWithoutVerseLabel = bodyWithoutRepetitionMarker.replace(
                    verseLabelRegex,
                    ""
                  );
                }

                return (
                  <Text
                    style={[
                      styles.text,
                      { color: theme.text, textAlign: textAlign },
                    ]}
                    key={paragraphIndex}
                  >
                    <Text style={[styles.dropCap, { color: theme.subheading }]}>
                      {dropCap}
                    </Text>
                    <Text style={[styles.text, { color: theme.subheading }]}>
                      {verseLabel}
                    </Text>
                    {bodyWithoutVerseLabel}
                    <Text style={[styles.text, { color: theme.subheading }]}>
                      {repetitionMarker}
                    </Text>
                  </Text>
                );
              })}
            </React.Fragment>
          );
        })}

        <View style={{ alignItems: "center", paddingVertical: 70 }}>
          <Image
            source={prayer.image}
            style={{
              height: imageSize,
              resizeMode: "contain",
              tintColor: theme.heading,
            }}
          />
        </View>
      </ScrollView>

      <View style={{ width: 12, height: "100%", position: "absolute" }}>
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
