import { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import './charInfo.scss';
import MarvelService from '../../services/MarvelService';
import Skeleton from '../skeleton/Skeleton';

class CharInfo extends Component {

	state = {
		char: null,
		loading: false,
		error: false
	}

	 marvelService = new MarvelService();

	 componentDidMount() {
		this.updateChar();
	 }

	 componentDidUpdate(prevProps, prevState) {
		if(this.props.charId !== prevProps.charId) {
			this.updateChar();
		}
	 }

	 updateChar = () => {
		const {charId} = this.props;
		if(!charId) {
			return;
		}
		this.setState({loading: true});
		this.marvelService
			.getCharacter(charId)
			.then(this.onCharLoaded)
			.catch(this.onError);
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


	render() {
		const {char, loading, error} = this.state;
		const skeleton = char || loading || error ? null : <Skeleton />,
			  errorMessage = error ? <ErrorMessage/> : null,
			  spinner = loading ? <Spinner /> : null,
			  element = !(errorMessage || spinner || !char) ? <View char={char}/> : null;


		return (
			<div className="char-info">
				{skeleton}
				{errorMessage}
				{spinner}
				{element}
			</div>
		);
	}
}

const View = ({char}) => {
	const {name, description, thumbnail, homepage, wiki, comics} = char;



	return (
		<>
			<div className="char-info__content">
				<img src={thumbnail} alt={name} className="char-info__img" />
				<div className="char-info__wrapper">
				<div className="char-info__header">{name}</div>
				<div className="char-info__btns">
				<a href={homepage} className="button button__main">
							<div className="inner">HOMEPAGE</div>
						</a>
						<a href={wiki} className="button button__secondary">
							<div className="inner">WIKI</div>
						</a>
				</div>
				</div>
				<div className="char-info__descr">
					{description}
				</div>
				</div>
				<div className="char-info__comics">
					<h3 className="char-info__comics-header">Comics</h3>
					<ul className="char-info__comics-list">
						{comics.length>1 ? comics.map((item, i) => {
								if (i > 9) return;
									return (
										<li
											 key={i}
											 className="char-info__comics-item">{item.name}
										</li>
									)
								

							}) : 'There are no comics with this character'
						}


					</ul>
				</div>
		</>
	)
}

CharInfo.propTypes = {
	charId: PropTypes.number
}

export default CharInfo;