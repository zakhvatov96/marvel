import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import AppBanner from "../appBanner/AppBanner";
import SingleComic from "../singleComic/SingleComic"
import ComicsList from "../comicsList/ComicsList";
import vision from '../../resources/img/vision.png'
const App = (props) => {
	return (
		<div className="app">
			<AppHeader />
				<AppBanner />
			<main>
				{/* <RandomChar />
				<div className="char__content">
					<CharList />
					<CharInfo />
				</div>
				<img src={vision} alt="decoration" className="bg-decoration" /> */}
				{/* <ComicsList /> */}
				<SingleComic />

			</main>
		</div>
	);
}

export default App;