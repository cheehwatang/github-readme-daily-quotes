import { QuoteCard } from './templates/QuoteCard';
import { QuoteData } from './utils/setQuoteData';
import { Theme } from './utils/setTheme';

const renderQuoteCard = (data: QuoteData, theme: Theme): string => {
  return QuoteCard.build(data, theme);
};

export { renderQuoteCard };
