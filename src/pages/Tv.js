
import tv from '../assets/tv-80s.jpg';
import './Tv.css';

function Tv() {
    return (
        <div className='tv-wrapper'>
            <div className="tv-background">
                <img
                    src={tv}
                    width="1024px"
                    height="768px"
                />    
            </div>

            <div className='tv-video'>
                <iframe
                    width="560"
                    height="315" 
                    src={`https://www.youtube.com/embed/ty9FgvkgsW8`}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>        
            </div>          
        </div>
    );
}

export default Tv;