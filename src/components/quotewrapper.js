import { useCallback, useState } from 'react';

import Quotes from './quotes';
import NextBtn from './nextbtn'
import quotes from 'helpers/quotes';
import genRandomInt from 'helpers/genRandomInt';

const QuoteWrapper = () => {

	const [quote, setQuote] = useState(() => {
		const quoteLen = quotes.length;
		return quotes[genRandomInt(quoteLen)];
	});

	const getNextQuote = useCallback(() => {
		const quoteLen = quotes.length;
		setQuote(quotes[genRandomInt(quoteLen)]);
	}, []);

	return (
		<>
			<Quotes cssClass={`mt-4 pt-2`} quote={quote} />
			<NextBtn cssClass={`mt-5`} onClick={getNextQuote} />
		</>
	)

}

export default QuoteWrapper;