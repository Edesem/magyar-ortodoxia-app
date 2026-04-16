import { moderateScale } from "react-native-size-matters";
import { PrayerSection } from "../../types/types";
import { Text, StyleSheet } from "react-native";
import useTheme from "../../hooks/useTheme";

export default function Postheading({ section }: { section: PrayerSection }) {
  const theme = useTheme();

  return (
    section.postheading && (
      <Text style={[styles.postheading, { color: theme.header }]}>
        {section.postheading}
      </Text>
    )
  );
}

const styles = StyleSheet.create({
  postheading: {
    fontSize: moderateScale(24),
    textAlign: "left",
    paddingBottom: 25,
    fontFamily: "Alegreya_400Regular_Italic",
  },
});
