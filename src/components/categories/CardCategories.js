import CardCategoriesItem from "./CardCategoriesItem";

const categories = [
    {
        id: 1,
        name: "Deportes",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi doloribus iure architecto quae voluptatum beatae excepturi dolores.",
        slug: "/deportes",
        img: "https://static.wixstatic.com/media/ed0ed1_6fd8fdfe3a3141b6ae28ea8ed4f0a686~mv2.jpg/v1/fill/w_611,h_407,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_5402-web.jpg"
    },
    {
        id: 2,
        name: "Psicología",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi doloribus iure architecto quae voluptatum beatae excepturi dolores.",
        slug: "/psicologia",
        img: "https://static.wixstatic.com/media/ed0ed1_d76dd19ad2614cbabbf0d05e13fd3e22~mv2.jpg/v1/fill/w_523,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/psicologa-escribiendo-su-cuaderno_edited.jpg"
    },
    {
        id: 3,
        name: "Eventos",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi doloribus iure architecto quae voluptatum beatae excepturi dolores.",
        slug: "/eventos",
        img: "https://static.wixstatic.com/media/ed0ed1_05da57530c0242c8bac1ca9c86d8d2c0~mv2.jpg/v1/crop/x_85,y_987,w_1715,h_725/fill/w_681,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3901.jpg"
    }
]

function CardCategories(){

    return (
        <div className="flex justify-center items-center flex-col md:flex-row ">
            {
                categories.map((category) => (
                    <CardCategoriesItem key={category.id} name={category.name} slug={category.slug} description={category.description} img={category.img} />
                ))
            }
        </div>
    )

}

export default CardCategories;





