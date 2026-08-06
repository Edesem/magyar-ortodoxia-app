import parseParagraph from "../components/prayer/parseParagraph";
import { LORD_HAVE_MERCY_3, LORD_HAVE_MERCY_12, LORD_HAVE_MERCY_40, GLORY, BOTH_NOW, GLORY_TO_YOU, MOST_HOLY, HOLY_GOD, REJOICE } from "../data/prayers/constants/repeatedPrayers";

it("handles an empty paragraph safely", () => {
    const paragraph = "";
    const parsedParagraph = parseParagraph(paragraph);
    expect(parsedParagraph.dropCap).toBe("")
    expect(parsedParagraph.repetitionLabel).toBeNull()
    expect(parsedParagraph.beforeRepetition).toBe("")
    expect(parsedParagraph.afterRepetition).toBeNull()
    expect(parsedParagraph.textAlign).toBe("left")
    expect(parsedParagraph.verseLabel).toBeNull()
})

it("returns the first character as the drop cap", () => {
    const paragraph = "A This is a test paragraph.";
    const parsedParagraph = parseParagraph(paragraph);
    expect(parsedParagraph.dropCap).toBe("A");
});

it.each([
    LORD_HAVE_MERCY_3,
    LORD_HAVE_MERCY_12,
    LORD_HAVE_MERCY_40,
    GLORY,
    BOTH_NOW,
    GLORY_TO_YOU,
    MOST_HOLY,
    HOLY_GOD,
])("returns the correct text alignment for centered paragraphs", (paragraph) => {
    const parsedParagraph = parseParagraph(paragraph);
    expect(parsedParagraph.textAlign).toBe("center");
});

it("returns the correct text alignment for right-aligned paragraphs", () => {
    const paragraph = REJOICE;
    const parsedParagraph = parseParagraph(paragraph);
    expect(parsedParagraph.textAlign).toBe("right");
});

it("returns the correct text alignment for left-aligned paragraphs", () => {
    const paragraph = "This is a test paragraph.";
    const parsedParagraph = parseParagraph(paragraph);
    expect(parsedParagraph.textAlign).toBe("left");
});

it("returns verse label", () => {
    const paragraph = "1. vers: This is a test paragraph.";
    const parsedParagraph = parseParagraph(paragraph);
    expect(parsedParagraph.verseLabel).toBe("1. vers:");
})

it("does not return verse label", () => {
    const paragraph = "This is a test paragraph.";
    const parsedParagraph = parseParagraph(paragraph);
    expect(parsedParagraph.verseLabel).toBeNull();
})

it.each([
    ["This is a test paragraph. (3x)", "(3x)"],
    ["This is a test paragraph. (12x)", "(12x)"],
    ["This is a test paragraph. (40x)", "(40x)"],
])("returns the correct repetition label for paragraphs with repetition markers", (paragraph, expectedRepetitionLabel) => {
    const parsedParagraph = parseParagraph(paragraph);
    expect(parsedParagraph.repetitionLabel).toBe(expectedRepetitionLabel);
});

it("does not create a repetition label when no marker is present", () => {
    const parsedParagraph = parseParagraph("This is ordinary text.");

    expect(parsedParagraph.repetitionLabel).toBeNull();
});

it("returns before and after repetition text", () => {
    const paragraph = "This is a test paragraph. (3x) This is after the repetition.";
    const parsedParagraph = parseParagraph(paragraph);
    expect(parsedParagraph.beforeRepetition).toBe("his is a test paragraph. ");
    expect(parsedParagraph.afterRepetition).toBe(" This is after the repetition.");
})

it("keeps all remaining text before repetition when no marker is present", () => {
    const paragraph = "This is a test paragraph. This is a test paragraph.";
    const parsedParagraph = parseParagraph(paragraph);
    expect(parsedParagraph.beforeRepetition).toBe("his is a test paragraph. This is a test paragraph.");
    expect(parsedParagraph.afterRepetition).toBeNull();
})
