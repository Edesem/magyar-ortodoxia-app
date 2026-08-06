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

type TextAlign = "left" | "center" | "right";

export type ParsedParagraphItem = {
    type: "text";
    dropCap: string;
    verseLabel: string | null;
    beforeRepetition: string;
    repetitionLabel: string | null;
    afterRepetition: string | null;
    textAlign: TextAlign;
  };

export default function parseParagraph(paragraph: string): ParsedParagraphItem {
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

  const textAlign: TextAlign = isCenteredParagraph
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

  return {
    type: "text",
    dropCap,
    verseLabel,
    beforeRepetition,
    repetitionLabel,
    afterRepetition,
    textAlign,
  };
}
