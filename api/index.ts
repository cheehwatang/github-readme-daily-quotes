import type { VercelRequest, VercelResponse } from '@vercel/node';
import { renderQuoteCard } from '../src/renderQuoteCard';
import { QuoteData } from '../src/templates/QuoteCard';
import { fetchQuote } from '../src/utils/fetchQuote';

interface Query {
  quote: string;
  author: string;
}

const handler = async (request: VercelRequest, response: VercelResponse) => {
  const { quote, author } = request.query as unknown as Query;

  let data: QuoteData;

  if (quote && author) {
    data = {
      quote,
      author,
    };
  } else if (quote) {
    data = {
      quote,
      author: 'Anonymous',
    };
  } else {
    data = fetchQuote();
  }

  response.setHeader('Content-Type', 'image/svg+xml');
  response.setHeader('Cache-Control', `public, max-age=300`);
  response.send(renderQuoteCard(data));
};

export default handler;
