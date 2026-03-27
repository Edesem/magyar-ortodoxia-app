import useTheme from "../../../hooks/useTheme";
import { Prayer } from "../../../types/types";
import { INTRO, THROUGH_THE_PRAYERS } from "../constants/repeatedPrayers";

export const night_before: Prayer = {
  id: "night_before",
  heading: "A szentáldozás imái",
  title: "Imádság a szentáldozás előtti estén",
  header_title: "Előtti estén",
  image: require("../../../assets/orthodox/entombed_invert.png"),
  imageSize: 300,
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
        
${THROUGH_THE_PRAYERS}`,
    },
  ],
};
