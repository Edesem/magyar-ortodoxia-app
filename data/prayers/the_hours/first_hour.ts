import { Prayer } from "../../../types/types";
import { PSALM_100, PSALM_5, PSALM_89 } from "../constants/psalms";
import {
  ALLELUIA,
  BOTH_NOW,
  COME_LET_US,
  GLORY,
  GLORY_BOTH,
  HOLY_GOD,
  IN_THE_NAME,
  INTRO,
  LORD_HAVE_MERCY_3,
  LORD_HAVE_MERCY_40,
  MIDDLE_NO_AXION,
  MORE_HONOURABLE,
  THROUGH_THE_PRAYERS,
  WHO_AT_ALL_TIMES,
} from "../constants/repeatedPrayers";

export const first_hour: Prayer = {
  id: "first_hour",
  title: "I. imaóra",
  heading: "Az imaórák",
  header_title: "I. imaóra",
  image: require("../../../assets/orthodox/church.png"),
  imageSize: 400,
  sections: [
    {
      text: `${IN_THE_NAME}
        
${COME_LET_US}`,
    },
    {
      heading: "5. zsoltár",
      text: `${PSALM_5}`,
    },
    {
      heading: "89. zsoltár",
      text: `${PSALM_89}`,
    },
    {
      heading: "100. zsoltár",
      text: `${PSALM_100}
        
${ALLELUIA}

${GLORY}
`,
    },
    {
      subheading: "Apolytikion",
      text: `${BOTH_NOW}

Minek is nevezzünk Téged, Kegyelembefogadott? Mennynek-é, mert felkeltetted az Igazság Napvilágát? Paradicsomnak-e, mert kihajtottad az enyészhatatlenség Virágát? Szűznek-e, mert érintetlennek maradtál? Tisztaságos Anyának-e, mert szent karjaidban hordoztad a Fiadat, a mindenek Istenét? Őt kérleld, hogy üdvözítse a mi lelkünket.

Lépteimet irányítsd a Te beszéded szerint, és ne kerítsen engem hatalmába semmiféle törvénytelenség. Ments meg engem az emberek rágalmaitól, és megőrzöm parancsolataidat. Világosítsd meg orcádat a Te szolgádon, és taníts meg engem a Te igazságaidra. Teljenek meg ajkaim a Te dicséreteddel, Uram, hogy énekeljem a Te dicsőségedet, egész napon át a Te fennségedet.

${MIDDLE_NO_AXION}

${THROUGH_THE_PRAYERS}
`,
    },
    {
      subheading: "Kondákion",
      text: `${LORD_HAVE_MERCY_40}
        
${WHO_AT_ALL_TIMES}

${LORD_HAVE_MERCY_3}

${GLORY_BOTH}

${MORE_HONOURABLE}

${GLORY_BOTH}

${LORD_HAVE_MERCY_3}

${THROUGH_THE_PRAYERS}`,
    },
  ],
};
