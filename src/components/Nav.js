import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul className='nav-links'>
                <li>
                    <Link to="/">Home</Link>
                </li>                
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>Videos</li>
                <li>Articles</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Nav;