import { Image } from "react-native";
import useTheme from "../../hooks/useTheme";

export function BottomImage() {
  const theme = useTheme();

  return (
    <Image
      source={require("../../assets/orthodox/TwoBarCross.png")}
      style={{
        width: "100%",
        height: 300,
        resizeMode: "contain",
        marginVertical: 50,
        tintColor: theme.header,
      }}
    />
  );
}
