import axios from 'axios';
import { fetchDailyQuote } from '../../app/services/fetchDailyQuote';
import { QuoteData } from '../../app/utils/setQuoteData';
import * as FetchDefaultQuote from '../../app/services/fetchDefaultQuote';

const axiosGetSpy = jest.spyOn(axios, 'get');
const fetchDefaultQuoteSpy = jest.spyOn(FetchDefaultQuote, 'fetchDefaultQuote');

describe('fetchDailyQuote Test Suite', () => {
	const sut = fetchDailyQuote;

	const quoteDataMock: QuoteData = { quote: 'testQuote', author: 'testAuthor' };
	const apiUrl = 'https://zenquotes.io/api/today';

	it('should fetch daily quote and return QuoteData object with quote and author', async () => {
		axiosGetSpy.mockResolvedValueOnce({
			data: [
				{
					q: quoteDataMock.quote,
					a: quoteDataMock.author,
				},
			],
		});

		const actual = await sut();

		expect(actual).toEqual(quoteDataMock);
		expect(axiosGetSpy).toHaveBeenCalledWith(apiUrl);
	});

	it('should fetch default quote if daily quote api throws error', async () => {
		fetchDefaultQuoteSpy.mockReturnValue(quoteDataMock);
		axiosGetSpy.mockRejectedValueOnce(new Error('Api call fails'));

		const actual = await sut();

		expect(actual).toEqual(quoteDataMock);
		expect(fetchDefaultQuoteSpy).toHaveBeenCalledTimes(1);
	});
});
