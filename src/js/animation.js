import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText, Draggable);

const Concorso = [
  {
    "N° opera": 15349,
    "Titolo Opera": "Forme e colori in arte",
    "FILE": "15349_R7A4013.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Abruzzo",
    "SCUOLA": "Scuola dell'Infanzia Sant'Antonio - IC Gianni Rodari",
    "TITOLO": "Forme e colori in arte"
  },
  {
    "N° opera": 16594,
    "Titolo Opera": "Come Kandinsky",
    "FILE": "16594_R7A2893.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Basilicata",
    "SCUOLA": "Scuola dell'Infanzia Belvedere",
    "TITOLO": "Come Kandinsky"
  },
  {
    "N° opera": 17468,
    "Titolo Opera": "La Rinascita: Arte, Musica, Emozioni",
    "FILE": "17468_R7A5328.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Calabria",
    "SCUOLA": "IC Don Milani - Scuola dell'Infanzia Farina",
    "TITOLO": "La Rinascita: Arte, Musica, Emozioni"
  },
  {
    "N° opera": 18249,
    "Titolo Opera": "100 Colori",
    "FILE": "18249_R7A5257.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Campania",
    "SCUOLA": "Scuola dell'Infanzia di Bellosguardo",
    "TITOLO": "100 Colori"
  },
  {
    "N° opera": 16536,
    "Titolo Opera": "Nel giardino di Monet",
    "FILE": "16536_R7A2681.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Emilia-Romagna",
    "SCUOLA": "Scuola dell'Infanzia San Luigi",
    "TITOLO": "Nel giardino di Monet"
  },
  {
    "N° opera": 18000,
    "Titolo Opera": "Facciamo arte, faccia- mo arte, facci-amo-arte",
    "FILE": "18000_R7A5126.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Friuli-Venezia Giulia",
    "SCUOLA": "Scuola dell'Infanzia Grisulute Non Ti Scordar di Me - Avasinis presso centro studi di Alesso",
    "TITOLO": "Facciamo arte, faccia- mo arte, facci-amo-arte"
  },
  {
    "N° opera": 17387,
    "Titolo Opera": "L'albero della vita, l'albero della speranza",
    "FILE": "17387_R7A3309.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Lazio",
    "SCUOLA": "Scuola dell'Infanzia Giovanni Paolo II",
    "TITOLO": "L'albero della vita , l'albero della speranza"
  },
  {
    "N° opera": 17137,
    "Titolo Opera": "Arcimboldiamo in mezzo all'arte",
    "FILE": "17137_R7A3330.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Liguria",
    "SCUOLA": "Scuola dell'Infanzia Collodi",
    "TITOLO": "Arcimboldiamo in mezzo all'arte"
  },
  {
    "N° opera": 17471,
    "Titolo Opera": "Una magica scintilla",
    "FILE": "17471_R7A3389.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Lombardia",
    "SCUOLA": "Kindergarten BSCSCHOOL",
    "TITOLO": "Una magica scintilla"
  },
  {
    "N° opera": 17484,
    "Titolo Opera": "L'abbraccio (opera ispirata alla Maternità di klimt)",
    "FILE": "17484_R7A4977.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Marche",
    "SCUOLA": "IC L. Lotto - Scuola dell'Infanzia Don Dante Raccichini",
    "TITOLO": "L'abbraccio\" (opera ispirata alla Maternità di klimt)"
  },
  {
    "N° opera": 16873,
    "Titolo Opera": "Le stelle e gli occhi di Mirò",
    "FILE": "16873_R7A2649.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Molise",
    "SCUOLA": "I.C. Molise Altissimo di Carovilli",
    "TITOLO": "Le stelle e gli occhi di Mirò"
  },
  {
    "N° opera": 17702,
    "Titolo Opera": "Marie-Thérèse Walter",
    "FILE": "17702_R7A5203.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Piemonte",
    "SCUOLA": "Scuola dell'Infanzia Sezzadio",
    "TITOLO": "Marie-Thérèse Walter"
  },
  {
    "N° opera": 17852,
    "Titolo Opera": "Tanta Luce",
    "FILE": "17852_R7A4007.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Puglia",
    "SCUOLA": "Scuola dell'Infanzia Piccinni - IC Roncalli 3",
    "TITOLO": "Tanta Luce"
  },
  {
    "N° opera": 17865,
    "Titolo Opera": "L'uomo delle stelle",
    "FILE": "17865_R7A5261.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Sardegna",
    "SCUOLA": "Scuola dell’Infanzia - Sardara- IC Eleonora d'Arborea",
    "TITOLO": "L'uomo delle stelle"
  },
  {
    "N° opera": 18008,
    "Titolo Opera": "Un mondo d'arte",
    "FILE": "18008_R7A3961.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Sicilia",
    "SCUOLA": "Scuola dell'infanzia Palatucci presso 2° I.C A. Manzoni",
    "TITOLO": "Un mondo d'arte"
  },
  {
    "N° opera": 16554,
    "Titolo Opera": "Dal legno al disegno",
    "FILE": "16554_R7A2452.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Toscana",
    "SCUOLA": "Scuola dell'Infanzia Collodi",
    "TITOLO": "Dal legno al disegno"
  },
  {
    "N° opera": 16399,
    "Titolo Opera": "Il cielo con gli occhi di Matisse",
    "FILE": "16399_R7A2816.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Umbria",
    "SCUOLA": "IC Dalmazio Birago - Scuola dell'Infanzia di Tuoro sul Trasimeno",
    "TITOLO": "Il cielo con gli occhi di Matisse"
  },
  {
    "N° opera": 16472,
    "Titolo Opera": "Vivere qui è...",
    "FILE": "16472_R7A2623.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Valle d'Aosta",
    "SCUOLA": "Scuola dell’Infanzia di Torgnon",
    "TITOLO": "Vivere qui è..."
  },
  {
    "N° opera": 18202,
    "Titolo Opera": "Torneremo ad abbracciarci",
    "FILE": "18202_R7A4944.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Veneto",
    "SCUOLA": "Scuola dell'Infanzia G.R. Pastega",
    "TITOLO": "Torneremo ad abbracciarci"
  },
  {
    "N° opera": 17227,
    "Titolo Opera": "Bomba D'Arte",
    "FILE": "17227_R7A2655.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Lombardia",
    "SCUOLA": "Scuola dell'Infanzia Sacra Famiglia",
    "TITOLO": "Bomba D'Arte"
  },
  {
    "N° opera": 17965,
    "Titolo Opera": "Da-lì ... a Qui!",
    "FILE": "17965_R7A5292.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Piemonte",
    "SCUOLA": "Scuola dell'infanzia di Bagnasco",
    "TITOLO": "Da-lì ... a Qui!"
  },
  {
    "N° opera": 16303,
    "Titolo Opera": "The weather project- Olofen Eliasson",
    "FILE": "16303_R7A3343.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Campania",
    "SCUOLA": "Scuola dell'Infanzia Comunale Mario Ruta-2° Circolo Comunale",
    "TITOLO": "The weather project- Olafur Eliasson"
  },
  {
    "N° opera": 17527,
    "Titolo Opera": "Ammiro Mirò",
    "FILE": "17527_R7A3443.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Piemonte",
    "SCUOLA": "Scuola dell'Infanzia Collodi - IC Bottacchi",
    "TITOLO": "Ammiro Mirò"
  },
  {
    "N° opera": 16172,
    "Titolo Opera": "Passeggiando sulla luna",
    "FILE": "16172_R7A2679.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Marche",
    "SCUOLA": "Scuola dell'Infanzia Gianni Rodari",
    "TITOLO": "Passeggiando sulla luna"
  },
  {
    "N° opera": 16261,
    "Titolo Opera": "Un palloncino tra le stelle",
    "FILE": "16261_R7A2567.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Toscana",
    "SCUOLA": "Scuola dell'Infanzia di Cancelli",
    "TITOLO": "Un palloncino tra le stelle"
  },
  {
    "N° opera": 15937,
    "Titolo Opera": "I sogni della luna",
    "FILE": "15937_R7A2553.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Friuli-Venezia Giulia",
    "SCUOLA": "Scuola dell'Infanzia di Enemonzo",
    "TITOLO": "I sogni della luna"
  },
  {
    "N° opera": 16376,
    "Titolo Opera": "Il compleanno del pescegatto",
    "FILE": "16376_R7A2535.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Liguria",
    "SCUOLA": "Scuola dell'Infanzia Cà di Ventura",
    "TITOLO": "Il compleanno del pescegatto"
  },
  {
    "N° opera": 17123,
    "Titolo Opera": "Caretakers of future (Custodi del futuro).",
    "FILE": "17123_R7A3329.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Campania",
    "SCUOLA": "IV° CIRCOLO DIDATTICO SCUOLA DELL'INFANZIA ANNUNZIATELLA",
    "TITOLO": "Caretakers of future (Custodi del futuro)."
  },
  {
    "N° opera": 17195,
    "Titolo Opera": "Notte scintillante",
    "FILE": "17195_R7A3423.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Lombardia",
    "SCUOLA": "Scuola dell'Infanzia Giovanna Alfieri",
    "TITOLO": "Notte scintillante"
  },
  {
    "N° opera": 17934,
    "Titolo Opera": "L'allegria in bolle",
    "FILE": "17934_R7A4025.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Abruzzo",
    "SCUOLA": "Istituto Comprensivo \"Alda Merini",
    "TITOLO": "L'allegria in bolle"
  },
  {
    "N° opera": 18186,
    "Titolo Opera": "Vivere a colori\": il puzzle ispirato alle forme e ai colori di Auguste Herbin per dipingere giocando",
    "FILE": "18186_R7A5050.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Calabria",
    "SCUOLA": "Scuola dell'infanzia E. Codignola",
    "TITOLO": "Vivere a colori\": il puzzle ispirato alle forme e ai colori di Auguste Herbin per dipingere giocando"
  },
  {
    "N° opera": 17625,
    "Titolo Opera": "Il sole salva il mondo sal Corona Virus",
    "FILE": "17625_R7A5169.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Basilicata",
    "SCUOLA": "Scuola dell'Infanzia Stella Marina",
    "TITOLO": "Il sole salva il mondo dal Corona Virus"
  },
  {
    "N° opera": 17475,
    "Titolo Opera": "“…Servono radici per avere grandi idee…”",
    "FILE": "17475_R7A5218.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Friuli-Venezia Giulia",
    "SCUOLA": "Scuola dell'Infanzia Passons",
    "TITOLO": "“…Servono radici per avere grandi idee…”"
  },
  {
    "N° opera": 18255,
    "Titolo Opera": "Turbinio di emozioni contrastanti",
    "FILE": "18255_R7A5540.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Sicilia",
    "SCUOLA": "Scuola dell'Infanzia Manzoni",
    "TITOLO": "Turbinio di emozioni contrastanti"
  },
  {
    "N° opera": 18174,
    "Titolo Opera": "La libertà",
    "FILE": "18174_R7A5526.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Abruzzo",
    "SCUOLA": "Scuola Primaria Castiglione Messer Marino",
    "TITOLO": "La libertà"
  },
  {
    "N° opera": 17759,
    "Titolo Opera": "Se io fossi...",
    "FILE": "17759_R7A5191.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Basilicata",
    "SCUOLA": "I. C. \"D. Savio\" - Potenza",
    "TITOLO": "Se io fossi..."
  },
  {
    "N° opera": 17968,
    "Titolo Opera": "Lo sguardo infinito",
    "FILE": "17968_R7A4958.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Calabria",
    "SCUOLA": "Scuola Primaria Via Nazionale",
    "TITOLO": "Lo sguardo infinito"
  },
  {
    "N° opera": 17944,
    "Titolo Opera": "Un alfabeto...ad arte",
    "FILE": "17944_R7A5013.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Campania",
    "SCUOLA": "I.C. De Filippo-DD2",
    "TITOLO": "Un alfabeto...ad arte"
  },
  {
    "N° opera": 18087,
    "Titolo Opera": "L'Arte e il \"brutto\" degli ultimi 100 anni.",
    "FILE": "18087_R7A5279.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Emilia-Romagna",
    "SCUOLA": "Scuola Primaria G. Bertin",
    "TITOLO": "L'Arte e il \"brutto\" degli ultimi 100 anni."
  },
  {
    "N° opera": 17125,
    "Titolo Opera": "La classe",
    "FILE": "17125_R7A3475.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Friuli-Venezia Giulia",
    "SCUOLA": "Scuola Primaria Umberto I Istituto Comprensivo A. Zanzotto Caneva",
    "TITOLO": "La classe"
  },
  {
    "N° opera": 15558,
    "Titolo Opera": "Lavoro di squadra",
    "FILE": "15558_R7A2670.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Lazio",
    "SCUOLA": "Scuola Primaria Rio de Janeiro",
    "TITOLO": "Lavoro di squadra"
  },
  {
    "N° opera": 17108,
    "Titolo Opera": "Genova tra verde e azzurro",
    "FILE": "17108_R7A2638.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Liguria",
    "SCUOLA": "Scuola Primaria Paritaria Contubernio d'Albertis",
    "TITOLO": "Genova tra verde e azzurro"
  },
  {
    "N° opera": 17202,
    "Titolo Opera": "Cento anni in pop",
    "FILE": "17202_R7A2658.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Lombardia",
    "SCUOLA": "Scuola Primaria Maria Montessori",
    "TITOLO": "Cento anni in pop"
  },
  {
    "N° opera": 18072,
    "Titolo Opera": "Viaggio tra l'arte",
    "FILE": "18072_R7A5099.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Marche",
    "SCUOLA": "Scuola Primaria San Vito",
    "TITOLO": "Viaggio tra l'arte"
  },
  {
    "N° opera": 18059,
    "Titolo Opera": "Noi ...",
    "FILE": "18059_R7A5020.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Molise",
    "SCUOLA": "I.C. Don Giulio Testa",
    "TITOLO": "Noi ..."
  },
  {
    "N° opera": 18162,
    "Titolo Opera": "Colline e un sogno",
    "FILE": "18162_R7A5026.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Piemonte",
    "SCUOLA": "Scuola Primaria Treiso-Barbaresco",
    "TITOLO": "Colline e un sogno"
  },
  {
    "N° opera": 16438,
    "Titolo Opera": "Connessioni",
    "FILE": "16438_R7A5142.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Puglia",
    "SCUOLA": "Direzione Didattica Circolo 17 Poggiofranco - Plesso Carrante",
    "TITOLO": "Connessioni"
  },
  {
    "N° opera": 16490,
    "Titolo Opera": "100 anni ancora",
    "FILE": "16490_R7A5253.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Sardegna",
    "SCUOLA": "Scuola Primaria Via Cimabue",
    "TITOLO": "100 anni ancora"
  },
  {
    "N° opera": 16096,
    "Titolo Opera": "Pinocchiando come Baj",
    "FILE": "16096_R7A2687.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Sicilia",
    "SCUOLA": "c/o point service srl",
    "TITOLO": "Pinocchiando come Baj"
  },
  {
    "N° opera": 18143,
    "Titolo Opera": "Quando tutto Fila...nascono capolavori",
    "FILE": "18143_R7A5207.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Toscana",
    "SCUOLA": "Istituto Beata Giovanna",
    "TITOLO": "Quando tutto Fila...nascono capolavori"
  },
  {
    "N° opera": 17496,
    "Titolo Opera": "Birthday Pencils Cake",
    "FILE": "17496_R7A4960.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Trentino-Alto Adige",
    "SCUOLA": "S.P. Luigi Nicolussi",
    "TITOLO": "Birthday Pencils Cake"
  },
  {
    "N° opera": 17813,
    "Titolo Opera": "La pop art libera il colore",
    "FILE": "17813_R7A5185.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Umbria",
    "SCUOLA": "Scuola Primaria Statale \"Sandro Pertini",
    "TITOLO": "La pop art libera il colore"
  },
  {
    "N° opera": 16840,
    "Titolo Opera": "Il Cervino...una pARTE di noi",
    "FILE": "16840_R7A3384.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Valle d'Aosta",
    "SCUOLA": "Scuola Primaria Breuil-Cervinia",
    "TITOLO": "Il Cervino...una pARTE di noi"
  },
  {
    "N° opera": 18111,
    "Titolo Opera": "Caleido Klimt",
    "FILE": "18111_R7A5006.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "REGIONALE",
    "REGIONE": "Veneto",
    "SCUOLA": "Scuola Primaria G. Carducci",
    "TITOLO": "Caleido Klimt"
  },
  {
    "N° opera": 18053,
    "Titolo Opera": "La Covida",
    "FILE": "18053_R7A3294.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Lazio",
    "SCUOLA": "Plesso Guido Alessi",
    "TITOLO": "La Covida"
  },
  {
    "N° opera": 16398,
    "Titolo Opera": "On de rock",
    "FILE": "16398_R7A2713.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Puglia",
    "SCUOLA": "I Circolo De Amicis",
    "TITOLO": "On de rock"
  },
  {
    "N° opera": 17668,
    "Titolo Opera": "Contatto",
    "FILE": "17668_R7A3487.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Lombardia",
    "SCUOLA": "Scuola Primaria Vittorio Ramella",
    "TITOLO": "Contatto"
  },
  {
    "N° opera": 17876,
    "Titolo Opera": "L'importanza dell'amicizia",
    "FILE": "17876_R7A5181.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Emilia-Romagna",
    "SCUOLA": "Scuola paritaria San Vincenzo de'Paoli",
    "TITOLO": "L'importanza dell'amicizia"
  },
  {
    "N° opera": 17855,
    "Titolo Opera": "Artisti dalla A alla Z",
    "FILE": "17855_R7A5320.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Liguria",
    "SCUOLA": "Scuola primaria callandrone",
    "TITOLO": "Artisti dalla A alla Z"
  },
  {
    "N° opera": 17391,
    "Titolo Opera": "Un velo di modernità",
    "FILE": "17391_R7A3406.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Basilicata",
    "SCUOLA": "IC Pietrelcina Pisticci",
    "TITOLO": "Un velo di modernità"
  },
  {
    "N° opera": 17682,
    "Titolo Opera": "Figli d'arte\" crescono...aspettando che torni a splendere il sole.",
    "FILE": "17682_R7A3924.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Marche",
    "SCUOLA": "Ufficio Presidenza Segreteria “S.Pellico”",
    "TITOLO": "Figli d'arte\" crescono...aspettando che torni a splendere il sole."
  },
  {
    "N° opera": 15693,
    "Titolo Opera": "Mirò and Co.",
    "FILE": "15693_R7A2503.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Lazio",
    "SCUOLA": "Scuola Primaria Giovanni Palatucci",
    "TITOLO": "Mirò and Co."
  },
  {
    "N° opera": 15343,
    "Titolo Opera": "Pixeldalí",
    "FILE": "15343_R7A2546.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Toscana",
    "SCUOLA": "Scuola Primaria Bargellini",
    "TITOLO": "Pixeldalí"
  },
  {
    "N° opera": 17063,
    "Titolo Opera": "Pensieri",
    "FILE": "17063_R7A2616.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Abruzzo",
    "SCUOLA": "Istituto Comprensivo \"Vivenza - Giovanni XXIII",
    "TITOLO": "Pensieri"
  },
  {
    "N° opera": 17181,
    "Titolo Opera": "Donna… vola più in alto che puoi!",
    "FILE": "17181_R7A2667.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Puglia",
    "SCUOLA": "Scuola Primaria Via Garibaldi",
    "TITOLO": "Donna… vola più in alto che puoi!"
  },
  {
    "N° opera": 17168,
    "Titolo Opera": "Nel tramonto...",
    "FILE": "17168_R7A3449.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Piemonte",
    "SCUOLA": "I.C. A. Dasso",
    "TITOLO": "Nel tramonto..."
  },
  {
    "N° opera": 17590,
    "Titolo Opera": "Nell'arte ci sono anch'io ...1 , 10, 100 di noi",
    "FILE": "17590_R7A4017.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Piemonte",
    "SCUOLA": "Scuola primaria Franco Piccinelli",
    "TITOLO": "Nell'arte ci sono anch'io ...1 , 10, 100 di noi"
  },
  {
    "N° opera": 18089,
    "Titolo Opera": "Cento di queste matite!",
    "FILE": "18089_R7A5109.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Veneto",
    "SCUOLA": "Scuola Primaria Cesare Battisti",
    "TITOLO": "Cento di queste matite!"
  },
  {
    "N° opera": 17549,
    "Titolo Opera": "Giochi nel borgo",
    "FILE": "17549_R7A5533.jpg",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "NAZIONALE",
    "REGIONE": "Toscana",
    "SCUOLA": "Scuola Primaria Paritaria Maestre Pie",
    "TITOLO": "Giochi nel borgo"
  },
  {
    "N° opera": "17797_R7A3722.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Abruzzo",
    "CLASSIFICA": "I.C. Pescara 8",
    "REGIONE": "Surrealismo ECO",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17773_R7A3824.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Basilicata",
    "CLASSIFICA": "Scuola secondaria di I grado",
    "REGIONE": "Sospesi",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17706_R7A5432.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Calabria",
    "CLASSIFICA": "I.C. Garibaldi-Buccarelli",
    "REGIONE": "L'Arte aleggia nel tempo",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17780_R7A5486.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Campania",
    "CLASSIFICA": "Scuola Secondaria di 1° Grado Statale \"Angelo Mozzillo",
    "REGIONE": "Emozioni a colori",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17645_R7A3828.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Emilia-Romagna",
    "CLASSIFICA": "Secondaria di I grado “A. VALLISNERI”",
    "REGIONE": "Speranza",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17726_R7A3694.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Friuli-Venezia Giulia",
    "CLASSIFICA": "Scuola Secondaria di I Grado G. Isaia Ascoli",
    "REGIONE": "Family Power",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17206_R7A2992.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Lazio",
    "CLASSIFICA": "I.C. Pio Fedi",
    "REGIONE": "La bellezza salva le cose",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17536_R7A3045.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Liguria",
    "CLASSIFICA": "Scuola Secondaria di I grado Contubernio D’albertis",
    "REGIONE": "I colori dell'anima",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17692_R7A3752.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Lombardia",
    "CLASSIFICA": "Scuola Secondaria di I Grado Marconi",
    "REGIONE": "Ogni muro è una porta - elaborato 2",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17571_R7A3791.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Marche",
    "CLASSIFICA": "Scuola Secondaria di I Grado Beltrami (IC Filottrano)",
    "REGIONE": "Dentro gli occhi",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17737_R7A5441.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Piemonte",
    "CLASSIFICA": "Scuola Secondaria di I Grado Martiri della Libertà (Succursale)",
    "REGIONE": "100matitexl’arte=arteal100%",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17574_R7A3685.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Puglia",
    "CLASSIFICA": "Scuola Secondaria di I Grado Stefano da Putignano",
    "REGIONE": "Emozioni in carta...pesta",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17806_R7A5474.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Sicilia",
    "CLASSIFICA": "Istituto Comprensivo \"De Simone",
    "REGIONE": "(DI) stanza in stanza",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17402_R7A2976.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Toscana",
    "CLASSIFICA": "I.C. Città di Castiglion Fiorentino",
    "REGIONE": "L'ArTe è ViTa!",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17738_R7A5455.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Trentino-Alto Adige",
    "CLASSIFICA": "Scuola Secondaria di I Grado F. Halbherr",
    "REGIONE": "I diritti delle donne",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17329_R7A3808.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Umbria",
    "CLASSIFICA": "Scuola Secondaria di I Grado Dante Alighieri",
    "REGIONE": "900 fold-double",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17702_R7A3732.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Valle d'Aosta",
    "CLASSIFICA": "I.S. Eugenia Martinet",
    "REGIONE": "Happy",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17735_R7A5436.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "REGIONALE",
    "CONCORSO": "Veneto",
    "CLASSIFICA": "IC3 BRUSTOLON",
    "REGIONE": "Il goal della speranza",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17354_R7A3041.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "NAZIONALE",
    "CONCORSO": "Lazio",
    "CLASSIFICA": "I.C. Anzio III",
    "REGIONE": "Pop beauty",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17703_R7A3734.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "NAZIONALE",
    "CONCORSO": "Valle d'Aosta",
    "CLASSIFICA": "I.S. Eugenia Martinet",
    "REGIONE": "Selfie",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17279_R7A2987",
    "Titolo Opera": "Premio LYRA",
    "FILE": "NAZIONALE",
    "CONCORSO": "Lazio",
    "CLASSIFICA": "I.C. Piazza de Cupis - Secondaria di I grado Salvo d'Acquisto",
    "REGIONE": "Noi l'arte la impariamo al volo",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17266_R7A3050.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "NAZIONALE",
    "CONCORSO": "Campania",
    "CLASSIFICA": "Scuola Secondaria di I Grado Dante Alighieri",
    "REGIONE": "Lo dirò a Dio!",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17241_R7A3750.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "NAZIONALE",
    "CONCORSO": "Lombardia",
    "CLASSIFICA": "I.C Aldo Moro - Scuola Secondaria di I Grado A. Manzoni",
    "REGIONE": "Dalla realtà al sogno",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17285_R7A3529.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "NAZIONALE",
    "CONCORSO": "Campania",
    "CLASSIFICA": "Scuola Secondaria di I Grado Aldo Moro",
    "REGIONE": "Avanguardie",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17686_R7A3739.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "NAZIONALE",
    "CONCORSO": "Emilia-Romagna",
    "CLASSIFICA": "I.C.7 Luigi Orsini Imola",
    "REGIONE": "La lezione di arte",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17714_R7A3692.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "NAZIONALE",
    "CONCORSO": "Trentino-Alto Adige",
    "CLASSIFICA": "Scuola Secondaria di Primo Grado \"Savino Pedrolli",
    "REGIONE": "Rinascere con l'arte",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17782_R7A5489.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "NAZIONALE",
    "CONCORSO": "Piemonte",
    "CLASSIFICA": "Scuola secondaria primo grado \"Gualandi\" (Cooperativa sociale l'Arca)",
    "REGIONE": "Abbracci perduti",
    "SCUOLA": "",
    "TITOLO": ""
  },
  {
    "N° opera": "17615_R7A5417.jpg",
    "Titolo Opera": "Premio LYRA",
    "FILE": "NAZIONALE",
    "CONCORSO": "Puglia",
    "CLASSIFICA": "IC Vito Intini - Secondaria di 1 grado Vincenza Sofo",
    "REGIONE": "Il bacio... Negato",
    "SCUOLA": "",
    "TITOLO": ""
  }
]

