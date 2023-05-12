import { fontFamilies } from '../fonts';
import { defaultFont } from '../config';

const setFont = (font: string): string => {
  return fontFamilies[font] || defaultFont;
};

export { setFont };
