import Nav from "./Nav";
import './Header.css';
import HamburguerMenu from "./HamburguerMenu";


function Header() {
    return (
        <header>
            <div>
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