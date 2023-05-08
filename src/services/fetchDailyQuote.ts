import axios from 'axios';
import { QuoteData } from '../utils/setQuoteData';
import { fetchDefaultQuote } from './fetchDefaultQuote';

type ZenQuotes = {
  q: string;
  a: string;
};

const apiUrl = 'https://zenquotes.io/api/today';

const fetchDailyQuote = async (): Promise<QuoteData> => {
  try {
    const response = await axios.get(apiUrl);
    const { q, a } = response.data[0] as ZenQuotes;
    return { quote: q, author: a };
  } catch (error: unknown) {
    return fetchDefaultQuote();
  }
};

export { fetchDailyQuote };
