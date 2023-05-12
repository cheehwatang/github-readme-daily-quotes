import { themes } from '../themes';
import { defaultTheme } from '../config';

type Theme = {
  bg_color: string;
  quote_color: string;
  author_color: string;
  accent_color: string;
  border_color: string;
};

const setTheme = (theme: string, customTheme: Theme): Theme => {
  const themeData = themes[theme] || defaultTheme;

  for (const key in customTheme) {
    customTheme[key] ||= themeData[key];
  }

  return customTheme;
};

export { setTheme, Theme };
