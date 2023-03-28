import { useState } from 'react'; 
import close from  '../../assets/close-window.png';
import hamburger from '../../assets/hamburger-menu.png';
import Links from './Links';
import './Layout.css';

function Layout({ children }) {
    const [showMenu, setMenu] = useState(false);

    return (
        <div className="layout-container">
            <header className="layout-header">
                <div className='layout-brand'>
                    <h1>Fan.Curator</h1>
                </div>

                <div className='layout-menu'>
                    <Links ulClass="layout-menu-links" />
                </div>

                {showMenu ?
                    <div className='layout-hamburguer-links'>
                        <Links />
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

export default Layout;