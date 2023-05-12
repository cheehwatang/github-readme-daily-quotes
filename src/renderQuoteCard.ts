import { QuoteCard } from './templates/QuoteCard';
import { QuoteData } from './utils/setQuoteData';
import { Theme } from './utils/setTheme';

const renderQuoteCard = (
  data: QuoteData,
  theme: Theme,
  fontFamily: string
): string => {
  return QuoteCard.build(data, theme, fontFamily);
};

export { renderQuoteCard };
