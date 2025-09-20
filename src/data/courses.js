// Kolegiji prijediplomskog studija informatike organizirani po godinama
// Podaci dohvaćeni sa https://fipu.unipu.hr/fipu/studijski_programi/prijediplomski_sveucilisni_studij_informatika

export const undergraduateCourses = {
  "1. godina preddiplomskog": {
    "1. semestar": [
      {
        id: 1,
        name: "Osnove IKT",
        ects: 6.0,
        professors: [
          "izv. prof. dr. sc. Snježana Babić",
          "izv. prof. dr. sc. Darko Etinger",
        ],
        load: "30P - 30V",
      },
      {
        id: 2,
        name: "Multimedijalni sustavi",
        ects: 6.0,
        professors: [
          "izv. prof. dr. sc. Darko Etinger",
          "izv. prof. dr. sc. Željka Tomasović",
        ],
        load: "15P - 45V",
      },
      {
        id: 3,
        name: "Programiranje",
        ects: 6.0,
        professors: ["prof. dr. sc. Tihomir Orehovački"],
        load: "30P - 30V",
      },
      {
        id: 4,
        name: "Logika i diskretna matematika",
        ects: 4.0,
        professors: [
          "izv. prof. dr. sc. Valter Boljunčić",
          "prof. dr. sc. Neven Grbac",
          "doc. dr. sc. Siniša Miličić",
        ],
        load: "24P - 30V",
      },
      {
        id: 5,
        name: "Diferencijalni i integralni račun",
        ects: 2.0,
        professors: [
          "izv. prof. dr. sc. Valter Boljunčić",
          "prof. dr. sc. Neven Grbac",
          "doc. dr. sc. Siniša Miličić",
        ],
        load: "20P - 30V",
      },
      {
        id: 6,
        name: "Osnove podatkovne znanosti",
        ects: 6.0,
        professors: [
          "doc. dr. sc. Siniša Miličić",
          "doc. dr. sc. Ivan Lorencin",
        ],
        load: "30P - 30V",
      },
    ],
    "2. semestar": [
      {
        id: 7,
        name: "Geometrija i linearna algebra",
        ects: 3.0,
        professors: [
          "izv. prof. dr. sc. Valter Boljunčić",
          "prof. dr. sc. Neven Grbac",
          "doc. dr. sc. Siniša Miličić",
        ],
        load: "25P - 30V",
      },
      {
        id: 8,
        name: "Matematička analiza",
        ects: 3.0,
        professors: [
          "izv. prof. dr. sc. Valter Boljunčić",
          "prof. dr. sc. Neven Grbac",
          "doc. dr. sc. Siniša Miličić",
        ],
        load: "20P - 30V",
      },
      {
        id: 9,
        name: "Baze podataka 1",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Goran Oreški"],
        load: "30P - 30V",
      },
      {
        id: 10,
        name: "Informacijski sustavi",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Darko Etinger"],
        load: "30P - 30V",
      },
      {
        id: 11,
        name: "Operacijski sustavi",
        ects: 6.0,
        professors: ["doc. dr. sc. Ivan Lorencin"],
        load: "30P - 30V",
      },
      {
        id: 12,
        name: "Programiranje u skriptnim jezicima",
        ects: 6.0,
        professors: ["doc. dr. sc. Nikola Tanković"],
        load: "30P - 30V",
      },
    ],
  },
  "2. godina preddiplomskog": {
    "3. semestar": [
      {
        id: 13,
        name: "Baze podataka 2",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Goran Oreški"],
        load: "30P - 30V",
      },
      {
        id: 14,
        name: "Strukture podataka i algoritmi",
        ects: 6.0,
        professors: ["prof. dr. sc. Tihomir Orehovački"],
        load: "30P - 30V",
      },
      {
        id: 15,
        name: "Mrežni sustavi",
        ects: 6.0,
        professors: ["doc. dr. sc. Ivan Lorencin"],
        load: "30P - 30V",
      },
      {
        id: 16,
        name: "Statistika",
        ects: 6.0,
        professors: ["doc. dr. sc. Siniša Miličić"],
        load: "30P - 30V",
      },
      {
        id: 17,
        name: "Izborni predmet I",
        ects: 6.0,
        professors: ["Različiti nastavnici"],
        load: "Ovisno o izboru",
        note: "Izabrati minimalno 1 kolegij",
      },
    ],
    "4. semestar": [
      {
        id: 18,
        name: "Objektno orijentirano programiranje",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Goran Oreški"],
        load: "30P - 30V",
      },
      {
        id: 19,
        name: "Umjetna inteligencija",
        ects: 6.0,
        professors: [
          "izv. prof. dr. sc. Darko Etinger",
          "doc. dr. sc. Ivan Lorencin",
        ],
        load: "30P - 30V",
      },
      {
        id: 20,
        name: "Programsko inženjerstvo",
        ects: 6.0,
        professors: ["doc. dr. sc. Nikola Tanković"],
        load: "30P - 30V",
      },
      {
        id: 21,
        name: "Šifre i kodovi",
        ects: 6.0,
        professors: ["doc. dr. sc. Siniša Miličić"],
        load: "30P - 30V",
      },
      {
        id: 22,
        name: "Izborni predmet II",
        ects: 6.0,
        professors: ["Različiti nastavnici"],
        load: "Ovisno o izboru",
        note: "Izabrati minimalno 1 kolegij",
      },
    ],
  },
  "3. godina preddiplomskog": {
    "5. semestar": [
      {
        id: 23,
        name: "Upravljanje poslovnim procesima",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Darko Etinger"],
        load: "30P - 30V",
      },
      {
        id: 24,
        name: "Operacijska istraživanja",
        ects: 6.0,
        professors: [
          "izv. prof. dr. sc. Valter Boljunčić",
          "doc. dr. sc. Katarina Kostelić",
        ],
        load: "30P - 30V",
      },
      {
        id: 25,
        name: "Web aplikacije",
        ects: 6.0,
        professors: ["doc. dr. sc. Nikola Tanković"],
        load: "30P - 30V",
      },
      {
        id: 26,
        name: "Praktikum",
        ects: 6.0,
        professors: ["doc. dr. sc. Siniša Miličić"],
        load: "60S",
      },
      {
        id: 27,
        name: "Izborni predmet III",
        ects: 6.0,
        professors: ["Različiti nastavnici"],
        load: "Ovisno o izboru",
        note: "Izabrati minimalno 1 kolegij",
      },
    ],
    "6. semestar": [
      {
        id: 28,
        name: "Stručna praksa",
        ects: 6.0,
        professors: [
          "doc. dr. sc. Nikola Tanković",
          "doc. dr. sc. Ivan Lorencin",
        ],
        load: "-",
      },
      {
        id: 29,
        name: "Analiza društvenih mreža",
        ects: 6.0,
        professors: ["doc. dr. sc. Katarina Kostelić"],
        load: "30P - 30V",
      },
      {
        id: 30,
        name: "Dizajn i programiranje računalnih igara",
        ects: 6.0,
        professors: ["prof. dr. sc. Tihomir Orehovački"],
        load: "30P - 30V",
      },
      {
        id: 31,
        name: "Programiranje na Java virtualnom stroju",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Siniša Sovilj"],
        load: "30P - 30V",
      },
      {
        id: 32,
        name: "Skladišta i rudarenje podataka",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Goran Oreški"],
        load: "30P - 30V",
      },
      {
        id: 33,
        name: "Završni rad",
        ects: 6.0,
        professors: ["Mentor prema izboru"],
        load: "-",
      },
      {
        id: 34,
        name: "Izborni predmet IV",
        ects: 6.0,
        professors: ["Različiti nastavnici"],
        load: "Ovisno o izboru",
        note: "Izabrati minimalno 1 kolegij",
      },
    ],
  },
};

