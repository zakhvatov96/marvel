import './skeleton.scss';

const Skeleton = (props) => {
	return (
		<>
		<h3 className="char__select">Please select a character to see information</h3>
		<div className="skeleton">
			<div className="skeleton__header">
				<div className="skeleton__circle"></div>
				<div className="skeleton__mini"></div>
			</div>
			<div className="skeleton__block"></div>
			<div className="skeleton__block"></div>
		</div>
		</>
	);
}

export default Skeleton;