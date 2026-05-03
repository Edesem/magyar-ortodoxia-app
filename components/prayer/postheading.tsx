import { moderateScale } from "react-native-size-matters";
import { PrayerSection as string } from "../../types/types";
import { Text, StyleSheet } from "react-native";
import useTheme from "../../hooks/useTheme";

export default function Postheading({
  postheading: postheading,
}: {
  postheading: string;
}) {
  const theme = useTheme();

  return (
    <Text style={[styles.postheading, { color: theme.header }]}>
      {postheading}
    </Text>
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
