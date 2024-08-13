import './appBanner.scss'
import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';

const AppBanner = (props) => {
	return (
		<div className="banner">
			<img src={avengers} alt="avengers" className="banner__img" />
			<div className="banner__text">New comics every week!
				<br />
			Stay tuned!</div>
			<img src={avengersLogo} alt="logo" className="banner__logo" />
		</div>
	);
}

export default AppBanner;