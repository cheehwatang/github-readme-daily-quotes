type Theme = {
  textColor: string;
  bgColor: string;
  accentColor: string;
  borderColor: string;
};

const setTheme = (): Theme => {
  return {
    textColor: 'c3d1d9',
    bgColor: '0d1117',
    accentColor: '58a6ff',
    borderColor: 'c3d1d9',
  };
};

export { setTheme, Theme };
