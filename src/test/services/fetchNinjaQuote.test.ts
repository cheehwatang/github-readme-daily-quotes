import axios from 'axios';
import { fetchNinjaQuote } from '../../app/services/fetchNinjaQuote';
import { QuoteData } from '../../app/utils/setQuoteData';
import * as FetchDefaultQuote from '../../app/services/fetchDefaultQuote';

const axiosGetSpy = jest.spyOn(axios, 'get');
const fetchDefaultQuoteSpy = jest.spyOn(FetchDefaultQuote, 'fetchDefaultQuote');

describe('fetchNinjaQuote Test Suite', () => {
	const sut = fetchNinjaQuote;

	const quoteDataMock: QuoteData = { quote: 'testQuote', author: 'testAuthor' };

	it('should fetch quote based on category received and return QuoteData object with quote and author', async () => {
		process.env.API_NINJAS_KEY = 'abcd';
		const url = 'https://api.api-ninjas.com/v1/quotes?limit=1&category=alone';
		const config = {
			headers: {
				'X-Api-Key': process.env.API_NINJAS_KEY,
			},
		};

		axiosGetSpy.mockResolvedValueOnce({
			data: [
				{
					quote: quoteDataMock.quote,
					author: quoteDataMock.author,
					category: 'alone',
				},
			],
		});

		const actual = await sut('alone');

		expect(actual).toEqual(quoteDataMock);
		expect(axiosGetSpy).toHaveBeenCalledWith(url, config);
	});

	it('should fetch default quote if the category provided is invalid', async () => {
		fetchDefaultQuoteSpy.mockReturnValue(quoteDataMock);

		const actual = await sut('alon');

		expect(actual).toEqual(quoteDataMock);
		expect(fetchDefaultQuoteSpy).toHaveBeenCalledTimes(1);
	});

	it('should fetch default quote if ninja quote api throws error', async () => {
		fetchDefaultQuoteSpy.mockReturnValue(quoteDataMock);
		axiosGetSpy.mockRejectedValueOnce(new Error('Api call fails'));

		const actual = await sut('alone');

		expect(actual).toEqual(quoteDataMock);
		expect(fetchDefaultQuoteSpy).toHaveBeenCalledTimes(1);
	});
});
