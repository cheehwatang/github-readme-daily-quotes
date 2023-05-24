import axios from 'axios';
import dotenv from 'dotenv';
import { QuoteData } from '../utils/setQuoteData';
import { fetchDefaultQuote } from './fetchDefaultQuote';

type NinjaQuote = {
	quote: string;
	author: string;
	category: string;
};

const categories = [
	'age',
	'alone',
	'amazing',
	'anger',
	'architecture',
	'art',
	'attitude',
	'beauty',
	'best',
	'birthday',
	'business',
	'car',
	'change',
	'communications',
	'computers',
	'cool',
	'courage',
	'dad',
	'dating',
	'death',
	'design',
	'dreams',
	'education',
	'environmental',
	'equality',
	'experience',
	'failure',
	'faith',
	'family',
	'famous',
	'fear',
	'fitness',
	'food',
	'forgiveness',
	'freedom',
	'friendship',
	'funny',
	'future',
	'god',
	'good',
	'government',
	'graduation',
	'great',
	'happiness',
	'health',
	'history',
	'home',
	'hope',
	'humor',
	'imagination',
	'inspirational',
	'intelligence',
	'jealousy',
	'knowledge',
	'leadership',
	'learning',
	'legal',
	'life',
	'love',
	'marriage',
	'medical',
	'men',
	'mom',
	'money',
	'morning',
	'movies',
	'success',
];

const fetchNinjaQuote = async (category: string): Promise<QuoteData> => {
	if (!categories.includes(category)) {
		return fetchDefaultQuote();
	}

	dotenv.config();

	const url = `https://api.api-ninjas.com/v1/quotes?limit=1&category=${category}`;

	const config = {
		headers: {
			'X-Api-Key': process.env.API_NINJAS_KEY,
		},
	};

	try {
		const response = await axios.get(url, config);
		const data = response.data as NinjaQuote[];

		return parseData(data[0]);
	} catch (error: unknown) {
		return fetchDefaultQuote();
	}
};

const parseData = (data: NinjaQuote): QuoteData => {
	const { quote, author } = data;
	return { quote, author };
};

export { fetchNinjaQuote };
