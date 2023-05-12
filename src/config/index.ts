import { themes } from '../themes';
import { fontFamilies } from '../fonts';

const defaultTheme = themes.github_dark;

const defaultFont = fontFamilies.helvetica;

const CONSTANTS = {
  TEN_MINUTES: 600,
  ONE_HOURS: 3600,
  FOUR_HOURS: 14400,
  ONE_DAY: 86400,
  MAX_QUOTE_LENGTH: 140,
};

export { defaultTheme, defaultFont, CONSTANTS };
