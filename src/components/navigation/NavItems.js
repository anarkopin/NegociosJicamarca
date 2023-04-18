import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';



const categories = [
    {   id: 1,
        name: "Restaurantes",
        slug: "/restaurantes",
    },
    {   id: 2,
        name: "Servicios",
        slug: "/servicios",
    },
    {   id: 3,
        name: "Deportes",
        slug: "/deportes",
    },
    {   id: 4,
        name: "Belleza",
        slug: "/belleza",
    },
    {   id: 5,
        name: "Salud",
        slug: "/salud",
    },
    {   id: 1,
        name: "Mascotas",
        slug: "/mascotas",
    },
    {   id: 6,
        name: "Tecnología",
        slug: "/tecnologia",
    },
    {   id: 7,
        name: "Transporte",
        slug: "/transporte",
    },
    {   id: 8,
        name: "Automotríz",
        slug: "/automotriz",
    },
    {   id: 9,
        name: "Eventos",
        slug: "/eventos",
    },

]


function NavItems() {
    const [active, setActive] = useState([]);
    const location = useLocation(); // obtenemos la ruta actual de la página



    return (
        <>
          {categories.map((category) => {
            const isActive = location.pathname === `/categorias${category.slug}`; // comparamos la ruta actual con la ruta de la categoría

            return (
              <li className={`text-gray-500 transition hover:text-black ${isActive ? "text-red-500 font-semibold" : ""}`} key={category.id}>
                <Link
                  className=""
                  to={`/categorias${category.slug}`}
                >
                  {category.name}
                </Link>
              </li>
            );
          })}
        </>
      );
    }
    
export default NavItems;