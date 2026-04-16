import { moderateScale } from "react-native-size-matters";
import { PrayerSection } from "../../types/types";
import { Text, StyleSheet } from "react-native";
import useTheme from "../../hooks/useTheme";

export default function Subheading({ section }: { section: PrayerSection }) {
  const theme = useTheme();

  return (
    section.subheading && (
      <Text style={[styles.subheading, { color: theme.header }]}>
        {section.subheading}
      </Text>
    )
  );
}

const styles = StyleSheet.create({
  subheading: {
    fontSize: moderateScale(25),
    textAlign: "center",
    paddingBottom: 25,
    fontFamily: "Alegreya_400Regular_Italic",
  },
});
