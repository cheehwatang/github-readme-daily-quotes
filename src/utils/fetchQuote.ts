import { QuoteCardData } from '../templates/QuoteCard';

const fetchQuote = (): QuoteCardData => {
  const quote =
    'The happiness of your life depends upon the quality of your thoughts.';
  const author = 'Marcus Aurelius';

  return { quote, author };
};

export { fetchQuote };
