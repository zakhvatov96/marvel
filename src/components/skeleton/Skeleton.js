import './skeleton.scss';

const Skeleton = (props) => {
	return (
		<>
		<h3 className="char__select">Please select a character to see information</h3>
		<div className="skeleton">
			<div className="skeleton__header pulse">
				<div className="skeleton__circle"></div>
				<div className="skeleton__mini"></div>
			</div>
			<div className="skeleton__block pulse"></div>
			<div className="skeleton__block pulse"></div>
		</div>
		</>
	);
}

export default Skeleton;