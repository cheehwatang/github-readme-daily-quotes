import { themes } from '../themes';
import { defaultTheme } from '../config/defaults';

type Theme = {
  text_color: string;
  bg_color: string;
  accent_color: string;
  border_color: string;
};

const setTheme = (theme: string): Theme => {
  return themes[theme] || defaultTheme;
};

export { setTheme, Theme };
