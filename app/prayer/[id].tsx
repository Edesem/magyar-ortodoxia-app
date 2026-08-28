import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Pressable } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import BottomImage from "../../components/prayer/bottomImage";
import Heading from "../../components/prayer/heading";
import Paragraphs from "../../components/prayer/paragraphs";
import parseParagraph, {
  ParsedParagraphItem,
} from "../../components/prayer/parseParagraph";
import Postheading from "../../components/prayer/postheading";
import Scrollbar from "../../components/prayer/scrollBar";
import Subheading from "../../components/prayer/subheading";
import { prayerData } from "../../data/prayers";
import useOrientation from "../../hooks/useOrientation";
import useTheme from "../../hooks/useTheme";
import { bookmarkService } from "../../services/bookmarkService";
import { Prayer } from "../../types/types";
import { haptic } from "../../utils/haptic";

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
  }, [navigation, prayer, isBookmarked, prayerId, theme.text]);

  const orientationPadding = useOrientation() === "landscape" ? 80 : 25;

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
      </Animated.ScrollView>
      <Scrollbar progress={progress} />
    </>
  );
}
