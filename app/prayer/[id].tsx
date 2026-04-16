import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import useTheme from "../../hooks/useTheme";
import useOrientation from "../../hooks/useOrientation";
import { Ionicons } from "@expo/vector-icons";
import { bookmarkService } from "../../services/bookmarkService";
import { haptic } from "../../utils/haptic";
import { prayerData } from "../../data/prayers";
import { Prayer } from "../../types/types";
import Heading from "../../components/prayer/heading";
import Subheading from "../../components/prayer/subheading";
import Paragraphs from "../../components/prayer/paragraphs";
import Postheading from "../../components/prayer/postheading";
import BottomImage from "../../components/prayer/bottomImage";
import Scrollbar from "../../components/prayer/scrollBar";

export default function PrayerScreen() {
  const [isBookmarked, setIsBookedmarked] = useState(false);

  const { id } = useLocalSearchParams();
  const prayerId = id as string;
  const navigation = useNavigation();
  const theme = useTheme();

  const scrollY = useSharedValue(0);
  const contentHeight = useSharedValue(1);
  const layoutHeight = useSharedValue(1);

  // For prayers (p) check p.id and see if it's equal to id
  const prayer: Prayer = prayerData.find((p) => p.id === id)!;
  const sections = prayer.sections;

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const progress = useDerivedValue(() => {
    const maxScroll = contentHeight.value - layoutHeight.value;
    return maxScroll > 0 ? scrollY.value / maxScroll : 0;
  });

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

  const sectionsWithParagraphs = sections.map((section) => ({
    ...section,
    paragraphs: section.text.split("\n"),
  }));

  const Footer = React.memo(() => <BottomImage prayer={prayer} />);

  return (
    <View style={{ flexDirection: "row" }}>
      <Animated.FlatList
        data={sectionsWithParagraphs}
        onScroll={handleScroll}
        onContentSizeChange={(w, h) => {
          contentHeight.value = h;
        }}
        onLayout={(e) => {
          layoutHeight.value = e.nativeEvent.layout.height;
        }}
        scrollEventThrottle={16}
        keyExtractor={(section, index) => index.toString()}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          paddingHorizontal: orientationPadding,
          paddingBottom: 40,
          paddingTop: 10,
        }}
        style={{ flex: 1, backgroundColor: theme.bg }}
        ListFooterComponent={Footer}
        renderItem={({ item: section }) => (
          <>
            <React.Fragment>
              <Heading section={section} />
              <Subheading section={section} />

              {section.paragraphs.map((p, i) => (
                <Paragraphs
                  key={`${section.heading || "s"}-${i}`}
                  paragraph={p}
                />
              ))}

              <Postheading section={section} />
            </React.Fragment>
          </>
        )}
      />

      <Scrollbar progress={progress} />
    </View>
  );
}
