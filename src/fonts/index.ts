import { FontData } from '../utils/setFont';
import { helvetica } from './helvetica';
import { arial } from './arial';
import { verdana } from './verdana';
import { tahoma } from './tahoma';
import { trebuchet_ms } from './trebuchet_ms';
import { delius } from './delius';

// const fontFamilies: { [key: string]: string } = {
//   helvetica: 'Helvetica, sans-serif',
//   arial: 'Arial, sans-serif',
//   verdana: 'Verdana, sans-serif',
//   tahoma: 'Tahoma, sans-serif',
//   trebuchet_ms: "'Trebuchet MS', sans-serif",
//   times_new_roman: "'Times New Roman', serif",
//   georgia: 'Georgia, serif',
//   garamond: 'Garamond, serif',
//   courier_new: "'Courier New', monospace",
//   delius: 'Delius, Helvetica, sans-serif',
// };

const fontFamilies: { [key: string]: FontData } = {
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
  delius: {
    name: 'Delius',
    family: 'Delius, Helvetica, sans-serif',
    woff: delius,
  },
};

export { fontFamilies };
