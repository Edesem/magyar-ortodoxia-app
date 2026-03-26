import { Prayer } from "../../../types/types";
import { PSALM_53, PSALM_54, PSALM_90 } from "../constants/psalms";
import { ALLELUIA, BOTH_NOW, COME_LET_US, GLORY, GLORY_BOTH, IN_THE_NAME, LORD_HAVE_MERCY_12, LORD_HAVE_MERCY_3, MIDDLE_NO_AXION, MORE_HONOURABLE, THROUGH_THE_PRAYERS, WHO_AT_ALL_TIMES } from "../constants/repeatedPrayers";

export const sixth_hour: Prayer = {
    id: "sixth_hour",
    title: "VI. imaóra",
    header_title: "VI. imaóra",
    image: "",
    sections: [
        {
            text: `${IN_THE_NAME}
            
${COME_LET_US}`
        },
        {
            heading: "53. zsoltár",
            text: `${PSALM_53}`
        },
        {
            heading: "54. zsoltár",
            text: `${PSALM_54}`
        },
        {
            heading: "90. zsoltár",
            text: `${PSALM_90}
            
${ALLELUIA}

${GLORY}
`
        },
        {
            subheading: "Apolytikion",
            text: `${BOTH_NOW}
            
Minthogy nincsen bátorságunk a sok bűnünk miatt, Te kérleld a Szülöttedet, Istennek Szülője; mert nagy hatása van az Anya könyörgésének az Uralkodó jóindulatára. Ne vesd meg a bűnösök esedezését óh Tisztaságos, mert irgalmas és kész üdvözíteni Ő, ki érettünk szenvedni is hajlandó volt.

Hamar érjen el minket a Te könyörületed, Urunk, mert elnyomorodtunk nagyon; segíts meg minket, üdvözítő Istenünk, a Te neved dicsőségéért. Urunk, szabadíts meg minket, és könyörülj a mi bűneinken, a Te nevedért.

${MIDDLE_NO_AXION} Ámin.
`
        },
        {
            subheading: "Kondákion",
            text: `${LORD_HAVE_MERCY_12}
            
${WHO_AT_ALL_TIMES}

${LORD_HAVE_MERCY_3}

${GLORY_BOTH}

${MORE_HONOURABLE}

${THROUGH_THE_PRAYERS}

Seregeknek Ura és Istene, és egész teremtésnek Alkotója, aki sejthetetlen irgalmad nagyságában leküldötted a Te egyszülött Fiadat, a mi Urunkat Jézus Krisztust a mi nemzetségünk üdvözítésére, és az Ő drága keresztje által eltépted bűneink adóságlevelét, és diadalmaskodtál benne a sötétség fejedelemségei és hatalmai felett; Temagad, embereket szerető Uralkodónk, fogadd el a mi bűnösök hálaadó és könyörgő imádságait is, és szabadíts meg minket minden pusztító és sötét vétektől, és romlásunkat kereső minden látható és láthatatlan ellenségektől. Szegezd le testünket a Te félelmeddel, és ne hajtsd a mi szívünket a gonoszság beszédeire és gondolataira, hanem a Te szereteteddel sebezd meg a lelkünket, hogy mindenkor Reád tekintve és a Nálad lévő világosságtól vezérelve, Téged, a megközelíthetetlen és örökkévaló Világosságot szemlélve, szüntelenül magasztalást és hálaadást zengjünk Néked, a kezdet nélkül való Atyának, a Te egyszülött Fiaddal és szentséges, jóságos és éltető Lelkeddel együtt, most és mindenkor és mindörökkön örökké. Ámin.`
        }
    ],
  };
  