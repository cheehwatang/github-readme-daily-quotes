import handler from '.';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { QuoteData } from '../src/app/utils/setQuoteData';
import { Theme } from '../src/app/utils/setTheme';
import { ThemeBorder } from '../src/app/utils/setBorder';
import { FontData } from '../src/app/utils/setFont';
import * as SetQuoteData from '../src/app/utils/setQuoteData';
import * as SetTheme from '../src/app/utils/setTheme';
import * as SetBorder from '../src/app/utils/setBorder';
import * as SetFont from '../src/app/utils/setFont';
import * as RenderQuoteCard from '../src/app/renderQuoteCard';

jest.mock('../src/app/config', () => ({
	CONSTANTS: {
		TEN_MINUTES: 10,
		FOUR_HOURS: 240,
		ONE_DAY: 1440,
	},
}));

const setQuoteDataSpy = jest.spyOn(SetQuoteData, 'setQuoteData');
const setThemeSpy = jest.spyOn(SetTheme, 'setTheme');
const setBorderSpy = jest.spyOn(SetBorder, 'setBorder');
const setFontSpy = jest.spyOn(SetFont, 'setFont');
const renderQuoteCardSpy = jest.spyOn(RenderQuoteCard, 'renderQuoteCard');

describe('api/index.ts Test Suite', () => {
	const sut = handler;

	const quoteDataMock: QuoteData = { quote: 'testQuote', author: 'testAuthor' };
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
	const queryMock = {
		theme: 'testTheme',
		font: 'testFont',
		quote: quoteDataMock.quote,
		author: quoteDataMock.author,
		category: 'testCategory',
		bg_color: themeMock.bg_color,
		quote_color: themeMock.quote_color,
		author_color: themeMock.author_color,
		accent_color: themeMock.accent_color,
		border_color: themeMock.border_color,
		border_width: borderMock.border_width,
		border_radius: borderMock.border_radius,
	};

	const setHeaderMock = jest.fn();
	const sendMock = jest.fn();

	const responseMock = {
		setHeader: setHeaderMock,
		send: sendMock,
	};

	it('should receive request query, set the properties, render quote card and send the quote card string', async () => {
		setQuoteDataSpy.mockResolvedValueOnce(quoteDataMock);
		setThemeSpy.mockReturnValueOnce(themeMock);
		setBorderSpy.mockReturnValueOnce(borderMock);
		setFontSpy.mockReturnValueOnce(fontMock);
		renderQuoteCardSpy.mockReturnValueOnce('Quote Card Rendered');

		await sut(
			{ query: queryMock } as unknown as VercelRequest,
			responseMock as unknown as VercelResponse
		);

		expect(setQuoteDataSpy).toHaveBeenCalledWith(quoteDataMock, 'testCategory');
		expect(setThemeSpy).toHaveBeenCalledWith('testTheme', themeMock);
		expect(setBorderSpy).toHaveBeenCalledWith(borderMock);
		expect(setFontSpy).toHaveBeenCalledWith('testFont');
		expect(renderQuoteCardSpy).toHaveBeenCalledWith(
			quoteDataMock,
			themeMock,
			borderMock,
			fontMock
		);
		expect(setHeaderMock).toHaveBeenCalledWith('Content-Type', 'image/svg+xml');
		expect(setHeaderMock).toHaveBeenCalledWith(
			'Cache-Control',
			'public, max-age=10, s-maxage=240, stale-while-revalidate=1440'
		);
		expect(sendMock).toHaveBeenCalledWith('Quote Card Rendered');
	});
});
