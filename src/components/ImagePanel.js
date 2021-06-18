import React from 'react';

const ImagePanel = ({contentImages, shuffleMs}) => {
  
  const imageElementNodes = contentImages.map(ci => <img src={ci} key={ci} className='content-image' alt='Demo content'/>)
  
  const [imageToDisplayInPanelIdx, setImageToDisplayInPanelIdx] = React.useState(0);
  const [imagesToDisplay,setImagesToDisplay] = React.useState(0);
  
  React.useEffect(() => {
    const oneTimeInterval = setInterval(() => {
      setImageToDisplayInPanelIdx((imageToDisplayInPanelIdx + 1)%imageElementNodes.length)

      const imagesToDisplay = [];
      for(let i = 0; i < 5; i++){
        imagesToDisplay[i] = imageElementNodes[(imageToDisplayInPanelIdx + i)%imageElementNodes.length];
      }
      
      setImagesToDisplay(imagesToDisplay);

      return clearInterval(oneTimeInterval)}
      , shuffleMs);
  }, [imageToDisplayInPanelIdx,imageElementNodes,shuffleMs]);


  return imagesToDisplay;
}

  

export default ImagePanel