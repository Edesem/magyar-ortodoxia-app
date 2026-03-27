import { Prayer } from "../../../types/types";
import { PSALM_16, PSALM_24, PSALM_50 } from "../constants/psalms";
import { ALLELUIA, BOTH_NOW, COME_LET_US, GLORY, GLORY_BOTH, HOLY_GOD, IN_THE_NAME, INTRO, LORD_HAVE_MERCY_12, LORD_HAVE_MERCY_3, LORD_HAVE_MERCY_40, MIDDLE_NO_AXION, MORE_HONOURABLE, THROUGH_THE_PRAYERS, WHO_AT_ALL_TIMES } from "../constants/repeatedPrayers";

export const third_hour: Prayer = {
  id: "third_hour",
  title: "III. imaóra",
  header_title: "III. imaóra",
  image: require("../../../assets/orthodox/decorative8.png"),
  imageSize: 400,
  sections: [
    {
        text: `${INTRO} Ámin.
        
${LORD_HAVE_MERCY_12}

${GLORY_BOTH}

${COME_LET_US}`
    },
    {
        heading: "16. zsoltár",
        text: `${PSALM_16}`
    },
    {
        heading: "24. zsoltár",
        text: `${PSALM_24}`
    },
    {
        heading: "50. zsoltár",
        text: `${PSALM_50}
        
${ALLELUIA}

${GLORY}
`
    },
    {
        subheading: "Apolytikion",
        text: `${BOTH_NOW}
        
Istennek Szülője, Te vagy az igazi szöllőtőke, amelyről kisarjadt nekünk az Élet Gyümölcse. Hozzád esedezünk, Nagyasszonyunk, járj közre az apostolokkal és minden szentekkel, hogy irgalmat nyerjen a mi lelkünk.

Áldott az Úr Isten, áldott az Úr napról napra; segítsen meg minket a mi üdvösségünk Istene, az üdvözítés Istene.

${MIDDLE_NO_AXION}

${THROUGH_THE_PRAYERS}`
    },
    {
        subheading: "Kondákion",
        text: `${LORD_HAVE_MERCY_40}
        
${WHO_AT_ALL_TIMES}

${LORD_HAVE_MERCY_3}

${GLORY}

${MORE_HONOURABLE}

${THROUGH_THE_PRAYERS}

Uralkodó Isten, mindenható Atya, Úr Jézus Krisztus, egyszülött Fiú, és Szent Lélek; egy Istenség, egy Hatalom, irgalmazz nékem bűnösnek, és Néked tetsző ítélettel üdvözíts engem, a Te méltatlan szolgádat; mert áldott vagy mindörökkön örökké. Ámin.`
    }
  ],
};
