import quotes from 'helpers/quotes';
import genRandomInt from 'helpers/genRandomInt';

const Quotes = () => {

	const quoteLen = quotes.length;
	const quotePos = genRandomInt(quoteLen);
	const quote = quotes[quotePos];

	return (
		<p className={`mt-3`}>{quote}</p>
	)
}

export default Quotes;