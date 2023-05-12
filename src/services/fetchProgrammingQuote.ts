import axios from 'axios';
import { QuoteData } from '../utils/setQuoteData';
import { fetchDefaultQuote } from './fetchDefaultQuote';
import { CONSTANTS } from '../config';

type ProgrammingQuote = {
  en: string;
  author: string;
};

const apiUrl =
  'https://github.com/skolakoda/programming-quotes-api/raw/master/Data/quotes.json';

const fetchProgrammingQuote = async (): Promise<QuoteData> => {
  try {
    const response = await axios.get(apiUrl);
    const quoteArray = response.data as ProgrammingQuote[];

    let quote = randomQuote(quoteArray);
    while (quote.en.length > CONSTANTS.MAX_QUOTE_LENGTH) {
      quote = randomQuote(quoteArray);
    }

    return parseData(quote);
  } catch (error: unknown) {
    return fetchDefaultQuote();
  }
};

const randomQuote = (data: ProgrammingQuote[]): ProgrammingQuote => {
  const randomIndex = Math.floor(Math.random() * data.length);

  return data[randomIndex];
};

const parseData = (data: ProgrammingQuote): QuoteData => {
  return { quote: data.en, author: data.author };
};

export { fetchProgrammingQuote };
