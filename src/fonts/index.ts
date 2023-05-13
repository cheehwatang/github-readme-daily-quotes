import { FontData } from '../utils/setFont';
import { delius } from './delius';
import { arial } from './arial';

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
  arial: {
    name: 'Arial',
    family: 'Arial, sans-serif',
    woff: arial,
  },
  delius: {
    name: 'Delius',
    family: 'Delius, Helvetica, sans-serif',
    woff: delius,
  },
};

export { fontFamilies };
