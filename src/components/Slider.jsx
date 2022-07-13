import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, EffectFade, EffectFlip, EffectCoverflow } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";

//importo las imagenes
import imagen1 from '../images/slider_1.jpg';
import imagen2 from '../images/slider_2.jpg';
import imagen3 from '../images/slider_3.jpg';
import imagen4 from '../images/slider_4.jpg';

import React from "react";


const getEffects = () => {
    var numero_aleatorio = parseInt(Math.random() * (5 - 1) + 1);
    switch (numero_aleatorio) {
        case 1:
                return 'flip';
            break;
        case 2:
                return 'cube';
            break;
        case 3:
                return 'coverflow';
            break;
        case 4:
                return 'fade';
            break;
    }
};

const Slider = () => {

  return (
    <Swiper effect={getEffects()} spaceBetween={0} slidesPerView={1} loop={true} autoplay={{delay: 2000}} modules={[Autoplay, EffectCube, EffectFade, EffectFlip, EffectCoverflow]} className="mt-14">
      <SwiperSlide>
        <img src={imagen1} className="w-full h-96"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={imagen2} className="w-full h-96"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={imagen3} className="w-full h-96"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={imagen4} className="w-full h-96"/>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
