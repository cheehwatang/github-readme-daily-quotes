import { fontFamilies } from '../fonts';
import { defaultFont } from '../config';

type FontData = {
	name: string;
	family: string;
	woff: string;
};

const setFont = (font: string): FontData => {
	return fontFamilies[font] || defaultFont;
};

export { setFont, FontData };
