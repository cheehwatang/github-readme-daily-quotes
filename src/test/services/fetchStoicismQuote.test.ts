import axios from 'axios';
import { fetchStoicismQuote } from '../../app/services/fetchStoicismQuote';
import * as FetchDefaultQuote from '../../app/services/fetchDefaultQuote';
import { QuoteData } from '../../app/utils/setQuoteData';

const axiosGetSpy = jest.spyOn(axios, 'get');
const fetchDefaultQuoteSpy = jest.spyOn(FetchDefaultQuote, 'fetchDefaultQuote');
jest.mock('../../app/config', () => ({
	CONSTANTS: {
		MAX_QUOTE_LENGTH: 15,
	},
}));

describe('fetchStoicismQuote Test Suite', () => {
	const sut = fetchStoicismQuote;

	const quoteDataMock: QuoteData = { quote: 'testQuote', author: 'testAuthor' };
	const longQuoteDataMock: QuoteData = {
		quote: 'testQuote123456789',
		author: 'testAuthor',
	};

	const apiUrl = 'https://api.themotivate365.com/stoic-quote';

	it('should fetch stoicism quotes and return QuoteData object with stoicism quote and author', async () => {
		axiosGetSpy.mockResolvedValueOnce({
			data: quoteDataMock,
		});

		const actual = await sut();

		expect(actual).toEqual(quoteDataMock);
		expect(axiosGetSpy).toHaveBeenCalledWith(apiUrl);
	});

	it('should fetch stoicism quotes, set author to Anonymous if not provided by the api, and return QuoteData object with stoicism quote and author', async () => {
		axiosGetSpy.mockResolvedValueOnce({
			data: { quote: quoteDataMock.quote, author: '' },
		});
		const expected = { quote: quoteDataMock.quote, author: 'Anonymous' };

		const actual = await sut();

		expect(actual).toEqual(expected);
	});

	it('should fetch stoicism quotes and return only QuoteData object with quote of a max length', async () => {
		axiosGetSpy
			.mockResolvedValueOnce({
				data: longQuoteDataMock,
			})
			.mockResolvedValueOnce({ data: quoteDataMock });

		const actual = await sut();

		expect(actual).toEqual(quoteDataMock);
		expect(axiosGetSpy).toHaveBeenCalledTimes(2);
	});

	it('should fetch default quote if stoicism quote api throws error', async () => {
		fetchDefaultQuoteSpy.mockReturnValue(quoteDataMock);
		axiosGetSpy.mockRejectedValueOnce(new Error('Api call fails'));

		const actual = await sut();

		expect(actual).toEqual(quoteDataMock);
		expect(fetchDefaultQuoteSpy).toHaveBeenCalledTimes(1);
	});
});
