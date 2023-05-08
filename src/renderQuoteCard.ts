import { QuoteCard, QuoteData } from './templates/QuoteCard';

const renderQuoteCard = (data: QuoteData): string => {
  return QuoteCard.build(data);
};

export { renderQuoteCard };
