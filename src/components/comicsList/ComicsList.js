import './comicsList.scss';
import xmen from '../../resources/img/x-men.png';
import uw from '../../resources/img/UW.png';

const ComicsList = (props) => {
	return (
		<div className="comics-list">
			<ul className="comics-list__grid">
				<li className="comics-list__item">
					<a href="#">
						<img src={uw} alt="poster" className="comics-list__item-img" />
						<div className="comics-list__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
						<div className="comics-list__item-price">9.99$</div>
					</a></li>
				<li className="comics-list__item">
					<a href="#">
						<img src={xmen} alt="poster" className="comics-list__item-img" />
						<div className="comics-list__item-name">X-Men: Days of Future Past</div>
						<div className="comics-list__item-price">NOT AVAILABLE</div>
					</a></li>
				<li className="comics-list__item">
					<a href="#">
						<img src={uw} alt="poster" className="comics-list__item-img" />
						<div className="comics-list__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
						<div className="comics-list__item-price">9.99$</div>
					</a></li>
				<li className="comics-list__item">
					<a href="#">
						<img src={xmen} alt="poster" className="comics-list__item-img" />
						<div className="comics-list__item-name">X-Men: Days of Future Past</div>
						<div className="comics-list__item-price">9.99$</div>
					</a></li>
				<li className="comics-list__item">
					<a href="#">
						<img src={uw} alt="poster" className="comics-list__item-img" />
						<div className="comics-list__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
						<div className="comics-list__item-price">9.99$</div>
					</a></li>
				<li className="comics-list__item">
					<a href="#">
						<img src={xmen} alt="poster" className="comics-list__item-img" />
						<div className="comics-list__item-name">X-Men: Days of Future Past</div>
						<div className="comics-list__item-price">NOT AVAILABLE</div>
					</a></li>
				<li className="comics-list__item">
					<a href="#">
						<img src={uw} alt="poster" className="comics-list__item-img" />
						<div className="comics-list__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
						<div className="comics-list__item-price">9.99$</div>
					</a></li>
				<li className="comics-list__item">
					<a href="#">
						<img src={xmen} alt="poster" className="comics-list__item-img" />
						<div className="comics-list__item-name">X-Men: Days of Future Past</div>
						<div className="comics-list__item-price">9.99$</div>
					</a></li>
			</ul>
			<a href="#" className="button button__main button__long">
							<div className="inner">LOAD MORE</div>
						</a>
		</div>
	);
}

export default ComicsList;