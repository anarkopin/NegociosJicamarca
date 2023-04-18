import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import CardServicesItem from "./CardServicesItem";

import "./styles.css"

function CardServices() {
    const [collections, setCollections] = useState(
        [
               {
                   category: "Comida Criolla",
                   img: "https://cuponassets.cuponatic-latam.com/backendPe/uploads/imagenes_descuentos/88599/e79715146ce5ea929bf723790b515de24448204f.XL2.jpg" 
                   
               },
               {
                   category: "Cevicherias",
                   img: "https://miro.medium.com/v2/resize:fit:960/1*aiZj4p-aLx2cDIIjYYrVhg.jpeg" 
               },
               {
                   category: "Pollerias",
                   img: "https://repositorio.indecopi.gob.pe/bitstream/handle/11724/9168/NP%20220716%20Foto%20D%C3%ADa%20del%20Pollo%20a%20la%20Brasa%20-%20Poller%C3%ADas%20con%20marcas%20registradas-1.jpg?sequence=1&isAllowed=y" 
               },
               {
                   category: "Pizzerias",
                   img: "https://elcomercio.pe/resizer/V0fRCof38-sGJmzDpgoG4hCx1qc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/J2G55BPPTBGI3EHIMOF4XUSEUI.jpg" 
               },
               {
                   category: "Licorerias",
                   img: "https://gestion.pe/resizer/Dds3dNHYbExvU02URqNAh2fd2DQ=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TUXGSKTFVREP7ETJ2UCXHYV4DA.jpg" 
               },
           
           ]
         );
        
         return (
            <>
              <Swiper
                spaceBetween={15}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className=""
                breakpoints={{
                  // Configuración para pantallas pequeñas
                  640: {
                    slidesPerView: 1,
                  },
                  // Configuración para pantallas medianas
                  768: {
                    slidesPerView: 2,
                  },
                  // Configuración para pantallas grandes
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {collections.map((collection, index) => {
                  return (
                    <SwiperSlide key={index} className="">
                      <CardServicesItem category={collection.category} img={collection.img} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
          );
          
}

export default CardServices;