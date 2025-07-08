import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: "100%",
  objectFit: "cover"

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
          src='https://pbs.twimg.com/profile_images/673097740444950528/PmvTBd-L.jpg'
          style={contentStyle} />
      </div>
      <div>
        <img
          src='https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png'
          style={contentStyle} />
      </div>
      <div>
        <img
          src='https://th.bing.com/th/id/R.3175dc540dfe6b9e4ac00517086e4700?rik=N5QK4nhTaaewfA&riu=http%3a%2f%2fwww.forestwander.com%2fwp-content%2foriginal%2f2011_02%2fbeautiful-pink-flower.jpg&ehk=odzj%2bukR0ES%2bVffERmcJ08qxlxnGZlOdQfyrBzhZj3A%3d&risl=&pid=ImgRaw&r=0'
          style={contentStyle} />
      </div>
      <div>
        <img
          src='https://static.vecteezy.com/system/resources/previews/022/267/874/large_2x/rose-flower-pictures-beautiful-roses-love-rose-flower-beautiful-flowers-wallpapers-ai-generated-free-photo.jpg'
          style={contentStyle} />
      </div>
      <div>
        <img
          src='https://tse1.mm.bing.net/th/id/OIP.pwW6RYhfPvwhVeYdQl6siwAAAA?r=0&w=438&h=873&rs=1&pid=ImgDetMain&o=7&rm=3https://tse1.mm.bing.net/th/id/OIP.pwW6RYhfPvwhVeYdQl6siwAAAA?r=0&w=438&h=873&rs=1&pid=ImgDetMain&o=7&rm=3'
          style={contentStyle} />
      </div>
      <div>
        <img
          src='https://tse4.mm.bing.net/th/id/OIP.tcLLoMHdalQkLjmHQQHsxwHaE0?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
          style={contentStyle} />
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