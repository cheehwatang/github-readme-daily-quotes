import axios from 'axios';
import { QuoteData } from '../utils/setQuoteData';
import { fetchDefaultQuote } from './fetchDefaultQuote';

type DailyQuote = {
  q: string;
  a: string;
};

const apiUrl = 'https://zenquotes.io/api/today';

const fetchDailyQuote = async (): Promise<QuoteData> => {
  try {
    const response = await axios.get(apiUrl);

    return parseData(response.data[0] as DailyQuote);
  } catch (error: unknown) {
    return fetchDefaultQuote();
  }
};

const parseData = (data: DailyQuote): QuoteData => {
  return { quote: data.q, author: data.a };
};

export { fetchDailyQuote };