// Izborni predmeti
export const electiveCourses = {
  "Izborni predmet I": [
    {
      name: "Digitalni marketing",
      ects: 6.0,
      professors: ["izv. prof. dr. sc. Darko Etinger"],
      load: "30P - 30V",
    },
    {
      name: "Računovodstvo u virtualnom okruženju",
      ects: 6.0,
      professors: [
        "izv. prof. dr. sc. Ksenija Černe",
        "prof. dr. sc. Lorena Mošnja-Škare",
        "prof. dr. sc. Robert Zenzerović",
        "izv. prof. dr. sc. Ticijan Peruško",
      ],
      load: "30P - 30V",
    },
    {
      name: "Osnove ekonomije",
      ects: 6.0,
      professors: [
        "izv. prof. dr. sc. Dean Sinković",
        "prof. dr. sc. Marinko Škare",
        "doc. dr. sc. Romina Pržiklas Družeta",
      ],
      load: "30P - 30V",
    },
    {
      name: "Geoinformacijski sustavi",
      ects: 6.0,
      professors: ["izv. prof. dr. sc. Goran Oreški"],
      load: "30P - 30V",
    },
  ],
  "Izborni predmet II": [
    {
      name: "Analiza društvenih mreža",
      ects: 6.0,
      professors: ["doc. dr. sc. Katarina Kostelić"],
      load: "30P - 30V",
    },
    {
      name: "Sustavi temeljeni na znanju",
      ects: 6.0,
      professors: ["izv. prof. dr. sc. Nicoletta Saulig"],
      load: "30P - 30V",
    },
    {
      name: "Računovodstveni informacijski sustavi",
      ects: 6.0,
      professors: [
        "izv. prof. dr. sc. Ksenija Černe",
        "prof. dr. sc. Robert Zenzerović",
      ],
      load: "30P - 30V",
    },
    {
      name: "Teorija informacija",
      ects: 6.0,
      professors: ["izv. prof. dr. sc. Nicoletta Saulig"],
      load: "30P - 30V",
    },
  ],
  "Izborni predmet III": [
    {
      name: "Digitalni marketing",
      ects: 6.0,
      professors: ["izv. prof. dr. sc. Darko Etinger"],
      load: "30P - 30V",
    },
    {
      name: "Računovodstvo u virtualnom okruženju",
      ects: 6.0,
      professors: [
        "izv. prof. dr. sc. Ksenija Černe",
        "prof. dr. sc. Lorena Mošnja-Škare",
        "prof. dr. sc. Robert Zenzerović",
        "izv. prof. dr. sc. Ticijan Peruško",
      ],
      load: "30P - 30V",
    },
    {
      name: "Geoinformacijski sustavi",
      ects: 6.0,
      professors: ["izv. prof. dr. sc. Goran Oreški"],
      load: "30P - 30V",
    },
  ],
  "Izborni predmet IV": [
    {
      name: "Sustavi temeljeni na znanju",
      ects: 6.0,
      professors: ["izv. prof. dr. sc. Nicoletta Saulig"],
      load: "30P - 30V",
    },
    {
      name: "Računovodstveni informacijski sustavi",
      ects: 6.0,
      professors: [
        "izv. prof. dr. sc. Ksenija Černe",
        "prof. dr. sc. Robert Zenzerović",
      ],
      load: "30P - 30V",
    },
    {
      name: "Teorija informacija",
      ects: 6.0,
      professors: ["izv. prof. dr. sc. Nicoletta Saulig"],
      load: "30P - 30V",
    },
  ],
};

