import { Prayer } from "../../../types/types";
import {
  CHRIST_IS_RISEN,
  GLORY,
  BOTH_NOW,
  LORD_HAVE_MERCY_40,
  GLORY_BOTH,
  MORE_HONOURABLE,
} from "../constants/repeatedPrayers";

export const paschal_hours: Prayer = {
  id: "paschal_hours",
  title: "Húsvéti imaóra",
  header_title: "Húsvéti imaóra",
  image: require("../../../assets/orthodox/resurrection.png"),
  imageSize: 300,
  sections: [
    {
      heading: "Húsvét után fényes héten szombatig",
      text: `${CHRIST_IS_RISEN} (3x)
        
Látván Krisztus feltámadását, hódoljunk szent Urunk, Jézus előtt, aki egyedül bűn nélkül való. Kereszted előtt hódolunk, Krisztus, és a te szent feltámadásodat magasztaljuk és dicsőítjük. Mert te vagy a mi Istenünk, rajtad kívül mást nem ismerünk, a te nevedet szólítjuk. Jöjjetek mind, ti hívők, hódoljunk Krisztus szent feltámadásának, mert íme, a kereszt által öröm szállt az egész világra. Mindenkor áldva az Urat, dicsőítjük az ő feltámadását, mert eltűrve értünk a keresztet halálával elpusztította a halált. (3x)

A Máriát követő asszonyok még hajnal előtt azt találták, hogy a sziklát valaki elhengerítette a sír szájától, és hallották, hogy az angyal így szól hozzájuk: Miért keresitek azt, aki az örök világosságban lakozik, emberként a halottak között? Lássátok a temetési gyolcsokat! Szaladjatok, és hirdessétek a világnak, hogy feltámadt az Úr, és halálra adta a halált! Mert ő az Isten Fia, az emberi nem megmentője.

Bár leszálltál a sírba, ó, Halhatatlan, mégis eltörölted az alvilág hatalmát, és győztesen feltámadtál, ó, Krisztus Isten! Így szóltál a kenethozó asszonyokhoz: „Örvendjetek!” Apostolaidnak békességet ajándékoztál, aki megadod az elbukottaknak a feltámadást.

Testben a sírban voltál, míg lelkeddel együtt Istenként a pokolban, a latorral együtt a Paradicsomban, az Atyával és a Lélekkel együtt pedig a trónuson, mert mindent betöltesz, ó, körülírhatatlan Krisztus!

${GLORY}

Életet hozónak, a Paradicsomnál gyönyörűségesebbnek, minden királyi hálóteremnél ragyogóbbnak bizonyult, Krisztus, a te sírod, a mi feltámadásunk forrása.

${BOTH_NOW}

A Magasságbéli megszentelt isteni lakhelye, Örvendezz, ó, Istenszülő, mert általad adatott az öröm azoknak, kik így kiáltanak: Áldott vagy te az asszonyok között, ó, szeplőtelen Úrnőnk!

${LORD_HAVE_MERCY_40}

${GLORY_BOTH}

${MORE_HONOURABLE}

${CHRIST_IS_RISEN} (3x)`,
      postheading: `Ezt az imádságot naponta háromszor ismételjük.`,
    },
  ],
};
