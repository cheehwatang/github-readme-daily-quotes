const fontDataMock: FontData = {
  name: 'testName',
  family: 'testFamily',
  woff: 'abcd',
};

const fontFamiliesMock = { testFont: fontDataMock };

jest.doMock('../../src/fonts', () => ({
  fontFamilies: fontFamiliesMock,
}));

jest.doMock('../../src/config', () => ({
  defaultFont: fontDataMock,
}));

// Do mock for the fontFamilies before importing the setFont function.
import { setFont, FontData } from '../../src/utils/setFont';

describe('setFont Test Suite', () => {
  const sut = setFont;

  it('should return font data if font is found in font families', () => {
    const actual = sut('testFont');

    expect(actual).toEqual(fontDataMock);
  });

  it('should return default font data if font is not found in font families', () => {
    const actual = sut('noFont');

    expect(actual).toEqual(fontDataMock);
  });
});
