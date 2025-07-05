import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width:"100%",
  objectFit:"cover"
  
};
const Banner = () => {
  const onChange = currentSlide => {
    console.log(currentSlide);
  };
  return (
    <Carousel 
    arrows
    autoplay
    afterChange={onChange}>
      <div>
        <img 
        src='https://images.pexels.com/photos/669502/pexels-photo-669502.jpeg?cs=srgb&dl=pexels-goumbik-669502.jpg&fm=jpg'
        style={contentStyle}/>
      </div>
      <div>
        <img 
        src='https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png'
        style={contentStyle}/>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};
export default Banner