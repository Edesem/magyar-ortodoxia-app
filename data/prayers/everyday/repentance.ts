import { PSALM_6, PSALM_31 } from "../constants/psalms";
import { NAME_OF, COME_LET_US, HOLY_FATHERS } from "../constants/repeatedPrayers";

export const repentance = {
  id: "repentance",
  title: "Bűnbánati imádság",
  header_title: "Bűnbánati imádság",
  image: "",
  sections: [
    {
      text: `${NAME_OF}
        
${COME_LET_US}`,
    },
    {
      heading: "6. zsoltár",
      text: `${PSALM_6}`,
    },
    {
      heading: "31. zsoltár",
      text: `${PSALM_31}`,
    },
    {
      heading: "Ima a bűntől való szabadulásért",
      subheading: `Anthimosz Vrienniosz szerzetespap imáiból`,
      text: `Mindenható Urunk, Istenünk, aki azt akarod, hogy minden ember üdvözüljön és eljusson az igazság ismeretére; aki Izajás prófétád által mondtad: „Mosdjatok meg és legyetek tiszták, vessétek ki a gonoszságot szívetekből, tanuljatok meg jót cselekedni a szemem előtt; és ha olyanok volnának is bűneitek, mint a bíbor, olyan fehérré teszem őket, mint a hó” (Iz 1, 16-18)! Teljesítsd be, Urunk, énrajtam, megtérő bűnös és méltatlan szolgádon is mindazt, amit prófétád által Izrael fiainak ígértél. Mert íme, szavamat adom néked a bűnbánatra, a szíveket ismerő Istennek, és mostantól bánom mindazt, amit helytelenül tettem, és megtagadom minden vétkemet és rossz cselekedetemet. Segítségeddel többé nem folytatom mindezt, hanem egész erőmből tisztán foglak szolgálni téged, hogy életemet a te szent akaratodhoz igazítva irgalmad által méltónak bizonyuljak az örök és boldog élet élvezetére. Mert végtelenül áldott vagy mindörökkön örökké. Ámin.`,
    },
    {
      heading: "Kondákion saját dallamra",
      subheading: `Krétai Szent Andrástól
Második plagális hang`,
      text: `Én lelkem, én lelkem, serkenj föl, miért alszol? Közeleg a vég, és gyötrődni fogsz; ébredj hát, hogy megkönyörüljön rajtad Krisztus Isten, aki mindenütt jelen van és mindeneket betölt.

${HOLY_FATHERS}`,
    },
  ],
};
