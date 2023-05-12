import { Theme } from '../utils/setTheme';

const themes: { [key: string]: Theme } = {
  light: {
    bg_color: 'fffefe',
    quote_color: '2f80ed',
    author_color: '434d58',
    accent_color: '4c71f2',
    border_color: 'e4e2e2',
  },
  dark: {
    bg_color: '151515',
    quote_color: 'fff',
    author_color: '9f9f9f',
    accent_color: '79ff97',
    border_color: 'e4e2e2',
  },
  github_dark: {
    bg_color: '0d1117',
    quote_color: '58a6ff',
    author_color: 'c3d1d9',
    accent_color: '1f6feb',
    border_color: 'e4e2e2',
  },
  radical: {
    bg_color: '141321',
    quote_color: 'fe428e',
    author_color: 'a9fef7',
    accent_color: 'f8d847',
    border_color: 'e4e2e2',
  },
};

export { themes };
