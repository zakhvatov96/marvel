import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import './charList.scss';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';
class CharList extends Component {

	state = {
		list: [],
		loading: true,
		error: false,
		newItemLoading: false,
		offset: 210,
		charEnded: false
	}

	marvelService = new MarvelService();


	onListLoaded = (newList) => {
		let ended = false;
		if(newList.length < 9) {
			ended = true
		}


		this.setState(({list, offset}) => ({
			list: [...list, ...newList], 
			loading: false, 
			newItemLoading: false,
			offset: offset+9,
			charEnded: ended
		}));
	}

	onError = () => {
		this.setState({loading: false, error: true})
	}

	updateCharList = ()  => {
		this.marvelService
			.getAllCharacters()
			.then(this.onListLoaded)
			.catch(this.onError)
	}

	loadByScroll = () => {
		if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			this.onRequest(this.state.offset)
		}
	}

	componentDidMount() {
		this.onRequest();
		window.addEventListener('scroll', this.loadByScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.loadByScroll)
	}
	

	onRequest = (offset) => {
		this.onCharListLoading();
		this.marvelService.getAllCharacters(offset)
		.then(this.onListLoaded)
		.catch(this.onError)	
	}

	onCharListLoading = () => {
		this.setState({
			newItemLoading: true
		})
	}

	renderItems(list) {
		const elements = list.map(({name, thumbnail, id})=>{
			return (<li 
						key={id} 
						className="char-list__item"
						onClick={() => this.props.onCharSelected(id)}>
						<img src={thumbnail} alt="character" className="char-list__item-img" />
						<span>{name}</span>
					</li>)
		})
		return elements;
	}



	render() {
	const {list, loading, error, newItemLoading, offset, charEnded} = this.state;

	const items = this.renderItems(list);
	const spinner = loading ? <div className="char-grid"><Spinner/></div> : null;
	const errorMessage = error ? <div className="char-grid"><ErrorMessage/></div> : null;
	const content = !(errorMessage || spinner) ? items : null;
		
		
	return (
		<div className='char'>
				<ul className="char-list">			
					{spinner}
					{errorMessage}
					{content}
				</ul>
				<button 
					className="button button__main button__long"
					disabled={newItemLoading}
					style={{'display': charEnded ? 'none' : 'block'}}
					onClick={()=>this.onRequest(offset)}>
					<div className="inner">LOAD MORE</div>
				</button>
		</div>	
					
	);
	}

}

export default CharList;