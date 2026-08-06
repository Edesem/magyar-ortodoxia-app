import Animated, {
  useAnimatedScrollHandler, useDerivedValue,
  useSharedValue
} from "react-native-reanimated";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View, Pressable
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
import parseParagraph, {
  ParsedParagraphItem,
} from "../../components/prayer/parseParagraph";


type FlatItem =
  | {
    type: "heading";
    content: string;
  }
  | {
    type: "subheading";
    content: string;
  }
  | ParsedParagraphItem
  | {
    type: "postheading";
    content: string;
  };

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

  console.time("flatten");

  const flattened = sections.flatMap((section) => {
    const items: FlatItem[] = [];

    if (section.heading) {
      items.push({ type: "heading", content: section.heading });
    }

    if (section.subheading) {
      items.push({ type: "subheading", content: section.subheading });
    }

    if (section.text) {
      const paragraphs = section.text.split("\n");
      paragraphs.forEach((paragraph) => {
        items.push(parseParagraph(paragraph));
      });
    }

    if (section.postheading) {
      items.push({ type: "postheading", content: section.postheading });
    }

    return items;
  });
  console.timeEnd("flatten");

  return (
    <>
      <Animated.ScrollView
        onScroll={handleScroll}
        onContentSizeChange={(w, h) => {
          contentHeight.value = h;
        }}
        onLayout={(e) => {
          layoutHeight.value = e.nativeEvent.layout.height;
        }}
        scrollEventThrottle={16}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          paddingHorizontal: orientationPadding,
          paddingBottom: 40,
          paddingTop: 10,
        }}
        style={{ flex: 1, backgroundColor: theme.bg }}
      >
        {flattened.map((section, index) => {
          const key = `${section.type}-${index}`;

          switch (section.type) {
            case "heading":
              return <Heading key={key} heading={section.content} />;
            case "subheading":
              return <Subheading key={key} subheading={section.content} />;
            case "text":
              return <Paragraphs key={key} paragraph={section} />;
            case "postheading":
              return <Postheading key={key} postheading={section.content} />;

            default:
              return null;
          }
        })}
        <BottomImage prayer={prayer} />
      </Animated.ScrollView><Scrollbar progress={progress} />
    </>
  );
}
