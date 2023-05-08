import axios from 'axios';
import { QuoteData } from '../utils/formatQuoteData';

type ZenQuotes = {
  q: string;
  a: string;
};

const apiUrl = 'https://zenquotes.io/api/today';

const fetchDailyQuote = async (): Promise<QuoteData> => {
  const response = await axios.get(apiUrl);
  const { q, a } = response.data[0] as ZenQuotes;
  return { quote: q, author: a };
};

export { fetchDailyQuote };
