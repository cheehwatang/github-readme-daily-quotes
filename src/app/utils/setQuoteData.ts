import { fetchDailyQuote } from '../services/fetchDailyQuote';
import { fetchStoicismQuote } from '../services/fetchStoicismQuote';
import { fetchProgrammingQuote } from '../services/fetchProgrammingQuote';
import { fetchNinjaQuote } from '../services/fetchNinjaQuote';

type QuoteData = {
	quote: string;
	author: string;
};

const setQuoteData = async (
	data: QuoteData,
	category: string
): Promise<QuoteData> => {
	// If category is provided, call the respective service for quote data.
	if (category) {
		switch (category) {
			case 'stoicism': {
				return await fetchStoicismQuote();
			}
			case 'programming': {
				return await fetchProgrammingQuote();
			}
			default: {
				return await fetchNinjaQuote(category);
			}
		}
	}

	// If no category is provided, then get customized quote or daily quote.
	const { quote, author } = data;

	if (!quote) {
		data = await fetchDailyQuote();
	} else if (quote && !author) {
		data = {
			quote,
			author: 'Anonymous',
		};
	}

	return data;
};

export { setQuoteData, QuoteData };
