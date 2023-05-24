import { FontData } from '../utils/setFont';
// San Serif Fonts
import { helvetica } from './woff/helvetica';
import { arial } from './woff/arial';
import { verdana } from './woff/verdana';
import { tahoma } from './woff/tahoma';
import { trebuchet_ms } from './woff/trebuchet_ms';
import { calibri } from './woff/calibri';
import { delius } from './woff/delius';
import { open_sans } from './woff/open_sans';
import { roboto } from './woff/roboto';
import { inter } from './woff/inter';
import { montserrat } from './woff/montserrat';
import { lato } from './woff/lato';
import { oswald } from './woff/oswald';
import { pt_sans } from './woff/pt_sans';
import { source_sans_pro } from './woff/source_sans_pro';
import { ubuntu } from './woff/ubuntu';
import { poppins } from './woff/poppins';
import { raleway } from './woff/raleway';
import { nunito } from './woff/nunito';
import { quicksand } from './woff/quicksand';
// Serif Fonts
import { times_new_roman } from './woff/times_new_roman';
import { georgia } from './woff/georgia';
import { garamond } from './woff/garamond';
import { libre_baskerville } from './woff/libre_baskerville';
import { roboto_slab } from './woff/roboto_slab';
import { pt_serif } from './woff/pt_serif';
import { merriweather } from './woff/merriweather';
import { playfair_display } from './woff/playfair_display';
import { noto_serif } from './woff/noto_serif';
import { source_serif_pro } from './woff/source_serif_pro';
import { spectral } from './woff/spectral';
import { cormorant } from './woff/cormorant';
import { alegreya } from './woff/alegreya';
import { rokkitt } from './woff/rokkitt';
import { gelasio } from './woff/gelasio';
import { eczar } from './woff/eczar';
// Monospace Fonts
import { courier_new } from './woff/courier_new';
import { roboto_mono } from './woff/roboto_mono';
import { ubuntu_mono } from './woff/ubuntu_mono';
import { space_mono } from './woff/space_mono';
import { monaco } from './woff/monaco';
import { inconsolata } from './woff/inconsolata';
import { cousine } from './woff/cousine';
import { source_code_pro } from './woff/source_code_pro';
import { pt_mono } from './woff/pt_mono';
import { anonymous_pro } from './woff/anonymous_pro';
// Cursive and Handwriting Fonts
import { merienda } from './woff/merienda';
import { sofia } from './woff/sofia';
import { amita } from './woff/amita';
import { indie_flower } from './woff/indie_flower';
import { architects_daughter } from './woff/architects_daughter';
import { nothing_you_could_do } from './woff/nothing_you_could_do';
import { marck_script } from './woff/marck_script';
import { kaushan_script } from './woff/kaushan_script';
import { comic_neue } from './woff/comic_neue';
import { courgette } from './woff/courgette';
import { redressed } from './woff/redressed';
// Fantasy and Display Fonts
import { medieval_sharp } from './woff/medieval_sharp';
import { raleway_dots } from './woff/raleway_dots';
import { special_elite } from './woff/special_elite';
import { mountains_of_christmas } from './woff/mountains_of_christmas';
import { lobster_two } from './woff/lobster_two';
import { comfortaa } from './woff/comfortaa';
import { patua_one } from './woff/patua_one';
import { sail } from './woff/sail';
import { corben } from './woff/corben';
import { expletus_sans } from './woff/expletus_sans';
import { yatra_one } from './woff/yatra_one';
import { turret_road } from './woff/turret_road';
import { playball } from './woff/playball';
import { flamenco } from './woff/flamenco';
import { stardos_stencil } from './woff/stardos_stencil';
import { new_rocker } from './woff/new_rocker';

