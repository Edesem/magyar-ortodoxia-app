import { Prayer } from "../../../types/types";
import { PSALM_142, PSALM_22 } from "../constants/psalms";
import { INTRO, COME_LET_US, THROUGH_THE_PRAYERS } from "../constants/repeatedPrayers";

export const in_sickness: Prayer = {
  id: "in_sickness",
  title: "Ima betegségben",
  header_title: "Ima betegségben",
  image: require("../../../assets/orthodox/mama.png"),
  imageSize: 400,
  sections: [
    {
      text: `${INTRO}
        
${COME_LET_US}`,
    },
    {
      heading: "142. zsoltár",
      text: `${PSALM_142}`,
    },
    {
      heading: "22. zsoltár",
      text: `${PSALM_22}`,
    },
    {
      heading: "Evangélium",
      subheading: "(Mt 9, 9-13)",
      text: `Abban az időben Jézus Názáretben járt, meglátott egy embert ülni a vámsorompónál, akit Máténak hívtak, és így szólt hozzá: „Kövess engem!” Az felkelt, és követte őt. Történt pedig, hogy Jézus asztalhoz ült egy házban, és íme sok vámszedő és bűnös jött oda, és asztalhoz ültek Jézussal és tanítványaival együtt. A farizeusok, amikor ezt látták, megkérdezték a tanítványait: „Miért eszik a ti mesteretek vámszedőkkel és bűnösökkel együtt?” Amikor ezt meghallotta Jézus, így válaszolt nekik: „Nem az egészségeseknek van szükségük orvosra, hanem a betegeknek. Menjetek, és tanuljátok meg, mit jelent ez: ’Irgalmasságot akarok, nem áldozatot’ (Hós 6, 6)! Mert nem azért jöttem, hogy az igazakat hívjam, hanem a bűnösöket a megtérésre.”`,
    },
    {
      heading: "Ima",
      text: `Szent Atyánk, lelkünk és testünk orvosa, aki elküldted egyszülött Fiadat, a mi Urunk Jézus Krisztust, hogy meggyógyítson minden betegséget és megmentsen bennünket a haláltól, Krisztusod kegyelme által gyógyítsd meg a te N. szolgádat (szolgálódat) is a lelki és testi betegségtől, amely most hatalmában tartja! Keltsd őt életre tetszésed szerint a mi legáldottabb, dicsőséges Úrnőnknek, örökszűz Máriának és minden szentednek közbenjárása és esedezése által, hogy jótettekkel rója le a hálát és hódolatot, amivel neked tartozik! Mert te vagy minden gyógyulás forrása, és néked zengünk dicsőséget, a kezdet nélküli Atyának, egyszülött Fiaddal és Szentlelkeddel együtt, most és mindenkor és mindörökkön örökké. Ámin.`,
    },
    {
      heading: "Tropárion, 4. plagális hang",
      text: `Csodatévő szent szegények, keressétek fel a mi betegségeinket! Ingyen vettétek, ingyen adjátok nekünk!
        
${THROUGH_THE_PRAYERS}`,
    },
  ],
};
