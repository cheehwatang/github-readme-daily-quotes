import type { VercelRequest, VercelResponse } from '@vercel/node';
import { renderQuoteCard } from '../src/renderQuoteCard';
import { formatQuoteData, QuoteData } from '../src/utils/formatQuoteData';

interface Query {
  quote: string;
  author: string;
}

const handler = async (request: VercelRequest, response: VercelResponse) => {
  const { quote, author } = request.query as unknown as Query;

  const data: QuoteData = formatQuoteData({ quote, author });

  response.setHeader('Content-Type', 'image/svg+xml');
  response.setHeader('Cache-Control', `public, max-age=300`);
  response.send(renderQuoteCard(data));
};

export default handler;
