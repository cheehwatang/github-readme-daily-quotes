import { FontData } from '../utils/setFont';
import { helvetica } from './helvetica';
import { arial } from './arial';
import { verdana } from './verdana';
import { tahoma } from './tahoma';
import { trebuchet_ms } from './trebuchet_ms';
import { times_new_roman } from './times_new_roman';
import { georgia } from './georgia';
import { garamond } from './garamond';
import { courier_new } from './courier_new';
import { delius } from './delius';

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
  courier_new: {
    name: 'Courier New',
    family: "'Courier New', monospace",
    woff: courier_new,
  },
  delius: {
    name: 'Delius',
    family: 'Delius, Helvetica, sans-serif',
    woff: delius,
  },
};

export { fontFamilies };
