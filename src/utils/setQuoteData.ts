import { fetchDailyQuote } from '../services/fetchDailyQuote';
import { fetchStoicismQuote } from '../services/fetchStoicismQuote';

type QuoteData = {
  quote: string;
  author: string;
};

const setQuoteData = async (
  data: QuoteData,
  keyword: string
): Promise<QuoteData> => {
  if (keyword === 'stoicism') {
    return await fetchStoicismQuote();
  }

  // If no keyword is provided, then get customized quote or daily quote.
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
