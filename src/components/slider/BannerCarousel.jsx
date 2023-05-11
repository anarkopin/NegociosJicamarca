import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import whatsapp from "../../assets/img/whatsapp.png";
import { PhoneIcon } from '@heroicons/react/24/outline';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard  } from "swiper";
import { Link } from "react-router-dom";


const slides = [
  {
    "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
    "title": "Avatar: The Way of Water",
    "subTitle": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    "interval": 1500,
    "principal": false
  },
  {
    "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    "title": "Black Adam",
    "subTitle": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    "interval": 500,
    "principal": false
  },
  {
    "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    "title": "Black Panther: Wakanda Forever",
    "subTitle": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "interval": 2500,
    "principal": false
  },
  {
    "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    "title": "Black Panther: Wakanda Forever",
    "subTitle": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "interval": 2500,
    "principal": true
  }
]


export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        scrollbar={{ draggable: true  }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        loop={true}
      >
        {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
            {
              slide.principal ? (
                <>
                <img src={slide.image} alt={slide.title}/>
                <div className="flex flex-col absolute text-left w-full  p-20 whitespace-pre-line gap-3">
                  <span className="antialiased text-3xl lg:text-6xl font-bold text-white">Encuentra de todo en Jicamarca</span>
                  <p className=" lg:text-3xl text-white font-mono">Conéctate con negocios de todos los rubros</p>
                  <div className="">
                    <button className="hover:bg-transparent bg-[#0D1950] text-white font-semibold hover:text-white py-2 px-4 border border-[#0D1950]  rounded z-10">
                      <PhoneIcon className="w-8  inline-block" /> Escríbenos al whatsapp
                    </button>
                  </div>
                </div>
                </>
              ) : (
                <>
                <img src={slide.image} alt={slide.title}/>
                <div className="flex flex-col absolute text-left w-full  p-20 whitespace-pre-line gap-3">
                  <span className="antialiased text-3xl lg:text-6xl font-bold text-white">Somos más que 

                  una pagina web</span>
                  <p className=" lg:text-3xl text-white font-mono">{"Impulsamos los negocios de Jicamarca con publicidad efectiva"}</p>
                  <div>
                    <button className="hover:bg-transparent bg-red-700 text-white font-semibold hover:text-white py-2 px-4 border border-red-700  rounded z-10">
                      Conócenos
                    </button>
                  </div>
                </div>
                </>
              )

            }
        </SwiperSlide>        
      ))}
      </Swiper>
    </>
  );
}
