import { useCallback, useState, useEffect } from 'react';

import Quotes from './quotes';
import NextBtn from './nextbtn'
import quotes from 'helpers/quotes';
import otherQuotes from 'helpers/other-quotes';
import genRandomInt from 'helpers/genRandomInt';

const QuoteWrapper = ({isToggled}) => {

	
	const [quote, setQuote] = useState();
	const getQuoteList = useCallback(() => (isToggled ? otherQuotes : quotes), [isToggled]);
	const errMsg = { type: 'text', content: `Whoops! I pooped my pants. 💩` };

	useEffect(() => {
		const initialList = getQuoteList();
		if (initialList.length > 0) {
			setQuote(initialList[genRandomInt(initialList.length)]);
		} else {
			setQuote(errMsg);
		}
	}, []);


	const getNextQuote = useCallback(() => {
		const currentList = getQuoteList();
		if (currentList.length === 0) {
			setQuote(errMsg);
			return;
		}

		let newQuote;
		let attempts = 0;
		const maxAttempts = 5; // Prevent infinite loops

		while (!newQuote && attempts < maxAttempts) {
			const randomIndex = genRandomInt(currentList.length);
			newQuote = currentList[randomIndex];
			attempts++;
		}

		setQuote(newQuote || errMsg); // If still undefined, set fallback
	}, [getQuoteList]);



	return (
		<>
			<Quotes cssClass={`mt-4 pt-2`} quote={quote || { type: 'text', content: `Loading...` }} />
			<NextBtn cssClass={`mt-5`} onClick={getNextQuote} />
		</>
	)

}

export default QuoteWrapper;