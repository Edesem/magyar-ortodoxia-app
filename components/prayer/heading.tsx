import { moderateScale } from "react-native-size-matters";
import { PrayerSection as string } from "../../types/types";
import { Text, StyleSheet } from "react-native";
import useTheme from "../../hooks/useTheme";

export default function Heading({ heading }: { heading: string }) {
  const theme = useTheme();

  return (
      <Text style={[styles.heading, { color: theme.header }]}>
        {heading}
      </Text>
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
