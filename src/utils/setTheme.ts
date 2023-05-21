import { themes } from '../themes';
import { defaultTheme, borderWidthConfig, borderRadiusConfig } from '../config';

type Theme = {
  bg_color: string;
  quote_color: string;
  author_color: string;
  accent_color: string;
  border_color: string;
  border_width?: number;
  border_radius?: number;
};

const setTheme = (theme: string, customTheme: Theme): Theme => {
  const themeData = themes[theme] || defaultTheme;

  for (const key in customTheme) {
    customTheme[key] ||= themeData[key];
  }

  setBorderWidth(customTheme);
  setBorderRadius(customTheme);

  return customTheme;
};

const setBorderWidth = (theme: Theme): void => {
  if (
    !theme.border_width ||
    !isValueWithinRange(
      theme.border_width,
      borderWidthConfig.min,
      borderWidthConfig.max
    )
  ) {
    theme.border_width = borderWidthConfig.default;
  }
};

const setBorderRadius = (theme: Theme): void => {
  if (
    !theme.border_radius ||
    !isValueWithinRange(
      theme.border_radius,
      borderRadiusConfig.min,
      borderRadiusConfig.max
    )
  ) {
    theme.border_radius = borderRadiusConfig.default;
  }
};

const isValueWithinRange = (
  value: number,
  min: number,
  max: number
): boolean => {
  return value >= min && value <= max;
};

export { setTheme, Theme };
