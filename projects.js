// ─────────────────────────────────────────────────────────────
//  PROJEKTY — uprav tento súbor keď chceš pridať / odobrať projekt
//
//  Každý projekt je objekt s týmito poľami:
//    title   — názov projektu (povinné)
//    desc    — popis čo projekt robí (povinné)
//    stack   — pole technológií (povinné)
//    github  — URL na GitHub repo (alebo "" ak nechceš zobrazovať)
//    live    — URL na live verziu (alebo "" ak neexistuje)
//
//  Príklad ako pridať projekt — skopíruj blok a uprav:
//    {
//      title: "Môj nový projekt",
//      desc: "Popis projektu...",
//      stack: ["Java", "Spring", "MySQL"],
//      github: "https://github.com/jusgaro/repo",
//      live: ""
//    },
// ─────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: "Java Console App",
    desc: "Ukážkový projekt — nahraď ho popisom svojho skutočného projektu. Čo robí, aký problém rieši, čo si sa naučil.",
    stack: ["Java", "OOP", "Maven"],
    github: "https://github.com/jusgaro",
    live: ""
  },
  {
    title: "Portfolio Web",
    desc: "Osobné portfolio — tento web. Navrhnutý s dôrazom na čistý technický dizajn a jednoduchú správu obsahu.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jusgaro/portfolio",
    live: ""
  },
  // ← pridaj ďalší projekt sem
];
