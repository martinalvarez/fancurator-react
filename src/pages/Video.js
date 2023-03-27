import { useParams } from 'react-router-dom';
import Layout from './Layout';
import './Video.css';

function Video() {
    const params = useParams();
    const { videoId } = params;

    return (
        <Layout>
            <div className='video-container'>
                <div className='video'>
                    <iframe
                        width="100%"
                        height="100%"    
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>        
                </div>

                <div className='video-detail'>
                    <h1>Detail</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ex massa. Phasellus lobortis eros in diam placerat, quis auctor nisi fermentum. Etiam vulputate turpis neque, quis vestibulum dui congue ut. Pellentesque varius at erat vitae suscipit. Curabitur dolor nisl, dignissim ac ante non, tempor feugiat lorem. Aenean finibus arcu sem, et posuere ligula sagittis ac. Donec gravida est in est commodo, nec scelerisque enim accumsan. Pellentesque a mi erat. Donec porta suscipit nisi, at sodales ante placerat ut. Ut id nulla non libero pretium fermentum sed eget lacus. Donec pulvinar mollis lorem ac iaculis. Cras ornare magna nec tortor pharetra, egestas rutrum turpis aliquet. Nunc faucibus ipsum sit amet justo imperdiet, sit amet rhoncus metus fermentum. Donec vitae arcu ac nunc blandit dapibus. Etiam at eleifend metus.

                        Cras eu dignissim erat, ultricies finibus nisl. Nullam laoreet, libero id faucibus maximus, ex ligula porttitor elit, vel gravida felis felis sit amet augue. In semper eros felis, condimentum porttitor nunc dapibus sit amet. Nunc efficitur lacus diam, luctus pellentesque augue lobortis non. Duis aliquam imperdiet nisl quis malesuada. Sed convallis, metus at placerat facilisis, nisi ex congue nunc, eu iaculis ipsum magna at felis. Nulla malesuada ligula eget luctus gravida. Curabitur venenatis mauris sit amet luctus interdum. Fusce bibendum enim eget consequat blandit. Morbi finibus volutpat orci, vel tincidunt dui faucibus at. Sed elementum auctor tellus ut pellentesque. Sed dignissim aliquet volutpat. Nullam dapibus sapien id ligula venenatis, ut pharetra mi sagittis. Suspendisse potenti. Vestibulum porta elit id fermentum semper. Maecenas luctus turpis non mi sollicitudin, ut sodales sem ornare.

                        Aliquam mauris ipsum, ultricies eu ultricies ornare, pharetra eu ex. Nam nec tincidunt augue, eget iaculis odio. Sed semper enim in eros interdum, vitae tincidunt ex efficitur. Aliquam erat volutpat. Proin massa nulla, luctus quis lacus vitae, vulputate aliquam arcu. Nulla rhoncus tristique velit quis auctor. Proin pharetra risus et quam pretium gravida.

                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam tristique sit amet nunc ut aliquet. Ut tristique hendrerit tellus, non posuere elit. Donec lorem erat, dictum eget leo quis, sagittis mollis mauris. Donec interdum, neque ac tincidunt tempor, mauris justo scelerisque velit, vel pellentesque nisi nisi ac felis. Integer vel nisl ut massa rhoncus ultrices a sit amet nisi. Mauris ac tincidunt dui, ut molestie augue. Ut tempus neque ut tellus imperdiet rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque accumsan sem at ipsum finibus hendrerit. Nulla facilisi. Sed pretium condimentum neque, in pretium quam lacinia sed. Nam nec mi vel libero dictum ornare eu consequat sem. Ut luctus dictum elit id euismod. Aliquam erat volutpat.

                        Praesent semper neque a rhoncus viverra. Maecenas et scelerisque nunc. Etiam porttitor magna vestibulum, mattis velit id, scelerisque tortor. Nunc tristique varius commodo. Praesent arcu arcu, finibus sed dictum quis, tincidunt at felis. Duis nisi diam, laoreet a ipsum nec, elementum iaculis erat. Nullam eu eros rhoncus, facilisis elit mollis, interdum orci. Morbi volutpat sapien eleifend venenatis scelerisque. Fusce tempor diam non convallis laoreet. In mi erat, viverra condimentum ex eu, gravida iaculis enim.                        
                    </p>
                </div>
            </div>
        </Layout>        
    );
}

export default Video;