import React from 'react';

const ImagePanel = ({ contentImages }) => {

  const [simpleCounter, setSimpleCounter] = React.useState(0);
  const [imageCount, setImageCount] = React.useState(0);
  
  const imageElementNodes = contentImages.map(ci => <img src={ci} key={ci} className='content-image' alt='Demo content' />)
  if(imageElementNodes.length !== imageCount){
    setImageCount(imageElementNodes.length)
  }

  React.useEffect(() => {
    setInterval(() => {
      console.log('interval fired');
      setSimpleCounter(i=>i+1);
    }, 3000);
  }, []);

  const imagesToDisplay = [];
  for (let i = 0; i < 5; i++) {
    imagesToDisplay[i] = imageElementNodes[(simpleCounter + i) % imageElementNodes.length];
  }

  return imagesToDisplay;
}



export default ImagePanel