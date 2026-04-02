import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { haptic } from "../../utils/haptic";
import useOrientation from "../../hooks/useOrientation";
import useTheme from "../../hooks/useTheme";

export function InformationButton() {
  const theme = useTheme();
  const orientationVerticalPadding = useOrientation() === "landscape" ? 20 : 0;

  return (
    <Link
      href={"./information"}
      style={{ marginTop: orientationVerticalPadding }}
      onPress={haptic}
    >
      <MaterialCommunityIcons
        name="information-variant-circle"
        size={35}
        color={theme.subtext}
        style={{ position: "absolute" }}
      />
    </Link>
  );
}
