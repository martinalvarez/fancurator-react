import hamburger from '../assets/hamburger-menu.png';
import close from '../assets/close-window.png';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import './HamburguerMenu.css';

function HamburguerMenu() {
    const [showMenu, setMenu] = useState(false);

    return (
        <>
            {showMenu ?
                <div className='hamburguer-wrapper'>
                    <ul className='hamburguer-links' >
                        <li>
                            <img
                                alt="Close"
                                className='hamburguer-close'
                                onClick={() => setMenu(!showMenu)}
                                src={close}
                            />  
                        </li>                          
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
                </div>            
            :
                <img
                    alt="menu"
                    className='hamburguer-menu'
                    onClick={() => setMenu(!showMenu)}
                    src={hamburger}
                />            
            }
        </>
    );
}

export default HamburguerMenu;