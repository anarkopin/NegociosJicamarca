import MoreLink from "../MoreLink";
import CarItem from "./CardItem";
import { useState, useEffect } from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";




function CardCollection() {
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Cambia el ancho para adaptarse a tus necesidades
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, index) => (
            <li
              className={`${
                isMobile && index > 2 ? 'hidden' : ''
              }`} // Agrega la clase 'hidden' solo si se cumple la condición de móvil y el índice es mayor que 2
              key={collection.id}
            >
              <CarItem img={collection.img} category={collection.category} />
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-9 w-full text-center text-red-700  transition hover:text-black">
        <Link className="w-10" to="/categorias/restaurantes"> 
            <span className="text-xl transition duration-300 ease-in-out">Ver más<ArrowSmallRightIcon className=" antialiased w-8 inline-block" /></span>
        </Link>
      </div>

    </section>
  );
}

export default CardCollection;