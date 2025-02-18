import quotes from 'helpers/quotes';
import genRandomInt from 'helpers/genRandomInt';

const Quotes = () => {

	const quoteLen = quotes.length;
	const quotePos = genRandomInt(quoteLen);

	return (
		<p className={`mt-3`}>{quotes[quotePos]}</p>
	)
}

export default Quotes;