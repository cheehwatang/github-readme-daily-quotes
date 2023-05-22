import { fetchDefaultQuote } from '../../app/services/fetchDefaultQuote';
import { QuoteData } from '../../app/utils/setQuoteData';

describe('fetchDefaultQuote Test Suite', () => {
	const sut = fetchDefaultQuote;

	it('should return a QuoteData object with default quote and author', () => {
		const expected: QuoteData = {
			quote: 'If a man knows not to which port he sails, no wind is favorable.',
			author: 'Seneca',
		};

		const actual = sut();

		expect(actual).toEqual(expected);
	});
});
