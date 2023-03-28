import { Link } from 'react-router-dom';

function Links({ ulClass }) {
    return (
        <ul className={ulClass ? ulClass : ''}>
            <li>
                <Link to="/">Home</Link>
            </li>                
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                Videos
            </li>
            <li>
                Articles
            </li>
            <li>
                Contact
            </li>
        </ul>
    );
}

export default Links;