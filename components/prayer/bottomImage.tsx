import { View, Image } from "react-native";
import { Prayer } from "../../types/types";
import useTheme from "../../hooks/useTheme";

export default function BottomImage({ prayer }: { prayer: Prayer }) {
  const imageSize = prayer.imageSize ? prayer.imageSize : 100;
  const theme = useTheme();

  return (
    <View style={{ alignItems: "center", paddingVertical: 70 }}>
      <Image
        source={prayer.image}
        style={{
          height: imageSize,
          resizeMode: "contain",
          tintColor: theme.heading,
        }}
      />
    </View>
  );
}
