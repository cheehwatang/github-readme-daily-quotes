import axios from 'axios';
import { QuoteData } from '../utils/setQuoteData';
import { fetchDefaultQuote } from './fetchDefaultQuote';

type ProgrammingQuote = {
  en: string;
  author: string;
};

const apiUrl =
  'https://github.com/skolakoda/programming-quotes-api/raw/master/Data/quotes.json';

const fetchProgrammingQuote = async (): Promise<QuoteData> => {
  try {
    const response = await axios.get(apiUrl);
    const quote = randomQuote(response.data as ProgrammingQuote[]);

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
