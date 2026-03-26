import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import useTheme from "../../hooks/useTheme";
import useOrientation from "../../hooks/useOrientation";
import { bookmarkService } from "../../services/bookmarkService";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { haptic } from "../../utils/haptic";
import { prayerData } from "../../data/prayers";
import { Prayer } from "../../types/types";

const prayers: Prayer[] = prayerData;

export default function kanon() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  const theme = useTheme();

  const androidPadding = Platform.OS === "android" ? 80 : 0;

  const orientationHorizontalPadding =
    useOrientation() === "landscape" ? 80 : 10;
  const orientationVerticalPadding = useOrientation() === "landscape" ? 20 : 0;

  useEffect(() => {
    const loadBookmarks = async () => {
      const list = await bookmarkService.getAll();
      setBookmarks(list);
    };

    loadBookmarks();
  }, [bookmarks]);

  const bookmark = prayers.filter((prayer) => bookmarks.includes(prayer.id));

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: orientationHorizontalPadding,
        paddingTop: androidPadding,
      }}
      contentInsetAdjustmentBehavior="automatic"
      style={[styles.container, { backgroundColor: theme.bg }]}
    >
      <Text
        style={[styles.banner, { color: theme.header }]}
        adjustsFontSizeToFit
      >
        KÜnon
      </Text>

      {bookmark.map((prayer, _) => (
        <View style={{ marginBottom: 10 }} key={prayer.id}>
          {prayer.heading && (
            <>
              <View style={{ alignItems: "center" }}></View>
            </>
          )}
          <View style={styles.card}>
            <Link
              key={prayer.id}
              href={`../prayer/${prayer.id}`}
              style={[styles.prayer, { color: theme.text }]}
              onPress={haptic}
            >
              {prayer.title}
            </Link>
            <View>
              <Image
                source={require("../../assets/orthodox/star3.png")}
                style={[styles.chevron, { tintColor: theme.text }]}
              />
            </View>
          </View>
          <View
            style={[styles.prayer_divider, { backgroundColor: theme.text }]}
          />
        </View>
      ))}

      <Image
        source={require("../../assets/orthodox/GolgothaCross.png")}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "contain",
          marginVertical: 50,
          tintColor: theme.header,
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    fontSize: moderateScale(70, 0.8),
    fontFamily: "Athonite",
    textAlign: "center",
    paddingVertical: 40,
  },
  heading: {
    fontSize: moderateScale(30, 0.8),
    fontFamily: "AlegreyaSC_400Regular",
  },
  prayer: {
    fontFamily: "Alegreya_400Regular",
    fontSize: moderateScale(25, 0.8),
    maxWidth: "80%",
    flex: 1,
    paddingLeft: 25,
  },
  card: {
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chevron: {
    marginRight: 25,
    opacity: 0.6,
    width: "100%",
    height: verticalScale(25),
  },
  header_divider: {
    height: 1,
    marginVertical: 14,
    opacity: 0.2,
  },
  prayer_divider: {
    height: 0.8,
    width: "85%",
    marginVertical: 8,
    alignSelf: "center",
    opacity: 0.2,
  },
});
