import VideoThumbnail from "./VideoThumbnail";
import './VideoThumbnailGrid.css';

const videos = [
    {
        videoId: 'PVKF3vApBfo',
    },
    {
        videoId: 'J8ArEhg3JR0',
    },    
    {
        videoId: '5hyCyXO8hiQ',
    },    
    {
        videoId: '_kkWwUBxFCM',
    },    
    {
        videoId: '01Zk-hpiqSo',
    },    
    {
        videoId: '4oL-mdPQEtM',
    },    
    {
        videoId: 'ty9FgvkgsW8',
    },    
];

function VideoThumbnailGrid() {
    return (
        <div className="videos-grid-container">
            {videos.map((video) => 
                <VideoThumbnail key={video.videoId} video={video} />
            )}
        </div>
    );
}

export default VideoThumbnailGrid;