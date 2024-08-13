import './charInfo.scss';
import Skeleton from '../skeleton/Skeleton';
import thor from '../../resources/img/thor.jpeg';

const CharInfo = (props) => {
	return (
		<div className="char-info">
			{/* <div className="char-info__content">
				<img src={thor} alt="thor" className="char-info__img" />
				<div className="char-info__btns">
				<h2 className="char-info__header">THOR</h2>
				<a href="#" className="button button__main">
							<div className="inner">HOMEPAGE</div>
						</a>
						<a href="#" className="button button__secondary">
							<div className="inner">WIKI</div>
						</a>
				</div>
				<div className="char-info__descr">
				In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
				</div>
			</div>
			<div className="char-info__comics">
				<h3 className="char-info__comics-header">Comics</h3>
				<ul className="char-info__comics-list">
					<li className="char-info__comics-item">All-Winners Squad: Band of Heroes (2011) #3</li>
					<li className="char-info__comics-item">Alpha Flight (1983) #50</li>
					<li className="char-info__comics-item">Amazing Spider-Man (1999) #503</li>
					<li className="char-info__comics-item">Amazing Spider-Man (1999) #504</li>
					<li className="char-info__comics-item">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
					<li className="char-info__comics-item">Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
					<li className="char-info__comics-item">Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</li>
					<li className="char-info__comics-item">Vengeance (2011) #4</li>
					<li className="char-info__comics-item">Avengers (1963) #1</li>
					<li className="char-info__comics-item">Avengers (1996) #1</li>
				</ul>
			</div> */}
			<Skeleton />
		</div>
	);
}

export default CharInfo;