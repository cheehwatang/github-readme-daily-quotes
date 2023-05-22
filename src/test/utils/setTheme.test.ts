const themeMock: Theme = {
	bg_color: '000',
	quote_color: '000',
	author_color: '000',
	accent_color: '000',
	border_color: '000',
};

jest.doMock('../../app/config', () => ({
	defaultTheme: themeMock,
}));

jest.doMock('../../app/themes', () => ({
	themes: {
		testTheme: themeMock,
	},
}));

import { setTheme, Theme } from '../../app/utils/setTheme';

describe('setTheme Test Suite', () => {
	const sut = setTheme;

	it('should return Theme object found in themes if input string is valid and customTheme is not set', () => {
		const emptyThemeMock = {
			bg_color: '',
			quote_color: '',
			author_color: '',
			accent_color: '',
			border_color: '',
		};

		const actual = sut('testTheme', emptyThemeMock);

		expect(actual).toEqual(themeMock);
	});

	it('should return Theme object of the same values as customTheme', () => {
		const customThemeMock: Theme = {
			bg_color: 'fff',
			quote_color: 'fff',
			author_color: 'fff',
			accent_color: 'fff',
			border_color: 'fff',
		};

		const actual = sut('testTheme', customThemeMock);

		expect(actual).toEqual(customThemeMock);
	});

	it('should return default theme object if theme string is not found in themes', () => {
		const emptyThemeMock = {
			bg_color: '',
			quote_color: '',
			author_color: '',
			accent_color: '',
			border_color: '',
		};

		const actual = sut('abc', emptyThemeMock);

		expect(actual).toEqual(themeMock);
	});
});
