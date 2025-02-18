import './main.scss';
import Quotes from './quotes';

const Main = ({deadline}) => {

	const today = new Date(); 
	const dDay = new Date(deadline);
	const timeDiff = dDay - today;
	const daysRemaining = timeDiff > 0 
		? Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) 
		: 0;
  
	return (
		
		<main className="container-fluid py-4 text-center main">
			<div className="row justify-content-center">
				<div className="col-10 col-sm-6 col-md-6 col-lg-4 align-self-center">
					
					<div className={`card d-flex justify-content-center align-items-center text-center`}>
						<div className={`card-body p-4`}>
							<h2 className={`m-0`}><span className={`days`}>{daysRemaining}</span></h2>
						</div>
					</div>
				</div>
			</div>

			<Quotes />
		</main>

		

	)
}

export default Main;