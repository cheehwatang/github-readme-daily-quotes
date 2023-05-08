import { QuoteCard } from './templates/QuoteCard';
import { fetchQuote } from './utils/fetchQuote';

const renderQuoteCard = (): string => {
  return QuoteCard.build(fetchQuote());
};

export { renderQuoteCard };
