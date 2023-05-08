import { QuoteData } from '../utils/setQuoteData';

const fetchDefaultQuote = (): QuoteData => {
  const quote =
    'If a man knows not to which port he sails, no wind is favorable.';
  const author = 'Seneca';

  return { quote, author };
};

export { fetchDefaultQuote };
