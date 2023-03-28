import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './PhotoThumbnail.css';

function PhotoThumbnail({ video }) {
    const navigate = useNavigate();
    const src = `https://i.ytimg.com/vi/${video.videoId}/hq720.jpg`;
    const width = 1280 / 4;
    const height = 720 / 4;

    const [showCard, setShowCard] = useState(false);

    function handleMouseLeave() {
        setShowCard(false);
    }    

    function handleMouseOver() {
        setShowCard(true);
    }

    function handleOnClick() {
        navigate(`/video/${video.videoId}`);
    }

    return (
        <div className='photo-thumbnail-wrapper'>
            <div
                className="photo-thumbnail"
                onClick={handleOnClick}
            >    
                <img
                    alt="Video"
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}                   
                    src={src} 
                    width={width}
                    height={height}
                />
            </div>

            <div className='photo-thumbnail-wrap'>
                <div
                    className={`photo-thumbnail-hover ${showCard ? 'photo-thumbnail-hover-active' : ''}`}
                    onClick={handleOnClick}
                >    
                    <img
                        alt="Descripción"
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}                   
                        src={src} 
                        width={width * 1.2}
                        height={height * 1.2}
                    />
                    <div className='detail'>Recital * Audio Excelente * 1987</div>
                </div>        
            </div>
        </div>
    );
}

export default PhotoThumbnail;