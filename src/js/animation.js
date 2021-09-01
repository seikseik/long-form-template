import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";
import lozad from 'lozad'
import Masonry from "masonry-layout"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText, Draggable, InertiaPlugin);

const Concorso = [
  {
    "Titolo Opera": "Surrealismo ECO",
    "FILE": "17797_R7A3722.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Abruzzo",
    "SCUOLA": "I.C. Pescara 8",
    "CLASSE": "Classi 3B, 3F",
    "TITOLO": "Surrealismo ECO"
  },
  {
    "Titolo Opera": "Sospesi",
    "FILE": "17773_R7A3824.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Basilicata",
    "SCUOLA": "Scuola secondaria di I grado",
    "CLASSE": "Classe 3C",
    "TITOLO": "Sospesi"
  },
  {
    "Titolo Opera": "L'Arte aleggia nel tempo",
    "FILE": "17706_R7A5432.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Calabria",
    "SCUOLA": "I.C. Garibaldi-Buccarelli",
    "CLASSE": "Classe 3D",
    "TITOLO": "L'Arte aleggia nel tempo"
  },
  {
    "Titolo Opera": "Emozioni a colori",
    "FILE": "17780_R7A5486.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Campania",
    "SCUOLA": "Scuola Secondaria di 1° Grado Statale \"Angelo Mozzillo",
    "CLASSE": "Classe 3E",
    "TITOLO": "Emozioni a colori"
  },
  {
    "Titolo Opera": "Speranza",
    "FILE": "17645_R7A3828.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Emilia-Romagna",
    "SCUOLA": "Secondaria di I grado “A. VALLISNERI”",
    "CLASSE": "Classi 3A, 3C",
    "TITOLO": "Speranza"
  },
  {
    "Titolo Opera": "Family Power",
    "FILE": "17726_R7A3694.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Friuli-Venezia Giulia",
    "SCUOLA": "Scuola Secondaria di I Grado G. Isaia Ascoli",
    "CLASSE": "Classe 1C",
    "TITOLO": "Family Power"
  },
  {
    "Titolo Opera": "La bellezza salva le cose",
    "FILE": "17206_R7A2992.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Lazio",
    "SCUOLA": "I.C. Pio Fedi",
    "CLASSE": "Classe 3A",
    "TITOLO": "La bellezza salva le cose"
  },
  {
    "Titolo Opera": "I colori dell'anima",
    "FILE": "17536_R7A3045.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Liguria",
    "SCUOLA": "Scuola Secondaria di I grado Contubernio D’albertis",
    "CLASSE": "Classe terza",
    "TITOLO": "I colori dell'anima"
  },
  {
    "Titolo Opera": "Ogni muro è una porta - elaborato 2",
    "FILE": "17692_R7A3752.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Lombardia",
    "SCUOLA": "Scuola Secondaria di I Grado Marconi",
    "CLASSE": "Classi prime",
    "TITOLO": "Ogni muro è una porta - elaborato 2"
  },
  {
    "Titolo Opera": "Dentro gli occhi",
    "FILE": "17571_R7A3791.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Marche",
    "SCUOLA": "Scuola Secondaria di I Grado Beltrami (IC Filottrano)",
    "CLASSE": "Classi 3A, 3C, 3D",
    "TITOLO": "Dentro gli occhi"
  },
  {
    "Titolo Opera": "100matitexl’arte=arteal100%",
    "FILE": "17737_R7A5441.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Piemonte",
    "SCUOLA": "Scuola Secondaria di I Grado Martiri della Libertà (Succursale)",
    "CLASSE": "Classe 3B/S",
    "TITOLO": "100matitexl’arte=arteal100%"
  },
  {
    "Titolo Opera": "Emozioni in carta...pesta",
    "FILE": "17574_R7A3685.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Puglia",
    "SCUOLA": "Scuola Secondaria di I Grado Stefano da Putignano",
    "CLASSE": "Classi 1E, 2A, 2D",
    "TITOLO": "Emozioni in carta...pesta"
  },
  {
    "Titolo Opera": "(DI) stanza in stanza",
    "FILE": "17806_R7A5474.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Sicilia",
    "SCUOLA": "Istituto Comprensivo \"De Simone",
    "CLASSE": "Classi 3B, 3C",
    "TITOLO": "(DI) stanza in stanza"
  },
  {
    "Titolo Opera": "L'ArTe è ViTa!",
    "FILE": "17402_R7A2976.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Toscana",
    "SCUOLA": "I.C. Città di Castiglion Fiorentino",
    "CLASSE": "Classi seconde e terze, sezioni D-E-F",
    "TITOLO": "L'ArTe è ViTa!"
  },
  {
    "Titolo Opera": "I diritti delle donne",
    "FILE": "17738_R7A5455.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Trentino-Alto Adige",
    "SCUOLA": "Scuola Secondaria di I Grado F. Halbherr",
    "CLASSE": "Classe 3A",
    "TITOLO": "I diritti delle donne"
  },
  {
    "Titolo Opera": "900 fold-double",
    "FILE": "17329_R7A3808.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Umbria",
    "SCUOLA": "Scuola Secondaria di I Grado Dante Alighieri",
    "CLASSE": "Classi 2H, 3H",
    "TITOLO": "900 fold-double"
  },
  {
    "Titolo Opera": "Happy",
    "FILE": "17702_R7A3732.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Valle d'Aosta",
    "SCUOLA": "I.S. Eugenia Martinet",
    "CLASSE": "Classe 3D",
    "TITOLO": "Happy"
  },
  {
    "Titolo Opera": "Il goal della speranza",
    "FILE": "17735_R7A5436.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Veneto",
    "SCUOLA": "IC3 BRUSTOLON",
    "CLASSE": "Classe 2A",
    "TITOLO": "Il goal della speranza"
  },
  {
    "Titolo Opera": "Pop beauty",
    "FILE": "17354_R7A3041.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Lazio",
    "SCUOLA": "I.C. Anzio III",
    "CLASSE": "Classe 1B",
    "TITOLO": "Pop beauty"
  },
  {
    "Titolo Opera": "Selfie",
    "FILE": "17703_R7A3734.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Valle d'Aosta",
    "SCUOLA": "I.S. Eugenia Martinet",
    "CLASSE": "Classe 3D",
    "TITOLO": "Selfie"
  },
  {
    "Titolo Opera": "Noi l'arte la impariamo al volo",
    "FILE": "17279_R7A2987.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Lazio",
    "SCUOLA": "I.C. Piazza de Cupis - Secondaria di I grado Salvo d'Acquisto",
    "CLASSE": "Tutte le classi",
    "TITOLO": "Noi l'arte la impariamo al volo"
  },
  {
    "Titolo Opera": "Lo dirò a Dio!",
    "FILE": "17266_R7A3050.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Campania",
    "SCUOLA": "Scuola Secondaria di I Grado Dante Alighieri",
    "CLASSE": "Classe 3D",
    "TITOLO": "Lo dirò a Dio!"
  },
  {
    "Titolo Opera": "Dalla realtà al sogno",
    "FILE": "17241_R7A3750.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Lombardia",
    "SCUOLA": "I.C Aldo Moro - Scuola Secondaria di I Grado A. Manzoni",
    "CLASSE": "Laboratori classi seconde e terze",
    "TITOLO": "Dalla realtà al sogno"
  },
  {
    "Titolo Opera": "Avanguardie",
    "FILE": "17285_R7A3529.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Campania",
    "SCUOLA": "Scuola Secondaria di I Grado Aldo Moro",
    "CLASSE": "Classe 3B",
    "TITOLO": "Avanguardie"
  },
  {
    "Titolo Opera": "La lezione di arte",
    "FILE": "17686_R7A3739.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Emilia-Romagna",
    "SCUOLA": "I.C.7 Luigi Orsini Imola",
    "CLASSE": "Classe 3E",
    "TITOLO": "La lezione di arte"
  },
  {
    "Titolo Opera": "Rinascere con l'arte",
    "FILE": "17714_R7A3692.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Trentino-Alto Adige",
    "SCUOLA": "Scuola Secondaria di Primo Grado \"Savino Pedrolli",
    "CLASSE": "Classi 2C, 2D, 2E",
    "TITOLO": "Rinascere con l'arte"
  },
  {
    "Titolo Opera": "Abbracci perduti",
    "FILE": "17782_R7A5489.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Piemonte",
    "SCUOLA": "Scuola secondaria primo grado \"Gualandi\" (Cooperativa sociale l'Arca)",
    "CLASSE": "Tutte le classi",
    "TITOLO": "Abbracci perduti"
  },
  {
    "Titolo Opera": "Il bacio... Negato",
    "FILE": "17615_R7A5417.JPG",
    "CONCORSO": "Premio LYRA",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Puglia",
    "SCUOLA": "IC Vito Intini - Secondaria di 1 grado Vincenza Sofo",
    "CLASSE": "Classi terze",
    "TITOLO": "Il bacio... Negato"
  },
  {
    "Titolo Opera": "",
    "FILE": "15349_R7A4013.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Abruzzo",
    "SCUOLA": "Scuola dell'Infanzia Sant'Antonio - IC Gianni Rodari",
    "CLASSE": "Sezione C",
    "TITOLO": "Forme e colori in arte"
  },
  {
    "Titolo Opera": "",
    "FILE": "16594_R7A2893.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Basilicata",
    "SCUOLA": "Scuola dell'Infanzia Belvedere",
    "CLASSE": "Tutte le classi",
    "TITOLO": "Come Kandinsky"
  },
  {
    "Titolo Opera": "",
    "FILE": "17468_R7A5328.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Calabria",
    "SCUOLA": "IC Don Milani - Scuola dell'Infanzia Farina",
    "CLASSE": "Le sezioni dei 5 anni",
    "TITOLO": "La Rinascita: Arte, Musica, Emozioni"
  },
  {
    "Titolo Opera": "",
    "FILE": "18249_R7A5257.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Campania",
    "SCUOLA": "Scuola dell'Infanzia di Bellosguardo",
    "CLASSE": "Tutte le classi",
    "TITOLO": "100 Colori"
  },
  {
    "Titolo Opera": "",
    "FILE": "16536_R7A2681.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Emilia-Romagna",
    "SCUOLA": "Scuola dell'Infanzia San Luigi",
    "CLASSE": "Sezione Orto",
    "TITOLO": "Nel giardino di Monet"
  },
  {
    "Titolo Opera": "",
    "FILE": "18000_R7A5126.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Friuli-Venezia Giulia",
    "SCUOLA": "Scuola dell'Infanzia Grisulute Non Ti Scordar di Me - Avasinis presso centro studi di Alesso",
    "CLASSE": "Sezioni A, B",
    "TITOLO": "Facciamo arte, faccia- mo arte, facci-amo-arte"
  },
  {
    "Titolo Opera": "",
    "FILE": "17387_R7A3309.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Lazio",
    "SCUOLA": "Scuola dell'Infanzia Giovanni Paolo II",
    "CLASSE": "Sezione F",
    "TITOLO": "L'albero della vita , l'albero della speranza"
  },
  {
    "Titolo Opera": "",
    "FILE": "17137_R7A3330.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Liguria",
    "SCUOLA": "Scuola dell'Infanzia Collodi",
    "CLASSE": "Sezioni A, B",
    "TITOLO": "Arcimboldiamo in mezzo all'arte"
  },
  {
    "Titolo Opera": "",
    "FILE": "17471_R7A3389.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Lombardia",
    "SCUOLA": "Kindergarten BSCSCHOOL",
    "CLASSE": "Grade 1",
    "TITOLO": "Una magica scintilla"
  },
  {
    "Titolo Opera": "",
    "FILE": "17484_R7A4977.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Marche",
    "SCUOLA": "IC L. Lotto - Scuola dell'Infanzia Don Dante Raccichini",
    "CLASSE": "Monosezione infanzia",
    "TITOLO": "L'abbraccio\" (opera ispirata alla Maternità di klimt)"
  },
  {
    "Titolo Opera": "",
    "FILE": "16873_R7A2649.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Molise",
    "SCUOLA": "I.C. Molise Altissimo di Carovilli",
    "CLASSE": "Sezioni A,B",
    "TITOLO": "Le stelle e gli occhi di Mirò"
  },
  {
    "Titolo Opera": "",
    "FILE": "17702_R7A5203.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Piemonte",
    "SCUOLA": "Scuola dell'Infanzia Sezzadio",
    "CLASSE": "Sezioni A, B",
    "TITOLO": "Marie-Thérèse Walter"
  },
  {
    "Titolo Opera": "",
    "FILE": "17852_R7A4007.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Puglia",
    "SCUOLA": "Scuola dell'Infanzia Piccinni - IC Roncalli 3",
    "CLASSE": "Sezione F",
    "TITOLO": "Tanta Luce"
  },
  {
    "Titolo Opera": "",
    "FILE": "17865_R7A5261.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Sardegna",
    "SCUOLA": "Scuola dell’Infanzia - Sardara- IC Eleonora d'Arborea",
    "CLASSE": "Sezione A",
    "TITOLO": "L'uomo delle stelle"
  },
  {
    "Titolo Opera": "",
    "FILE": "18008_R7A3961.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Sicilia",
    "SCUOLA": "Scuola dell'infanzia Palatucci presso 2° I.C A. Manzoni",
    "CLASSE": "Sezioni 1,2,3,4,5",
    "TITOLO": "Un mondo d'arte"
  },
  {
    "Titolo Opera": "",
    "FILE": "16554_R7A2452.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Toscana",
    "SCUOLA": "Scuola dell'Infanzia Collodi",
    "CLASSE": "Sezione D Formiche",
    "TITOLO": "Dal legno al disegno"
  },
  {
    "Titolo Opera": "",
    "FILE": "16399_R7A2816.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Umbria",
    "SCUOLA": "IC Dalmazio Birago - Scuola dell'Infanzia di Tuoro sul Trasimeno",
    "CLASSE": "Sezione A",
    "TITOLO": "Il cielo con gli occhi di Matisse"
  },
  {
    "Titolo Opera": "",
    "FILE": "16472_R7A2623.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Valle d'Aosta",
    "SCUOLA": "Scuola dell’Infanzia di Torgnon",
    "CLASSE": "Tutte le classi",
    "TITOLO": "Vivere qui è..."
  },
  {
    "Titolo Opera": "",
    "FILE": "18202_R7A4944.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Veneto",
    "SCUOLA": "Scuola dell'Infanzia G.R. Pastega",
    "CLASSE": "Sezioni Unicorni e Draghetti",
    "TITOLO": "Torneremo ad abbracciarci"
  },
  {
    "Titolo Opera": "",
    "FILE": "17227_R7A2655.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Lombardia",
    "SCUOLA": "Scuola dell'Infanzia Sacra Famiglia",
    "CLASSE": "Bambini 5 anni",
    "TITOLO": "Bomba D'Arte"
  },
  {
    "Titolo Opera": "",
    "FILE": "17965_R7A5292.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Piemonte",
    "SCUOLA": "Scuola dell'infanzia di Bagnasco",
    "CLASSE": "Sezione unica infanzia",
    "TITOLO": "Da-lì ... a Qui!"
  },
  {
    "Titolo Opera": "",
    "FILE": "16303_R7A3343.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Campania",
    "SCUOLA": "Scuola dell'Infanzia Comunale Mario Ruta-2° Circolo Comunale",
    "CLASSE": "Sezione Verde",
    "TITOLO": "The weather project- Olafur Eliasson"
  },
  {
    "Titolo Opera": "",
    "FILE": "17527_R7A3443.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Piemonte",
    "SCUOLA": "Scuola dell'Infanzia Collodi - IC Bottacchi",
    "CLASSE": "Sezione 2A (Azzurra)",
    "TITOLO": "Ammiro Mirò"
  },
  {
    "Titolo Opera": "",
    "FILE": "16172_R7A2679.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Marche",
    "SCUOLA": "Scuola dell'Infanzia Gianni Rodari",
    "CLASSE": "Sezione 3B (5 anni)",
    "TITOLO": "Passeggiando sulla luna"
  },
  {
    "Titolo Opera": "",
    "FILE": "16261_R7A2567.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Toscana",
    "SCUOLA": "Scuola dell'Infanzia di Cancelli",
    "CLASSE": "Sezioni A, B",
    "TITOLO": "Un palloncino tra le stelle"
  },
  {
    "Titolo Opera": "",
    "FILE": "15937_R7A2553.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Friuli-Venezia Giulia",
    "SCUOLA": "Scuola dell'Infanzia di Enemonzo",
    "CLASSE": "Sezioni A,B",
    "TITOLO": "I sogni della luna"
  },
  {
    "Titolo Opera": "",
    "FILE": "16376_R7A2535.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Liguria",
    "SCUOLA": "Scuola dell'Infanzia Cà di Ventura",
    "CLASSE": "Sezione Girasoli",
    "TITOLO": "Il compleanno del pescegatto"
  },
  {
    "Titolo Opera": "",
    "FILE": "17123_R7A3329.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Campania",
    "SCUOLA": "IV° CIRCOLO DIDATTICO SCUOLA DELL'INFANZIA ANNUNZIATELLA",
    "CLASSE": "Sezioni A,B,C,D,E,F,G,H,I",
    "TITOLO": "Caretakers of future (Custodi del futuro)."
  },
  {
    "Titolo Opera": "",
    "FILE": "17195_R7A3423.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Lombardia",
    "SCUOLA": "Scuola dell'Infanzia Giovanna Alfieri",
    "CLASSE": "Sezione Anatroccoli",
    "TITOLO": "Notte scintillante"
  },
  {
    "Titolo Opera": "",
    "FILE": "17934_R7A4025.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Abruzzo",
    "SCUOLA": "Istituto Comprensivo \"Alda Merini",
    "CLASSE": "Sezioni B,C,E (5 anni)",
    "TITOLO": "L'allegria in bolle"
  },
  {
    "Titolo Opera": "",
    "FILE": "18186_R7A5050.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Calabria",
    "SCUOLA": "Scuola dell'infanzia E. Codignola",
    "CLASSE": "Sezione 3AR Infanzia",
    "TITOLO": "Vivere a colori\": il puzzle ispirato alle forme e ai colori di Auguste Herbin per dipingere giocando"
  },
  {
    "Titolo Opera": "",
    "FILE": "17625_R7A5169.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Basilicata",
    "SCUOLA": "Scuola dell'Infanzia Stella Marina",
    "CLASSE": "Sezione B",
    "TITOLO": "Il sole salva il mondo dal Corona Virus"
  },
  {
    "Titolo Opera": "",
    "FILE": "17475_R7A5218.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Friuli-Venezia Giulia",
    "SCUOLA": "Scuola dell'Infanzia Passons",
    "CLASSE": "Sezioni B (4 anni), D (5 anni)",
    "TITOLO": "“…Servono radici per avere grandi idee…”"
  },
  {
    "Titolo Opera": "",
    "FILE": "18255_R7A5540.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Sicilia",
    "SCUOLA": "Scuola dell'Infanzia Manzoni",
    "CLASSE": "Sezioni A,B",
    "TITOLO": "Turbinio di emozioni contrastanti"
  },
  {
    "Titolo Opera": "",
    "FILE": "18174_R7A5526.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Abruzzo",
    "SCUOLA": "Scuola Primaria Castiglione Messer Marino",
    "CLASSE": "Classe quinta",
    "TITOLO": "La libertà"
  },
  {
    "Titolo Opera": "",
    "FILE": "17759_R7A5191.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Basilicata",
    "SCUOLA": "I. C. \"D. Savio\" - Potenza",
    "CLASSE": "Classi 5D, 5E, 5H",
    "TITOLO": "Se io fossi..."
  },
  {
    "Titolo Opera": "",
    "FILE": "17968_R7A4958.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Calabria",
    "SCUOLA": "Scuola Primaria Via Nazionale",
    "CLASSE": "Classe 4D",
    "TITOLO": "Lo sguardo infinito"
  },
  {
    "Titolo Opera": "",
    "FILE": "17944_R7A5013.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Campania",
    "SCUOLA": "I.C. De Filippo-DD2",
    "CLASSE": "Classi 5A, 5B, 5C",
    "TITOLO": "Un alfabeto...ad arte"
  },
  {
    "Titolo Opera": "",
    "FILE": "18087_R7A5279.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Emilia-Romagna",
    "SCUOLA": "Scuola Primaria G. Bertin",
    "CLASSE": "Classe 5B",
    "TITOLO": "L'Arte e il \"brutto\" degli ultimi 100 anni."
  },
  {
    "Titolo Opera": "",
    "FILE": "17125_R7A3475.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Friuli-Venezia Giulia",
    "SCUOLA": "Scuola Primaria Umberto I Istituto Comprensivo A. Zanzotto Caneva",
    "CLASSE": "Classe 5B",
    "TITOLO": "La classe"
  },
  {
    "Titolo Opera": "",
    "FILE": "15558_R7A2670.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Lazio",
    "SCUOLA": "Scuola Primaria Rio de Janeiro",
    "CLASSE": "Classe 4B",
    "TITOLO": "Lavoro di squadra"
  },
  {
    "Titolo Opera": "",
    "FILE": "17108_R7A2638.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Liguria",
    "SCUOLA": "Scuola Primaria Paritaria Contubernio d'Albertis",
    "CLASSE": "Classe 4A",
    "TITOLO": "Genova tra verde e azzurro"
  },
  {
    "Titolo Opera": "",
    "FILE": "17202_R7A2658.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Lombardia",
    "SCUOLA": "Scuola Primaria Maria Montessori",
    "CLASSE": "Classi 5A, 5B",
    "TITOLO": "Cento anni in pop"
  },
  {
    "Titolo Opera": "",
    "FILE": "18072_R7A5099.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Marche",
    "SCUOLA": "Scuola Primaria San Vito",
    "CLASSE": "Classe quinta",
    "TITOLO": "Viaggio tra l'arte"
  },
  {
    "Titolo Opera": "",
    "FILE": "18059_R7A5020.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Molise",
    "SCUOLA": "I.C. Don Giulio Testa",
    "CLASSE": "Classi 5A, 5B",
    "TITOLO": "Noi ..."
  },
  {
    "Titolo Opera": "",
    "FILE": "18162_R7A5026.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Piemonte",
    "SCUOLA": "Scuola Primaria Treiso-Barbaresco",
    "CLASSE": "Classe terza",
    "TITOLO": "Colline e un sogno"
  },
  {
    "Titolo Opera": "",
    "FILE": "16438_R7A5142.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Puglia",
    "SCUOLA": "Direzione Didattica Circolo 17 Poggiofranco - Plesso Carrante",
    "CLASSE": "Classi 5A, 5C",
    "TITOLO": "Connessioni"
  },
  {
    "Titolo Opera": "",
    "FILE": "16490_R7A5253.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Sardegna",
    "SCUOLA": "Scuola Primaria Via Cimabue",
    "CLASSE": "Classe 3A",
    "TITOLO": "100 anni ancora"
  },
  {
    "Titolo Opera": "",
    "FILE": "16096_R7A2687.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Sicilia",
    "SCUOLA": "c/o point service srl",
    "CLASSE": "Classe 2A",
    "TITOLO": "Pinocchiando come Baj"
  },
  {
    "Titolo Opera": "",
    "FILE": "18143_R7A5207.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Toscana",
    "SCUOLA": "Istituto Beata Giovanna",
    "CLASSE": "Classe quinta",
    "TITOLO": "Quando tutto Fila...nascono capolavori"
  },
  {
    "Titolo Opera": "",
    "FILE": "17496_R7A4960.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Trentino-Alto Adige",
    "SCUOLA": "S.P. Luigi Nicolussi",
    "CLASSE": "Classe quinta",
    "TITOLO": "Birthday Pencils Cake"
  },
  {
    "Titolo Opera": "",
    "FILE": "17813_R7A5185.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Umbria",
    "SCUOLA": "Scuola Primaria Statale \"Sandro Pertini",
    "CLASSE": "Classe 4A",
    "TITOLO": "La pop art libera il colore"
  },
  {
    "Titolo Opera": "",
    "FILE": "16840_R7A3384.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Valle d'Aosta",
    "SCUOLA": "Scuola Primaria Breuil-Cervinia",
    "CLASSE": "Pluriclasse quarte e quinte",
    "TITOLO": "Il Cervino...una pARTE di noi"
  },
  {
    "Titolo Opera": "",
    "FILE": "18111_R7A5006.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Regionale",
    "REGIONE": "Veneto",
    "SCUOLA": "Scuola Primaria G. Carducci",
    "CLASSE": "Classe quinta",
    "TITOLO": "Caleido Klimt"
  },
  {
    "Titolo Opera": "",
    "FILE": "18053_R7A3294.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Lazio",
    "SCUOLA": "Plesso Guido Alessi",
    "CLASSE": "Classe 1B",
    "TITOLO": "La Covida"
  },
  {
    "Titolo Opera": "",
    "FILE": "16398_R7A2713.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Puglia",
    "SCUOLA": "I Circolo De Amicis",
    "CLASSE": "Classi 5E, 5I",
    "TITOLO": "On de rock"
  },
  {
    "Titolo Opera": "",
    "FILE": "17668_R7A3487.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Lombardia",
    "SCUOLA": "Scuola Primaria Vittorio Ramella",
    "CLASSE": "Classe 3A",
    "TITOLO": "Contatto"
  },
  {
    "Titolo Opera": "",
    "FILE": "17876_R7A5181.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Emilia-Romagna",
    "SCUOLA": "Scuola paritaria San Vincenzo de'Paoli",
    "CLASSE": "Classe 3A",
    "TITOLO": "L'importanza dell'amicizia"
  },
  {
    "Titolo Opera": "",
    "FILE": "17855_R7A5320.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Liguria",
    "SCUOLA": "Scuola primaria callandrone",
    "CLASSE": "Classi 4A, 4B",
    "TITOLO": "Artisti dalla A alla Z"
  },
  {
    "Titolo Opera": "",
    "FILE": "17391_R7A3406.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Basilicata",
    "SCUOLA": "IC Pietrelcina Pisticci",
    "CLASSE": "Classi 4B, 4C Monreale",
    "TITOLO": "Un velo di modernità"
  },
  {
    "Titolo Opera": "",
    "FILE": "17682_R7A3924.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Marche",
    "SCUOLA": "Ufficio Presidenza Segreteria “S.Pellico”",
    "CLASSE": "Classe 3C",
    "TITOLO": "Figli d'arte\" crescono...aspettando che torni a splendere il sole."
  },
  {
    "Titolo Opera": "",
    "FILE": "15693_R7A2503.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Lazio",
    "SCUOLA": "Scuola Primaria Giovanni Palatucci",
    "CLASSE": "Classe 5C",
    "TITOLO": "Mirò and Co."
  },
  {
    "Titolo Opera": "",
    "FILE": "15343_R7A2546.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Toscana",
    "SCUOLA": "Scuola Primaria Bargellini",
    "CLASSE": "Classe 5B",
    "TITOLO": "Pixeldalí"
  },
  {
    "Titolo Opera": "",
    "FILE": "17063_R7A2616.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Abruzzo",
    "SCUOLA": "Istituto Comprensivo \"Vivenza - Giovanni XXIII",
    "CLASSE": "Classe 3A",
    "TITOLO": "Pensieri"
  },
  {
    "Titolo Opera": "",
    "FILE": "17181_R7A2667.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Puglia",
    "SCUOLA": "Scuola Primaria Via Garibaldi",
    "CLASSE": "Classe 3D",
    "TITOLO": "Donna… vola più in alto che puoi!"
  },
  {
    "Titolo Opera": "",
    "FILE": "17168_R7A3449.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Piemonte",
    "SCUOLA": "I.C. A. Dasso",
    "CLASSE": "Classi 4A, 4B, 4C",
    "TITOLO": "Nel tramonto..."
  },
  {
    "Titolo Opera": "",
    "FILE": "17590_R7A4017.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Piemonte",
    "SCUOLA": "Scuola primaria Franco Piccinelli",
    "CLASSE": "Classe 3A",
    "TITOLO": "Nell'arte ci sono anch'io ...1 , 10, 100 di noi"
  },
  {
    "Titolo Opera": "",
    "FILE": "18089_R7A5109.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Veneto",
    "SCUOLA": "Scuola Primaria Cesare Battisti",
    "CLASSE": "Pluriclasse terze, quarte e quinte",
    "TITOLO": "Cento di queste matite!"
  },
  {
    "Titolo Opera": "",
    "FILE": "17549_R7A5533.JPG",
    "CONCORSO": "Premio Giotto",
    "CLASSIFICA": "Nazionale",
    "REGIONE": "Toscana",
    "SCUOLA": "Scuola Primaria Paritaria Maestre Pie",
    "CLASSE": "Classe terza",
    "TITOLO": "Giochi nel borgo"
  }
]

