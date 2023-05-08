import { QuoteCard, QuoteCardData } from './templates/QuoteCard';

const renderQuoteCard = (): string => {
  const quote =
    'The happiness of your life depends upon the quality of your thoughts.';
  const author = 'Marcus Aurelius';

  const data: QuoteCardData = { quote, author };

  return QuoteCard.build(data);
};

export { renderQuoteCard };
