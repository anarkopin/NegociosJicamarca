import { Link } from "react-router-dom";




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
    return (
        <>
            {categories.map((category) => (
            <li>
                <Link
                    className="text-gray-500 transition hover:text-black"
                    to={`/categorias${category.slug}`}
                >
                    {category.name}
                </Link>
            </li>
            )
            )}
        </>

    )
}

export default NavItems;