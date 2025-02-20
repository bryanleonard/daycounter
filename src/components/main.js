import './main.scss';
import QuotesWrapper from './quotewrapper';

const Main = ({deadline, isToggled}) => {

	const today = new Date(); 
	const dDay = new Date(deadline);
	const timeDiff = dDay - today;
	const daysRemaining = timeDiff > 0 
		? Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) 
		: 0;
  
	return (
		
		<main className="container-fluid py-2 text-center main">
			<div className="row justify-content-center">
				<div className="col-10 col-sm-6 col-md-6 col-lg-3 align-self-center">
					
					<div className={`card d-flex justify-content-center align-items-center text-center`}>
						<div className={`card-body p-4`}>
							<h2 className={`m-0`}><span className={`days`}>{daysRemaining}</span></h2>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col text-center">
					<QuotesWrapper isToggled={isToggled} />
				</div>
			</div>
			
		</main>

	);
};

export default Main;