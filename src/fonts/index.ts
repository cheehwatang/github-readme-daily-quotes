import { FontData } from '../utils/setFont';
import { helvetica } from './helvetica';
import { arial } from './arial';
import { verdana } from './verdana';
import { tahoma } from './tahoma';
import { trebuchet_ms } from './trebuchet_ms';
import { delius } from './delius';
import { open_sans } from './open_sans';
import { times_new_roman } from './times_new_roman';
import { georgia } from './georgia';
import { garamond } from './garamond';
import { courier_new } from './courier_new';
import { merienda } from './merienda';
import { sofia } from './sofia';

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
    family: 'Delius, sans-serif',
    woff: delius,
  },
  open_sans: {
    name: 'Open Sans',
    family: "'Open Sans', sans-serif",
    woff: open_sans,
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
};

export { fontFamilies };
