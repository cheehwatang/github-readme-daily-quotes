import { QuoteCard } from './templates/QuoteCard';
import { QuoteData } from './utils/setQuoteData';

const renderQuoteCard = (data: QuoteData): string => {
  return QuoteCard.build(data);
};

export { renderQuoteCard };
