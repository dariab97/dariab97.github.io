let dane = [
  {
    id: 1,
    name:"Zamek Lipowiec",
    latitude: "50.076944",
    longitude: "19.444722",
    location: "wieś Babice",
    description:
      "Zamek Lipowiec to ruiny zamku biskupów krakowskich, leżące na Jurze Krakowsko-Częstochowskiej. Wybudowany został w systemie tzw. Orlich Gniazd, we wsi Babice w powiecie chrzanowskim, w województwie małopolskim. Najstarsze fragmenty tej budowli powstały w XIII wieku. Zamek zlokalizowany jest na wapiennym wzgórzu (362 m n.p.m.), będącym częścią Garbu Tenczyńskiego, na terenie rezerwatu przyrody „Lipowiec”.",
    sources: [
      {
        id: "Zamek Lipowiec",
        path: "https://pl.wikipedia.org/wiki/Zamek_Lipowiec",
        description: "Informacje o zamku Lipowiec",
      },
    ],
    filters: [
      { key: "Rodzaj budowli", value: "Zamek" },
      { key: "Wykorzystanie budowli", value: "Muzeum" },
    ],
  },
  {
    id: 2,
    name:"Zamek w Bąkowej Górze",
    latitude: "51.139833",
    longitude: "19.860333",
    location: "wieś Bąkowa Góra",
    description:
      "Zamek został wybudowany w XV wieku przez Zbigniewa Bąka herbu Zadora, który służył na dworze Władysława Jagiełły. Budowla położona jest we wsi Bąkowa Góra w powiecie piotrkowskim, w województwie łódzkim. Murowany dwór usytuowano na cyplu wzniesienia, na miejscu drewnianego gródka, wewnątrz dookolnego wału. Obecny stan to dobrze zakonserwowane, wznosząc się na wysokość kilku metrów grube mury, w wyższych partiach po rekonstrukcji. Ruinę można obejrzeć od zewnątrz.",
    sources: [
      {
        id: "Zamek w Bąkowej Górze",
        path: "https://pl.wikipedia.org/wiki/Zamek_w_Bąkowej_Górze",
        description: "Informacje o zamku w Bąkowej Górze",
      },
    ],
    filters: [
      { key: "Rodzaj budowli", value: "Ruiny zamku" },
      { key: "Wykorzystanie budowli", value: "Własność prywatna" },
    ],
  },
  {
    id: 3,
    name:"Zamek w Baranowie Sandomierskim",
    latitude: "50.504944",
    longitude: "21.518056",
    location: "Baranów Sandomierski",
    description:
      "Późnorenesansowy zamek w Baranowie Sandomierskim położony jest w nizinie dolnej Wisły, w powiecie tarnobrzeskim, w województwie podkarpackim. Budowla, będąca siedzibą rodu Leszczyńskich zbudowana zostałam według projektu Santi Gucciego w latach 1591-1606. Ze względu na swoje niezwykłe podobieństwo nazywana jest także „Małym Wawelem”. Zamek otoczony jest 16-hektarowym obszarem parkowym, w którym znajdują się ogrody w stylu angielskim, francuskim oraz włoskim.",
    sources: [
      {
        id: "Zamek w Baranowie Sandomierskim",
        path: "https://pl.wikipedia.org/wiki/Zamek_w_Baranowie_Sandomierskim",
        description: "Informacje o zamku w Baranowie Sandomierskim",
      },
    ],
    filters: [
      { key: "Rodzaj budowli", value: "Rezydencja magnacka" },
      { key: "Wykorzystanie budowli", value: "Zespół zamkowo-parkowy" },
    ],
  },
  {
    id: 4,
    name:"Zamek w Barczewie",
    latitude: "53.828889",
    longitude: "20.691667",
    location: "Barczewo",
    description:
      "Nieistniejący już zamek biskupi, który znajdował się w Barczewie, w powiecie olsztyńskim, w województwie warmińsko-mazurskim. Budowlę polecił zbudować w 1364 roku biskup Jan II Styprock. Zamek znajdował się w narożu północno-wschodnim murów obronnych otaczających miasto. Zamek był kilkukrotnie odbudowywany. Po raz pierwszy zniszczono go w 1414 roku w czasie Wojny głodowej, a następnie spłonął w 1594 roku. Ostatecznie ponowny pożar w 1798 roku dokonał tak rozległych zniszczeń, że podjęto decyzję o częściowej rozbiórce zamku. Pozostałości zamku znajdują się w centrum miasta przy ulicy Nowowiejskiego 9.",
    sources: [
      {
        id: "Zamek w Barczewie",
        path: "https://pl.wikipedia.org/wiki/Zamek_w_Barczewie",
        description: "Informacje o zamku w Barczewie",
      },
    ],
    filters: [
      { key: "Rodzaj budowli", value: "Zamek" },
      { key: "Wykorzystanie budowli", value: "Muzeum" },
    ],
  },
  {
    id: 5,
    name:"Zamek w Malborku",
    latitude: "54.040064",
    longitude: "19.028394",
    location: "Malbork",
    description:
      "Zamek w Malborku jest najpotężniejszą twierdzą średniowiecznej Europy. Budowę zamku rozpoczęli Krzyżacy w XIII w. Przez następne stulecia, kiedy Malbork stał się stolicą zakonu krzyżackiego, twierdza znacznie się powiększyła poprzez dodanie do niej Wielkiego Refektarzu oraz Pałacu Wielkiego Mistrza. Zamek w Malborku to imponujące mury z czerwonej cegły jak również pas murów obronnych z wieżami i bramami.",
    sources: [
      {
        id: "Zamek w Malborku",
        path: "https://www.polska.travel/pl/poznaj-atrakcje-i-zabytki/dziedzictwo-unesco/zamek-krzyzacki-w-malborku",
        description: "Informacje o zamku w Malborku",
      },
    ],
    filters: [
      { key: "Rodzaj budowli", value: "Zamek" },
      { key: "Wykorzystanie budowli", value: "Atrakcja turystyczna" },
    ],
  },
  {
    id: 6,
    name:"Zamek Świny",
    latitude: "50.938889",
    longitude: "16.111944",
    location: "wieś Świny",
    description:
      "Zamek Świdny pierwotnie był grodem, następnie zamekiem obronnym, a od początków XVII w. stał się zamkiem mieszkalnym na Śląsku we wsi Świny koło Bolkowa, na Pogórzu Kaczawskim w Sudetach. Zamek Świny jest jednym z najstarszych na Szlaku Zamków Piastowskich. Według legendy miałby być połączony podziemnym przejściem ze znajdującym się kilka kilometrów dalej zamkiem w Bolkowie. Tunel istniał do 1927 r.",
    sources: [
      {
        id: "Zamek Świny",
        path: "https://klubpodroznikow.com/relacje/polska/polska-zamki-palace/1763-zamek-swiny",
        description: "Informacje o zamku we wsi Świny",
      },
    ],
    filters: [
      { key: "Rodzaj budowli", value: "Zamek" },
      { key: "Wykorzystanie budowli", value: "Własność prywatna" },
    ],
  },
  {
    id: 7,
    name:"Zamek w Dubiecku",
    latitude: "49.821163",
    longitude: "22.392929",
    location: "Dubiecko",
    description:
      "Zamek szlachecki w Dubiecku, czyli pałac klasycystyczny zbudowany przez Krasickich w obecnej formie w latach 1771–1790. Pałac zbudowano w miejscu zamku Stadnickich z XVI-wieku, który był otoczonym fosą czworobocznym założeniem z dziedzińcem. Następnie zamek został przebudowany na barokowy pałac, w którym w 1735 roku urodził się Ignacy Krasicki, późniejszy poeta i biskup warmiński. W 1909 r. powstała przy pałacu neogotycka dobudówka. Obecnie w pałacu mieście się hotel i restauracja. ",
    sources: [
      {
        id: "Zamek w Dubiecku",
        path: "https://klubpodroznikow.com/relacje/polska/polska-zamki-palace/2954-zamek-szlachecki-w-dubiecku",
        description: "Informacje o zamku w Dubiecku",
      },
    ],
    filters: [
      { key: "Rodzaj budowli", value: "Zamek" },
      { key: "Wykorzystanie budowli", value: "Atrakcja turystyczna" },
    ],
  },
  {
    id: 8,
    name:"Zamek w Wiśniczu",
    latitude: "49.917222",
    longitude: "20.469444",
    location: "Wiśnicz",
    description:
      "Zamek szlachecki w Dubiecku, czyli pałac klasycystyczny zbudowany przez Krasickich w obecnej formie w latach 1771–1790. Pałac zbudowano w miejscu zamku Stadnickich z XVI-wieku, który był otoczonym fosą czworobocznym założeniem z dziedzińcem. Następnie zamek został przebudowany na barokowy pałac, w którym w 1735 roku urodził się Ignacy Krasicki, późniejszy poeta i biskup warmiński. W 1909 r. powstała przy pałacu neogotycka dobudówka. Obecnie w pałacu mieście się hotel i restauracja. ",
    sources: [
      {
        id: "Zamek w Wiśniczu",
        path: "https://klubpodroznikow.com/relacje/polska/polska-zamki-palace/2954-zamek-szlachecki-w-dubiecku",
        description: "Informacje o zamku w Wiśniczu",
      },
    ],
    filters: [
      { key: "Rodzaj budowli", value: "Zamek-Pałac" },
      { key: "Wykorzystanie budowli", value: "Atrakcja turystyczna"},
    ],
  },
  {
    id: 9,
    name:"Zamek Królewski w Poznaniu",
    latitude: "52.409167",
    longitude: "16.931111",
    location: "Poznań",
    description:
      "Zamek Królewski w Poznaniu to najstarsza zachowana rezydencja królewska w Polsce. Budowla wzniesiona została na Wzgórzu Przemysła w XIII wieku, najpierw jako wieża mieszkalna dla Przemysła I, a później rozbudowana przez jego syna Przemysła II - pierwszego króla Polski po rozbiciu dzielnicowym.",
    sources: [
      {
        id: "Zamek Królewski w Poznaniu",
        path: "https://klubpodroznikow.com/relacje/polska/polska-zamki-palace/2954-zamek-szlachecki-w-dubiecku",
        description: "Informacje o Zamku Królewskim w Poznaniu",
      },
    ],
    filters: [
      { key: "Rodzaj budowli", value: "Zamek-Pałac" },
      { key: "Wykorzystanie budowli", value: "Hotel i Restauracja" },
    ],
  },
  {
    id: 10,
    name:"Zamek Królewski w Warszawie",
    latitude: "52.409167",
    longitude: "16.931111",
    location: "Warszawa",
    description:
      "Zamek Królewski w Poznaniu to najstarsza zachowana rezydencja królewska w Polsce. Budowla wzniesiona została na Wzgórzu Przemysła w XIII wieku, najpierw jako wieża mieszkalna dla Przemysła I, a później rozbudowana przez jego syna Przemysła II - pierwszego króla Polski po rozbiciu dzielnicowym.",
    sources: [
      {
        id: "Zamek Królewski w Warszawie",
        path: "https://klubpodroznikow.com/relacje/polska/polska-zamki-palace/2954-zamek-szlachecki-w-dubiecku",
        description: "Informacje o Zamku Królewskim w Warszawie",
      },
    ],
    filters: [
      { key: "Rodzaj budowli", value: "Zamek-Pałac" },
      { key: "Wykorzystanie budowli", value: "Hotel i Restauracja" },
    ],
  },
];