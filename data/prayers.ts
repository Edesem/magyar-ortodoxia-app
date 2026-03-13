export interface PrayerSection {
  heading?: string;
  subheading?: string;
  postheading?: string;
  text: string;
}

export interface Prayer {
  id: number;
  heading?: string;
  title: string;
  header_title: string;
  sections: PrayerSection[];
  image: string;
  imageSize?: number;
}

const NAME_OF = `Az Atyának és Fiúnak és Szentléleknek nevében. Ámin.`;

const HOLY_FATHERS = `Szent atyáink imái által, Urunk, Jézus Krisztus Istenünk, irgalmazz nekünk, és üdvözíts minket! Ámin.`;

const OUR_FATHER = `Mi Atyánk, ki a mennyekben vagy, szenteltessék meg a te neved, jöjjön el a te országod, legyen meg a te akaratod, miképpen a mennyben, úgy a földön is. Mindennapi kenyerünket add meg nekünk ma; és bocsásd meg a mi vétkeinket, miképpen mi is megbocsátunk az ellenünk vétkezőknek; és ne vígy minket kísértésbe, hanem szabadíts meg a gonosztól.`;

const GLORY_BOTH = `Dicsőség az Atyának és Fiúnak és Szent Léleknek, most és mindenkor és mindörökkön örökké. Ámin.`;

const GLORY = `Dicsőség az Atyának és Fiúnak és Szent Léleknek.`;

const BOTH_NOW = `Most és mindenkor és mindörökkön örökké. Ámin.`;

const MOST_HOLY = `Legszentebb Istenszülő, ments meg minket.`;

const PSALM_50: string = `Irgalmazz nékem, Isten, a te nagy irgalmasságod szerint, és könyörületességed sokasága szerint töröld el vétkezéseimet!

Teljesen moss meg törvényszegésemtől, és bűnömtől tisztíts meg engem!

Mert ismerem törvényszegésemet, és bűnöm előttem van szüntelen.

Csak ellened vétkeztem, és a gonoszságot előtted cselekedtem, hogy szavaid igaznak bizonyuljanak, és győzelmet arass, amikor megítélnek.

Mert íme, törvénytelenségben fogantam, és anyám bűnökben hordozott.

Íme, te az igazságot szereted, bölcsességed rejtett és titkos dolgait megmutattad nékem.

Hints meg izsóppal, és megtisztulok; mosdass meg, és fehérebb leszek a hónál!

Hallass velem örömet és vigasságot, hogy örvendezzenek megalázott csontjaim!

Fordítsd el orcádat bűneimtől, és töröld el minden törvényszegésemet!

Tiszta szívet teremts bennem, Istenem, és újítsd meg bensőmben az egyenes Lelket!

Ne vess el a színed elől, és Szentlelkedet ne vedd el éntőlem!

Add meg nekem, hogy üdvözítéseden örvendezzem, és vezérlő Lélekkel erősíts meg engem!

Hadd tanítsam a törvényteleneket a te útjaidra, és az istentelenek megtérnek hozzád!

Szabadíts meg a vérbűntől, Istenem, üdvösségemnek Istene, hogy örömmel hirdesse nyelvem igazságosságodat!

Uram, nyisd meg ajkamat, és szám a te dicséretedet fogja hirdetni!

Mert ha áldozatot kívánnál, adnék, de az égőáldozatokban nem gyönyörködsz.

Istenhez illő áldozat a töredelmes lélek, töredelmes és megalázkodott szívet nem vet meg az Isten.

Kegyeskedj jót cselekedni, Uram, Sionnal, és épüljenek fel Jeruzsálem falai!

Akkor kegyesen fogadod majd az igazságosság áldozatát, a felajánlást és az égőáldozatokat.

Akkor majd borjakat visznek oltárodra.`;

const CREED = `Hiszek egy Istenben, mindenható Atyában, mennynek és földnek, minden látható és láthatatlan dolgoknak Teremtőjében;

És az egy Úr Jézus Krisztusban, Istennek egyszülött Fiában, aki az Atyától minden időknek előtte született; 

Világosságtól való Világosságban, igaz Istentől való igaz Istenben, aki született és nem teremtetett, aki egylényegű az Atyával és aki által mindenek lettek; 

Aki miérettünk, emberekért és a mi üdvösségünkért leszállt a mennyekből és megtestesült a Szent Lélektől és Szűz Máriától és emberré lett; 

Aki keresztre feszíttetett érettünk Poncius Pilátus idejében, és szenvedett és eltemettetett;

És feltámadott a harmadik napon az Írások szerint; és felment a mennyekbe és ül az Atyának jobbján;

És újból eljő dicsőséggel, ítélni élőket és holtakat, és az Ő Országának nem lesz vége;

És a Szent Lélekben, Úrban és Éltetőben, aki az Atyától ered, akit az Atyával és Fiúval együtt imádunk és dicsőítünk, aki a próféták által szólott;

Egy, szent, egyetemes és apostoli Egyházban;

Egy keresztséget vallok a bűnök bocsánatára;

Várom a holtak feltámadását;

És az eljövendő örök életet. Ámin.`;

const INTRO = `${NAME_OF}

Dicsőség Néked, Istenünk, dicsőség Néked.

Mennyei Király, Vigasztaló, igazságnak Lelke, aki mindenütt jelen vagy és mindeneket betöltesz, minden javak kincsestára és az élet adományozója, jöjj, és lakozzál mibennünk, és tisztíts meg minket minden szennyfolttól, és üdvözítsd, Jóságos, a mi lelkünket.

Szent Isten, Szent Hatalmas, Szent Halhatatlan, irgalmazz nekünk. (3x)

${GLORY_BOTH}

Szentséges Háromság, irgalmazz nekünk! Urunk, könyörülj a mi bűneinken. Uralkodónk, bocsásd meg törvényszegéseinket! Szent, keresd fel és gyógyítsd meg a mi betegségeinket a te nevedért!

Uram irgalmazz. (3x)

${GLORY_BOTH}

${OUR_FATHER}`;

const COME_LET_US = `Jertek, hódoljunk Istennek, a mi Királyunknak!

Jertek, hódoljunk és boruljunk le Krisztus Isten, a mi Királyunk előtt!

Jertek, hódoljunk és boruljunk le maga Krisztus, a mi Királyunk és Istenünk előtt!`;

const AKI_A_KERUB =
  "Aki a keruboknál tiszteltebb és a szeráfoknál hasonlíthatatlanul dicsőbb vagy, aki az Isten Igét sérületlenül szülted, Istennek valóságos Szülője, téged magasztalunk.";

const AXION = `Valóban méltó boldognak nevezni téged, Istennek Szülője, az örökké boldogságost és feddhetetlent, és a mi Istenünknek Anyját. ${AKI_A_KERUB}`;

const MIDDLE = `${AXION}

Szent Isten, Szent Hatalmas, Szent Halhatatlan, irgalmazz nekünk. (3x)

${GLORY_BOTH}

Szentséges Háromság, irgalmazz nekünk! Urunk, könyörülj a mi bűneinken. Uralkodónk, bocsásd meg törvényszegéseinket! Szent, keresd fel és gyógyítsd meg a mi betegségeinket a te nevedért!

Uram irgalmazz. (3x)

${GLORY_BOTH}

${OUR_FATHER}`;

const MIDDLE_NO_AXION = `Szent Isten, Szent Hatalmas, Szent Halhatatlan, irgalmazz nekünk. (3x)

${GLORY_BOTH}

Szentséges Háromság, irgalmazz nekünk! Urunk, könyörülj a mi bűneinken. Uralkodónk, bocsásd meg törvényszegéseinket! Szent, keresd fel és gyógyítsd meg a mi betegségeinket a te nevedért!

Uram irgalmazz. (3x)

${GLORY_BOTH}

${OUR_FATHER}`;

const PSALM_142 = `Uram, hallgasd meg imádságomat, halld meg könyörgésemet a te igazságodban, hallgass meg engem igazságosságodban!

Ne szállj perbe a te szolgáddal, hiszen senki élő meg nem igazulhat előtted!

Íme, az ellenség üldözte lelkemet, a földig alázta életemet.

A sötétségbe ültetett engem, mint azokat, akik mindörökre meghaltak, és elcsüggedt a lelkem énbennem, megrettent bennem a szívem.

Megemlékeztem a régmúlt napokról, elmélkedtem minden dolgodról, kezednek műveiről elmélkedtem.

Kitártam feléd karjaimat, olyan a lelkem hozzád, mint a szikkadt föld.

Hamar hallgass meg, Uram, megfogyatkozott a lelkem!

Ne fordítsd el orcádat tőlem, ne legyek olyan, mint akik alászállnak a mélységbe!

Virradatkor add tudtomra irgalmadat, mert benned reménykedem.

Uram, mutasd meg nekem az utat, amelyen járjak, mert hozzád emeltem lelkemet!

Szabadíts ki engem ellenségeim kezéből, Uram, oltalmadhoz menekültem! 

Taníts meg akaratodat cselekednem, mert te vagy az én Istenem!

Jóságos Lelked vezessen engem az egyenes földön! A te nevedért, Uram, éltess engem!

Igazságosságodban vezesd ki lelkemet a sanyarúságból, irgalmadban irtsd ki ellenségeimet!

Pusztítsd el mindazokat, akik szorongatják lelkemet, mert én a te szolgád vagyok!`;

const GOD_IS_THE_LORD = `Isten az Úr és megjelent nékünk, áldott, aki az Úr nevében jön.`;

const INTO_KATHISMA = `Uram, irgalmazz! (12x)

${GLORY_BOTH}

${COME_LET_US}`;

