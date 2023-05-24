import { setQuoteData, QuoteData } from '../../app/utils/setQuoteData';
import * as FetchDailyQuote from '../../app/services/fetchDailyQuote';
import * as FetchStoicismQuote from '../../app/services/fetchStoicismQuote';
import * as FetchProgrammingQuote from '../../app/services/fetchProgrammingQuote';
import * as FetchNinjaQuote from '../../app/services/fetchNinjaQuote';

const fetchDailyQuoteSpy = jest.spyOn(FetchDailyQuote, 'fetchDailyQuote');
const fetchStoicismQuoteSpy = jest.spyOn(
	FetchStoicismQuote,
	'fetchStoicismQuote'
);
const fetchProgrammingQuoteSpy = jest.spyOn(
	FetchProgrammingQuote,
	'fetchProgrammingQuote'
);
const fetchNinjaQuoteSpy = jest.spyOn(FetchNinjaQuote, 'fetchNinjaQuote');

describe('setQuoteData Test Suite', () => {
	const sut = setQuoteData;

	const quoteDataMock: QuoteData = { quote: 'testQuote', author: 'testAuthor' };
	const emptyQuoteData: QuoteData = { quote: '', author: '' };

	it('should return daily quote if input data and category is empty', async () => {
		fetchDailyQuoteSpy.mockResolvedValueOnce(quoteDataMock);

		const actual = await sut(emptyQuoteData, '');

		expect(actual).toEqual(quoteDataMock);
		expect(fetchDailyQuoteSpy).toHaveBeenCalledTimes(1);
	});

	it('should return stoicism quote if category is stoicism', async () => {
		fetchStoicismQuoteSpy.mockResolvedValueOnce(quoteDataMock);

		const actual = await sut(emptyQuoteData, 'stoicism');

		expect(actual).toEqual(quoteDataMock);
		expect(fetchStoicismQuoteSpy).toHaveBeenCalledTimes(1);
	});

	it('should return programming quote if category is programming', async () => {
		fetchProgrammingQuoteSpy.mockResolvedValueOnce(quoteDataMock);

		const actual = await sut(emptyQuoteData, 'programming');

		expect(actual).toEqual(quoteDataMock);
		expect(fetchProgrammingQuoteSpy).toHaveBeenCalledTimes(1);
	});

	it('should return quote if category is provided', async () => {
		fetchNinjaQuoteSpy.mockResolvedValueOnce(quoteDataMock);

		const actual = await sut(emptyQuoteData, 'alone');

		expect(actual).toEqual(quoteDataMock);
		expect(fetchNinjaQuoteSpy).toHaveBeenCalledTimes(1);
	});

	it('should return custom quote and author if input data with quote and author is provided, and category is empty', async () => {
		const actual = await sut(quoteDataMock, '');

		expect(actual).toEqual(quoteDataMock);
	});

	it('should return custom quote and anonymous author if only input quote is provided, and author and category are empty', async () => {
		const expected = { quote: 'testQuote', author: 'Anonymous' };

		const actual = await sut({ quote: 'testQuote', author: '' }, '');

		expect(actual).toEqual(expected);
	});
});
