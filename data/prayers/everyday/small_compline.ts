import { PSALM_50, PSALM_69, PSALM_142 } from "../constants/psalms";
import { INTRO, INTO_KATHISMA, CREED, MIDDLE, GLORY, BOTH_NOW, U_I_40, U_I_3, GLORY_BOTH, AKI_A_KERUB, U_I_12, HOLY_FATHERS } from "../constants/repeatedPrayers";

export const small_compline = {
  id: "small_compline",
  title: "Kis Lenyugvási",
  header_title: "Kis Lenyugvási",
  image: require("../../../assets/orthodox/CrossAndDots.png"),
  sections: [
    {
      text: `${INTRO}

${INTO_KATHISMA}`,
    },
    {
      heading: "50. zsoltár",
      text: PSALM_50,
    },
    {
      heading: "69. zsoltár",
      text: `${PSALM_69}`,
    },
    {
      heading: "142. zsoltár",
      text: PSALM_142,
    },
    {
      heading: "Kis doxológia",
      text: `Dicsőség a magasságban Istennek, és a földön békesség, az emberek között jóakarat!

Magasztalunk téged, áldunk téged, hódolunk néked, dicsőítünk téged, hálát adunk néked a te nagy dicsőségedért.

Urunk, Királyunk, mennyei Istenünk, mindenható Atyánk, egyszülött Fiú, Jézus Krisztus Urunk és Szentlélek,

Urunk Istenünk, Istennek Báránya, az Atyának Fia, aki elveszed a világ bűnét, irgalmazz nekünk, aki elveszed a világ bűneit!

Fogadd a mi könyörgésünket, aki az Atyának jobbján ülsz, és irgalmazz nekünk!

Mert egyedül te vagy szent, egyedül te vagy Úr, Jézus Krisztus, az Atyaisten dicsőségére. Ámin.

Minden este áldalak téged, és dicsérem a te nevedet minden időben és mindörökkön örökké.

Urunk, menedékünk lettél nemzedékről nemzedékre. Én mondottam: Uram, irgalmazz nekem, gyógyítsd meg a lelkemet, mert vétkeztem ellened.

Uram, a te oltalmadhoz menekedtem, taníts meg, hogy a te akaratodat cselekedjem, mert te vagy az én Istenem.

Mert nálad van az élet Forrása, a te Világosságodban látjuk meg a Világosságot.

Terjeszd ki irgalmadat azokra, akik ismernek téged! Méltass minket, Urunk, hogy ezen az éjszakán bűntelenül maradhassunk meg!

Áldott vagy, Urunk, atyáinknak Istene, és dicséretes és dicsőített a te neved mindörökké. Ámin.

Legyen, Urunk, a te irgalmad mirajtunk, mert benned reménykedünk!

Áldott vagy, Uram, tanítsd meg nekem a te rendeléseidet! Áldott vagy, Uralkodó, okosíts fel engem a te rendeléseidre! Áldott vagy, Szent, világosíts meg engem a te rendeléseiddel!

Uram, a te irgalmad örökkévaló, ne vesd meg kezednek alkotásait. Téged illet a dicséret, téged illet a magasztalás, a dicsőség téged illet, az Atyát és Fiút és Szentlelket, most és mindenkor és mindörökkön örökké. Ámin.`,
    },
    {
      heading: "Hitvallás",
      text: CREED,
    },
    {
      text: `
${MIDDLE}`,
    },
    {
      heading: "Apolitikionok",
      text: `Atyáinknak Istene, aki örökké a te kedvességed szerint cselekszel velünk, ne távoztasd el tőlünk irgalmadat, hanem az ő könyörgéseik által békességben kormányozd életünket!

Az egész világ mártírjainak vérét, mint bíbor és gyolcsot ölti magára a te Egyházad, és általuk így kiált hozzád, Krisztus Isten: küldd le népedre könyörületedet, ajándékozz békességet közösségednek, és a mi lelkünknek a nagy irgalmat!

${GLORY}

A szentek között nyugosztald, Krisztus, a te szolgáid lelkét, ahol nincsen fájdalom, sem bánat, sem sóhajtás, hanem vég nélküli élet!

${BOTH_NOW}

Minden szenteknek és Isten Szülőjének közbenjárásai által, Urunk, add meg nekünk a te békédet, és irgalmazz nekünk, mint egyedüli könyörületes.

${U_I_40}

Akit minden időben és minden órában, a mennyben és a földön imádnak és dicsőítenek, Krisztus Isten, aki hosszantűrő, nagyirgalmú és igen könyörületes vagy, aki az igazakat szereted és a bűnösöknek irgalmazol, és aki az eljövendő javak ígéretével üdvösségre hívsz mindeneket, te magad, Urunk, fogadd el ebben az órában is a mi fohászkodásunkat, és vezéreld életünket parancsolataid szerint. Szenteld meg lelkünket, tisztítsd meg testünket, igazítsd ki gondolatainkat, tisztítsd meg értelmünket, és szabadíts meg minket minden keserűségtől, bajtól és gyötrődéstől! Végy körül bennünket szent angyalaiddal, hogy az őrködésüktől oltalmazva és vezérelve eljussunk a hit egységére és a te megközelíthetetlen dicsőséged ismeretére, mert áldott vagy mindörökkön örökké. Ámin.

${U_I_3}

${GLORY_BOTH}

${AKI_A_KERUB}

${U_I_12}

Legszentebb Istenszülő, ments meg és segíts meg bennünket!`,
    },
    {
      heading: `Ima a Legszentebb Istenszülőhöz`,
      subheading: `Pál szerzetestől az Evergetinosz monostorból`,
      text: `Szeplőtelen, folttalan, romlatlan, érintetlen, tiszta Szűz, Isten Jegyese, Úrnőnk, aki különös szüléseddel az Isten Igét az emberekkel egyesítetted, és elvetett természetünket összekapcsoltad a mennyeiekkel; reményvesztettek egyedüli reménysége, a küzdők segítsége, a hozzád folyamodók készséges védelmezője és minden keresztény menedéke; ne vess meg engem, bűnöst és tisztátalant, aki csúf gondolatokkal, szavakkal és cselekedetekkel egész lényemet megrontottam, és renyhe akarattal az élet gyönyöreinek szolgájává lettem! Mégis, emberszerető Istennek Anyja, essék meg emberszerető szíved rajtam, a bűnösön és tékozlón, és fogadd el szennyes ajkamról a hozzád szálló esedezést! Anyai bátorságodban bízva engeszteld ki Fiadat, a mi fenséges Urunkat, hogy nyissa meg nékem is jóságának emberszerető könyörületét, és elnézve számtalan vétkezésemet térítsen engem bűnbánatra, és avasson parancsolatainak kipróbált munkásává! Légy mellettem örökké, mint irgalmas, együttérző és jóságos! Mint forró pártfogóm és segítőm a jelenvaló életben, verd vissza ellenségeim támadásait, és vezess el az üdvösségre! Eltávozásom idején vedd körül gondoskodásoddal nyomorult lelkemet, és űzd messzire tőle a gonosz démonok sötét látványát! Az ítélet félelmetes napján pedig ments meg az örök büntetéstől, és tégy a te Fiad, a mi Istenünk kimondhatatlan dicsőségének örökösévé! Úrnőm, szentséges Istenszülő, bárcsak elnyerhetném ezt a dicsőséget a te közbenjárásod és pártfogásod által, egyszülött Fiad, a mi Urunk, Istenünk és Üdvözítőnk, Jézus Krisztus kegyelméből és emberszeretetéből! Őt illet minden dicsőség, tisztelet és hódolat, kezdet nélküli Atyjával és szentséges, jóságos és éltető Lelkével együtt, most és mindenkor és mindörökkön örökké. Ámin.`,
    },
    {
      heading: `Ima a mi Urunkhoz, Jézus Krisztushoz`,
      subheading: `Antiokhosztól, a Pandektisz
monostor szerzetesétől`,
      text: `Amikor pedig aludni térünk, adj Uralkodónk, testünknek és lelkünknek nyugodalmat, és őrizz meg bennünket a bűn fekete álmától és minden sötét éjszakai kéjérzettől. Csendesítsd le szenvedélyeink háborgását, oltsd ki a gonosz tüzes nyilait, amelyeket alattomban röpít felénk. Nyugtasd meg testünk lázadozását, és altasd el minden földies és anyagias gondolatunkat. Ajándékozz nekünk, Istenünk, éber értelmet, józan gondolatot, virrasztó szívet, könnyű és minden sátáni képzettől mentes álmot! Ébressz fel bennünket az imádság idején, megszilárdítva bennünket a te parancsolataidban, és add meg, hogy ítéleteid emlékét töretlenül elménkben hordozzuk! Ajándékozz meg azzal, hogy egész éjjel dicsőítő éneket zengjünk neked, hogy magasztaljuk, áldjuk és dicsőítsük a te legbecsesebb és legmagasztosabb Nevedet, az Atyáét és Fiúét és Szentlélekét, most és mindenkor és mindörökkön örökké! Ámin.

Legdicsőségesebb Örökszűz, Istennek áldott Szülője, vezesd a mi imádságunkat a te Fiad és a mi Istenünk elé, és esedezz, hogy üdvözítse teáltalad a mi lelkünket.

Reménységem az Atya, menedékem a Fiú, oltalmam a Szentlélek. Szentháromság, dicsőség néked!

Minden reménységemet beléd vetem, Istennek Anyja, őrizz meg engem a te oltalmad alatt.

Benned örvendezik, Kegyelembefogadott, az egész teremtés, az angyalok rendje és az emberek nemzetsége. Megszentelt Templom, szellemi Paradicsom, szűzi büszkeségünk, aki által megtestesült az Isten, és gyermekké lett a mi öröktől fogva való Istenünk. Mert a te méhedet trónusává tette, és öledet az egeknél tágasabbá változtatta. Benned örvendezik, Kegyelembefogadott, az egész teremtés, dicsőség néked!`,
    },
    {
      heading: "Ima az őrangyalhoz",
      text: `Szent angyalom, nyomorult lelkem és szerencsétlen életem oltalmazója! Ne hagyj el engem, bűnöst, és ne távozz el tőlem mértéktelenségem miatt. Ne engedd, hogy a gonosz démon hatalmába kerítsen, erőt véve halandó testemen. Ragadd meg nyomorult és ernyedt kezemet, és vezess az üdvösség útjára! Igen, Istennek szent angyala, nyomorult lelkem és testem őrizője és védelmezője, bocsáss meg nekem mindent, amivel életemnek minden napján megbántottalak, s amit ezen a napon is vétettem! Óvj meg engem ezen az éjszakán, és őrizz meg az Ellenség minden befolyásától, nehogy valamilyen bűnnel megharagítsam az én Istenemet! Járj közre értem az Úrnál, hogy erősítsen meg az ő félelmében, és tegyen jóságának érdemes szolgájává! Ámin.
        
Istennek Szűz Szülője, Örvendezz, kegyelembefogadott Mária, az Úr van teveled! Áldott vagy te az asszonyok között, és áldott a te méhednek gyümölcse, mert a mi lelkünk Üdvözítőjét szülted. (3x)

A te könyörületedhez folyamodunk, Istennek Szülője, ne feledkezz meg esedezéseinkről nyomorúságunkban, hanem szabadíts meg minket a veszedelmektől, egyedülvaló tiszta, egyedülvaló áldott!`,
    },
    {
      heading: "Pünkösdi apolitikion",
      text: `Áldott vagy Te, Krisztus Istenünk, aki a halászokat bölcsekké tetted, leküldvén nekik a Szentlelket, és általuk hálódba vontad a földkerekséget. Emberszerető, dicsőséged néked!

${HOLY_FATHERS}`,
    },
  ],
};
