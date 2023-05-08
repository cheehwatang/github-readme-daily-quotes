import { fetchQuote } from './fetchQuote';

interface QuoteData {
  quote: string;
  author: string;
}

const formatQuoteData = (data: QuoteData): QuoteData => {
  const { quote, author } = data;

  if (!quote) {
    data = fetchQuote();
  } else if (quote && !author) {
    data = {
      quote,
      author: 'Anonymous',
    };
  }

  return data;
};

export { formatQuoteData, QuoteData };
