import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>Videos</li>
                <li>Articles</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Nav;