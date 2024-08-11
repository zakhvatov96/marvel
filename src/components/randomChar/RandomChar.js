import './randomChar.scss';
import thor from '../../resources/img/thor.jpeg';
import hammer from '../../resources/img/mjolnir.png';

const RandomChar = (props) => {
	return (
		<div className="random-char">
			<div className="random-char__block">
				<img src={thor} alt="character" className="random-char__img" />
				<div className="random-char__info">
					<h2 className="random-char__title">THOR</h2>
					<div className="random-char__descr">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</div>
					<div className="random-char__btns">
						<a href="#" className="button button__main">
							<div className="inner">HOMEPAGE</div>
						</a>
						<a href="#" className="button button__secondary">
							<div className="inner">WIKI</div>
						</a>
					</div>
				</div>
			</div>
			<div className="random-char__static">
				<div className="random-char__static-text">Random character for today!
				Do you want to get to know him better?
				<br />
				<br />
				Or choose another one</div>
				<a href="#" className="button button__main">
							<div className="inner">TRY IT</div>
						</a>
				<img src={hammer} alt="hammer" className="random-char__static-img" />
			</div>
		</div>
	);
}

export default RandomChar;