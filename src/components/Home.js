import Header from "./Header";

import Footer from "./Footer";
import VideoThumnailGrid from './VideoThumnailGrid';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <Header />
            
            

            <h2>Main</h2>

            <VideoThumnailGrid />

            <Footer />
        </div>
    );

}

export default Home;
