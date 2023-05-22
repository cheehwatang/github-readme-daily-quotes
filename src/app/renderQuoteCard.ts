import { QuoteCard } from './templates/QuoteCard';
import { QuoteData } from './utils/setQuoteData';
import { Theme } from './utils/setTheme';
import { ThemeBorder } from './utils/setBorder';
import { FontData } from './utils/setFont';

const renderQuoteCard = (
	data: QuoteData,
	theme: Theme,
	border: ThemeBorder,
	font: FontData
): string => {
	return QuoteCard.build(data, theme, border, font);
};

export { renderQuoteCard };