const fontFamilies: { [key: string]: FontData } = {
	// San Serif fonts (fallback: san-serif)
	helvetica: {
		name: 'Helvetica',
		family: 'Helvetica, sans-serif',
		woff: helvetica,
	},
	arial: {
		name: 'Arial',
		family: 'Arial, sans-serif',
		woff: arial,
	},
	verdana: {
		name: 'Verdana',
		family: 'Verdana, sans-serif',
		woff: verdana,
	},
	tahoma: {
		name: 'Tahoma',
		family: 'Tahoma, sans-serif',
		woff: tahoma,
	},
	trebuchet_ms: {
		name: 'Trebuchet MS',
		family: "'Trebuchet MS', sans-serif",
		woff: trebuchet_ms,
	},
	calibri: {
		name: 'Calibri',
		family: 'Calibri, sans-serif',
		woff: calibri,
	},
	delius: {
		name: 'Delius',
		family: 'Delius, sans-serif',
		woff: delius,
	},
	open_sans: {
		name: 'Open Sans',
		family: "'Open Sans', sans-serif",
		woff: open_sans,
	},
	roboto: {
		name: 'Roboto',
		family: 'Roboto, sans-serif',
		woff: roboto,
	},
	inter: {
		name: 'Inter',
		family: 'Inter, sans-serif',
		woff: inter,
	},
	montserrat: {
		name: 'Montserrat',
		family: 'Montserrat, sans-serif',
		woff: montserrat,
	},
	lato: {
		name: 'Lato',
		family: 'Lato, sans-serif',
		woff: lato,
	},
	oswald: {
		name: 'Oswald',
		family: 'Oswald, sans-serif',
		woff: oswald,
	},
	pt_sans: {
		name: 'PT Sans',
		family: "'PT Sans', sans-serif",
		woff: pt_sans,
	},
	source_sans_pro: {
		name: 'Source Sans Pro',
		family: "'Source Sans Pro', sans-serif",
		woff: source_sans_pro,
	},
	ubuntu: {
		name: 'Ubuntu',
		family: 'Ubuntu, sans-serif',
		woff: ubuntu,
	},
	poppins: {
		name: 'Poppins',
		family: 'Poppins, sans-serif',
		woff: poppins,
	},
	raleway: {
		name: 'Raleway',
		family: 'Raleway, sans-serif',
		woff: raleway,
	},
	nunito: {
		name: 'Nunito',
		family: 'Nunito, sans-serif',
		woff: nunito,
	},
	quicksand: {
		name: 'Quicksand',
		family: 'Quicksand, sans-serif',
		woff: quicksand,
	},
	// Serif fonts (fallback: serif)
	times_new_roman: {
		name: 'Times New Roman',
		family: "'Times New Roman', serif",
		woff: times_new_roman,
	},
	georgia: {
		name: 'Georgia',
		family: 'Georgia, serif',
		woff: georgia,
	},
	garamond: {
		name: 'Garamond',
		family: 'Garamond, serif',
		woff: garamond,
	},
	libre_baskerville: {
		name: 'Libre Baskerville',
		family: "'Libre Baskerville', serif",
		woff: libre_baskerville,
	},
	roboto_slab: {
		name: 'Roboto Slab',
		family: "'Roboto Slab', serif",
		woff: roboto_slab,
	},
	pt_serif: {
		name: 'PT Serif',
		family: "'PT Serif', serif",
		woff: pt_serif,
	},
	merriweather: {
		name: 'Merriweather',
		family: 'Merriweather, serif',
		woff: merriweather,
	},
	playfair_display: {
		name: 'Playfair Display',
		family: "'Playfair Display', serif",
		woff: playfair_display,
	},
	noto_serif: {
		name: 'Noto Serif',
		family: "'Noto Serif', serif",
		woff: noto_serif,
	},
	source_serif_pro: {
		name: 'Source Serif Pro',
		family: "'Source Serif Pro', serif",
		woff: source_serif_pro,
	},
	spectral: {
		name: 'Spectral',
		family: 'Spectral, serif',
		woff: spectral,
	},
	cormorant: {
		name: 'Cormorant',
		family: 'Cormorant, serif',
		woff: cormorant,
	},
	alegreya: {
		name: 'Alegreya',
		family: 'Alegreya, serif',
		woff: alegreya,
	},
	rokkitt: {
		name: 'Rokkitt',
		family: 'Rokkitt, serif',
		woff: rokkitt,
	},
	gelasio: {
		name: 'Gelasio',
		family: 'Gelasio, serif',
		woff: gelasio,
	},
	eczar: {
		name: 'Eczar',
		family: 'Eczar, serif',
		woff: eczar,
	},
	// Monospace fonts (fallback: monospace)
	courier_new: {
		name: 'Courier New',
		family: "'Courier New', monospace",
		woff: courier_new,
	},
	roboto_mono: {
		name: 'Roboto Mono',
		family: "'Roboto Mono', monospace",
		woff: roboto_mono,
	},
	ubuntu_mono: {
		name: 'Ubuntu Mono',
		family: "'Ubuntu Mono', monospace",
		woff: ubuntu_mono,
	},
	space_mono: {
		name: 'Space Mono',
		family: "'Space Mono', monospace",
		woff: space_mono,
	},
	monaco: {
		name: 'Monaco',
		family: 'Monaco, cursive',
		woff: monaco,
	},
	inconsolata: {
		name: 'Inconsolata',
		family: 'Inconsolata, cursive',
		woff: inconsolata,
	},
	cousine: {
		name: 'Cousine',
		family: 'Cousine, cursive',
		woff: cousine,
	},
	source_code_pro: {
		name: 'Source Code Pro',
		family: "'Source Code Pro', monospace",
		woff: source_code_pro,
	},
	pt_mono: {
		name: 'PT Mono',
		family: "'PT Mono', monospace",
		woff: pt_mono,
	},
	anonymous_pro: {
		name: 'Anonymous Pro',
		family: "'Anonymous Pro', monospace",
		woff: anonymous_pro,
	},
	// Cursive and Handwriting fonts (fallback: cursive)
	merienda: {
		name: 'Merienda',
		family: 'Merienda, cursive',
		woff: merienda,
	},
	sofia: {
		name: 'Sofia',
		family: 'Sofia, cursive',
		woff: sofia,
	},
	amita: {
		name: 'Amita',
		family: 'Amita, cursive',
		woff: amita,
	},
	indie_flower: {
		name: 'Indie Flower',
		family: "'Indie Flower', fantasy",
		woff: indie_flower,
	},
	architects_daughter: {
		name: 'Architects Daughter',
		family: "'Architects Daughter', fantasy",
		woff: architects_daughter,
	},
	nothing_you_could_do: {
		name: 'Nothing You Could Do',
		family: "'Nothing You Could Do', fantasy",
		woff: nothing_you_could_do,
	},
	marck_script: {
		name: 'Marck Script',
		family: "'Marck Script', fantasy",
		woff: marck_script,
	},
	kaushan_script: {
		name: 'Kaushan Script',
		family: "'Kaushan Script', fantasy",
		woff: kaushan_script,
	},
	comic_neue: {
		name: 'Comic Neue',
		family: "'Comic Neue', fantasy",
		woff: comic_neue,
	},
	courgette: {
		name: 'Courgette',
		family: 'Courgette, cursive',
		woff: courgette,
	},
	redressed: {
		name: 'Redressed',
		family: 'Redressed, cursive',
		woff: redressed,
	},
	// Fantasy and Display fonts (fallback: fantasy)
	medieval_sharp: {
		name: 'MedievalSharp',
		family: 'MedievalSharp, fantasy',
		woff: medieval_sharp,
	},
	raleway_dots: {
		name: 'Raleway Dots',
		family: "'Raleway Dots', fantasy",
		woff: raleway_dots,
	},
	special_elite: {
		name: 'Special Elite',
		family: "'Special Elite', fantasy",
		woff: special_elite,
	},
	mountains_of_christmas: {
		name: 'Mountains of Christmas',
		family: "'Mountains of Christmas', fantasy",
		woff: mountains_of_christmas,
	},
	lobster_two: {
		name: 'Lobster Two',
		family: "'Lobster Two', fantasy",
		woff: lobster_two,
	},
	comfortaa: {
		name: 'Comfortaa',
		family: 'Comfortaa, cursive',
		woff: comfortaa,
	},
	patua_one: {
		name: 'Patua One',
		family: "'Patua One', fantasy",
		woff: patua_one,
	},
	sail: {
		name: 'Sail',
		family: 'Sail, cursive',
		woff: sail,
	},
	corben: {
		name: 'Corben',
		family: 'Corben, cursive',
		woff: corben,
	},
	expletus_sans: {
		name: 'Expletus Sans',
		family: "'Expletus Sans', fantasy",
		woff: expletus_sans,
	},
	yatra_one: {
		name: 'Yatra One',
		family: "'Yatra One', fantasy",
		woff: yatra_one,
	},
	turret_road: {
		name: 'Turret Road',
		family: "'Turret Road', fantasy",
		woff: turret_road,
	},
	playball: {
		name: 'Playball',
		family: 'Playball, cursive',
		woff: playball,
	},
	flamenco: {
		name: 'Flamenco',
		family: 'Flamenco, cursive',
		woff: flamenco,
	},
	stardos_stencil: {
		name: 'Stardos Stencil',
		family: "'Stardos Stencil', fantasy",
		woff: stardos_stencil,
	},
	new_rocker: {
		name: 'New Rocker',
		family: "'New Rocker', fantasy",
		woff: new_rocker,
	},
};

export { fontFamilies };
