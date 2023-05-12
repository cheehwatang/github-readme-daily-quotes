import axios from 'axios';
import { QuoteData } from '../utils/setQuoteData';
import { fetchDefaultQuote } from './fetchDefaultQuote';
import { CONSTANTS } from '../config';

const apiUrl = 'https://api.themotivate365.com/stoic-quote';

const fetchStoicismQuote = async (): Promise<QuoteData> => {
  try {
    const response = await axios.get(apiUrl);

    let quote = response.data as QuoteData;
    while (quote.quote.length > CONSTANTS.MAX_QUOTE_LENGTH) {
      const response = await axios.get(apiUrl);

      quote = response.data as QuoteData;
    }

    return quote;
  } catch (error: unknown) {
    return fetchDefaultQuote();
  }
};

export { fetchStoicismQuote };
