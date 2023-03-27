import './VideoThumbnail.css';

function VideoThumbnail({ video }) {
    return (
        <div className='video'>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>        
        </div>
    );
}

export default VideoThumbnail;