export const prayerData: Prayer[] = [
  {
    id: 0,
    heading: "Mindennapi imák",
    title: "Reggeli Imák",
    header_title: "Reggeli Imák",
    sections: [
      {
        text: INTRO,
      },
      {
        heading: "Apolitikionok",
        text: `Álmunkból felkelvén, leborulunk Előtted, Jóságos, és az angyalok dicsérőénekét zengjük néked, ó, Hatalmas: Szent, szent, szent vagy Isten, irgalmazz nekünk Isten Szülője által!

${GLORY}

Felkeltvén engem ágyamról és álmomból, Uram, világosítsd meg elmémet és nyisd meg szívemet és ajkaimat a te dicséretedre, Szent Háromság: Szent, szent, szent vagy Isten, irgalmazz nekünk Isten Szülője által!

${BOTH_NOW}

Váratlanul jön el a Bíró, és mindenkinek cselekedetei lelepleztetnek. Kiáltsuk hát félelemmel az éj közepén: Szent, szent, szent vagy Isten, irgalmazz nekünk Isten Szülője által.

Uram, irgalmazz! (12x)`,
      },
      {
        heading: "Könyörgő hálaima",
        text: `Álmomból felkelvén hálát adok néked, Szentháromság, mert nagy jóságodért és béketűrésedért nem haragudtál meg reám, a restre és bűnösre, és nem pusztítottál el törvényszegéseimmel együtt, hanem szokott emberszereteteddel fölkeltettél engem, aki a kétségbeeséshez álltam közel, hogy hajnalhasadáskor dicsőítsem a te hatalmadat. Most pedig világosítsd meg értelmem szemét, nyisd meg számat, hogy a te igéidet tanuljam, parancsolataidat megértsem, és a te akaratodat teljesítsem, szívem vallomásával énekeljek néked, és dicsőítsem a te szentséges nevedet, az Atyáét és Fiúét és Szentlélekét, most és mindenkor és mindörökkön örökké. Ámin.`,
      },
      {
        heading: "Másik imádság",
        text: `Dicsőség néked, Királyom, mindenható Isten, mert emberszerető isteni gondviseléseddel arra méltattál engem, bűnös és méltatlan szolgádat, hogy fölkeljek álmomból és eljöjjek szent házadba. Úgy fogadd el, Uram, az én könyörgésem hangját is, ahogyan szent szellemi erőid hangját fogadod, és engedd meg, hogy tiszta szívvel és alázatos lélekkel felajánljam néked beszennyezett ajkam dicsérő szavait, hogy lelkem fényes lámpásával társa lehessek az okos szüzeknek és dicsőitselek téged, az Atyával és a Szentlélekkel együtt dicsőített Isten Igét. Ámin.
        
${COME_LET_US}`,
      },
      {
        heading: "50. zsoltár",
        text: PSALM_50,
      },
      {
        heading: "5. zsoltár",
        text: `Hallgasd meg szavaimat, Uram, értsd meg kiáltásomat! 
        
Figyelj könyörgésem hangjára, én királyom és Istenem, mert hozzád imádkozom, Uram! 

Reggel halld meg hangomat! Reggel eléd állok, tekints le rám! Mert nem olyan Isten vagy, aki a törvénytelenséget akarja. 

Nem lakhat veled cselszövő, és a törvényszegők nem állhatnak meg színed előtt. 

Gyűlölöd mindazokat, akik törvénytelenséget cselekszenek, elpusztítod mindazokat, akik hazugságot beszélnek. 

A vérontó és alattomos férfiút utálja az Úr. 

Én azonban irgalmasságod sokasága által bemegyek a te házadba, leborulok szent templomod előtt a te félelmedben. 

Uram, vezess engem igazságosságodban ellenségeim miatt, irányítsd feléd az utamat! 

Mert nincs a szájukban igazság, szívük hívságos. 

Nyitott sírbolt a torkuk, nyelvükkel csalárd szavakat szólnak. Ítéld meg őket, ó, Isten! 

Essenek el saját cselszövéseik által, istentelenségük sokasága miatt taszítsd el őket, mert megkeserítettek téged, Uram! 

Örvendezzenek mindazok, akik benned reménykednek! Mindörökké vigadnak majd, és te bennük lakozol, és büszkélkednek tebenned mindazok, akik szeretik a te nevedet. 

Mert te megáldod az igaz embert, Uram, mintegy kegyességed fegyverével koszorúztál meg minket.`,
      },
      {
        heading: "33. zsoltár",
        text: `Áldom az Urat minden időben, dicsérete mindig ajkamon van. 
        
Az Úrban dicsekszik az én lelkem. 

Hallják meg ezt a szelídek, és örvendezzenek! 

Dicsőítsétek velem együtt az Urat, és magasztaljuk együtt az ő nevét! 

Kértem az Urat, és meghallgatott, és minden gyötrelmemtől megszabadított. 

Járuljatok őhozzá, hogy megvilágosodjatok, és orcátok meg ne szégyenüljön. 

Ez a szegény kiáltott, az Úr meghallgatta őt, és minden gyötrelmétől megmentette őt. 

Tábort üt az Úrnak angyala azok körül, akik félik őt, és megszabadítja őket. 

Ízleljétek és lássátok, hogy jóságos az Úr, boldog az a férfi, aki belé veti reménységét! 

Féljétek az Urat, az ő szentjei, mert semmiben sem szenvednek hiányt azok, akik félik őt! 

Gazdagok elszegényedtek, és éheztek, akik viszont az Urat keresik, semmi jóban nem szűkölködnek. 

Jöjjetek, gyermekeim, hallgassatok rám! Az Úr félelmére tanítalak benneteket. 

Ki az az ember, aki élvezni akarja az életet, és jó napokat szeretne látni? 

Tartóztasd meg nyelvedet a gonoszságtól, és ajkadat attól, hogy csalárdságot beszéljen! 

Kerüld a rosszat és tedd a jót, keresd a békességet, és kövesd azt! 

Az Úr szeme az igazakon nyugszik, és füle meghallja azok könyörgését.

Az Úr orcája viszont a gonosztevők felé fordul, hogy kiirtsa a földről emlékezetüket.

Kiáltottak az igazak, és az Úr meghallgatta őket, és minden gyötrelmüktől megszabadította őket.

Közel van az Úr a töredelmes szívűekhez, és megmenti az alázatos lelkűeket.

Sok gyötrelmük van az igazaknak, de valamennyitől megszabadítja őket.

Megőrzi az Úr minden csontjukat, és egy sem töretik meg azokból.

Gonosz a bűnösök halála, és mindaz, aki gyűlöli az igaz embert, megbánja.

Megmenti az Úr az Ő szolgáinak lelkét, és senkit, aki benne reménykedik, nem ér bánkódás.`,
      },
      {
        heading: "Hitvallás",
        text: CREED,
      },
      {
        heading: "Apolitikion (8. hang)",
        text: `Ímhol jő a Vőlegény az éjszaka közepén, és boldog az a szolga, akit ébren talál, de méltatlan az, aki tétlenkedik. Vigyázz hát, lelkem, el ne nyomjon az álom, nehogy a halál elragadjon és kizárjanak az országból, ámde serkenj fel, és kiálts: Szent, szent, szent vagy Isten, irgalmazz nekünk Isten Szülője által! 

${GLORY}

Gondolj ama szörnyű napra, én lelkem, virrassz, gyújtsd meg lámpásodat olajjal vilgáítva, mert nem tudod, mikor szólít meg a hang: „Íme, itt a Vőlegényed!" Ügyelj hát, lelkem, hogy el ne bóbiskolj, és ki ne zárjanak, mint az öt szüzet, hanem tarts ki a virrasztásban, hogy bőséges olajjal fogadd Krisztust, és ő bevezessen dicsőségének isteni nászszobájába.

${BOTH_NOW}`,
      },
      {
        heading: "Theotokion",
        text: `Téged, Istenszülő Szűz, a bevehetetlen várfalat, az üdvösség erődítményét kérünk: szórd szét az ellenség szándékait, változtasd örömre néped bánatát, övezd körül fallal városodat, harcolj a császár oldalán, hívd vissza magadhoz a te világodat, erősítsd meg az istenfélőket, járj közre a világ békéjéért, mert te vagy a mi reménységünk, ó, Istenszülő! 
        
Elteltünk reggel a te irgalmaddal, Urunk, és örvendeztünk és vigadtunk. Örvendezzünk életünknek minden napján annyi napig, ameddig sanyargattál bennünket, és annyi évig, ameddig rosszat láttunk! Tekints a te szolgáidra, a te műveidre, és vezéreld fiaikat! 

És legyen a mi Urunk Istenünk fénysége mirajtunk, kezünknek műveit igazítsa számunkra, és egyengesd kezünk művét! 

Jó dolog megvallani az Urat, és énekelni a te nevednek, ó, Magasságos, hirdetni reggelenként a te irgalmadat, és éjjelenként a te igazságodat.`,
      },
      {
        heading: "Imádság",
        text: `Krisztus, igaz világosság, aki megvilágosítasz és megszentelsz a világra jövő minden embert, jelöltessék meg rajtunk a te orcád Világossága, hogy megláthassuk abban a megközelíthetetlen Világosságot! És irányítsd lépteinket a te parancsolataid teljesítésére, szeplőtelen Anyád és minden szentednek közbenjárásai által! Ámin.`,
      },
      {
        heading: "Másik imádság",
        text: `Örökkévaló Isten, kezdetnélküli és örök Világosság, az egész teremtés Alkotója, irgalmasság kútfeje, jóságnak tengere és az emberszeretet kifürkészhetetlen mélysége, derítsd reánk, Urunk, orcádnak Világosságát! Aki az igazságosság értelemmel felfogható Napja vagy, ragyogj föl szívünkben, töltsd be lelkünket a te vidámságoddal, taníts meg minket, hogy mindenkor a te ítéleteiden elmélkedjünk, és azokról beszéljünk, és hogy szüntelenül megvalljunk téged, Uralkodónkat és jótevőnket! Irányítsd kezünk műveit akaratod útjára, és mutasd meg az utat, hogy azt cselekedjük, ami néked tetsző és kedves, hogy általunk, méltatlanok által is dicsőíttessék a te szent neved, az Atyáé, a Fiúé és a Szentléleké, az egy istenségé és királyságé, akit illet minden dicsőség, tisztelet és hódolat mindörökké! Ámin.`,
      },
      {
        heading: "Másik imádság",
        text: `Aki kibocsátod a világosságot, és az szerteárad, aki fölhozod a napot igazakra és igaztalanokra, gonoszokra és jókra, aki földeríted a hajnalt, és bevilágítod az egész földkerekséget, világosítsd meg a mi szívünket is, ó, mindenek Uralkodója! Add meg nekünk, hogy a mai napon tetszésedre lehessünk, őrizz meg bennünket minden bűntől és minden gonosz cselekedettől, óvj meg minket minden nappal repülő nyíltól és minden ellenséges erőtől; tisztaságos Urnőnknek, az Istenszülőnek, anyagtalan szolgáló lelkeknek, mennyei erőknek és minden szentnek közbenjárásai által, akik öröktől fogva kedvedben jártak! Mert te vagy az, aki megkönyörülhetsz rajtunk és üdvözíthetsz minket, ó, Istenünk, és néked zengünk dicsőséget, az Atyának és a Fiúnak és a Szentléleknek, most és mindenkor és mindörökkön örökké. Ámin.`,
      },
      {
        heading: "Másik imádság",
        text: `Urunk, Istenünk, aki a te békességedet adtad az embereknek, és leküldted szentséges Lelked ajándékát tanítványaidra és apostolaidra, aki erőddel azok ajkát lángnyelvek által megnyitottad, nyisd meg nékünk, bűnösöknek ajkát is, és taníts meg bennünket arra, hogyan és miért kell imádkoznunk! Kormányozd életünket, ó, vihartól űzöttek szélcsendes kikötője, és mutasd meg az utat, amelyen haladnunk kell! Újítsd meg bensőnkben az egyenes Lelket, és ingatag elménket erősítsd meg vezérlő Lélekkel, hogy életünk minden napján a te jóságos Lelkedtől vezérelve arra, ami hasznunkra van: parancsolataid teljesítésére méltóvá legyünk. És hogy mindig megemlékezzünk a te dicsőséges eljöveteledről, amikor megvizsgálod majd az emberek cselekedeteit! Erősíts meg bennünket, hogy ne csaljanak meg e világ múlandó örömei, hanem az eljövendő gyönyörűség kincseire vágyakozzunk! Mert áldott és dicsőített vagy minden szentedben mindörökkön örökké. Ámin.

${HOLY_FATHERS}`,
      },
    ],
    image: require(`../assets/orthodox/ByzantineCross.png`),
  },
  {
    id: 1,
    title: "Kis Lenyugvási",
    header_title: "Kis Lenyugvási",
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
        text: `Istenem, segíts meg engem, Uram, siess segítségemre!

Szégyenkezzenek és valljanak kudarcot azok, akik a lelkemre törnek!

Futamodjanak meg és forduljanak vissza tüstént szégyenkezve, akik gúnyolnak engem!

Vigadjanak és örvendjenek neked mindazok, akik keresnek téged, Istenem, és mondják mindenkor azok, akik szeretik a te üdvösségedet: magasztaltassék az Úr!

Én pedig szegény és nyomorult vagyok, segíts meg, ó, Istenem! Segítőm és szabadítóm vagy te, Uram, ne késlekedj!`,
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
        text: MIDDLE,
      },
      {
        heading: "Apolitikionok",
        text: `Atyáinknak Istene, aki örökké a te kedvességed szerint cselekszel velünk, ne távoztasd el tőlünk irgalmadat, hanem az ő könyörgéseik által békességben kormányozd életünket!

Az egész világ mártírjainak vérét, mint bíbor és gyolcsot ölti magára a te Egyházad, és általuk így kiált hozzád, Krisztus Isten: küldd le népedre könyörületedet, ajándékozz békességet közösségednek, és a mi lelkünknek a nagy irgalmat!

${GLORY}

A szentek között nyugosztald, Krisztus, a te szolgáid lelkét, ahol nincsen fájdalom, sem bánat, sem sóhajtás, hanem vég nélküli élet!

${BOTH_NOW}

Minden szenteknek és Isten Szülőjének közbenjárásai által, Urunk, add meg nekünk a te békédet, és irgalmazz nekünk, mint egyedüli könyörületes.

Uram, irgalmazz! (40x)

Akit minden időben és minden órában, a mennyben és a földön imádnak és dicsőítenek, Krisztus Isten, aki hosszantűrő, nagyirgalmú és igen könyörületes vagy, aki az igazakat szereted és a bűnösöknek irgalmazol, és aki az eljövendő javak ígéretével üdvösségre hívsz mindeneket, te magad, Urunk, fogadd el ebben az órában is a mi fohászkodásunkat, és vezéreld életünket parancsolataid szerint. Szenteld meg lelkünket, tisztítsd meg testünket, igazítsd ki gondolatainkat, tisztítsd meg értelmünket, és szabadíts meg minket minden keserűségtől, bajtól és gyötrődéstől! Végy körül bennünket szent angyalaiddal, hogy az őrködésüktől oltalmazva és vezérelve eljussunk a hit egységére és a te megközelíthetetlen dicsőséged ismeretére, mert áldott vagy mindörökkön örökké. Ámin.

Uram, irgalmazz! (3x)

${GLORY_BOTH}

${AKI_A_KERUB}

Uram, irgalmazz! (12x)

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
        
Istennek Szűz Szülője, örvendezz, kegyelembefogadott Mária, az Úr van teveled! Áldott vagy te az asszonyok között, és áldott a te méhednek gyümölcse, mert a mi lelkünk Üdvözítőjét szülted. (3x)

A te könyörületedhez folyamodunk, Istennek Szülője, ne feledkezz meg esedezéseinkről nyomorúságunkban, hanem szabadíts meg minket a veszedelmektől, egyedülvaló tiszta, egyedülvaló áldott!`,
      },
      {
        heading: "Pünkösdi apolitikion",
        text: `Áldott vagy Te, Krisztus Istenünk, aki a halászokat bölcsekké tetted, leküldvén nekik a Szentlelket, és általuk hálódba vontad a földkerekséget. Emberszerető, dicsőséged néked!

${HOLY_FATHERS}`,
      },
    ],
    image: require("../assets/orthodox/CrossAndDots.png"),
  },
  {
    id: 2,
    title: "Imádság étkezéskor",
    header_title: "Étkezéskor",
    sections: [
      {
        heading: "Étkezés előtt",
        text: `${OUR_FATHER}
        
${GLORY_BOTH}

Uram, irgalmazz! (3x)

Krisztus Istenünk, áldd meg a Te szolgáidnak ételét és italát, mert szent vagy mindig, most és mindenkor és mindörökkön örökké. Ámin.`,
      },
      {
        heading: "Hálaadás étkezés után",
        text: `Hálát adunk néked, Krisztus Istenünk, hogy eltöltöttél minket földi javaiddal; ne vond meg tőlünk a te örökkévaló országodat sem, hanem amiképpen megjelentél tanítványaidnak békességet adva nekik, jöjj el közénk is, és üdvözíts minket.

${GLORY_BOTH}

Uram, irgalmazz! (3x)

Áldott az Isten, aki ifjúságunk óta könyörül rajtunk, és táplál bennünket. Te, aki eleséget adsz minden testnek, töltsd el szívünket örömmel és vigassággal, hogy mindig mindennel teljesen ellátva még feleslegünk is legyen minden jócselekedetre Jézus Krisztusban, a mi Urunkban, akivel együtt illet téged dicsőség, hatalom, tisztelet és imádás a Szentlélekkel együtt, mindörökké. Ámin. 

Dicsőség néked, Urunk, dicsőség néked, Szent, dicsőség néked, Király, mert eledelt adtál nekünk vigasságunkra! Tölts el bennünket Szentlélekkel is, hogy kedveltek legyünk a színed előtt, és ne szégyenüljünk meg, amikor mindenkinek megfizetsz cselekedetei szerint.`,
      },
      {
        heading: "Vacsora előtt",
        text: `Észnek a szegények és jóllaknak, és dicsérik az Urat, akik keresik őt. Szívük élni fog mindörökkön örökké.

${GLORY_BOTH}

Uram, irgalmazz! (3x)

Krisztus Istenünk, áldd meg a Te szolgáidnak ételét és italát, mert szent vagy mindig, most és mindenkor és mindörökkön örökké. Ámin.`,
      },
      {
        heading: "Vacsora után",
        text: `Megörvendeztettél minket, Urunk, a te alkotásaiddal, és kezed műveiben örvendezünk. Megjelöltetett mirajtunk orcád világossága, Urunk. Vigasságot ültettél szívünkbe. Elteltünk búzánk, borunk és olajunk gyümölcsével. Békességben szokott fekhelyünkre térünk, és elalszunk, mert egyedül te tartasz meg bennünket reménységben, Urunk.

${GLORY_BOTH}

Uram, irgalmazz! (3x)

Áldott az Isten, aki irgalmaz nekünk, és gazdag ajándékaival táplál bennünket kegyelméből és emberszeretetéből mindig, most és mindenkor és mindörökkön örökké. Ámin.

Dicsőség néked, Urunk, dicsőség néked, Szent, dicsőség néked, Király, mert eledelt adtál nekünk vigasságunkra! Tölts el bennünket Szentlélekkel is, hogy kedveltek legyünk a színed előtt, és ne szégyenüljünk meg, amikor mindenkinek megfizetsz cselekedetei szerint.`,
      },
    ],
    image: require("../assets/orthodox/GolgothaCross.png"),
  },
  {
    id: 3,
    heading: "A szentáldozás imái",
    title: "Imádság a szentáldozás előtti estén",
    header_title: "Előtti estén",
    sections: [
      {
        text: INTRO,
        postheading:
          "Amikor a tisztaságos misztériumokhoz készülsz járulni, bűnbánattal mondd el az alábbi kánont, amelynek akrosztichonja a 9. óda theotokionjában ezt adja: Theognosztosztól.",
      },
      {
        heading: "1. óda",
        subheading: "2. hang. Jöjjetek népek...",
        text: `Az örök élet kenyerévé legyen nékem szent Tested és drága véred, ó, könyörületes Uram, és számtalan betegség ellenszerévé!
        
Megfertőzve a helytelen tettektől, én nyomorult, méltatlan vagyok szeplőtelen tested és isteni véred befogadására, amelyre is tégy méltóvá engem, ó, Krisztus!`,
      },
      {
        heading: "Theotokion",
        text: `Jó termőföld, Istennek áldott Menyasszonya, akiből a vetetlen kalász sarjadt, aki a világot üdvözíti, méltass engem rá, hogy egyem azt, és üdvözüljek általa!`,
      },
      {
        heading: "3. óda",
        subheading: "A hit kőszikláján...",
        text: `A könnyek áradatát add meg nékem, ó, Krisztus, amely lemossa szívem fertőzetét, hogy lelkiismeretemben megtisztulva hittel és félelemmel járuljak, ó, Uralkodóm, isteni adományaid befogadásához!

Vétkeim bocsánatára legyen nekem szeplőtelen tested és isteni véred, ó, Emberszerető, Szentlelked közösségére, az örök életre, a szenvedélyek és gyötrelmek elhárítására!`,
      },
      {
        heading: "Theotokion",
        text: `Szentséges asztala az élet kenyerének, mely kegyelemből szállt alá odafentről, hogy a világnak új életet adjon, méltass most engem, méltatlant is arra, hogy félelemmel megízleljem azt, és életre keljek!`,
      },
      {
        heading: "4. óda",
        subheading: "A Szűztől jöttél...",
        text: `Megtestesülve érettünk, ó, Nagyirgalmú, magad akartad feláldozni magadat bárányként a halandók bűneiért. Ezért esedezem hozzád: töröld el az én vétkeimet is!

Gyógyítsd meg lelkemnek sebeit, ó, Uram, szenteld meg egész valómat, és méltass arra, ó, Uralkodóm, hogy részesüljek titokzatos isteni vacsorádban, én szerencsétlen!`,
      },
      {
        heading: "Theotokion",
        text: `Hajtsd könyörületre irántam is méhednek magzatát, ó, Nagyasszony, és őrizz meg engem, aki menedéket kérek tőled, tisztának és feddhetetlennek, hogy a szellemi Igazgyöngyöt befogadva megszentelődjem!`,
      },
      {
        heading: "5. óda",
        subheading: "A fény adományozója...",
        text: `Amit előre megmondtál, ó, Krisztus, az történjék gyarló szolgáddal, és maradj énbennem, amint megígérted, mert íme: eszem isteni testedet, és iszom a véredet!

Isten Igéje és Isten! Tested parazsa legyen elsötétült valóm megvilágosodására, véred pedig bemocskolt lelkem megtisztulására!`,
      },
      {
        heading: "Theotokion",
        text: `Istennek Anyja, Mária, ama Jóillatnak fenséges hajléka, imáiddal tégy engem választott edénnyé, hogy szülötted szentségeiben részesülhessek!`,
      },
      {
        heading: "6. óda",
        subheading: "A vétkek szakadékában...",
        text: `Értelmemet, lelkemet, szívemet és testemet szenteld meg, ó, Üdvözítő, és méltass engem arra, ó, Uralkodóm, hogy félelmetes szentségeidhez járulhassak!
        
Hadd idegenedjem el a szenvedélyektől, és hadd nyerjem el ehhez még a kegyelemből fakadó életet és bizonyosságot, ó, Krisztus, a te szent misztériumaidból történő részesülés által!`,
      },
      {
        heading: "Theotokion",
        text: `Istennek szent Igéje, szent Anyádnak könyörgései által szenteld meg egész valómat, midőn most isteni titkaidhoz járulok!`,
      },
      {
        heading: "Kondákion",
        text: `Ne vess meg engem, ó, Krisztus, aki most testedet és isteni véredet veszem magamhoz! Amikor én nyomorult, tiszta és félelmetes titkaidból részesedem, az ne váljék ítéletemre, hanem legyen örök és halhatatlan életre!`,
      },
      {
        heading: "7. óda",
        subheading: "Amikor az arany képmást imádták...",
        text: `A te halhatatlan titkaidból történő részesülés legyen számomra a javak forrásává, fénnyé, életté, szenvedélytelenséggé, szolgáljon az istenibb erény elsajátítására és gyarapítására, ó, egyedüli Jóságos, és én dicsőíteni foglak ezért!

Hadd szabaduljak meg a szenvedélyektől, az ellenségektől, a szükségtől és minden gyötrelemtől, hiszen félelemmel és vágyakozással, áhítattal járulok most halhatatlan és isteni misztériumaidhoz, ó, Emberszerető, és így énekelek néked: Áldott vagy, atyáinknak Istene.`,
      },
      {
        heading: "Theotokion",
        text: `Aki értelmet meghaladó módon szülted az üdvözítő Krisztust, Isten kegyelmével teljes, esedezem hozzád, a tisztához, én, a tisztátalan szolgád: most, hogy a szeplőtelen titkokhoz készülök járulni, tisztítsd meg egész valómat a test és a lélek fertőzetétől!`,
      },
      {
        heading: "8. óda",
        subheading: "A tüzes kemencébe alászállott Istent...",
        text: `Ó, Krisztus, méltass engem, a kétségbeesettet is mennyei, félelmetes és szent titkaidnak és isteni, titkos vacsorádnak részesévé válnom, üdvözítő Istenem!

Könyörületedhez folyamodva, ó, Jóságos, félelemmel így kiáltok hozzád: maradj énbenem, ó, Üdvözítő, én pedig – amint mondottad – maradjak tebenned, hiszen íme, irgalmadban bízva eszem a te testedet és iszom a te véredet!`,
      },
      {
        heading: "Theotokion",
        text: `Rettegek, nehogy a tüzet befogadva megégjek miként a viasz és mint a fű. Ó, félelmetes titok! Ó, Istennek könyörülete! Hogyan lehetséges, hogy én, aki agyagból vagyok, az isteni testből és vérből részesülök, és romolhatatlanná leszek?`,
      },
      {
        heading: "9. óda",
        subheading: "Kezdet nélküli Atyától...",
        text: `Ízleljétek és lássátok, hogy jóságos az Úr, mert érettünk egykor hozzánk hasonlóvá lett, és önmagát egyszer áldozatul mutatván be Atyjának, mindenkor leöletik, megszentelve a benne részesülőket.

Lelkemet testemmel együtt szenteld meg, ó, Uralkodó, hadd világosodjam meg, meneküljek meg, legyek hajlékoddá a szent titkaidban való részesülésem által, hogy bennem lakozzál az Atyával és a Lélekkel együtt, nagyirgalmú Jótevőnk!

Tűzzé és fénnyé legyen számomra, ó, Üdvözítőm, legdrágább tested és véred, amely elégeti a bűn korhadt fáját, elhamvasztja a szenvedélyek töviseit, és egész valómat megvilágosítja, hogy Istenséged előtt hódoljak!`,
      },
      {
        heading: "Theotokion",
        text: `Isten testesült meg a te tisztaságos véredből. Ezért minden nemzedék magasztal téged, Nagyasszonyunk, az értelmek sokasága is dicsőít, mert általad láthatta meg tisztán a mindenek Uralkodóját, aki magára öltötte az emberi lényeget.
        
${HOLY_FATHERS}`,
      },
    ],
    image: require("../assets/orthodox/JerusalemCross.png"),
  },
  {
    id: 4,
    title: "Imádság reggel, szentáldozás előtt",
    header_title: "Imádság reggel",
    sections: [
      {
        text: `${INTRO} 
        
${INTO_KATHISMA}`,
      },
      {
        heading: "22. zsoltár",
        text: `Az Úr pásztorol engem, semmiben sem szűkölködöm. Pázsitos réten ad nekem szállást.

Csöndes víz mellett táplál engem, visszaadta lelkemet.

Az igazságosság ösvényeire vezetett engem az ő Nevéért.

Hiszen, ha a halál árnyékában járok is, nem félek a bajtól, mert te velem vagy.

Pálcád és pásztorbotod megvigasztal.

Asztalt terítettél nekem gyötrőim szeme láttára.

Fejemet bekented olajjal, és poharad teljesen megrészegít.

Irgalmad követ engem életemnek minden napján,

Az Úr házában lakozom hosszú időn át.`,
      },
      {
        heading: "23. zsoltár",
        text: `Az Úré a föld és annak teljessége, a földkerekség és annak minden lakója. 
        
Ő alapozta meg azt a tengereken, és szilárdította meg a folyókon.

Kicsoda megy fel az Úr hegyére, és kicsoda áll meg az ő szent helyén? 

Az, akinek keze ártatlan és szíve tiszta, aki nem adta lelkét hazugságra, és nem esküdött hamisan felebarátjának.

Az nyer áldást az Úrtól, és könyörületet üdvözítő Istenétől. 

Ez azok nemzetsége, akik keresik az Urat, akik Jákob Istenének orcáját keresik.

Emeljétek föl kapuitokat, ti fejedelmek, és emelkedjetek föl, örökkévaló kapuk, hogy bemenjen a dicsőség Királya.

Kicsoda ez a dicsőség Királya? A hatalmas és erős Úr, az Úr, aki erős a háborúban.

Emeljétek föl kapuitokat, ti fejedelmek, és emelkedjetek föl, örökkévaló kapuk, hogy bemenjen a dicsőség Királya!

Kicsoda ez a dicsőség Királya? A seregek Ura, ő a dicsőség Királya.`,
      },
      {
        heading: "115. zsoltár",
        text: `Hittem, ezért szóltam, pedig megaláztattam nagyon.

Így szóltam önkívületemben: „Minden ember hazug!”

Mivel viszonozhatom az Úrnak mindazt, amit velem cselekedett?

Az üdvösség kelyhét veszem magamhoz, és az Úr nevét szólítom.

Az Úrnak tett fogadalmaimat megtartom egész népe előtt.

Drága az Úr előtt kegyeltjeinek halála.

Ó, Uram, én a te szolgád vagyok, a te szolgád vagyok és szolgálóleányod fia. Széttörted bilincseimet.

Néked mutatom be a dicséret áldozatát, és az Úr nevét szólítom. 

Az Úrnak tett fogadalmaimat megtartom az ő egész népe előtt, az Úr házának tornácaiban, városod közepén, Jeruzsálem.

${GLORY_BOTH}

Alliluia, alliluia, alliluia. Dicsőség néked, Isten! (3x)

Uram, irgalmazz! (3x)`,
      },
      {
        heading: "Tropárionok (2. plagális hang)",
        text: `Nézd el törvénytelenségeimet, Uram, aki a Szűztől születtél, tisztítsd meg szívemet, és tedd azt szeplőtelen tested és véred templomává! Ne vess el engem a te színed elől, hiszen mérhetetlen a te irgalmad!

${GLORY}

Szentségeidben való részesülésre hogyan merészkedjem, én méltatlan? Hiszen, ha a méltókkal merészelnék hozzád járulni, köntösöm elárul, mert nem illik a lakomához, és ítéletet vonok sokat vétkezett lelkemre. Tisztítsd meg lelkemnek szennyét, ó, Uram, és üdvözíts, mint emberszerető!

${BOTH_NOW}`,
      },
      {
        heading: "Theotokion",
        text: `Nagy az én vétkeim sokasága, Istennek Szülője! Hozzád menekültem, Tisztaságos, üdvösségért könyörögve. Látogasd meg beteg lelkemet, és járj közre Fiadnál és Istenünknél, hogy adja meg elkövetett gonoszságaim bocsánatát, ó, egyedül Áldott!`,
      },
      {
        subheading: "Nagycsütörtökön hozzáfűzzük",
        text: `Amikor a dicsőséges tanítványok megvilágosodtak a vacsorán a lábmosás által, akkor az istentelen Júdás elsötétült a kapzsiság betegségétől, és elárult törvénytelen bíráknak téged, az igazságos Bírót. Lásd, ó pénzimádó, azt, aki ezért kötéllel lakolt! Kerüld a telhetetlen lelket, amely ilyet merészelt tenni a tanítóval! Mindenkihez jóságos Urunk, dicsőség néked!

Uram, irgalmazz! (40x)`,
      },
      {
        heading: "Tanító vers",
        subheading: "Fordító Simeontól arról, miképpen járulj a szentségekhez",
        text: `Ha ennétek Urunk testét, testvéreim, nagy félelemmel jöjjetek, hisz éget az, s ha tisztaságos vérét innátok megint, békéljetek meg mindenképp mindenkivel, s vegyétek úgy a titokzatos lakomát!`,
      },
      {
        heading: "Hasonló vers",
        text: `Midőn Urunk üdvösségadó testét ennétek, és vérét innátok, emberek, nagy rettegéssel hozzá ekként szóljatok:`,
      },
      {
        heading: "Első ima",
        subheading: "Nagy Szent Vazultól",
        text: `Urunk és Uralkodónk, Jézus Krisztus Istenünk, élet és halhatatlanság Forrása, minden látható és láthatatlan alkotás Teremtője, a kezdet nélkül való Atyának szintén öröktől fogva és kezdet nélkül való Fia, aki jóságod bőségében az utolsó napokban testet öltöttél, keresztre feszíttettél és feláldoztattál érettünk, hálátlanokért és érdemtelenekért, aki tulajdon véreddel újjáalkottad a bűntől megrontott természetünket; te magad, halhatatlan Királyunk, fogadd el nekem, bűnösnek megtérését, hajtsd füledet hozzám, és hallgasd meg szavamat! Mert vétkeztem, Uram, vétkeztem az ég ellen és teellened, és nem vagyok méltó feltekinteni dicsőséged magasságára, mert megharagítottalak, ó Jóságos, megszegtem parancsolataidat, és nem engedelmeskedtem rendeléseidnek. Te azonban, Uram, aki türelmes, hosszantűrő és nagyirgalmú vagy, nem engedted, hogy törvényszegéseimmel együtt pusztuljak el, hanem mindenek ellenére vártad megtérésemet. Mert te mondottad, Emberszerető, prófétád által: „Akarva nem akarom a bűnösnek halálát, hanem hogy megtérjen, és éljen" (Ez 18, 23). Mert nem akarod, Uralkodóm, hogy kezednek alkotása elvesszen, és nem gyönyörködsz az emberek vesztén, hanem azt akarod, hogy mindenki üdvözüljön, és eljusson az igazság ismeretére (1 Tim 2,4). Ezért én is, habár méltatlan vagyok a mennyre és a földre, de még erre a mulandó életre is, mert egész valómat a bűnnek vetettem alá, és a gyönyörök rabjává lettem, és így haszontalanná tettem a te képmásodat, mégis, mivel a te teremtményed és alkotásod vagyok, nem veszítem el az üdvözülésembe vetett reményemet, én nyomorult, hanem mérhetetlen könyörületedben bizakodva járulok hozzád. Fogadj hát engem, emberszerető Krisztus, mint a paráznát, a latort, a vámszedőt és a tékozló fiút, és vedd el bűneimnek súlyos terhét, aki elveszed a világ bűneit, és meggyógyítod az emberek betegségeit, aki magadhoz szólítod és megnyugosztalod a megfáradtakat és megterhelteket, aki nem azért jöttél, hogy az igazakat elhívd, hanem a bűnösöket a megtérésre. Tisztíts meg engem a test és a lélek minden fertőzetétől; taníts meg szentül élni a te félelmedben, hogy tiszta lelkiismeretem tanúbizonyságában fogadva be szentségeidnek részét, egyesüljek szent testeddel és véreddel, és énbennem lakozzál és bennem maradjál az Atyával és a Szentlélekkel együtt. Igen, Jézus Krisztus, Uram Istenem, ne legyen kárhozatomra a te tisztaságos és életet adó szentségeidben való részesülés, sem pedig beteg ne legyek lélekben és testben, amiért méltatlanul részesülök azokban, hanem add meg nekem, hogy utolsó leheletemig elítéltetés nélkül fogadjam szentségeidnek részét a Szentlélekkel való közösségre, az örök élet elnyerésére, és elfogadható védelemre félelmetes ítélőszéked előtt. Hogy minden választottaddal együtt én is részesévé legyek kifogyhatatlan javaidnak, amelyeket azok számára készítettél, akik szeretnek téged, Uram, és akikben megdicsőíttettél mindörökké. Ámin.`,
      },
      {
        heading: "Második ima",
        subheading: "Nagy Szent Vazultól",
        text: `Tudom, Uram, hogy méltatlanul részesülök szeplőtelen testedben és drága véredben, és bűnös vagyok, és a magam kárhozatát eszem és iszom, amikor nem különböztetem meg az én Krisztusom és Istenem testét és vérét. Ámde könyörületedben bízva hozzád járulok, aki ezt mondottad: „Aki eszi a testemet és issza a véremet, bennem marad, és én őbenne” (Jn 6,56). Szánj meg, Uram, és ne bélyegezz meg engem, bűnöst, hanem cselekedj velem irgalmasságod szerint, és legyenek nekem ezek a szentségek gyógyulásomra, megtisztulásomra, megvilágosodásomra, oltalmamra és üdvözülésemre, lelkem és testem megszentelésére, minden képzelődés, gonosztett és ördögi tevékenység elhárítására, a hozzád való bizodalmamra és szeretetemre, életvitelem kiigazítására és megerősítésére, erényem és tökéletességem gyarapítására, parancsolataid teljesítésére, a Szentlélekkel való közösségre, az örök élet elnyerésére és elfogadható védelmemre félelmetes ítélőszéked előtt, ne pedig kárhozatomra vagy elítéltetésemre. Ámin.`,
      },
      {
        heading: "Harmadik ima",
        subheading: "Aranyszájú Szent Jánostól",
        text: `Uram Istenem, tudom, hogy nem vagyok méltó, sem érdemes arra, hogy lelkem hajlékának födele alá jöjj, mert egészen puszta és omladozó az, és nincsen nálam hely, amely méltó volna arra, hogy ott lehajtsd fejedet. Ámde, mivel a magasságból megaláztad magadat érettünk, ereszkedj le most az én gyarlóságomhoz is! Amint elfogadtad az oktalan állatok barlangjában és jászlában való fekvést, úgy kegyeskedj betérni az én oktalan lelkem jászlába és bemocskolt testembe is! Amiképpen nem idegenkedtél meglátogatni a bűnösöket, és együtt étkezni velük a leprás Simon házában, úgy kegyeskedj bejönni leprás és bűnös lényem gyarló lelkének hajlékába is. Amint nem taszítottad el magadtól a hozzám hasonló paráznát és bűnöst, aki hozzád járult, és megérintett téged, úgy könyörülj meg énrajtam bűnösön is, aki hozzád járulok, és megérintelek téged. Ahogyan nem viszolyogtál az ő beszennyezett és szentségtelen szájának csókjától, ne viszolyogj az én még szennyesebb és szentségtelenebb számtól, sem bemocskolt, tisztátalan és közönséges ajkamtól és még tisztátalanabb nyelvemtől, hanem legyen számomra szentséges tested és drága véred parazsa gyarló lelkem és testem megszentelésére, megvilágosodására és megerősödésére, sok mulasztásom terhének megkönnyítésére, minden ördögi befolyástól való megőrzésemre, minden hitvány és gonosz szokásom elhárítására és megakadályozására, szenvedélyeim elpusztítására, parancsolataid betartására, isteni kegyelmed gyarapítására és országod elnyerésére. Hiszen nem könnyelműen járulok hozzád, Krisztus Istenünk, hanem mert kimondhatatlan jóságodban bízom, nehogy sokáig nélkülözve a részesülést belőled, a szellemi farkas martaléka legyek. Ezért könyörgök hozzád, Uralkodóm, aki egyedül vagy szent, szenteld meg lelkemet és testemet, értelmemet és szívemet, veséimet és bensőmet, egész valómat újítsd meg, ültesd el tagjaimban félelmedet, és tedd eltörölhetetlenné bennem megszentelésedet. Légy segítőm és oltalmazóm, vezéreld békességben életemet, és méltass arra is, hogy jobbodon állhassak majd szentjeiddel együtt, tisztaságos Anyádnak, a néked szolgáló anyagtalan és tisztaságos erőknek és minden szentednek imái és közbenjárásai által, akik időtlen időktől kedvedben jártak. Ámin.`,
      },
      {
        heading: "Negyedik ima",
        subheading: "Aranyszájú Szent Jánostól",
        text: `Nem vagyok méltó, felséges Uram, hogy lelkem hajlékába betérj. Ámde, mivel te magad, mint emberszerető bennem akarsz lakozni, bizakodva járulok hozzád. Parancsolod, hogy nyissam föl a kapukat, amelyeket egyedül te alkottál, és bejössz hozzám szokott emberszereteteddel. Bejössz, és megvilágosítod elsötétült gondolataimat. Hiszem, hogy megteszed ezt, hiszen nem fordultál el a paráznától sem, aki könnyek közt járult hozzád, sem a bűnbánó vámszedőt nem taszítottad el, sem a latort nem űzted el, aki felismerte a te országodat, sem megtért üldöződet nem hagytad meg olyannak, amilyen volt, hanem mindazokat, akiket a bűnbánat vezetett hozzád, barátaid közé fogadtad, te, aki egyedül vagy áldott mindenkor, most és időtlen időkig. Ámin.`,
      },
      {
        heading: "Ötödik ima",
        subheading: "Aranyszájú Szent Jánostól",
        text: `Uram, Jézus Krisztus, Istenem, nézd el, engedd el, könyörülj és bocsásd meg nekem, bűnös, haszontalan és méltatlan szolgádnak vétkezéseimet, mulasztásaimat és hibáimat, amelyeket ifjúságom óta eddig a napig és óráig elkövettem, akár tudatosan, akár öntudatlanul, akár szóban, akár cselekedetben, akár szándékomban, akár gondolatban, akár próbálkozással és összes érzékemmel. A téged mag nélkül szülő Anyádnak, a tisztaságos és örökszűz Máriának, egyedüli csalhatatlan reménységemnek, oltalmazómnak és menedékemnek közbenjárására méltass engem arra, hogy elítéltetés nélkül részesüljek tisztaságos, halhatatlan, életadó és félelmetes titkaidban bűneim bocsánatára és az örök életre, megszentelésemre, megvilágosodásomra, megerősödésemre és meggyógyulásomra, lelkem és testem egészségére; gonosz gondolataim, okoskodásaim, tévképzeteim, és a sötét és gonosz lelkek éjjeli rémképeinek eltörlésére és teljes megsemmisítésére. Mert tiéd az ország, az erő, a dicsőség, a tisztelet és a hódolat, az Atyával és a Szentlélekkel együtt, most és mindenkor és mindörökkön örökké. Ámin.`,
      },
      {
        heading: "Hatodik ima",
        subheading: "Damaszkuszi Szent Jánostól",
        text: `Felséges Urunk, Jézus Krisztus Istenünk, aki jóságos és emberszerető vagy, és egyedül van hatalmad megbocsátani az emberek bűneit; nézd el minden tudatosan és öntudatlanul elkövetett vétkezésemet, és méltass arra, hogy elítéltetés nélkül részesülhessek isteni, dicsőséges, tisztaságos és életet adó misztériumaidban, ne pedig kárhozatomra, sem pedig bűneim szaporítására, hanem megtisztulásomra, megszentelésemre és az eljövendő életnek és országnak zálogául; védőfalam legyen az, segedelmem, az ellenség elhárítója és vétkeim sokaságának eltörlője. Mert az irgalom, könyörület és emberszeretet Istene vagy, és néked zengünk dicsőséget, az Atyával és a Szentlélekkel együtt, most és mindenkor és mindörökkön örökké. Ámin.`,
      },
      {
        heading: "Hetedik ima",
        subheading: "Új Teológus Szent Simeontól",
        text: `Csúf, beszennyezett ajkamról,
 gyalázatos, rút szívemből,
 tisztátalan nyelvem által,
 bemocskolt lelkem mélyéből
 fogadd, Krisztus, könyörgésem,
 és ne is vessél el engem, 
 sem szavam, viselkedésem,
 sem nagy szégyentelenségem!
 Engedd, hogy bátran 
 elmondjam, 
 Krisztusom, amit szeretnék,
 de még taníts is meg engem, 
 hogy mit tegyek, miként szóljak!

Vétkeztem, mint a parázna,
 ki mikor megtudta, hol vagy,
 illóolajat vásárolt,
 s bátran eljött, hogy megkenje
 lábaidat, Krisztus Isten, 
 Uralkodóm és Megváltóm.
 Ahogyan őt el nem űzted,
 aki szívből járult hozzád,
 Isten Ige, ne utálj meg 
 engem sem, engedd, hogy lábad 
 megöleljem és csókoljam,
 és könnyemnek záporával,
 mint a legdrágább olajjal
 vakmerően megöntözzem!
 Moss meg engem könnyeimmel,
 tisztíts meg azokkal, Ige,
 engedd el a sok-sok vétkem,
 és bocsáss meg nékem mindent!

Tudod bajom sokaságát,
 tudod sebeimnek számát,
 látod fekélyem mélységét,
 de hitem is előtted van, 
 buzgalmamat is jól látod,
 s sóhajtásaim is hallod.
 Nem marad előtted rejtve, 
 Istenem, Uram, Megváltóm,
 egyetlenegy könnycseppem sem,
 sem a könnycsepp kicsiny része.
 Azt, ami csak szándék bennem,
 szemed látja réges-régtől,
 és amit még meg sem tettem, 
 szent könyvedben meg van írva
 világ kezdetétől fogva.

Lásd alázatom nagyságát,
 nézd, mily nagy az igyekvésem,
 és bűneimet bocsásd meg,
 Istene a mindeneknek, 
 hogy azután tiszta szívvel,
 istenfélő értelemmel
 és töredelmes lélekkel
 részesüljek tisztaságos,
 szent misztériumaidban,
 mik élettel s istenséggel
 töltik el azt, ki őszintén
 eszi s issza tested s véred.
 Uralkodóm, Te mondottad:
 „Ki magához veszi testem, 
 és aki véremet issza,
 bennem marad, s én őbenne."
 Uramnak és Istenemnek
 szava igaz mindenképpen:
 ki részesül istenítő
 és isteni kegyelmedből,
 nincs egyedül semmiképpen,
 hanem Krisztusom, veled van, 
 háromszoros Nap Fényével,
 világ Világosságával.

S hogy egyedül ne maradjak 
 nélküled, Életrekeltőm,
 Lélegzetem és Életem,
 egyetlen Örvendezésem,
 a világnak Üdvössége,
 ezért menekedtem hozzád,
 amint látod, könnyes szemmel
 és töredelmes lélekkel,
 s forrón esedezem hozzád:
 mosd le sok-sok vétkezésem,
 hogy részesüljek legtisztább,
 szent misztériumaidból,
 s közben el ne ítéltessem,
 hanem maradj, amint mondtad, 
 énvelem, a nyomorulttal,
 nehogy engem a Kísértő
 kegyelmednek hiányában
 találjon és elragadjon,
 álnok módon elszakítva
 megszentelő igéidtől.
 Ezért hát elédbe hullok,
 és forrón kiáltok hozzád:
 mint a tékozlót s paráznát
 fogadtad, ki hozzád járult,
 úgy fogadj engem, paráznát
 és tékozlót, ó, Irgalmas,
 ki töredelmes lélekkel
 járulok, íme, tehozzád!

Tudom, Uram, hogy más senki, 
 mint én, ellened nem vétett,
 és mindazt nem cselekedte,
 amiket én cselekedtem,
 de tudom azt is, Megváltóm,
 hogy sem a vétkek nagysága,
 sem a bűnök sokasága
 soha felül nem múlhatja
 kegyelmed hosszantűrését,
 s emberszerető jóságod.
 Szereteted olajával
 megtisztítod, s világítod,
 aki bűnét szívből bánja,
 világosság gyermekévé,
 istenséged részesévé
 teszed őt irigység nélkül,
 és azt, ami angyaloknak
 és emberi értelemnek
 is különös, megtanítod
 neki, mint igaz barátnak.

Ez tesz engem vakmerővé,
 ez ad, én Krisztusom, szárnyat.
 Sok-sok jótéteményedből
 ím, bátorságot merítek,
 s örvendezve és reszketve
 részesülök a tüzedben.
 Bár fű vagyok, de csodásan,
 mondhatatlan harmatodtól,
 akárcsak a bokor régen,
 lángolok, de el nem égek.
 Ezért egész értelmemmel
 s szívemmel hálára gyúlva,
 hálás testtel és lélekkel,
 megannyi hálás tagommal
 imádlak és magasztallak,
 Istenem, és dicsőítlek,
 ki áldott vagy most és mindig,
 és mindörökkön örökké.`,
      },
      {
        heading: "Nyolcadik ima",
        subheading: "Fordító Simeontól",
        text: `Egyedüli tiszta és szeplőtelen Uram, aki emberszereteted kifejezhetetlen együttérzése folytán természetünk teljességét magadra vetted annak tiszta és szűzi véréből, aki természetfölötti módon szült téged az isteni Lélek alászállása által és az örökkévaló Atya jóakaratából, Krisztus Jézus, Isten Bölcsessége, Békessége és Ereje! Aki fölvett természetünkben elvállaltad az életadó és megváltó kínszenvedéseket, a keresztet, a szögeket, a kopját és a halált, öld meg testemnek lélekölő szenvedélyeit! Aki eltemettetéseddel kifosztottad a pokol birodalmát, a jó gondolatok által temesd el a gonosz sugallatokat, és szórd szét a gonoszság szellemeit. Aki harmadnapi életadó feltámadásoddal feltámasztottad az elesett ősatyát, támassz fel engem is, aki a bűn által elbuktam, megmutatva nekem a bűnbánat módját. Aki testednek dicsőséges mennybemenetelével megistenítetted fölvett természetünket, és azt Atyádnak jobbján való üléssel tisztelted meg, méltass engem is a te szent misztériumaidból való részesülés által, hogy az üdvözülőknek jobbod felől álló csoportjában lehessek. Aki a Vigasztaló Lélek alászállása által szent tanítványaidat annak drága edényeivé tetted, engem is tegyél az ő alászállásának befogadó edényévé. Aki újból eljövendő vagy, hogy igazságosan ítélkezz a földkerekség fölött, kegyesen engedd meg, hogy minden szenteddel együtt én is a fellegekben fogadjalak téged, Teremtőmet és Formálómat, hogy véget nem érően dicsőítselek és magasztaljalak téged kezdet nélküli Atyáddal és szentséges, jóságos és éltető Lelkeddel együtt, most és mindenkor és mindörökkön örökké. Ámin.`,
      },
      {
        heading: "Kilencedik ima",
        subheading: "Damaszkuszi Szent Jánostól",
        text: `Itt állok templomodnak kapuja előtt, de nem hagytam el gonosz gondolataimat. Mégis, ó Krisztus Isten, aki megigazulást adtál a vámszedőnek, aki irgalmaztál a kánaáni asszonynak, és megnyitottad a Paradicsom kapuit a latornak, nyisd meg nekem is emberszereteted könyörületét, és miként a paráznát és a vérfolyásos asszonyt, fogadj el engem, aki hozzád járulok, és megérintelek. Mert emez, amikor megérintette ruhádnak szegélyét, azonnal gyógyulást nyert, amaz pedig, amikor átölelte tisztaságos lábadat, bűneinek bocsánatát vette. Én nyomorult tehát, aki egész Testedet merészelem befogadni, el ne égjek, hanem fogadj be engem is, mint azokat, és világosítsd meg lelkem érzékeit, elégetve a bűneimért járó vádakat, annak, aki mag nélkül szült téged és a mennyei hatalmaknak közbenjárásai által, mert áldott vagy mindörökkön örökké. Ámin.`,
      },
      {
        heading: "Tizedik ima",
        subheading: "Aranyszájú Szent Jánostól",
        text: `Hiszem, Uram, és vallom, hogy valóban Te vagy a Krisztus, az élő Isten Fia, aki eljöttél a világra, hogy a bűnösöket üdvözítsd, akik között az első én vagyok. Hiszem még, hogy ez maga a te szeplőtlen tested, és ez maga a te drága véred. Könyörgök tehát hozzád, irgalmazz nekem, és bocsásd meg szándékos és szándéktalan vétkezéseimet, amelyeket szóval, cselekedettel, tudatosan vagy öntudatlanul követtem el, és méltass engem arra, hogy elítéltetés nélkül részesüljek legtisztább misztériumaidból a bűnök bocsánatára és az örök életre. Ámin.`,
      },
    ],
    image: require("../assets/orthodox/Seraph.png"),
  },
  {
    id: 5,
    title: "Közvetlenül áldozás előtt",
    header_title: "Áldozás előtt",
    sections: [
      {
        heading: "Közvetlenül áldozás előtt",
        subheading: "Fordító Simeontól",
        text: `Lám, rettegéssel szentségedhez járulok, Formálóm, meg ne égess engem általa,

Hisz tűz vagy, mely a méltatlant elégeti, de tisztíts meg minden szennyfolttól, Krisztusom!

Titokzatos vacsorádnak részesévé fogadj ma engem, Istennek Fia, mert nem mondom el ellenségeidnek a titkot, sem csókot nem adok néked, mint Júdás, de megvallak, akár a lator: Emlékezz meg rólam, Uram, a te országodban!

Az istenítő vért, ha látod, félj és remegj: Parázs az, mely a méltatlant elégeti. Az Isten teste táplál és megistenít: az értelem nő, és a lélek istenül.

Elbűvöltél vágyaddal, ó Krisztus, és átváltoztattál isteni szerelmeddel. Égesd meg bűneimet anyagtalan tűzzel, és méltass rá, hogy elteljek azzal, hogy benned gyönyörködöm, és így örvendezve magasztaljam, ó, Jóságos, mindkét eljöveteledet!

Szentélyed ragyogásába hogyan lépjek be, én méltatlan? Hiszen, ha bemennék a nászcsarnokba, köntösöm elárulna engem, mert nem menyegzőre való, s az angyalok megkötözve kivetnek onnan. Tisztítsd meg lelkemnek szennyét, Uram, és üdvözíts engem, mint emberszerető.

Emberszerető Uralkodó, Jézus Krisztus Urunk és Istenünk, ne legyenek ezek a szentségek elítéltetésemre méltatlanságom miatt, hanem lelkem és testem megtisztulására és megszentelésére, és eljegyzésemre az eljövendő élettel és országgal! Mert jó nekem az Istenhez ragaszkodnom, és az Úrba helyeznem üdvözülésemnek reménységét.`,
      },
      {
        subheading: "Majd újból:",
        text: `Titokzatos vacsorádnak részesévé fogadj ma engem, Istennek Fia, mert nem mondom el ellenségeidnek a titkot, sem csókot nem adok néked, mint Júdás, de megvallak, akár a lator: Emlékezz meg rólam, Uram, a te országodban! Emlékezz meg rólam, Uralkodóm, midőn eljössz a te országodban! Emlékezz meg rólam, Szent, midőn eljössz a te országodban!`,
      },
    ],
    image: require("../assets/orthodox/ProsphoraSeal.png"),
    imageSize: 200,
  },
  {
    id: 6,
    title: "Hálaadás szentáldozás után",
    header_title: "Áldozás után",
    sections: [
      {
        heading: "Buzdító versek",
        text: `Midőn Urunk titokzatos és éltető ajándékát magadhoz vetted tisztesen, köszönd meg rögtön, énekelj dicséretet, s lelked mélyéből Istenünkhöz így kiálts: 
        
Dicsőség néked, Isten (3x)`,
      },
      {
        heading: "Hálaadó imák",
        subheading: "Ismeretlen szerzőtől",
        text: `Hálát adok néked, Uram Istenem, hogy nem taszítottál el engem, bűnöst, hanem arra méltattál, hogy szentségeid részesévé legyek. Hálát adok néked, hogy méltattál engem, méltatlant arra, hogy szeplőtelen és mennyei adományaidban részesüljek. Mégis, emberszerető Uralkodóm, aki érettünk meghaltál és feltámadtál, aki lelkünk és testünk javára és megszentelésére nekünk ajándékoztad e félelmetes és életadó titkokat, add, hogy ezek nekem is legyenek lelkem és testem gyógyulására, minden ellenség elhárítására, szívem szemének megvilágítására, lelki képességeim békességére, megszégyeníthetetlen hitre, színlelés nélküli szeretetre, a bölcsesség beteljesedésére, parancsolataid megtartására, isteni kegyelmed gyarapodására és a te országodban való részesülésre! Hogy megszentelésedben azok által megőrizve mindenkor megemlékezzem a te kegyelmedről, és többé ne magamnak éljek, hanem néked, Uralkodónknak és Jótevőnknek. És hogy így az örök élet reményében végezzem be jelenvaló életemet, és az örök nyugalomra jussak, ahol szüntelen az ünneplők hangja, és végtelen a gyönyörűségük azoknak, akik a te orcádnak kimondhatatlan szépségét látják. Mert te vagy, ó, Krisztus Istenünk, a téged szeretők igazi kívánsága és kifejezhetetlen örvendezése, és téged dicsőít az egész teremtés mindörökké. Ámin.`,
      },
      {
        subheading: "Nagy Szent Vazultól",
        text: `Uralkodó Krisztus Isten, minden idők Királya és mindenek Teremtője, hálát adok néked minden jóért, amit tőled kaptam, mindenekelőtt a szeplőtelen és életadó misztériumaidban való részesülésért. Könyörgök hát hozzád, ó, jóságos és Emberszerető, őrizz meg oltalmad alatt és szárnyaid árnyékában; és add meg nekem, hogy tiszta lelkiismerettel, utolsó leheletemig méltóképpen részesüljek szentségeidben bűneim bocsánatára és az örök életre. Mert te vagy az élet kenyere, a szentség forrása, a javak adományozója, és néked zengünk dicsőséget az Atyával és a Szentlélekkel együtt, most és mindenkor és mindörökké. Ámin.`,
      },
      {
        subheading: "Fordító Simeontól",
        text: `Ki önként adtad ételünkül testedet, ki tűz vagy, és a méltatlant megégeted, ne égess el most, Alkotóm és Istenem, de járd át minden tagomat, bensőmet is, vesémet, minden ízemet, s a szívemet! Égesd el vétkeim tüskéit teljesen, tisztítsd meg lelkem, és szenteld meg testemet, és szilárdítsd meg porcaim s a csontomat, világítsd így meg mind az öt érzékemet, és járja át félelmed testemet s lelkemet! 
        
Örökké védelmezz s oltalmazz, Istenem, a lélekgyilkos szótól és tettektől is! 

Tisztíts meg, szentelj meg, adjál egészséget, szépíts meg, tégy okossá és világíts meg, legyek hajlékod, Szentléleknek temploma, s ne lakjék bennem többé bűnös szenvedély! Így, mint tüzet kerüljön démonok hada, hisz tested s véred által házaddá leszek. 

A vértanúk s az aszkéták mind járjanak tenálad közre, s mind a testetlen karok, Keresztelőd, a bölcs apostolok, s Anyád, a tisztaságos szeplőtlen Szűz Mária! Fogadd imáikat, jóságos Krisztusom, s fény gyermekévé tedd szolgádat általuk! 

Te egymagad vagy lelkeinknek orvosa, megszentelője, megvilágító Ura, és minden nap neked zengünk dicsőítést, szent Istenünk és jóságos Uralkodónk!`,
      },
      {
        subheading: "Ismeretlen szerzőtől",
        text: `Jézus Krisztus, Urunk Istenünk, szent tested legyen nekem az örök életre, drága véred pedig bűneim bocsánatára. Legyen nekem ez az Eucharisztia örömömre, egészségemre és örvendezésemre; és félelmetes második eljöveteledkor méltass engem, bűnöst arra, hogy dicsőséged jobbján állhassak, tisztaságos Anyádnak és minden szentednek közbenjárásai által. Ámin.`,
      },
      {
        heading: "A legszentebb Istenszülőhöz",
        subheading: "Ismeretlen szerzőtől",
        text: `Szentséges Nagyasszony, Istennek Szülője, elsötétült lelkem világossága, reménységem, oltalmam, menedékem, vigaszom, vigasságom! Hálát adok néked, amiért méltattál engem, méltatlant arra, hogy Fiad szeplőtlen testének és drága vérének részese legyek. Te, aki az igazi Világosságot szülted, világosítsd meg szívemnek értelmi szemét! Aki a halhatatlanság forrását magadban hordoztad, kelts életre engem, aki a bűn által elpusztultam! Irgalmas Istennek könyörületes Anyja, irgalmazz nekem, kelts bűnbánatot és töredelmet a szívemben, és alázatot gondolataimban, adj szabadulást képzeteim rabságából! Méltass engem arra, hogy utolsó leheletemig elítéltetés nélkül vegyem magamhoz a tisztaságos misztériumok szentségét lelkem és testem gyógyulására, és add nekem a megbánás és a bűnvallás könnyeit, hogy dicsőítselek és magasztaljalak téged életemnek minden napján, mert áldott és dicsőített vagy mindörökké. Ámin.`,
      },
      {
        heading: "Istenfogadó Szent Simeon éneke",
        text: `Most bocsásd el szolgádat, Uralkodóm, ígéreted szerint békességben, mert meglátták szemeim üdvösségedet, amelyet minden nép szemeláttára készítettél világosságul a nemzetek megvilágosítására és népednek, Izraelnek dicsőségére.
        
${MIDDLE_NO_AXION}`,
        postheading:
          "A napi apolitikion és kondákion, valamint azé a szenté, akinek isteni liturgiáját végeztük.",
      },
      {
        heading: "Aranyszájú Szent János Liturgiája után Apolitikion (8. hang)",
        text: `Szájadnak kegyelme mint tündöklő fáklya ragyogta be a földkerekséget; elhintette a világban az önzetlenség kincseit, megmutatta nekünk az alázatosság fennköltségét. Aranyszájú János atyánk, aki igéddel nevelsz, járj közre Krisztusnál, az Igénél és Istennél, hogy üdvözítse a mi lelkünket.
        
${GLORY}`,
      },
      {
        heading: "Kondákion (6. hang)",
        text: `A mennyekből nyerted az isteni kegyelmet, és ajkaddal mindenkit arra tanítasz, hogy Háromságban imádja az egy Istent. Aranyszájú János, áldott szentéletű atyánk, méltóképpen dicsőítünk téged, mert az isteni titkok bölcs ismerője és a földkerekség tanítója vagy. 
        
${BOTH_NOW}`,
      },
      {
        heading: "Nagy Szent Vazul Liturgiája után Apolitikion (1. hang)",
        text: `Szavad elterjedt az egész földön, s az befogadta beszédedet, mellyel Istennek tetsző dogmákat állítottál fel. Megvilágítottad a létezők természetét, az emberek erkölcseit felékesítetted. Királyi papságú, szentéletű atyánk, esedezz Krisztus Istenhez, hogy ajándékozza nekünk a nagy irgalmat!
        
${GLORY}`,
      },
      {
        heading: "Kondákion (4. hang)",
        text: `Az Egyház rendíthetetlen alapjának bizonyultál, elvehetetlenül megadva minden halandónak az uralkodói méltóságot, és megpecsételve azt tanításaiddal, ó, mennyeket kinyilatkoztató Szent Vazul!

${BOTH_NOW}`,
      },
      {
        heading: "Előreszentelt adományok liturgiája után",
        subheading: ',,Az isteni hit..." dallamára',
        text: `Éber értelmet, ó, Gergely főpap, ajándékozott néked az Isten, s az isteni ige hirdetőjének bizonyultál. Az erények kinyilatkoztatójaként megmutatod az igazság ragyogását. Szentéletű atyánk, esedezz Krisztus Istenhez, hogy adja meg nekünk a nagy irgalmat!
        
${GLORY}`,
      },
      {
        heading: "Kondákion (8. hang)",
        subheading: 'A ,,Védelmező hadvezérnőnk..." dallamára',
        text: `Az Egyháznak ihletett, sokhúrú lantját és a bölcsességnek Istent hirdető nyelvét méltóképpen dicsőítsük a Dialógus szerzőjét! Az apostolok buzgóságát követvén azoknak nyomdokaiban jártál. Ezért így kiáltsunk: Örvendezz, Szent Gergely főpap atyánk!

${BOTH_NOW}`,
      },
      {
        heading: "Utána",
        text: `Sok fénnyel ragyogó égnek bizonyult az Egyház, amely minden hívőt megvilágosít. Ott állva így kiáltsunk: Ezt a házat erősítsd meg, Urunk!
        
Uram, irgalmazz! (12x)

${GLORY_BOTH}`,
      },
      {
        heading: "Theotokion",
        text: `Keresztények csalhatatlan oltalma, az Alkotóhoz való állhatatos közvetítője, ne vesd el a bűnösök könyörgő hangját, hanem igyekezz, mint jóságos segítségünkre, kik híven kiáltjuk hozzád: légy gyors a közbenjárásban és siess az esedezésben, Istennek Szülője, ki mindenkor oltalmazod tisztelőidet!

Uram, irgalmazz! (12x)

${GLORY_BOTH}

${AKI_A_KERUB}

${HOLY_FATHERS}`,
      },
    ],
    image: require("../assets/orthodox/star3.png"),
  },
  {
    id: 7,
    heading: "Más imák",
    title: "Kis könyörgő kánon a legszentebb Istenszülőhöz",
    header_title: "Paraklisz",
    sections: [
      {
        text: NAME_OF,
      },
      {
        heading: `142. Zsoltár`,
        text: PSALM_142,
      },
      {
        heading: `4. hang`,
        text: `${GOD_IS_THE_LORD}

      1. vers: Valljátok meg az Urat, és hívjátok segítségül az ő szent nevét!

${GOD_IS_THE_LORD}

      2. vers: Körülvettek engem a nemzetek, de az Úr nevével elűztem őket.

${GOD_IS_THE_LORD}

      3. vers: Az Úrtól lett ez, és csodálatos a mi szemünkben.

${GOD_IS_THE_LORD}`,
      },
      {
        heading: `4. hang. Aki önként felmentél a keresztre...`,
        text: `Isten Szülőjéhez állhatatosan folyamodjunk most, mi bűnösök és gyarlók, és boruljunk le előtte, bűnbánattal kiáltva lelkünk mélyéből: Nagyasszonyunk segíts, könyörülj rajtunk! Siess, elveszünk vétkeink sokasága miatt. Ne engedd el szolgáidat üres kézzel, mert Te vagy a mi egyedüli reménységünk!

${GLORY_BOTH}

Sohasem szűnünk meg, Istennek Szülője, hirdetni a te hatalmadat, mi méltatlanok. Hiszen, ha te közbenjárásoddal nem védelmeztél volna bennünket, ki mentett volna ki minket annyi veszedelemből? Ki őrzött volna meg bennünket mindmáig szabadnak? Nem pártolunk el tőled, Nagyasszonyunk, mert te mindenkor megmented szolgáidat minden bajtól.`,
      },
      {
        heading: "50. zsoltár",
        text: PSALM_50,
      },
      {
        heading: `Kánon`,
        subheading: "1. óda, 4. plagális hang, irmosz",
        text: `Áthaladva a vizen, mint a szárazon, és megmenekülve az egyiptomi gonoszságtól, az izraelita így kiáltott: Énekeljünk a mi szabadítónknak és Istenünknek.

${MOST_HOLY}
        
Sok kísértés szorongat engem; üdvösséget keresve hozzád menekedem. Ó, Igének szűz Anyja, szabadíts meg engem a megpróbáltatásoktól és a csapásoktól.

${MOST_HOLY}

A szenvedélyek támadásai háborgatnak engem, nagy csüggedéssel töltik el lelkemet; békítsd meg ó, Hajadon, a Te Fiad és Istened csendességével, ó, Feddhetetlen.

${GLORY}

Esedezem hozzád ó, Szűz, aki a Megváltót és Istent szülted, szabadíts meg a csapásoktól; mert hozzád menekedem, és hozzád emelem lelkemet és elmémet.

${BOTH_NOW}

Méltasd beteg testemet és lelkemet isteni meglátogatásra, és a te gondviselésedre, egyedüli Istenanyja, mert jóságos vagy, és a Jónak Szülője.`,
      },
      {
        heading: "3. óda, Irmosz",
        text: `Az égi boltozat ácsa és az Egyház építőmestere, Uram, te erősíts meg szeretetedben, mindenek között a legvágyottabb, hívők erőssége, egyedüli Emberszerető!

${MOST_HOLY}
        
Életem védelmezőjéül és oltalmazójául választlak téged, Istenszülő Szűz, te kormányozz engem a te kikötődbe, minden jónak oka, hívők erőssége, egyedüli legmagasztaltabb.

${MOST_HOLY}

Könyörgök hozzád, ó, Szűz, oszlasd el lelkem zavarát és csüggedésem háborgását! Mert te szülted, Isten mennyasszonya, Krisztust, a béke fejedelmét, egyedüli tisztaságos.

${GLORY}

Te, aki jótevőnket, minden jónak okát szülted, áraszd mindenekre jótéteményeid gazdagságát! Mert mindent megtehetsz, hiszen Krisztust szülted, az erőben hatalmast, ó, Istentől áldott.

${BOTH_NOW}

Keserves betegségek és ártalmas szenvedélyek megpróbáltatásait szenvedem, ó, Szűz. Siess segítségemre, mert a gyógyulások kimeríthetetlen kincsesházának ismerlek téged, egyedüli feddhetetlen!

Szabadítsd meg a veszedelmektől szolgáidat, Istennek Szülője, mert Isten után hozzád menekedünk mindnyájan, rendíthetetlen védőfalunkhoz és oltalmunkhoz!

Legmagasztaltabb Istenszülő, jóakaratodban tekints testem keserves sínylődésére, és gyógyítsd meg lelkem fájdalmát!`,
      },
      {
        heading: "Kathizma (2. hang)",
        text: `Forró pártfogónk, bevehetetlen védőfalunk, könyörületesség forrása, világnak menedéke, buzgón kiáltunk hozzád: Nagyasszonyunk, siess, válts ki bennünket a veszedelmekből, mert te vagy egyedüli gyors oltalmazónk!`,
      },
      {
        heading: "4. óda, Irmosz",
        text: `Hallottam, Uram, gondviselésed misztériumáról, felismertem cselekedeteidet, és dicsőítettem a te istenségedet.

${MOST_HOLY}

Csendesítsd le szenvedélyeim zűrzavarát és vétkeim háborgását, kormányosunknak és Urunknak Szülője, Isten menyasszonya!

${MOST_HOLY}

Tehozzád folyamodom, ajándékozd nekem a te könyörületességed mélységét, mert te szülted a könyörületest, mindazok Üdvözítőjét, akik dicsérnek téged.

${GLORY}

A Te adományaidnak örvendezve, ó, Tisztaságos, neked hálaéneket zengünk mind, akik Istenanyjának ismerünk téged.

${BOTH_NOW}

Te vagy a mi reménységünk és erősségünk, üdvösségünk rendíthetetlen védőfala, ó, Legmagasztaltabb, ezért megszabadulunk minden nyomorúságtól.`,
      },
      {
        heading: "5. óda, Irmosz",
        text: `Urunk, világosíts meg minket rendeléseiddel, és magasságos karoddal ajándékozd nekünk a te békédet, ó, Emberszerető!
        
${MOST_HOLY}

Töltsd el szívemet örvendezéssel, Tisztaságos, és ajándékozz meg tiszta boldogságoddal, mert te szülted az öröm forrását!

${MOST_HOLY}

Istennek tisztaságos Anyja, jöjj, válts ki minket a veszedelmekből, aki az örökkévaló megváltást és a minden értelmet felülmúló békességet szülted!

${GLORY}

Oszlasd el vétkeimnek sötétségét, Isten menyaszszonya, ragyogásod világosságával, mert te szülted az isteni és örökkévalóság előtti Világosságot!

${BOTH_NOW}

Gyógyítsd meg, Tisztaságos, szenvedélyeim betegségét, tégy méltóvá engem meglátogatásodra, és közbenjárásod által ajándékozz nekem egészséget!`,
      },
      {
        heading: "6. óda, Irmosz",
        text: `Könyörgésemet kiöntöm az Úr elé, és neki beszélem el nyomorúságaimat, mert bajokkal telt meg az én lelkem, és életem közel került az alvilághoz. Könyörgök hát, mint Jónás: vezess ki engem a pusztulásból, Istenem!

${MOST_HOLY}

A te Fiad és Istened önmagát adván át a halálnak, megszabadította a haláltól és a romlástól a halál és romlás által fogva tartott természetemet. Engeszteld hát őt, ó, Szűz, hogy szabadítson meg engem ellenségeim gonoszságától!

${MOST_HOLY}

Életem oltalmazójának ismerlek Téged, ó, Szűz, és a legbiztosabb őrizőmnek, aki szétszórja kísértéseim tömegét, és elűzi az ártó démonokat. Szüntelenül könyörgök hozzád: szabadíts meg a pusztító szenvedélyeimtől!

${GLORY}

Menedékünk várfala vagy, lelkünk tökéletes üdvössége, és enyhülés a nyomorúságban, ó, Hajadon, és örökké a te világosságodban ujjongunk. Nagyasszonyunk, most is szabadíts meg bennünket a szenvedélyektől és a veszedelmektől!

${BOTH_NOW}

Íme, betegen fekszem ágyamban és nincs gyógyulás testem számára. Ámde hozzád könyörgök, ó, Jóságos: aki az Istent, a világ Megváltóját és a betegségek orvosát szülted, gyógyíts meg a pusztító betegségekből!

Szabadítsd meg a veszedelmektől szolgáidat, Istennek Szülője, mert Isten után hozzád menekedünk mindnyájan, rendíthetetlen védőfalunkhoz és oltalmunkhoz!

Ó, Tisztaságos, aki a végső napokban kifejezhetetlen módon szülted ige által az Igét, engeszteld őt, hiszen anyai bizodalmad van hozzá!`,
      },
      {
        heading: "Kontákion (2. hang)",
        text: `Keresztények csalhatatlan oltalma, az Alkotóhoz való állhatatos közvetítője, ne vesd el a bűnösök könyörgő hangját, hanem igyekezz, mint jóságos segítségünkre, kik híven kiáltjuk hozzád: légy gyors a közbenjárásban és siess az esedezésben, Istennek Szülője, ki mindenkor oltalmazod tisztelőidet!`,
      },
      {
        heading: "Első antifóna (4. hang)",
        text: `Ifjúságom óta sok szenvedély támad engem, ámde te oltalmazz és üdvözíts, ó, Üdvözítő! (2x)
        
Akik gyűlölitek Siont, szégyenítsen meg benneteket az Úr! Mert miként a füvet, tűzzel éget meg titeket. (2x)

${GLORY}

A Szentlélek által minden lélek megelevenedik, és megtisztulva fölemelkedik, tündököl a Háromságos Egység által, szent titokzatossággal.

${BOTH_NOW}

A Szentlélek által fakad a kegyelem árja, amely az egész teremtést éltetően öntözi.`,
      },
      {
        heading: "Prokimen",
        text: `Megemlékezem a te Nevedről nemzedékről nemzedékre. (2x)

      vers: Halljad, leány, és lásd, és hajtsd ide füledet! Felejtsd el népedet és atyádnak házát, és megkívánja a Király a te szépségedet!

Megemlékezem a te Nevedről nemzedékről nemzedékre.`,
      },
      {
        heading: "Evangélium Lk 1, 39-49 és 56",
        text: `Azokban a napokban Mária felkelt, és sietve elment a hegyvidékre, Júda egyik városába. Betért Zakariás házába, és köszöntötte Erzsébetet. Történt pedig, hogy amint Erzsébet meghallotta Mária köszöntését, repesni kezdett méhében a magzat. Erzsébet eltelt Szentlélekkel, nagy hangon kiáltott, és így szólt: „Áldottabb vagy minden asszonynál, és áldott a te méhed gyümölcse! Hogyan lehet részem abban, hogy az én Uram anyja eljött hozzám? Mert íme, amint köszöntésed hangja a fülembe jutott, a magzat örömében repesni kezdett a méhemben. Boldog az, aki elhitte, hogy beteljesedik, amit az Úr mondott neki.”

 Mária így válaszolt: 

 „Magasztalja lelkem az Urat, és szellemem örvendezik üdvözítő Istenemnek, mert letekintett szolgálójának alázatos állapotára. Íme, mostantól áldani fog minden nemzedék, mert nagy dolgokat cselekedett velem a Hatalmas, és szent az ő neve.”

Ott maradt Mária vele mintegy három hónapig, majd visszatért otthonába.`,
      },
      {
        heading: "2. hang",
        text: `${GLORY}

Atya, Ige, Lélek, Háromság az Egységben, töröld el vétkeimnek sokaságát!

${BOTH_NOW}

Isten Szülőjének közbenjárásai által, ó, Irgalmas, töröld el vétkeimnek sokaságát!

      vers: Irgalmazz nékem, Isten nagy irgalmasságod szerint, és könyörületed sokasága szerint töröld el az én vétkezéseimet!`,
      },
      {
        heading: "2. plagális hang",
        text: `Ne bízz engem emberi oltalomra, szentséges Nagyasszonyunk, hanem fogadd el szolgádnak könyörgését! Nyomorúságba jutottam, nem bírom elviselni a démonok nyilait, nincs menedékem, sem hely, ahová menekülhetnék, én nyomorult. Mindenfelől támadnak, és nincs vigasztalásom rajtad kívül. Világ Úrnője, hívők reménysége és oltalma, ne vesd el könyörgésemet, hanem tedd azt, ami javamra szolgál!`,
      },
      {
        heading: "2. hang",
        text: `Senki, aki Hozzád folyamodik, nem távozik el tőled megszégyenülve, ó, Istennek tiszta Szűz Szülője, hanem ha kegyelmet kér, elnyeri kéréséért a javára szolgáló ajándékot.

Nyomorultak enyhülete és betegek szabadulása, Istennek Szűz Szülője, mentsd meg városodat és népedet, aki a háborúságban lévők békessége és a viharvertek réve vagy, hívők egyedüli pártfogója!`,
      },
      {
        heading: "7. óda, Irmosz",
        text: `Az egykor Júdeából Babilonba jött ifjak a Háromság hitével eltaposták a kemence lángját, így énekelve: Atyáinknak Istene, áldott vagy!
        
${MOST_HOLY}

Midőn a mi üdvösségünk művét végbe akartad vinni, ó, Üdvözítő, a Szűz méhében költöztél, akit a világ pártfogójává tettél. Atyáinknak Istene, áldott vagy!

${MOST_HOLY}

Tisztaságos Anya, te szülted azt, aki az irgalmat akarja, esedezzél hát hozzá, hogy tisztítsa meg a vétkektől és a lélek szennyfoltjaitól azokat, akik hittel kiáltják: Atyáinknak Istene, áldott vagy!

${GLORY}

Az üdvösség kincsesházaként és a romolhatatlanság forrásaként, a biztonság bástyájaként és a bűnbánat kapujaként mutattad fel Szülődet azoknak, kik ezt kiáltják: Atyáinknak Istene, áldott vagy!

${BOTH_NOW}

Istennek Szülője, méltasd gyógyulásra a test gyöngeségeiből és a lélek betegségeiből azokat, akik vágyakozással közelítenek isteni oltalmadhoz, mert te szülted nekünk az Üdvözítő Krisztust!`,
      },
      {
        heading: "8. óda, Irmosz",
        text: `A mennyek Királyát, akit angyalok seregei dicsérnek, dicsérjétek és magasztaljátok mindörökké!
        
${MOST_HOLY}

Ne vesd el, Szűz, azokat, akik segítségért esedeznek hozzád, akik dicsérnek, ó Hajadon, és magasztalnak mindörökké.

${MOST_HOLY}

A gyógyulások bőségét árasztod, ó, Szűz, mindazokra, akik hittel dicsérnek téged, és magasztalják kimondhatatlan szülésedet.

${GLORY}

Lelkem betegségeit és testem fájdalmait meggyógyítod, ó, Szűz, hogy dicsőítselek téged, Kegyelembefogadott.

${BOTH_NOW}

Visszavered a kísértések rajtaütéseit és a szenvedélyek támadásait, ó, Szűz. Ezért dicsérünk téged mindörökkön örökké.`,
      },
      {
        heading: "9. óda, Irmosz",
        text: `Akik Általad megmenekültünk, igazán Istenszülőnek vallunk téged, ó, tisztaságos Szűz, és a testnélküli karokkal együtt magasztalunk téged.
        
${MOST_HOLY}

Ne vesd meg könnyeimnek árját, ó, Szűz, hiszen Krisztust szülted, aki minden arcról letörli a könnyeket!

${MOST_HOLY}

Töltsd el szívemet örvendezéssel, ó, Szűz, aki befogadtad az öröm teljességét, és eltörölted a bűn szomorúságát!

${MOST_HOLY}

Révpartja, védelme és rendíthetetlen védőfala, menedéke, oltalma és örvendezése légy, ó, Szűz, a Hozzád menekülőknek!

${GLORY}

Világosságod sugaraival tedd ragyogóvá, ó, Szűz, azokat, akik Téged istenfélően Istenszülőnek hirdetnek, és űzd el a tudatlanság sötétségét.

${BOTH_NOW}

Megaláztattam a betegség és a gyötrelem helyén, gyógyíts meg engem, ó, Szűz, egészségre változtatván betegségemet!`,
      },
      {
        heading: "Megalinárionok",
        text: `${AXION}

Aki a mennyeknél is magasztosabb és a napsugaraknál is tisztább, aki megszabadított bennünket az átoktól, a világ Nagyasszonyát énekekkel magasztaljuk! 

Bűneim sokasága miatt beteg a testem és beteg a lelkem is. Hozzád menekedem, Kegyelembefogadott, reményvesztettek reménysége, te segíts rajtam!

Megváltónk Anyja, Nagyasszonyunk, fogadd méltatlan oltalomkeresőid könyörgését, járj közben Szülöttednél! Ó, világ Nagyasszonya, légy közbenjárónk!

Buzgón énekeljük most néked az összhangzó éneket, legtiszteltebb Istenszülő, az Előfutárral és minden szenttel együtt esedezz, Istenszülő, hogy irgalmat találjunk!

Némák az istentelenek ajkai, akik nem hódolnak a legszentebb Lukács apostol által festett tiszteletre méltó ikonod, az Odigitria előtt.

Angyalok összes serege, az Úr Előhírnöke, tizenkét apostol, és minden szentek, az Isten szülőjével együtt járjatok közre üdvözülésünkért!

${MIDDLE_NO_AXION}`,
      },
      {
        heading: "Tropárionok (2. plagális hang)",
        text: `Irgalmazz nekünk Urunk, irgalmazz nekünk, mert minden védelmet nélkülözve, ezt az esedezést ajánljuk fel néked, mint Uralkodónak, mi bűnösök: Irgalmazz nekünk!
      
${GLORY}

Urunk, irgalmazz nekünk, mert benned bíztunk! Ne lobbanj nagy haragra irántunk, vétkezéseinkről se emlékezz meg, hanem tekints le reánk most is, mint könyörületes, és ments meg minket ellenségeinktől! Mert te vagy a mi Istenünk, és mi a te néped, mindannyian a te kezed műve vagyunk, és a te nevedet hívjuk segítségül.

${BOTH_NOW}

A könyörületesség kapuját nyisd meg nékünk, Istennek áldott Szülője, hogy benned bízva el ne tévedjünk, hanem megszabaduljunk általad a nyomorúságoktól, mert te vagy a keresztények nemzetségének üdvössége!`,
      },
      {
        heading: "További tropárionok (2. hang)",
        text: `Mindenkit oltalmazol, Jóságos, aki hittel a te hatalmas kezedhez menekedik. Hiszen nincs is nekünk, sok vétkünk súlya alatt görnyedő bűnösöknek, soha más közbenjárónk Isten előtt a veszedelmekben és nyomorúságokban, csak te, a magasságos Istennek Anyja. Ezért hát esedezünk hozzád: szabadítsd meg szolgáidat minden nyomorúságtól!`,
      },
      {
        heading: "Ugyanazon hangra",
        text: `Te vagy minden szomorkodó örvendezése, az üldözöttek védelmezője, az éhezők eledele, az idegenek vigasza, a vakok botja, a betegek meglátogatása, a keserű csapásoktól sújtottak oltalma és menedéke, az árvák védelmezője, ó, a fenséges Isten Anyja! Esedezünk hozzád, Tisztaságos: siess megszabadítani a te szolgáidat!`,
      },
      {
        heading: "4. plagális hang",
        text: `Fogadd el, Úrnőnk, szolgáidnak könyörgését, és szabadíts meg minket minden szükségtől és nyomorúságtól!`,
      },
      {
        heading: "2. hang",
        text: `Minden reménységemet hozzád fűzöm, Istennek Anyja. Őrizz meg engem a te oltalmad alatt!`,
      },
      {
        heading: "Elbocsátó énekek (3. hang)",
        subheading: `(Csak az Istenszülő böjtjében, augusztus 1. és 13. között énekeljük őket.) `,
        text: `Apostolok, kik a föld határairól itt egybegyűltetek, Getsemáné kertjében temessétek el testemet! Te pedig, Fiam és Istenem, vedd magadhoz a lelkemet!

Angyalok édessége, szomorkodók öröme, keresztények oltalmazója, Szűz és az Úrnak Anyja, végy pártfogásodba, és szabadíts meg az örök kínoktól!

Te vagy közbenjáróm az emberszerető Istenhez, hogy ne fedje fel tetteimet az angyalok előtt. Könyörgök hozzád, ó, Szűz, hamar siess segítségemre!

Arannyal bevont torony, tizenkétfalú város, a Király napsugarat árasztó trónusa és királyi széke, felfoghatatlan csoda, hogyan szoptathatod az Uralkodót?

${HOLY_FATHERS}`,
      },
    ],
    image: require("../assets/orthodox/annunciation.png"),
    imageSize: 300,
  },
];
