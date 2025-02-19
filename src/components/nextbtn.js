import { memo } from 'react';
import './nextbtn.scss';

const NextBtn = memo(({cssClass, onClick}) => {

	return (
		<button className={`btn btn-theme ${cssClass}`} onClick={onClick}>
			Next quote
		</button>
	);
});

export default NextBtn;

