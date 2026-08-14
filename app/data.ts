// UFC fighters by country.
//
// Counts are approximate, representative figures compiled from general
// knowledge of the roster's makeup — not a live, official headcount. They are
// meant to show the relative scale of each country's UFC presence, so treat
// them as "about this many," not exact. Countries are keyed by their ISO 3166-1
// numeric code, which is how the world-atlas map identifies each shape.

export type Country = {
  id: string; // ISO 3166-1 numeric (zero-padded, matches the topojson ids)
  name: string;
  count: number;
  blurb: string;
};

export const countries: Country[] = [
  {
    id: "840",
    name: "United States",
    count: 650,
    blurb:
      "The sport's deepest talent pool, supplying the largest share of the roster and champions in every division, from Jon Jones to Kamaru Usman.",
  },
  {
    id: "076",
    name: "Brazil",
    count: 340,
    blurb:
      "MMA's spiritual home and the cradle of Brazilian jiu-jitsu, producing legends like Anderson Silva, José Aldo and Amanda Nunes.",
  },
  {
    id: "643",
    name: "Russia",
    count: 95,
    blurb:
      "A relentless wave of sambo-bred grapplers, led by undefeated great Khabib Nurmagomedov and lightweight champion Islam Makhachev.",
  },
  {
    id: "826",
    name: "United Kingdom",
    count: 80,
    blurb:
      "A fast-rising scene anchored by welterweight champion Leon Edwards and a deep bench of contenders from England, Scotland and Wales.",
  },
  {
    id: "124",
    name: "Canada",
    count: 70,
    blurb:
      "Home of welterweight icon Georges St-Pierre and a steady stream of talent from Tristar and other elite gyms.",
  },
  {
    id: "484",
    name: "Mexico",
    count: 55,
    blurb:
      "A proud striking tradition producing champions like Brandon Moreno and fan-favorite Yair Rodríguez, backed by passionate fans.",
  },
  {
    id: "392",
    name: "Japan",
    count: 55,
    blurb:
      "Birthplace of the PRIDE era whose influence still runs deep; a historic hotbed for lighter-weight technicians.",
  },
  {
    id: "036",
    name: "Australia",
    count: 48,
    blurb:
      "A rising force headlined by two-division champion Alexander Volkanovski and knockout artist Robert Whittaker.",
  },
  {
    id: "156",
    name: "China",
    count: 40,
    blurb:
      "The UFC's key growth market, with strawweight queen Zhang Weili leading a new generation of fighters.",
  },
  {
    id: "250",
    name: "France",
    count: 32,
    blurb:
      "A booming European scene now that home events are legal, featuring heavyweight Ciryl Gane and Benoît Saint Denis.",
  },
  {
    id: "616",
    name: "Poland",
    count: 30,
    blurb:
      "Deep talent across the cards, headlined by strawweight Hall of Famer Joanna Jędrzejczyk and former light heavyweight champion Jan Błachowicz.",
  },
  {
    id: "410",
    name: "South Korea",
    count: 30,
    blurb:
      "Fan favorites known for pressure and heart, most famously 'The Korean Zombie,' Chan Sung Jung.",
  },
  {
    id: "528",
    name: "Netherlands",
    count: 26,
    blurb:
      "A kickboxing powerhouse whose strikers bring elite stand-up, in the lineage of Bas Rutten and Alistair Overeem.",
  },
  {
    id: "276",
    name: "Germany",
    count: 24,
    blurb:
      "A steadily expanding roster and a strong European hub for both events and training camps.",
  },
  {
    id: "752",
    name: "Sweden",
    count: 22,
    blurb:
      "Nordic MMA's long-time leader, anchored by light heavyweight star Alexander Gustafsson.",
  },
  {
    id: "804",
    name: "Ukraine",
    count: 18,
    blurb:
      "Tough, technical fighters making their mark on the international stage despite a still-developing domestic scene.",
  },
  {
    id: "032",
    name: "Argentina",
    count: 16,
    blurb:
      "South American talent gaining ground, led by knockout puncher Santiago Ponzinibbio.",
  },
  {
    id: "372",
    name: "Ireland",
    count: 15,
    blurb:
      "Small in size but huge in impact thanks to superstar Conor McGregor and the SBG Dublin team.",
  },
  {
    id: "554",
    name: "New Zealand",
    count: 15,
    blurb:
      "Punches well above its weight with former middleweight champion Israel Adesanya and City Kickboxing.",
  },
  {
    id: "268",
    name: "Georgia",
    count: 13,
    blurb:
      "Physical, high-pace fighters led by bantamweight champion Merab Dvalishvili.",
  },
  {
    id: "191",
    name: "Croatia",
    count: 12,
    blurb:
      "Heavy hands and a heavyweight pedigree stretching back to the legendary Mirko 'Cro Cop' Filipović.",
  },
  {
    id: "398",
    name: "Kazakhstan",
    count: 12,
    blurb:
      "A wrestling-rich nation producing rugged, grinding grapplers in the Central Asian mold.",
  },
  {
    id: "608",
    name: "Philippines",
    count: 12,
    blurb:
      "A growing Southeast Asian scene with roots in the sport's Pacific expansion.",
  },
  {
    id: "380",
    name: "Italy",
    count: 12,
    blurb:
      "An emerging scene headlined by former middleweight title challenger Marvin Vettori.",
  },
  {
    id: "203",
    name: "Czechia",
    count: 10,
    blurb:
      "Home of former light heavyweight champion Jiří Procházka and his all-action style.",
  },
  {
    id: "566",
    name: "Nigeria",
    count: 10,
    blurb:
      "The birth nation of champions Kamaru Usman and Israel Adesanya, though both rose through adopted home camps.",
  },
  {
    id: "724",
    name: "Spain",
    count: 10,
    blurb:
      "A developing scene benefiting from the wider European MMA boom and regular Fight Nights.",
  },
  {
    id: "710",
    name: "South Africa",
    count: 10,
    blurb:
      "The continent's leading MMA nation, anchored by middleweight champion Dricus du Plessis.",
  },
  {
    id: "192",
    name: "Cuba",
    count: 8,
    blurb:
      "Olympic-level wrestling and boxing pedigree behind powerhouse fighters like Yoel Romero.",
  },
  {
    id: "208",
    name: "Denmark",
    count: 8,
    blurb:
      "A steady Scandinavian scene with several ranked prospects working their way up.",
  },
  {
    id: "051",
    name: "Armenia",
    count: 8,
    blurb:
      "Strong wrestling roots feeding a small but tough contingent of grinders.",
  },
  {
    id: "218",
    name: "Ecuador",
    count: 7,
    blurb:
      "Home of popular, iron-chinned bantamweight contender Marlon 'Chito' Vera.",
  },
  {
    id: "688",
    name: "Serbia",
    count: 6,
    blurb:
      "Balkan power with a growing group of prospects entering the promotion.",
  },
  {
    id: "112",
    name: "Belarus",
    count: 6,
    blurb:
      "Eastern European grapplers and strikers steadily climbing the rankings.",
  },
  {
    id: "376",
    name: "Israel",
    count: 6,
    blurb:
      "A small, skilled contingent with fan-favorite Natan Levy flying the flag.",
  },
  {
    id: "364",
    name: "Iran",
    count: 6,
    blurb:
      "Wrestling-rich talent whose fighters often compete out of camps abroad.",
  },
  {
    id: "356",
    name: "India",
    count: 6,
    blurb:
      "An emerging frontier market with trailblazers like Anshul Jubli and Puja Tomar.",
  },
  {
    id: "764",
    name: "Thailand",
    count: 6,
    blurb:
      "Muay Thai heritage feeding elite, precise strikers into the cages.",
  },
  {
    id: "860",
    name: "Uzbekistan",
    count: 6,
    blurb:
      "Rising Central Asian talent built on a deep national wrestling base.",
  },
  {
    id: "578",
    name: "Norway",
    count: 6,
    blurb:
      "Nordic fighters building on the region's growing MMA momentum.",
  },
  {
    id: "246",
    name: "Finland",
    count: 6,
    blurb:
      "Northern European talent quietly making inroads onto the roster.",
  },
  {
    id: "152",
    name: "Chile",
    count: 6,
    blurb:
      "South American fighters building a foothold in the promotion.",
  },
  {
    id: "604",
    name: "Peru",
    count: 6,
    blurb:
      "A growing Andean scene contributing several hungry prospects.",
  },
  {
    id: "120",
    name: "Cameroon",
    count: 5,
    blurb:
      "Birth nation of former heavyweight champion Francis Ngannou, who fought out of France and the U.S.",
  },
  {
    id: "100",
    name: "Bulgaria",
    count: 5,
    blurb:
      "Wrestling-strong Balkan talent stepping onto the international stage.",
  },
  {
    id: "756",
    name: "Switzerland",
    count: 5,
    blurb:
      "A small contingent riding the sport's steady European growth.",
  },
  {
    id: "740",
    name: "Suriname",
    count: 4,
    blurb:
      "Tiny nation, big punchers — the home of heavyweight knockout artist Jairzinho Rozenstruik.",
  },
  {
    id: "040",
    name: "Austria",
    count: 4,
    blurb:
      "A handful of fighters from the developing Alpine MMA scene.",
  },
  {
    id: "417",
    name: "Kyrgyzstan",
    count: 6,
    blurb:
      "Punches well above its size thanks to flyweight great Valentina Shevchenko.",
  },
  {
    id: "352",
    name: "Iceland",
    count: 3,
    blurb:
      "Tiny population, real talent — led by cult-favorite welterweight Gunnar Nelson.",
  },
  {
    id: "620",
    name: "Portugal",
    count: 5,
    blurb:
      "A developing scene riding Europe's MMA boom, led by top flyweight contender Manel Kape.",
  },
  {
    id: "056",
    name: "Belgium",
    count: 5,
    blurb:
      "Home of former Strikeforce champion Tarec Saffiedine and a growing group of prospects.",
  },
  {
    id: "703",
    name: "Slovakia",
    count: 3,
    blurb:
      "A small Central European contingent led by Ľudovít Klein.",
  },
  {
    id: "440",
    name: "Lithuania",
    count: 3,
    blurb:
      "Baltic talent flying the flag at light heavyweight through Modestas Bukauskas.",
  },
  {
    id: "498",
    name: "Moldova",
    count: 5,
    blurb:
      "Tough Eastern European fighters punching above their nation's size.",
  },
  {
    id: "642",
    name: "Romania",
    count: 3,
    blurb:
      "A developing scene with a handful of fighters reaching the UFC.",
  },
  {
    id: "862",
    name: "Venezuela",
    count: 4,
    blurb:
      "South American talent making its way onto the roster, led by Omar Morales.",
  },
  {
    id: "388",
    name: "Jamaica",
    count: 3,
    blurb:
      "Small island, big personality — repped by welterweight “Rude Boy” Randy Brown.",
  },
  {
    id: "496",
    name: "Mongolia",
    count: 3,
    blurb:
      "A wrestling-and-judo nation putting its stamp on the UFC through Danaa Batgerel.",
  },
  {
    id: "360",
    name: "Indonesia",
    count: 2,
    blurb:
      "A huge new market opened up by its first UFC fighter, Jeka Saragih.",
  },
  {
    id: "170",
    name: "Colombia",
    count: 4,
    blurb:
      "South American talent led by flyweight Sabina Mazo.",
  },
  {
    id: "368",
    name: "Iraq",
    count: 2,
    blurb:
      "Represented at the top of the flyweight division by Baghdad-born Amir Albazi.",
  },
  {
    id: "504",
    name: "Morocco",
    count: 3,
    blurb:
      "North African power carried by undefeated knockout artist Ottman Azaitar.",
  },
  {
    id: "070",
    name: "Bosnia and Herzegovina",
    count: 3,
    blurb:
      "Birth nation of former top featherweight prospect Mirsad Bektić.",
  },
  {
    id: "348",
    name: "Hungary",
    count: 3,
    blurb:
      "A small but growing scene with middleweight Norbert Növényi Jr.",
  },
  {
    id: "275",
    name: "Palestine",
    count: 3,
    blurb:
      "Represented on the biggest stage by welterweight champion Belal Muhammad.",
  },
  {
    id: "784",
    name: "United Arab Emirates",
    count: 4,
    blurb:
      "A fast-rising MMA hub and the new home base of undefeated star Khamzat Chimaev.",
  },
  {
    id: "788",
    name: "Tunisia",
    count: 3,
    blurb:
      "North African talent led by welterweight “Sniper” Mounir Lazzez.",
  },
  {
    id: "288",
    name: "Ghana",
    count: 3,
    blurb:
      "Home of judoka and knockout artist Abdul Razak Alhassan.",
  },
  {
    id: "716",
    name: "Zimbabwe",
    count: 2,
    blurb:
      "Punching far above its weight through inspirational welterweight Themba Gorimbo.",
  },
  {
    id: "004",
    name: "Afghanistan",
    count: 2,
    blurb:
      "Carried into the octagon by lightweight Nasrat Haqparast, of Afghan heritage.",
  },
  {
    id: "400",
    name: "Jordan",
    count: 2,
    blurb:
      "An emerging Middle Eastern scene with bantamweight trailblazer Ali AlQaisi.",
  },
];

export const totalFighters = countries.reduce((s, c) => s + c.count, 0);

// Sequential (magnitude) buckets, validated as a single-hue red ramp with
// monotonic lightness against the dark map surface. Lower bound is inclusive.
export type Bucket = { min: number; color: string; label: string };

export const buckets: Bucket[] = [
  { min: 150, color: "#ff7a5c", label: "150+" },
  { min: 41, color: "#ec4d3c", label: "41–149" },
  { min: 16, color: "#cf3630", label: "16–40" },
  { min: 6, color: "#a62f30", label: "6–15" },
  { min: 1, color: "#7a2a2c", label: "1–5" },
];

export const NO_DATA_COLOR = "#26262b";

export function colorFor(count: number | undefined): string {
  if (!count) return NO_DATA_COLOR;
  for (const b of buckets) {
    if (count >= b.min) return b.color;
  }
  return NO_DATA_COLOR;
}

export const byId: Map<string, Country> = new Map(
  countries.map((c) => [c.id, c])
);
