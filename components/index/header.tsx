import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { HEADERS } from "../../constants/headers";
import useTheme from "../../hooks/useTheme";
import { haptic } from "../../utils/haptic";

export function Header() {
  const [header, setHeader] = useState(0);
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => {
        haptic();
        if (header === HEADERS.length - 1) {
          setHeader(0);
        } else {
          setHeader(header + 1);
        }
      }}
    >
      <Text
        style={[styles.banner, { color: theme.header }]}
        numberOfLines={2}
        adjustsFontSizeToFit
      >
        {HEADERS[header]}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  banner: {
    fontSize: moderateScale(65, 0.8),
    fontFamily: "Athonite",
    textAlign: "center",
    paddingVertical: 40,
  },
});
