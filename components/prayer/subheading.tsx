import { moderateScale } from "react-native-size-matters";
import { PrayerSection as string } from "../../types/types";
import { Text, StyleSheet } from "react-native";
import useTheme from "../../hooks/useTheme";

export default function Subheading({ subheading }: { subheading: string }) {
  const theme = useTheme();

  return (
      <Text style={[styles.subheading, { color: theme.header }]}>
        {subheading}
      </Text>
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
