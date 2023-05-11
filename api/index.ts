import type { VercelRequest, VercelResponse } from '@vercel/node';
import { renderQuoteCard } from '../src/renderQuoteCard';
import { setQuoteData, QuoteData } from '../src/utils/setQuoteData';
import { setTheme, Theme } from '../src/utils/setTheme';

interface Query {
  quote: string;
  author: string;
}

const handler = async (request: VercelRequest, response: VercelResponse) => {
  const { quote, author } = request.query as unknown as Query;

  const data: QuoteData = await setQuoteData({ quote, author });

  const theme: Theme = setTheme();

  response.setHeader('Content-Type', 'image/svg+xml');
  response.setHeader('Cache-Control', `public, max-age=300`);
  response.send(renderQuoteCard(data, theme));
};

export default handler;