// Kolegiji diplomskog studija

export const graduateCourses = {
  "4. godina diplomskog": {
    "7. semestar": [
      {
        id: 1,
        name: "IT Management",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Darko Etinger"],
        load: "30P - 30V",
      },
      {
        id: 2,
        name: "Robotika",
        ects: 6.0,
        professors: ["doc. dr. sc. Ivan Lorencin"],
        load: "30P - 30V",
      },
      {
        id: 3,
        name: "Mobilne aplikacije",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Siniša Sovilj"],
        load: "30P - 30V",
      },
      {
        id: 4,
        name: "Raspodijeljeni sustavi",
        ects: 6.0,
        professors: ["doc. dr. sc. Nikola Tanković"],
        load: "30P - 30V",
      },
      {
        id: 5,
        name: "Izborni predmet",
        ects: 6.0,
        professors: ["Različiti profesori"],
        load: "-",
      },
    ],
    "8. semestar": [
      {
        id: 6,
        name: "Neuronske mreže i duboko učenje",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Goran Oreški"],
        load: "30P - 30V",
      },
      {
        id: 7,
        name: "Analiza podataka i obrada informacija",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Siniša Sovilj"],
        load: "30P - 30V",
      },
      {
        id: 8,
        name: "Modeliranje i simulacije",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Darko Etinger"],
        load: "30P - 30V",
      },
      {
        id: 9,
        name: "Izborni predmet 1",
        ects: 6.0,
        professors: ["Različiti profesori"],
        load: "-",
      },
      {
        id: 10,
        name: "Izborni predmet 2",
        ects: 6.0,
        professors: ["Različiti profesori"],
        load: "-",
      },
    ],
  },
  "5. godina diplomskog": {
    "9. semestar": [
      {
        id: 11,
        name: "Internet stvari",
        ects: 6.0,
        professors: ["izv. prof. dr. sc. Siniša Sovilj"],
        load: "30P - 30V",
      },
      {
        id: 12,
        name: "Napredni algoritmi i strukture podataka",
        ects: 6.0,
        professors: ["prof. dr. sc. Tihomir Orehovački"],
        load: "30P - 30V",
      },
      {
        id: 13,
        name: "Razvoj IT rješenja",
        ects: 6.0,
        professors: [
          "izv. prof. dr. sc. Darko Etinger",
          "izv. prof. dr. sc. Snježana Babić",
          "izv. prof. dr. sc. Goran Oreški",
          "doc. dr. sc. Nikola Tanković",
          "doc. dr. sc. Siniša Miličić",
          "izv. prof. dr. sc. Siniša Sovilj",
          "prof. dr. sc. Tihomir Orehovački",
        ],
        load: "-",
      },
      {
        id: 14,
        name: "Izborni predmet 1",
        ects: 6.0,
        professors: ["Različiti profesori"],
        load: "-",
      },
      {
        id: 15,
        name: "Izborni predmet 2",
        ects: 6.0,
        professors: ["Različiti profesori"],
        load: "-",
      },
    ],
    "10. semestar": [
      {
        id: 16,
        name: "Diplomski rad",
        ects: 30.0,
        professors: ["Svi profesori"],
        load: "-",
      },
    ],
  },
};

