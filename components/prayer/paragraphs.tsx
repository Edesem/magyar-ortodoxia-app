import { moderateScale } from "react-native-size-matters";
import { Text, StyleSheet } from "react-native";
import useTheme from "../../hooks/useTheme";
import React from "react";
import { ParsedParagraphItem } from "./parseParagraph";

function Paragraphs({ paragraph }: { paragraph: ParsedParagraphItem }) {
  const theme = useTheme();


  return (
    <Text
      style={[styles.text, { color: theme.text, textAlign: paragraph.textAlign }]}
    >
      <Text style={[styles.dropCap, { color: theme.subheading }]}>
        {paragraph.dropCap}
      </Text>
      <Text style={[styles.text, { color: theme.subheading }]}>
        {paragraph.verseLabel}
      </Text>
      {paragraph.beforeRepetition}
      <Text style={[styles.text, { color: theme.subheading }]}>
        {paragraph.repetitionLabel}
      </Text>
      {paragraph.afterRepetition}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(24),
    lineHeight: moderateScale(34),
    textAlign: "left",
    fontFamily: "Alegreya_400Regular",
  },
  dropCap: {
    lineHeight: moderateScale(40),
    fontSize: moderateScale(32),
  },
});

export default React.memo(Paragraphs);