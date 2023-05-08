import { fetchDailyQuote } from '../services/fetchDailyQuote';

type QuoteData = {
  quote: string;
  author: string;
};

const setQuoteData = async (data: QuoteData): Promise<QuoteData> => {
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
