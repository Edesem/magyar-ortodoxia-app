import { View, Image } from "react-native";
import { Prayer } from "../../types/types";
import useTheme from "../../hooks/useTheme";
import React from "react";

export default function BottomImage({ prayer }: { prayer: Prayer }) {
  const imageSize = prayer.imageSize ? prayer.imageSize : 100;
  const theme = useTheme();

  const imageSource =
    typeof prayer.image === "string" ? { uri: prayer.image } : prayer.image;

  return (
    <View style={{ alignItems: "center", paddingVertical: 70 }}>
      <Image
        source={imageSource}
        style={{
          height: imageSize,
          resizeMode: "contain",
          tintColor: theme.heading,
        }}
      />
    </View>
  );
}
