import './singleComic.scss';
import poster from '../../resources/img/x-men.png';

const SingleComic = (props) => {
	return (
		<div className="single-comic">
			<img src={poster} alt="poster" className="single-comic__img" />
			<div className="single-comic__text">
				<div className="single-comic__title">X-Men: Days of Future Past</div>
				<div className="single-comic__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</div>
				<div className="single-comic__descr">144 pages</div>
				<div className="single-comic__descr">Language: en-us</div>
				<div className="single-comic__price">9.99$</div>
			</div>
			<a href="#" className="single-comic__back">Back to all</a>
		</div>
	);
}

export default SingleComic;