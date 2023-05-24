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
// Monospace Fonts
import { courier_new } from './woff/courier_new';
import { roboto_mono } from './woff/roboto_mono';
import { ubuntu_mono } from './woff/ubuntu_mono';
import { space_mono } from './woff/space_mono';
import { monaco } from './woff/monaco';
import { inconsolata } from './woff/inconsolata';
// Cursive Fonts
import { merienda } from './woff/merienda';
import { sofia } from './woff/sofia';
// Fantasy & Display Fonts
import { medieval_sharp } from './woff/medieval_sharp';

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
	// Cursive fonts (fallback: cursive)
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
	// Fantasy and Display fonts (fallback: fantasy)
	medieval_sharp: {
		name: 'MedievalSharp',
		family: 'MedievalSharp, fantasy',
		woff: medieval_sharp,
	},
};

export { fontFamilies };
