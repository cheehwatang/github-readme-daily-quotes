import { themes } from '../themes/themes';

type Theme = {
  textColor: string;
  bgColor: string;
  accentColor: string;
  borderColor: string;
};

const setTheme = (): Theme => {
  return themes.default;
};

export { setTheme, Theme };
