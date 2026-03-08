import { useColorScheme } from "react-native";
import { COLOURS } from "../constants/colours";

export interface Theme {
  text: string;
  bg: string;
  header: string;
  heading: string;
  subheading: string;
}

export default function useTheme() {
  const colourScheme = useColorScheme();

  const theme = {
    text: colourScheme === "light" ? COLOURS.light.text : COLOURS.dark.text,
    bg: colourScheme === "light" ? COLOURS.light.bg : COLOURS.dark.bg,
    header:
      colourScheme === "light" ? COLOURS.light.header : COLOURS.dark.header,
    heading:
      colourScheme === "light" ? COLOURS.light.heading : COLOURS.dark.heading,
    subheading:
      colourScheme === "light"
        ? COLOURS.light.subheading
        : COLOURS.dark.subheading,
  };

  return theme;
}
