import { memo } from "react";

const Quotes = memo(({cssClass, quote}) => {
	
	return (
		<div className={cssClass}>
			{quote.type === 'text' ? (
				<p className={`m-0`}>{quote.content}</p>
			) : (
				<img src={quote.content} style={{ maxWidth: '100%', height: 'auto' }} />
			)}
		</div>
	);
});

export default Quotes;