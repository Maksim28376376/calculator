// The most famous UFC fighter from each mapped country, with a short "who they
// are" line and one interesting career fact, plus the parameters that style
// their anime avatar. Keyed by ISO 3166-1 numeric code to match the map data.
//
// Facts are drawn from general knowledge of each fighter's career. As with the
// counts, treat "most famous" as a reasonable pick, not an official ranking.

import type { FighterLook } from "./FighterAvatar";

export type Fighter = {
  name: string;
  bio: string; // who they are
  fact: string; // one interesting career fact
  look: FighterLook;
};

export const fighters: Record<string, Fighter> = {
  "840": {
    name: "Jon Jones",
    bio: "Long-reigning light heavyweight and heavyweight champion, widely argued to be the greatest of all time.",
    fact: "Became the youngest champion in UFC history when he won the light heavyweight title at just 23.",
    look: { skin: "#8a5a3b", hair: "#111318", hairStyle: "cornrows", facial: "none", trunks: "#3c3b6e", trunksAccent: "#b22234", gloves: "#b22234" },
  },
  "076": {
    name: "Anderson Silva",
    bio: "The “Spider” — a middleweight king whose title reign redefined striking in MMA.",
    fact: "Holds the UFC records for the longest title reign, with 10 straight title defenses and a 16-fight win streak.",
    look: { skin: "#a06a44", hair: "#111318", hairStyle: "bald", facial: "goatee", trunks: "#009c3b", trunksAccent: "#ffdf00", gloves: "#009c3b" },
  },
  "643": {
    name: "Khabib Nurmagomedov",
    bio: "Undefeated lightweight champion and suffocating grappler out of Dagestan.",
    fact: "Retired a perfect 29–0, walking away as champion at the peak of his career.",
    look: { skin: "#e8b98f", hair: "#111318", hairStyle: "papakha", facial: "beard", trunks: "#d52b1e", trunksAccent: "#ffffff", gloves: "#111318" },
  },
  "826": {
    name: "Michael Bisping",
    bio: "England's first UFC champion and a beloved analyst and TUF winner.",
    fact: "Won the middleweight title in 2016 despite being legally blind in one eye.",
    look: { skin: "#eab98f", hair: "#3a2a1a", hairStyle: "short", facial: "stubble", trunks: "#012169", trunksAccent: "#c8102e", gloves: "#ffffff" },
  },
  "124": {
    name: "Georges St-Pierre",
    bio: "Welterweight and middleweight champion, and one of the most complete fighters ever.",
    fact: "Holds the record for the most wins in UFC title fights and retired as a two-division champion.",
    look: { skin: "#eab98f", hair: "#5a3a22", hairStyle: "short", facial: "stubble", trunks: "#ff0000", trunksAccent: "#ffffff", gloves: "#ffffff" },
  },
  "484": {
    name: "Brandon Moreno",
    bio: "Flyweight champion and huge fan favorite, “The Assassin Baby.”",
    fact: "Became the first Mexican-born UFC champion in 2021 after an epic four-fight rivalry with Deiveson Figueiredo.",
    look: { skin: "#b07848", hair: "#111318", hairStyle: "short", facial: "beard", trunks: "#006847", trunksAccent: "#ce1126", gloves: "#ffffff" },
  },
  "392": {
    name: "Kyoji Horiguchi",
    bio: "Lightning-fast flyweight/bantamweight who carried Japanese MMA on the world stage.",
    fact: "Challenged for the UFC flyweight title, then went on to win world titles in both Bellator and RIZIN.",
    look: { skin: "#f0cfa8", hair: "#111318", hairStyle: "spiky", facial: "none", trunks: "#ffffff", trunksAccent: "#bc002d", gloves: "#bc002d", headband: "#bc002d" },
  },
  "036": {
    name: "Alexander Volkanovski",
    bio: "Featherweight champion and long-time pound-for-pound great.",
    fact: "A former rugby league player who rode a 22-fight win streak into a dominant featherweight reign.",
    look: { skin: "#e0a878", hair: "#111318", hairStyle: "buzz", facial: "beard", trunks: "#00843d", trunksAccent: "#ffcd00", gloves: "#012169" },
  },
  "156": {
    name: "Zhang Weili",
    bio: "China's first UFC champion and a dominant strawweight titleholder.",
    fact: "Won the title in just 42 seconds to become China's first UFC champion in 2019.",
    look: { skin: "#f0cfa8", hair: "#111318", hairStyle: "ponytail", facial: "none", trunks: "#de2910", trunksAccent: "#ffde00", gloves: "#de2910", female: true },
  },
  "250": {
    name: "Ciryl Gane",
    bio: "Silky-smooth heavyweight striker nicknamed “Bon Gamin.”",
    fact: "Reached the UFC and fought for the heavyweight title within just a few years of his pro debut.",
    look: { skin: "#c98a5e", hair: "#111318", hairStyle: "buzz", facial: "stubble", trunks: "#0055a4", trunksAccent: "#ef4135", gloves: "#ffffff" },
  },
  "616": {
    name: "Jan Błachowicz",
    bio: "Former light heavyweight champion with legendary Polish power.",
    fact: "Defended his title by out-pointing Israel Adesanya, handing “The Last Stylebender” his first pro loss.",
    look: { skin: "#eab98f", hair: "#6a4a2a", hairStyle: "short", facial: "stubble", trunks: "#ffffff", trunksAccent: "#dc143c", gloves: "#dc143c" },
  },
  "410": {
    name: "Chan Sung Jung",
    bio: "“The Korean Zombie” — a featherweight famous for relentless, all-action wars.",
    fact: "Pulled off the first-ever “twister” submission in UFC history back in 2011.",
    look: { skin: "#f0cfa8", hair: "#111318", hairStyle: "spiky", facial: "none", trunks: "#cd2e3a", trunksAccent: "#0047a0", gloves: "#111318", headband: "#cd2e3a" },
  },
  "528": {
    name: "Alistair Overeem",
    bio: "“The Reem” — a fearsome heavyweight who terrorized MMA and kickboxing alike.",
    fact: "Held the Strikeforce heavyweight title and the K-1 Grand Prix kickboxing crown at the same time.",
    look: { skin: "#eab98f", hair: "#111318", hairStyle: "buzz", facial: "none", trunks: "#ff4f00", trunksAccent: "#21468b", gloves: "#ffffff" },
  },
  "276": {
    name: "Dennis Siver",
    bio: "Long-serving German featherweight and kickboxer known for spinning attacks.",
    fact: "Headlined against Conor McGregor in 2015, one of the fights that launched McGregor toward the title.",
    look: { skin: "#eab98f", hair: "#4a3222", hairStyle: "short", facial: "stubble", trunks: "#000000", trunksAccent: "#dd0000", gloves: "#ffce00" },
  },
  "752": {
    name: "Alexander Gustafsson",
    bio: "“The Mauler” — Sweden's greatest fighter and a perennial light heavyweight contender.",
    fact: "Pushed Jon Jones to arguably the closest fight of his career, which many observers scored a draw.",
    look: { skin: "#eecb9a", hair: "#d9b26a", hairStyle: "slick", facial: "stubble", trunks: "#006aa7", trunksAccent: "#fecc02", gloves: "#006aa7" },
  },
  "804": {
    name: "Nikita Krylov",
    bio: "“The Miner” — a hard-hitting Ukrainian light heavyweight.",
    fact: "Built his reputation as a finisher, winning the vast majority of his fights inside the distance.",
    look: { skin: "#eab98f", hair: "#6a4a2a", hairStyle: "short", facial: "none", trunks: "#0057b7", trunksAccent: "#ffd700", gloves: "#ffd700" },
  },
  "032": {
    name: "Santiago Ponzinibbio",
    bio: "Argentina's knockout-minded welterweight standout.",
    fact: "Climbed the welterweight ranks on a seven-fight win streak packed with highlight-reel finishes.",
    look: { skin: "#d29a68", hair: "#3a2a1a", hairStyle: "slick", facial: "beard", trunks: "#74acdf", trunksAccent: "#f6b40e", gloves: "#ffffff" },
  },
  "372": {
    name: "Conor McGregor",
    bio: "“The Notorious” — the biggest star combat sports has ever produced.",
    fact: "Became the first fighter to hold two UFC titles in different weight classes at the same time.",
    look: { skin: "#f0c8a0", hair: "#3a2a1a", hairStyle: "slick", facial: "fullbeard", trunks: "#169b62", trunksAccent: "#ff883e", gloves: "#e8b800" },
  },
  "554": {
    name: "Israel Adesanya",
    bio: "“The Last Stylebender” — an elite kickboxer and former middleweight champion.",
    fact: "Was unbeaten through his first 20 pro MMA fights before losing a light heavyweight title bid.",
    look: { skin: "#7a4a2c", hair: "#111318", hairStyle: "afro", facial: "none", trunks: "#000000", trunksAccent: "#00247d", gloves: "#c8102e" },
  },
  "268": {
    name: "Merab Dvalishvili",
    bio: "Bantamweight champion known as “The Machine” for his inhuman cardio.",
    fact: "Overwhelms opponents with a relentless pace and mountains of takedowns round after round.",
    look: { skin: "#d29a68", hair: "#111318", hairStyle: "short", facial: "beard", trunks: "#ffffff", trunksAccent: "#ff0000", gloves: "#ff0000" },
  },
  "191": {
    name: "Mirko “Cro Cop” Filipović",
    bio: "Legendary heavyweight kickboxer and PRIDE icon who also fought in the UFC.",
    fact: "His feared head-kick power inspired the motto: “right leg hospital, left leg cemetery.”",
    look: { skin: "#eab98f", hair: "#6a4a2a", hairStyle: "buzz", facial: "none", trunks: "#ff0000", trunksAccent: "#ffffff", gloves: "#171796" },
  },
  "398": {
    name: "Shavkat Rakhmonov",
    bio: "“Nomad” — an undefeated welterweight phenom out of Kazakhstan.",
    fact: "Has finished every professional opponent he has faced, keeping a perfect finish rate.",
    look: { skin: "#e0a878", hair: "#111318", hairStyle: "short", facial: "beard", trunks: "#00afca", trunksAccent: "#ffd700", gloves: "#00afca" },
  },
  "608": {
    name: "Mark Muñoz",
    bio: "“The Filipino Wrecking Machine” — an All-American wrestler turned middleweight contender.",
    fact: "Reached the top of the middleweight division and later became a respected coach.",
    look: { skin: "#b07848", hair: "#111318", hairStyle: "buzz", facial: "none", trunks: "#0038a8", trunksAccent: "#fcd116", gloves: "#ce1126" },
  },
  "380": {
    name: "Marvin Vettori",
    bio: "“The Italian Dream” — a durable, pressure-heavy middleweight contender.",
    fact: "Fought Israel Adesanya twice, including a five-round middleweight title bout in 2021.",
    look: { skin: "#eab98f", hair: "#111318", hairStyle: "short", facial: "beard", trunks: "#008c45", trunksAccent: "#cd212a", gloves: "#ffffff" },
  },
  "203": {
    name: "Jiří Procházka",
    bio: "Former light heavyweight champion with a wild, samurai-inspired fighting spirit.",
    fact: "Won the title with a submission in the final seconds of the last round in a 2022 classic.",
    look: { skin: "#eab98f", hair: "#6a4a2a", hairStyle: "topknot", facial: "none", trunks: "#d7141a", trunksAccent: "#ffffff", gloves: "#11457e" },
  },
  "566": {
    name: "Kamaru Usman",
    bio: "“The Nigerian Nightmare” — a former welterweight champion and pound-for-pound #1.",
    fact: "Went unbeaten across his first 15 UFC fights and made five welterweight title defenses.",
    look: { skin: "#6f4326", hair: "#111318", hairStyle: "buzz", facial: "beard", trunks: "#008751", trunksAccent: "#ffffff", gloves: "#008751" },
  },
  "724": {
    name: "Ilia Topuria",
    bio: "“El Matador” — an undefeated, two-division champion fighting for Spain.",
    fact: "Knocked out pound-for-pound great Alexander Volkanovski to win the featherweight title in 2024.",
    look: { skin: "#d29a68", hair: "#111318", hairStyle: "slick", facial: "beard", trunks: "#aa151b", trunksAccent: "#f1bf00", gloves: "#aa151b" },
  },
  "710": {
    name: "Dricus du Plessis",
    bio: "“Stillknocks” — an awkward, relentless middleweight champion.",
    fact: "Became South Africa's first UFC champion in 2024, proud to defend the belt from his home continent.",
    look: { skin: "#eab98f", hair: "#6a4a2a", hairStyle: "short", facial: "beard", trunks: "#007a4d", trunksAccent: "#ffb612", gloves: "#de3831" },
  },
  "192": {
    name: "Yoel Romero",
    bio: "“Soldier of God” — an explosive middleweight and Olympic-level wrestler.",
    fact: "Won an Olympic silver medal in wrestling before becoming a feared knockout artist in his 40s.",
    look: { skin: "#6f4326", hair: "#111318", hairStyle: "bald", facial: "none", trunks: "#002a8f", trunksAccent: "#cf142b", gloves: "#ffffff" },
  },
  "208": {
    name: "Mark O. Madsen",
    bio: "Danish Olympic wrestler who moved to the cage as a lightweight.",
    fact: "Won an Olympic silver medal in Greco-Roman wrestling, then started his UFC run unbeaten.",
    look: { skin: "#eecb9a", hair: "#d9b26a", hairStyle: "buzz", facial: "none", trunks: "#c60c30", trunksAccent: "#ffffff", gloves: "#ffffff" },
  },
  "051": {
    name: "Arman Tsarukyan",
    bio: "Elite Armenian lightweight and one of the division's top contenders.",
    fact: "Climbed all the way to the #1 contender spot at lightweight, one of the deepest divisions in the sport.",
    look: { skin: "#d29a68", hair: "#111318", hairStyle: "short", facial: "stubble", trunks: "#d90012", trunksAccent: "#f2a800", gloves: "#0033a0" },
  },
  "218": {
    name: "Marlon “Chito” Vera",
    bio: "Iron-chinned Ecuadorian bantamweight and massive fan favorite.",
    fact: "Finished a then-unbeaten Sean O'Malley in 2020, for years the only blemish on O'Malley's record.",
    look: { skin: "#b07848", hair: "#111318", hairStyle: "slick", facial: "beard", trunks: "#ffdd00", trunksAccent: "#ed1c24", gloves: "#034ea2" },
  },
  "688": {
    name: "Uroš Medić",
    bio: "“The Doctor” — a hard-hitting Serbian finisher.",
    fact: "Made his name with a string of explosive, highlight-reel knockouts.",
    look: { skin: "#eab98f", hair: "#111318", hairStyle: "short", facial: "beard", trunks: "#c6363c", trunksAccent: "#0c4076", gloves: "#ffffff" },
  },
  "112": {
    name: "Andrei Arlovski",
    bio: "“The Pit Bull” — a former UFC heavyweight champion from Belarus.",
    fact: "Fought in one of the highest bout counts in UFC history across a career spanning more than 20 years.",
    look: { skin: "#eab98f", hair: "#6a4a2a", hairStyle: "buzz", facial: "none", trunks: "#ce1720", trunksAccent: "#007c30", gloves: "#007c30" },
  },
  "376": {
    name: "Natan Levy",
    bio: "A technical striker who proudly represents Israel in the lightweight division.",
    fact: "Built a reputation for clean karate-based striking while flying the Israeli flag in the octagon.",
    look: { skin: "#d29a68", hair: "#111318", hairStyle: "short", facial: "beard", trunks: "#0038b8", trunksAccent: "#ffffff", gloves: "#ffffff" },
  },
  "364": {
    name: "Beneil Dariush",
    bio: "Iranian-born lightweight contender known for his grappling and humility.",
    fact: "Went on a long unbeaten run to climb into the top of the stacked lightweight division.",
    look: { skin: "#d29a68", hair: "#111318", hairStyle: "short", facial: "fullbeard", trunks: "#239f40", trunksAccent: "#da0000", gloves: "#da0000" },
  },
  "356": {
    name: "Anshul Jubli",
    bio: "A pioneering Indian lightweight carrying the hopes of a huge new market.",
    fact: "Won the Road to UFC lightweight tournament to earn his UFC contract.",
    look: { skin: "#b07848", hair: "#111318", hairStyle: "short", facial: "beard", trunks: "#ff9933", trunksAccent: "#138808", gloves: "#138808" },
  },
  "764": {
    name: "Loma Lookboonmee",
    bio: "A Muay Thai stylist and trailblazer for Thai fighters in the UFC.",
    fact: "Became the first Thai fighter on the UFC roster, bringing elite Muay Thai to the strawweight division.",
    look: { skin: "#d29a68", hair: "#111318", hairStyle: "ponytail", facial: "none", trunks: "#a51931", trunksAccent: "#2d2a4a", gloves: "#2d2a4a", female: true },
  },
  "860": {
    name: "Makhmud Muradov",
    bio: "A charismatic, hard-punching Uzbek middleweight adored back home.",
    fact: "Strung together a long win streak full of knockouts to become Uzbekistan's UFC standard-bearer.",
    look: { skin: "#e0a878", hair: "#111318", hairStyle: "short", facial: "beard", trunks: "#1eb53a", trunksAccent: "#0099b5", gloves: "#0099b5" },
  },
  "578": {
    name: "Emil Meek",
    bio: "“Valhalla” — a Viking-styled Norwegian welterweight.",
    fact: "Burst into the UFC with a viral Viking persona and a statement win in his debut.",
    look: { skin: "#eecb9a", hair: "#d9b26a", hairStyle: "long", facial: "fullbeard", trunks: "#ba0c2f", trunksAccent: "#00205b", gloves: "#00205b" },
  },
  "246": {
    name: "Makwan Amirkhani",
    bio: "“Mr. Finland” — a charismatic and crowd-pleasing featherweight.",
    fact: "Scored a flying-knee knockout just seconds into his UFC debut in 2015.",
    look: { skin: "#d29a68", hair: "#111318", hairStyle: "short", facial: "stubble", trunks: "#ffffff", trunksAccent: "#003580", gloves: "#003580" },
  },
  "152": {
    name: "Ignacio Bahamondes",
    bio: "A flashy, long-limbed Chilean lightweight prospect.",
    fact: "Landed a spinning-wheel-kick knockout that became one of the year's best highlights.",
    look: { skin: "#d29a68", hair: "#111318", hairStyle: "slick", facial: "stubble", trunks: "#0033a0", trunksAccent: "#d52b1e", gloves: "#ffffff" },
  },
  "604": {
    name: "Enrique Barzola",
    bio: "One of Peru's first UFC standouts, a pressure-wrestling featherweight.",
    fact: "Won The Ultimate Fighter Latin America to launch his UFC career.",
    look: { skin: "#b07848", hair: "#111318", hairStyle: "short", facial: "none", trunks: "#d91023", trunksAccent: "#ffffff", gloves: "#ffffff" },
  },
  "120": {
    name: "Francis Ngannou",
    bio: "Former heavyweight champion with perhaps the most feared power in combat sports.",
    fact: "Recorded the hardest punch ever measured on the UFC's PowerKube after rising from homelessness.",
    look: { skin: "#4f3120", hair: "#111318", hairStyle: "short", facial: "beard", trunks: "#007a5e", trunksAccent: "#ce1126", gloves: "#ce1126" },
  },
  "100": {
    name: "Blagoy Ivanov",
    bio: "“Baga” — a rugged, granite-chinned Bulgarian heavyweight.",
    fact: "Famously defeated MMA legend Fedor Emelianenko in 2008, before his UFC run.",
    look: { skin: "#eab98f", hair: "#6a4a2a", hairStyle: "buzz", facial: "beard", trunks: "#ffffff", trunksAccent: "#d62612", gloves: "#00966e" },
  },
  "756": {
    name: "Volkan Oezdemir",
    bio: "“No Time” — a Swiss light heavyweight with heavy hands.",
    fact: "Rocketed to a title shot with three straight knockouts, two of them in the first round.",
    look: { skin: "#d29a68", hair: "#111318", hairStyle: "buzz", facial: "beard", trunks: "#d52b1e", trunksAccent: "#ffffff", gloves: "#ffffff" },
  },
  "740": {
    name: "Jairzinho Rozenstruik",
    bio: "“Bigi Boy” — a Surinamese heavyweight and former pro kickboxer.",
    fact: "Knocked out Alistair Overeem with just seconds left on the clock during his unbeaten UFC start.",
    look: { skin: "#6f4326", hair: "#111318", hairStyle: "bald", facial: "none", trunks: "#377e3f", trunksAccent: "#b40a2d", gloves: "#b40a2d" },
  },
  "040": {
    name: "Aleksandar Rakić",
    bio: "A rangy, powerful Austrian light heavyweight contender.",
    fact: "Beat former title challengers to climb into the top five of the light heavyweight division.",
    look: { skin: "#eab98f", hair: "#111318", hairStyle: "short", facial: "beard", trunks: "#ed2939", trunksAccent: "#ffffff", gloves: "#ffffff" },
  },
};
