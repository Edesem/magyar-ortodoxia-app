import {
  LORD_HAVE_MERCY_3,
  LORD_HAVE_MERCY_12,
  LORD_HAVE_MERCY_40,
  GLORY,
  BOTH_NOW,
  GLORY_TO_YOU,
  MOST_HOLY,
  HOLY_GOD,
  REJOICE,
} from "../../data/prayers/constants/repeatedPrayers";
import { moderateScale } from "react-native-size-matters";
import { Text, StyleSheet } from "react-native";
import useTheme from "../../hooks/useTheme";

export default function Paragraphs({ paragraph }: { paragraph: string }) {
  const theme = useTheme();
  const dropCap = paragraph.charAt(0);
  const paragraphBody = paragraph.slice(1);

  const isCenteredParagraph = [
    LORD_HAVE_MERCY_3,
    LORD_HAVE_MERCY_12,
    LORD_HAVE_MERCY_40,
    GLORY,
    BOTH_NOW,
    GLORY_TO_YOU,
    MOST_HOLY,
    HOLY_GOD,
  ].includes(paragraph);
  const isRightAlignedParagraph = [REJOICE].includes(paragraph);

  const textAlign: "left" | "center" | "right" = isCenteredParagraph
    ? "center"
    : isRightAlignedParagraph
    ? "right"
    : "left";

  const verseLabelRegex = /\d?.? ?vers:/g;
  let verseLabel = null;
  let afterVerse = paragraphBody;

  if (verseLabelRegex.test(paragraph)) {
    verseLabel = paragraph.match(verseLabelRegex)![0];
    afterVerse = paragraphBody.slice(verseLabel!.length);
  }

  const repetitionMarkerRegex = /\(\d{1,2}x\)/;
  let repetitionLabel = null;
  let repetitionIndex = null;
  let beforeRepetition = afterVerse;
  let afterRepetition = null;

  if (repetitionMarkerRegex.test(afterVerse)) {
    repetitionLabel = afterVerse.match(repetitionMarkerRegex)![0];
    repetitionIndex = afterVerse.indexOf(repetitionLabel);
    beforeRepetition = afterVerse.slice(0, repetitionIndex);
    afterRepetition = afterVerse.slice(
      repetitionIndex + repetitionLabel.length
    );
  }

  return (
    <Text
      style={[styles.text, { color: theme.text, textAlign: textAlign }]}
    >
      <Text style={[styles.dropCap, { color: theme.subheading }]}>
        {dropCap}
      </Text>
      <Text style={[styles.text, { color: theme.subheading }]}>
        {verseLabel}
      </Text>
      {beforeRepetition}
      <Text style={[styles.text, { color: theme.subheading }]}>
        {repetitionLabel}
      </Text>
      {afterRepetition}
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
