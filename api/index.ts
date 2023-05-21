import type { VercelRequest, VercelResponse } from '@vercel/node';
import { renderQuoteCard } from '../src/renderQuoteCard';
import { setQuoteData, QuoteData } from '../src/utils/setQuoteData';
import { setTheme, Theme } from '../src/utils/setTheme';
import { setBorder, ThemeBorder } from '../src/utils/setBorder';
import { setFont, FontData } from '../src/utils/setFont';
import { CONSTANTS } from '../src/config';

interface Query {
	theme: string;
	font: string;
	quote: string;
	author: string;
	category: string;
	bg_color: string;
	quote_color: string;
	author_color: string;
	accent_color: string;
	border_color: string;
	border_width: number;
	border_radius: number;
}

const handler = async (request: VercelRequest, response: VercelResponse) => {
	const {
		theme,
		font,
		quote,
		author,
		category,
		bg_color,
		quote_color,
		author_color,
		accent_color,
		border_color,
		border_width,
		border_radius,
	} = request.query as unknown as Query;

	const quoteData: QuoteData = await setQuoteData({ quote, author }, category);

	const themeData: Theme = setTheme(theme, {
		bg_color,
		quote_color,
		author_color,
		accent_color,
		border_color,
	});

	const themeBorderData: ThemeBorder = setBorder({
		border_width,
		border_radius,
	});

	const fontData: FontData = setFont(font);

	response.setHeader('Content-Type', 'image/svg+xml');
	response.setHeader(
		'Cache-Control',
		`public, max-age=${CONSTANTS.TEN_MINUTES}, s-maxage=${CONSTANTS.FOUR_HOURS}, stale-while-revalidate=${CONSTANTS.ONE_DAY}`
	);
	response.send(
		renderQuoteCard(quoteData, themeData, themeBorderData, fontData)
	);
};

export default handler;
