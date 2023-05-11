import { Theme } from '../utils/setTheme';

const themes: { [key: string]: Theme } = {
  default: {
    textColor: 'c3d1d9',
    bgColor: '0d1117',
    accentColor: '58a6ff',
    borderColor: 'c3d1d9',
  },
  light: {
    textColor: '434d58',
    bgColor: 'fffefe',
    accentColor: '2f80ed',
    borderColor: 'e4e2e2',
  },
};

export { themes };
