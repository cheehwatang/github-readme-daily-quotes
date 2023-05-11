import axios from 'axios';
import { QuoteData } from '../utils/setQuoteData';
import { fetchDefaultQuote } from './fetchDefaultQuote';

const apiUrl = 'https://api.themotivate365.com/stoic-quote';

const fetchStoicismQuote = async (): Promise<QuoteData> => {
  try {
    const response = await axios.get(apiUrl);
    return response.data as QuoteData;
  } catch (error: unknown) {
    return fetchDefaultQuote();
  }
};

export { fetchStoicismQuote };
