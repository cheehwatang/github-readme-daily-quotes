import { renderQuoteCard } from '../app/renderQuoteCard';
import { QuoteCard } from '../app/templates/QuoteCard';
import { QuoteData } from '../app/utils/setQuoteData';
import { Theme } from '../app/utils/setTheme';
import { ThemeBorder } from '../app/utils/setBorder';
import { FontData } from '../app/utils/setFont';

describe('renderQuoteCard Test Suite', () => {
	const sut = renderQuoteCard;

	const buildMock = jest.fn();

	beforeEach(() => {
		QuoteCard.build = buildMock;
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	const dataMock: QuoteData = { quote: 'testQuote', author: 'testAuthor' };
	const themeMock: Theme = {
		bg_color: '000',
		quote_color: '001',
		author_color: '002',
		accent_color: '003',
		border_color: '004',
	};
	const borderMock: ThemeBorder = { border_width: 1, border_radius: 2 };
	const fontMock: FontData = {
		name: 'testFontName',
		family: 'testFontFamily',
		woff: 'testFontWoff',
	};

	it('should return the quote card string with the input data', () => {
		buildMock.mockReturnValue(
			[
				Object.values(dataMock).join(),
				Object.values(themeMock).join(),
				Object.values(borderMock).join(),
				Object.values(fontMock).join(),
			].join()
		);

		const actual = sut(dataMock, themeMock, borderMock, fontMock);

		expect(actual).toContain(Object.values(dataMock).join());
		expect(actual).toContain(Object.values(themeMock).join());
		expect(actual).toContain(Object.values(borderMock).join());
		expect(actual).toContain(Object.values(fontMock).join());
	});
});
