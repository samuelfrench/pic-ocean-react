//TODO show each image for a limited time
import React from 'react';

const ImagePanel = ({contentImages, shuffleMs}) => {
  
  const imageElementNodes = contentImages.map(ci => <img src={ci} key={ci} className='content-image' alt='Demo content'/>)
  
  const [imageToDisplayInPanelIdx, setImageToDisplayInPanelIdx] = React.useState(0);

  React.useEffect(() => {
    const oneTimeInterval = setInterval(() => {
      setImageToDisplayInPanelIdx((imageToDisplayInPanelIdx + 1)%contentImages.length)
      return clearInterval(oneTimeInterval)}
      , shuffleMs);
  }, [imageToDisplayInPanelIdx,contentImages,shuffleMs]);

  return imageElementNodes[imageToDisplayInPanelIdx];
}

  

export default ImagePanel