import { themes } from '../themes';
import { defaultTheme } from '../config/defaults';

type Theme = {
  bg_color: string;
  quote_color: string;
  author_color: string;
  accent_color: string;
  border_color: string;
};

const setTheme = (theme: string): Theme => {
  return themes[theme] || defaultTheme;
};

export { setTheme, Theme };
