import { memo } from "react";
import './main.scss';

const Quotes = memo(({cssClass, quote}) => {
	
	return (
		<div className={cssClass}>
			{quote.type === 'text' ? (
				<p className={`m-0`}>{quote.content}</p>
			) : (
				<img src={quote.content} className={`quoteImg`} alt={quote.content} />
			)}
		</div>
	);
});

export default Quotes;