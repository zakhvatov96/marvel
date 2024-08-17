import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import AppBanner from "../appBanner/AppBanner";
import SingleComic from "../singleComic/SingleComic"
import ComicsList from "../comicsList/ComicsList";
import vision from '../../resources/img/vision.png'
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

class App extends Component {

	state = {
		selectedChar: null
	}

	onCharSelected = (id) => {
		this.setState({
			selectedChar: id
		})
	}

	render() {
		return (
			<div className="app">
				<AppHeader />
					{/* <AppBanner /> */}
				<main>
					<ErrorBoundary>
						<RandomChar />
					</ErrorBoundary>
					<div className="char__content">
						<ErrorBoundary>
							<CharList onCharSelected={this.onCharSelected} />
							</ErrorBoundary>
						<ErrorBoundary>
							<CharInfo charId={this.state.selectedChar} />
						</ErrorBoundary>
					</div>
					<img src={vision} alt="decoration" className="bg-decoration" />
					{/* <ComicsList />
					<SingleComic /> */}
	
				</main>
			</div>
		);
	}
}

export default App;