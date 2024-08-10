import './appHeader.scss';

const AppHeader = (props) => {
	return (
		<header className="header">
				<h2 className="header__title"><span>Marvel</span> information portal</h2>
				<nav className="header__nav">
					<ul>
						<li className="nav__item-active">Characters</li>
						/
						<li>Comics</li>
					</ul>
				</nav>
		</header>
	);
}

export default AppHeader;