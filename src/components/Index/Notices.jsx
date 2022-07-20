import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import CardNotices from "./CardNotices";

const Notices = () => {
  const [noticias, setNoticias] = useState([]);

  const consultarApi = async () => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=cb61d2ce82164777a4788d00027a262b";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);
    const arraynoticias = resultado.articles.map((noticia) => {
      const objeto = {
        titulo: noticia.title,
        url: noticia.url,
        imagen: noticia.urlToImage,
        descripcion: noticia.description,
      };
      return objeto;
    });
    setNoticias(arraynoticias);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <div className="w-full" id="loultimoennoticias">
      <div className="w-full mt-14">
        <h1 className="text-center text-green-400 text-3xl font-bold">
          Lo ultimo en noticias ...
        </h1>
      </div>
      <div className="w-full px-5 lg:mx-auto lg:w-3/4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{ delay: 2000 }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            530: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {noticias.map((noticia) => (
            <SwiperSlide className="self-center">
              <CardNotices noticia={noticia}></CardNotices>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Notices;
