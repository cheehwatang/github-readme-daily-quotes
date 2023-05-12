import { fetchDailyQuote } from '../services/fetchDailyQuote';
import { fetchStoicismQuote } from '../services/fetchStoicismQuote';
import { fetchProgrammingQuote } from '../services/fetchProgrammingQuote';

type QuoteData = {
  quote: string;
  author: string;
};

const setQuoteData = async (
  data: QuoteData,
  category: string
): Promise<QuoteData> => {
  // If category is provided, call the respective service for quote data.
  switch (category) {
    case 'stoicism': {
      return await fetchStoicismQuote();
    }
    case 'programming': {
      return await fetchProgrammingQuote();
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
