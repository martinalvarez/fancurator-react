import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import close from '../assets/close-window.png';
import hamburger from '../assets/hamburger-menu.png';
import './Design.css';

function Design({ children }) {
    const [showMenu, setMenu] = useState(false);

    return (
        <div className="layout-container">
            <header className="layout-header">
                <div className='layout-brand'>
                    <h1>Fan.Curator</h1>
                </div>

                {showMenu ?
                    <div className='layout-hamburguer-links'>
                        <ul>
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
                    null         
                }   

                <div className='layout-hamburguer'>
                    <img
                        alt="menu"
                        className='layout-hamburguer-menu'
                        onClick={() => setMenu(!showMenu)}
                        src={showMenu ? close : hamburger}
                    />                            
                </div>
            </header>

            <div className="layout-main">
                {children}
            </div>            

            <footer className="layout-footer">
                (c) 2023 . Martin Alvarez
            </footer>            
        </div>
    );
}

export default Design;