// draggable

Draggable.create(".drag", {
  bounds: ".page-container",
  edgeResistance: 0.6,
  type: "x,y",
  inertia: true,
  autoScroll: true,
});

let illu = document.querySelectorAll(".drag");
illu.forEach((item, i) => {
  $(item).mouseleave(function(e){
    gsap.to(this, 0.2, {scale: 1});
  });
  $(item).mouseenter(function(e){
    gsap.to(this, 0.2, {transformOrigin: '50 50', scale: 1.15});
  });

});



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
tl.from(chars, {duration: 1.2, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");
  // tl.from(chars,
  //   {  duration: 0.6,
  //     ease: "circ.out",
  //     y: -80,
  //     stagger: 0.02
  //   },
  //    "+=0");


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

function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const myJSON = JSON.stringify(Concorso);
var obj = JSON.parse( myJSON );
var tmp = '';

$.each( obj, function( key, value ) {
  tmp += '<div class="single-image">';
  tmp += '  <img class="image image-modal" src="./foto_concorso/' + value.FILE + '"/>';
  tmp += '    <div class="image-details">';
  tmp += '      <div> <span> CONCORSO </span> ' + value.CONCORSO + '</div>';
  tmp += '      <div><span> CLASSIFICA </span> ' + value.CLASSIFICA + '</div>';
  tmp += '      <div><span> REGIONE </span> ' + value.REGIONE + '</div>';
  tmp += '      <div><span> SCUOLA </span> ' + value.SCUOLA + '</div>';
  tmp += '      <div><span> CLASSE </span> ' + value.CLASSE + '</div>';
  tmp += '      <div><span> TITOLO </span> ' + value.TITOLO + '</div>';
  tmp += '    </div>';
  tmp += ' </div>';
});

$('.image-gallery-container').prepend(tmp);


Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
  const slider = document.querySelector('.image-gallery');
  var scrollContainer = Draggable.create(".image-gallery-container", {
    type: "x",
    edgeResistance: 0.5,
    snap: (val) => Math.round(val / 100) * 100,
    inertia: true,
    allowContextMenu : true,
    bounds: {
      minX: -document.querySelector(".image-gallery-container").offsetWidth + document.querySelector(".image-gallery").offsetWidth,
      maxX: 0
    }
  });
    console.log('images finished loading');
});


