import { moderateScale } from "react-native-size-matters";
import { PrayerSection } from "../../types/types";
import { Text, StyleSheet } from "react-native";
import useTheme from "../../hooks/useTheme";

export default function Heading({ section }: { section: PrayerSection }) {
  const theme = useTheme();

  return (
    section.heading && (
      <Text style={[styles.heading, { color: theme.header }]}>
        {section.heading}
      </Text>
    )
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: moderateScale(30),
    textAlign: "center",
    paddingVertical: moderateScale(15),
    fontFamily: "AlegreyaSC_400Regular",
  },
});
