import { Prayer } from "../../../types/types";
import { PSALM_83, PSALM_84, PSALM_85 } from "../constants/psalms";
import { ALLELUIA, BOTH_NOW, COME_LET_US, GLORY, GLORY_BOTH, HOLY_GOD, IN_THE_NAME, INTRO, LORD_HAVE_MERCY_12, LORD_HAVE_MERCY_3, LORD_HAVE_MERCY_40, MIDDLE_NO_AXION, MORE_HONOURABLE, THROUGH_THE_PRAYERS, WHO_AT_ALL_TIMES } from "../constants/repeatedPrayers";

export const ninth_hour: Prayer = {
    id: "ninth_hour",
    title: "IX. imaóra",
    header_title: "IX. imaóra",
    image: "",
    sections: [
        {
            text: `${INTRO}
            
${LORD_HAVE_MERCY_12}

${GLORY_BOTH}

${COME_LET_US}`
        },
        {
            heading: "83. zsoltár",
            text: `${PSALM_83}`
        },
        {
            heading: "84. zsoltár",
            text: `${PSALM_84}`
        },
        {
            heading: "85. zsoltár",
            text: `${PSALM_85}
            
${ALLELUIA}

${GLORY}
`
        },
        {
            subheading: "Apolytikion",
            text: `${BOTH_NOW}
            
Aki miérettünk a Szűztől születtél, és keresztrefeszítést szenvedtél, óh Jóságos, ki a halált haláloddal leigáztad, és mint Isten megmutattad a feltámadást, meg ne vesd a kezed alkotásait; mutasd meg emberszeretetedet, óh Irgalmas, fogadd a Szülődnek, Isten Szülőjének érettünk való közbenjárását, és üdvözítsd, Üdvözítőnk, keservesen bánkódó népedet.

Ne adj át minket a pusztulásnak, a Te szent nevedért, és ne bontsd fel a Te szövetségedet, és ne vond meg tőlünk irgalmadat, Ábrahámért, a Te kedveltedért, és Izsákért, a Te szolgádért, és Izráelért, a Te szentedért.

${MIDDLE_NO_AXION}
`
        },
        {
            subheading: "Kondákion",
            text: `${LORD_HAVE_MERCY_40}
            
${WHO_AT_ALL_TIMES}

${LORD_HAVE_MERCY_3}

${GLORY_BOTH}

${MORE_HONOURABLE}

${THROUGH_THE_PRAYERS}

Felséges Urunk, Jézus Krisztus Istenünk, aki hosszantűrő voltál vétkezéseink iránt, és elvezettél minket eddig az óráig, amelyben az életetadó kereszten függve, a háládatos latornak előkészítetted a Paradicsomba való bemenetel útját, és haláloddal megsemmisítetted a halált, könyörülj rajtunk, bűnös és méltalan szolgáidon. Mert vétkeztünk és törvénytelenséget cselekedtünk, és nem vagyunk méltók arra, hogy fölemeljük szemeinket és az ég magasságára tekintsünk; mert elhagytuk a Te igazságosságod útját, és szívünk akarata szerint jártunk. Esedezünk azért a Te mérhetetlen jóságodhoz: szánj meg minket, Urunk, a Te irgalmasságod sokasága szerint, és üdvözíts minket, a Te szent nevedért, mert hívságban fogyatkoztak meg napjaink. Ragadj ki minket az ellenség kezéből, és bocsásd meg bűneinket, és öld meg testies gondolatainkat, hogy elvetvén az ó-embert, újba öltözzünk, és Néked éljünk, a mi Uralkodónknak és Gondviselőnknek; és így követvén a Te parancsolataidat, eljussunk az örök nyugalomra, ahol minden örvendezők lakoznak. Mert Te vagy, Krisztus Istenünk, a Téged szeretőknek valóban igaz örvendezése és vigassága, és Néked zengünk dicsőséget, a Te kezdet nélkül való Atyáddal és szentséges, jóságos és éltető Lelkeddel együtt, most és mindenkor és mindörökkön örökké. Ámin.

${GLORY_BOTH}

${LORD_HAVE_MERCY_3}

${THROUGH_THE_PRAYERS}`
        }
    ],
  };
  