// hero random image
$( document ).ready(function() {
  let len = obj.length;
  let randomImages = [];

  for(let i = 0; i < 4; i++){
    let a = getRandomInt(0, len);
    let file = obj[a].FILE;
    if(i < 2){
      $('.hero-image-left').prepend('<img class="image-hero" src="./foto_concorso/' + file + '"/>');
    }else{
      $('.hero-image-right').prepend('<img class="image-hero" src="./foto_concorso/' + file + '"/>');
    }
  }


  if(window.innerWidth > 768){
    Draggable.create(".image-hero", {
      bounds: ".hero",
      edgeResistance: 0.6,
      type: "x,y",
      inertia: true,
      autoScroll: true,
    });
  }



    let img = document.querySelectorAll(".image-hero");
    img.forEach((item, i) => {
      $(item).mouseleave(function(e){
        gsap.to(this, 0.2, {scale: 1});
      });
      $(item).mouseenter(function(e){
        gsap.to(this, 0.2, {transformOrigin: '50 50', scale: 1.05});
      });
    });

});


// gallery slide

// const slider = document.querySelector('.image-gallery-container');
// let isDown = false;
// let startX;
// let scrollLeft;
//
// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
//   slider.style.cursor ="grabbing";
//
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
//   slider.style.cursor ="grab";
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 2; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
// });


// var scrollContainer = Draggable.create(".image-gallery-container", {
//   type: "x",
//   edgeResistance: 0.5,
//   snap: (val) => Math.round(val / 100) * 100,
//   inertia: true,
//   allowContextMenu : true,
//   onThrowComplete	: function() { console.log(this.x) },
//   bounds: {
//     minX: -document.querySelector(".image-gallery-container").offsetWidth + document.querySelector(".image-gallery").offsetWidth,
//     maxX: 0
//   }
// });



// modal
  let modal = document.getElementById("myModal");
  let imageList = document.querySelectorAll(".image-modal");
  let imageContList = document.querySelectorAll(".single-image");

  let modalImg = document.getElementById("img01");

  imageContList.forEach((item, i) => {
    item.onclick = function(){
      let img = item.querySelector(".image");
      modal.style.display = "flex";
      modalImg.src = img.src;
    }
  });

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
