import HamburguerMenu from "./HamburguerMenu";
import Nav from "./Nav";
import './Header.css';

function Header() {
    return (
        <header>
            <div className="site-name">
                <h1>FanCurator</h1>
            </div>

            <div className="header-navigator">
                <Nav />
            </div>
            
            <div className="header-hamburguer-menu">
                <HamburguerMenu />
            </div>            
        </header>
    );
}

export default Header;