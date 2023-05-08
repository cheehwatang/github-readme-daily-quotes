import { QuoteCard } from './templates/QuoteCard';

const renderQuoteCard = (): string => {
  const quote =
    'The happiness of your life depends upon the quality of your thoughts.';
  const author = 'Marcus Aurelius';

  return QuoteCard.build(quote, author);
};

export { renderQuoteCard };
