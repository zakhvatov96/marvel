import { Component } from 'react';
import './randomChar.scss';
import MarvelService from '../../services/MarvelService';
import hammer from '../../resources/img/mjolnir.png';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';

class RandomChar extends Component {

	state = {
		char: {},
		loading: true,
		error: false
	}



	 marvelService = new MarvelService();

	 componentDidMount() {
		this.updateChar();
	}

	 onCharLoaded = (char) => {
		this.setState({char, loading: false});
		console.log('update')
	 }

	 onError = () => {
		this.setState({
			loading: false,
			error: true
		});
	 }

	updateChar = () => {
		this.setState({loading: true});
		const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
		this.marvelService
			.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError);
	}

	render() {
		const {char, loading, error} = this.state;
		const errorMessage = error ? <ErrorMessage/> : null,
			  spinner = loading ? <Spinner /> : null,
			  element = !(errorMessage || spinner) ? <View char={char}/> : null;

		return (
			<div className="random-char">
				{errorMessage}
				{spinner}
				{element}
				<div className="random-char__static">
					<div className="random-char__static-text">Random character for today!
					Do you want to get to know him better?
					<br />
					<br />
					Or choose another one</div>
					<a href="#" onClick={this.updateChar} className="button button__main">
								<div className="inner">TRY IT</div>
							</a>
					<img src={hammer} alt="hammer" className="random-char__static-img" />
				</div>
			</div>
		);
	}
	
}

const View = ({char}) => {
	const {thumbnail, name, description, homepage, wiki} = char;
	return (
		<div className="random-char__block">
					<img src={thumbnail} alt="character" className="random-char__img" />
					<div className="random-char__info">
						<h2 className="random-char__title">{name}</h2>
						<div className="random-char__descr">{description}</div>
						<div className="random-char__btns">
							<a href={homepage} className="button button__main">
								<div className="inner">HOMEPAGE</div>
							</a>
							<a href={wiki} className="button button__secondary">
								<div className="inner">WIKI</div>
							</a>
						</div>
					</div>
				</div>
	);
}



export default RandomChar;