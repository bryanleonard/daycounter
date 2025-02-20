import "./toggler.scss";

const Toggler = ({isToggled, onToggle}) => {

	const handleToggle = () => {
		const newVal = !isToggled;
		onToggle(newVal);
		console.log('Toggle Value:', newVal ? 'Othervational' : 'Motivational');
	};

	return (
		<div className="toggle-container mt-3">
			<label htmlFor="dataToggle" className="label">
				Motivational
			</label>
			<label className="switch mx-4">
				<input type="checkbox" id="dataToggle" 
					checked={isToggled}
					onChange={handleToggle} />
				<span className="slider"></span>
			</label>
			<label htmlFor="dataToggle" className="label">
				Othervational
			</label>
		</div>
	);
};

export default Toggler;
