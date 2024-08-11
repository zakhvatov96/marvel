import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
const App = (props) => {
	return (
		<div className="app">
			<AppHeader />
			<main>
				<RandomChar />
				<div className="char__content">
					<CharList />
					<CharInfo />
				</div>
				{/* <img src="" alt="" className="bg-decoration" /> */}
			</main>
		</div>
	);
}

export default App;