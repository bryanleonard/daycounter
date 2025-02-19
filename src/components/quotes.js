import { memo } from "react";

const Quotes = memo(({cssClass, quote}) => {
	
	return (
		<p className={cssClass}>{quote}</p>		
	);
});

export default Quotes;