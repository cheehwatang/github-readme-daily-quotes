import { themes } from '../themes/themes';

type Theme = {
  textColor: string;
  bgColor: string;
  accentColor: string;
  borderColor: string;
};

const setTheme = (theme: string): Theme => {
  return themes[theme] || themes.default;
};

export { setTheme, Theme };
