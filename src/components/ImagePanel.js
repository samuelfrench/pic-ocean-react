//TODO show each image for a limited time

const ImagePanel = ({contentImages}) => contentImages.map(ci => <img src={ci} key={ci} className='content-image' alt='Demo content'/>);

export default ImagePanel