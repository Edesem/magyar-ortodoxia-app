import { Link } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { Prayer } from "../../types/types";
import { haptic } from "../../utils/haptic";
import { prayerData } from "../../data/prayers";
import { verticalScale, moderateScale } from "react-native-size-matters";
import useTheme from "../../hooks/useTheme";

export function PrayerList() {
  const prayers: Prayer[] = prayerData;
  const theme = useTheme();

  return prayers.map((prayer: Prayer, _: any) => (
    <View style={{ marginBottom: 10 }} key={prayer.id}>
      {prayer.heading && (
        <>
          <View style={{ alignItems: "center" }}>
            <Text style={[styles.heading, { color: theme.heading }]}>
              {prayer.heading}
            </Text>
          </View>
          <View
            style={[styles.header_divider, { backgroundColor: theme.text }]}
          />
        </>
      )}
      <Link key={prayer.id} href={`./prayer/${prayer.id}`} onPress={haptic}>
        <View style={styles.card}>
          <Text style={[styles.prayer, { color: theme.text }]}>
            {prayer.title}
          </Text>
          <View>
            <Image
              source={require("../../assets/orthodox/star1.png")}
              style={[styles.chevron, { tintColor: theme.text }]}
            />
          </View>
        </View>
      </Link>

      <View style={[styles.prayer_divider, { backgroundColor: theme.text }]} />
    </View>
  ));
}

const styles = StyleSheet.create({
  chevron: {
    marginRight: 25,
    opacity: 0.6,
    width: "100%",
    height: verticalScale(20),
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
  heading: {
    fontSize: moderateScale(30, 0.8),
    fontFamily: "AlegreyaSC_400Regular",
  },
  prayer: {
    fontFamily: "Alegreya_400Regular",
    fontSize: moderateScale(25, 0.8),
    maxWidth: "85%",
    flex: 1,
  },
  card: {
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 25,
  },
});
