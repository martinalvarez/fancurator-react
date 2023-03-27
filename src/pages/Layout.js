import Footer from '../components/Footer';
import Header from '../components/Header';
import './Layout.css';

function Layout({ children }) {
    return (
        <div className="layout-container">
            <Header />

            {children}

            <Footer />
        </div>
    );
}

export default Layout;