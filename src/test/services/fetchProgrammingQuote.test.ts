import axios from 'axios';
import { fetchProgrammingQuote } from '../../app/services/fetchProgrammingQuote';
import * as FetchDefaultQuote from '../../app/services/fetchDefaultQuote';
import { QuoteData } from '../../app/utils/setQuoteData';

const axiosGetSpy = jest.spyOn(axios, 'get');
const mathRandomSpy = jest.spyOn(global.Math, 'random');
const fetchDefaultQuoteSpy = jest.spyOn(FetchDefaultQuote, 'fetchDefaultQuote');
jest.mock('../../app/config', () => ({
	CONSTANTS: {
		MAX_QUOTE_LENGTH: 15,
	},
}));

describe('fetchProgrammingQuote Test Suite', () => {
	const sut = fetchProgrammingQuote;

	const quoteDataMock: QuoteData = { quote: 'testQuote', author: 'testAuthor' };
	const longQuoteDataMock: QuoteData = {
		quote: 'testQuote123456789',
		author: 'testAuthor',
	};
	const apiUrl =
		'https://github.com/skolakoda/programming-quotes-api/raw/master/Data/quotes.json';

	it('should fetch programming quotes and return QuoteData object with programming quote and author', async () => {
		axiosGetSpy.mockResolvedValueOnce({
			data: [
				{
					en: quoteDataMock.quote,
					author: quoteDataMock.author,
				},
			],
		});

		const actual = await sut();

		expect(actual).toEqual(quoteDataMock);
		expect(axiosGetSpy).toHaveBeenCalledWith(apiUrl);
	});

	it('should fetch programming quotes and return only QuoteData object with quote of a max length', async () => {
		axiosGetSpy.mockResolvedValueOnce({
			data: [
				{
					en: quoteDataMock.quote,
					author: quoteDataMock.author,
				},
				{
					en: longQuoteDataMock.quote,
					author: longQuoteDataMock.author,
				},
			],
		});

		mathRandomSpy.mockReturnValueOnce(0.9).mockReturnValueOnce(0);

		const actual = await sut();

		expect(actual).toEqual(quoteDataMock);
		expect(axiosGetSpy).toHaveBeenCalledTimes(1);
		expect(mathRandomSpy).toHaveBeenCalledTimes(2);
	});

	it('should fetch default quote if programming quote api throws error', async () => {
		fetchDefaultQuoteSpy.mockReturnValue(quoteDataMock);
		axiosGetSpy.mockRejectedValueOnce(new Error('Api call fails'));

		const actual = await sut();

		expect(actual).toEqual(quoteDataMock);
		expect(fetchDefaultQuoteSpy).toHaveBeenCalledTimes(1);
	});
});
