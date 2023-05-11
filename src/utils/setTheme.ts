import { themes } from '../themes';
import { defaultTheme } from '../config/defaults';

type Theme = {
  textColor: string;
  bgColor: string;
  accentColor: string;
  borderColor: string;
};

const setTheme = (theme: string): Theme => {
  return themes[theme] || defaultTheme;
};

export { setTheme, Theme };
