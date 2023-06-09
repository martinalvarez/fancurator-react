import PhotoThumbnail from "./PhotoThumbnail";
import './PhotoCarousel.css';

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
    {
        videoId: 'LDQgj23tIJw',
    },    
    {
        videoId: 'fUauc_38Fxs',
    },    
    {
        videoId: 'WV2aKtsNQ50',
    },    
    {
        videoId: 't0I9ygFbFHo',
    },    
    {
        videoId: '0FQ3Ucml458',
    },    
];

function PhotoCarousel() {
    return (
        <div
            className="photo-carousel"
        >
            {videos.map((video) => 
                <PhotoThumbnail key={video.videoId} video={video} />
            )}
        </div>
    );
}

export default PhotoCarousel;