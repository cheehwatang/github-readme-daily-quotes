import { QuoteCard } from './templates/QuoteCard';
import { QuoteData } from './utils/setQuoteData';
import { Theme } from './utils/setTheme';
import { FontData } from './utils/setFont';

const renderQuoteCard = (
  data: QuoteData,
  theme: Theme,
  font: FontData
): string => {
  return QuoteCard.build(data, theme, font);
};

export { renderQuoteCard };
