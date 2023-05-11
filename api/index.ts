import type { VercelRequest, VercelResponse } from '@vercel/node';
import { renderQuoteCard } from '../src/renderQuoteCard';
import { setQuoteData, QuoteData } from '../src/utils/setQuoteData';
import { setTheme, Theme } from '../src/utils/setTheme';

interface Query {
  quote: string;
  author: string;
  theme: string;
  bg_color: string;
  quote_color: string;
  author_color: string;
  accent_color: string;
  border_color: string;
}

const handler = async (request: VercelRequest, response: VercelResponse) => {
  const {
    quote,
    author,
    theme,
    bg_color,
    quote_color,
    author_color,
    accent_color,
    border_color,
  } = request.query as unknown as Query;

  const quoteData: QuoteData = await setQuoteData({ quote, author });

  const themeData: Theme = setTheme(theme, {
    bg_color,
    quote_color,
    author_color,
    accent_color,
    border_color,
  });

  response.setHeader('Content-Type', 'image/svg+xml');
  response.setHeader('Cache-Control', `public, max-age=300`);
  response.send(renderQuoteCard(quoteData, themeData));
};

export default handler;
