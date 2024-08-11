import './charList.scss';
import abyss from '../../resources/img/abyss.jpg'

const CharList = (props) => {
	return (
		<div className="char-list">
			<a href="#" className="char-list__item">
				<img src={abyss} alt="abyss" className="char-list__item-img" />
				<span>ABYSS</span>
			</a>
			<a href="#" className="char-list__item">
				<img src={abyss} alt="abyss" className="char-list__item-img" />
				<span>ABYSS</span>
			</a>
			<a href="#" className="char-list__item">
				<img src={abyss} alt="abyss" className="char-list__item-img" />
				<span>ABYSS</span>
			</a>
			<a href="#" className="char-list__item">
				<img src={abyss} alt="abyss" className="char-list__item-img" />
				<span>ABYSS</span>
			</a>
			<a href="#" className="char-list__item">
				<img src={abyss} alt="abyss" className="char-list__item-img" />
				<span>ABYSS</span>
			</a>
			<a href="#" className="char-list__item">
				<img src={abyss} alt="abyss" className="char-list__item-img" />
				<span>ABYSS</span>
			</a>
			<a href="#" className="char-list__item">
				<img src={abyss} alt="abyss" className="char-list__item-img" />
				<span>ABYSS</span>
			</a>
			<a href="#" className="char-list__item">
				<img src={abyss} alt="abyss" className="char-list__item-img" />
				<span>ABYSS</span>
			</a>
			<a href="#" className="char-list__item">
				<img src={abyss} alt="abyss" className="char-list__item-img" />
				<span>ABYSS</span>
			</a>
			<a href="#" className="button button__main">
							<div className="inner">LOAD MORE</div>
						</a>

		</div>
	);
}

export default CharList;