// draggable

Draggable.create(".drag");
// aggiungi bound
// mouseover sugli elementi drag



// scroll top
let topArrow = document.querySelector(".arrow-top");
topArrow.addEventListener("click", function(){
  gsap.to(window, {duration: 2, scrollTo: 0});
});

  // animation hero text
  const heroTitle = document.querySelector(".animation-text-hero");

  var tl = gsap.timeline(),
      mySplitText = new SplitText(heroTitle, {type:"words,chars", wordsClass: "split-line"
    }),
      chars = mySplitText.chars;
  gsap.set(heroTitle, {perspective: 400});

  tl.from(chars,
    {  duration: 0.6,
      ease: "circ.out",
      y: 80,
      stagger: 0.02
    },
     "+=0");


  // animate text on scroll

  const quotes = document.querySelectorAll(".animation-text");
  const timing = [ 0.3, 0.4, 0.4, 0.4];
  const stagger = [ 0.01, 0.02, 0.02, 0.02];
  function setupSplits() {
    quotes.forEach((quote, i) => {

      if(quote.anim) {
        quote.anim.progress(1).kill();
        quote.split.revert();
      }

      quote.split = new SplitText(quote, {
        type:"words,chars",
        wordsClass: "split-line"
      });

      quote.anim = gsap.from(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          start: "top 75%",
        },
        duration: timing[i],
        ease: "circ.out",
        y: 80,
        stagger: stagger[i]
      });
    });
  }

  ScrollTrigger.addEventListener("refresh", setupSplits);
  setupSplits();


  // fade in

  const fade = gsap.utils.toArray("[fade]");
  fade.forEach((el, i) => {
    const anim = gsap.fromTo(el, {autoAlpha: 0}, {duration: 1, autoAlpha: 1});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });


  // hr line animation
  const hr = gsap.utils.toArray(".hr");

  hr.forEach((el, i) => {
    gsap.set(el, {transformOrigin:"left"})
    const anim = gsap.fromTo(el, {scaleX: 0}, {duration: .5, scaleX: 1});
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      ease: "circ.out",
      toggleActions: 'play none none none',
      once: true,
    });
  });


  // image gallery

const myJSON = JSON.stringify(Concorso);
var obj = JSON.parse( myJSON );

var tmp = '';
$.each( obj, function( key, value ) {
  tmp += '<div class="single-image">';
  tmp += '  <img class="image" src="../foto/' + value.FILE + '"/>';
  tmp += '    <div class="image-details">';
  tmp += '      <div> <span> CONCORSO </span> ' + value.CONCORSO + '</div>';
  tmp += '      <div><span> CLASSIFICA </span> ' + value.CLASSIFICA + '</div>';
  tmp += '      <div><span> REGIONE </span> ' + value.REGIONE + '</div>';
  tmp += '      <div><span> SCUOLA </span> ' + value.SCUOLA + '</div>';
  tmp += '      <div><span> TITOLO </span> ' + value.TITOLO + '</div>';
  tmp += '    </div>';
  tmp += ' </div>';
});

$('.image-gallery-container').prepend(tmp);


// gallery slide

const slider = document.querySelector('.image-gallery-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor ="grabbing";

});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  slider.style.cursor ="grab";
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});