// Izborni predmeti diplomskog studija
export const graduateElectiveCourses = {
  "Izborni predmet I": [
    {
      name: "Blockchain aplikacije",
      ects: 6.0,
      professors: ["doc. dr. sc. Nikola Tanković"],
      load: "30P - 30V",
    },
    {
      name: "Upravljanje projektima",
      ects: 6.0,
      professors: ["izv. prof. dr. sc. Darko Etinger"],
      load: "30P - 30V",
    },
    {
      name: "Funkcijsko programiranje",
      ects: 6.0,
      professors: ["doc. dr. sc. Siniša Miličić"],
      load: "30P - 30V",
    },
    {
      name: "Stručna praksa (diplomski)",
      ects: 6.0,
      professors: [
        "doc. dr. sc. Nikola Tanković",
        "doc. dr. sc. Ivan Lorencin",
      ],
      load: "-",
    },
  ],
  "Izborni predmet II": [
    {
      name: "Sustavi elektroničkog učenja",
      ects: 6.0,
      professors: ["izv. prof. dr. sc. Snježana Babić"],
      load: "30P - 30V",
    },
    {
      name: "Interakcija čovjeka i računala",
      ects: 6.0,
      professors: ["prof. dr. sc. Tihomir Orehovački"],
      load: "30P - 30V",
    },
    {
      name: "Forenzično računovodstvo",
      ects: 6.0,
      professors: ["prof. dr. sc. Robert Zenzerović"],
      load: "30P - 30V",
    },
    {
      name: "Formalni jezici",
      ects: 6.0,
      professors: ["doc. dr. sc. Siniša Miličić"],
      load: "30P - 30V",
    },
  ],
  "Izborni predmet III": [
    {
      name: "Blockchain aplikacije",
      ects: 6.0,
      professors: ["doc. dr. sc. Nikola Tanković"],
      load: "30P - 30V",
    },
    {
      name: "Upravljanje projektima",
      ects: 6.0,
      professors: ["izv. prof. dr. sc. Darko Etinger"],
      load: "30P - 30V",
    },
    {
      name: "Funkcijsko programiranje",
      ects: 6.0,
      professors: ["doc. dr. sc. Siniša Miličić"],
      load: "30P - 30V",
    },
    {
      name: "Stručna praksa (diplomski)",
      ects: 6.0,
      professors: [
        "doc. dr. sc. Nikola Tanković",
        "doc. dr. sc. Ivan Lorencin",
      ],
      load: "-",
    },
  ],
};
