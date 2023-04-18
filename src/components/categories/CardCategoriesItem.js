import { Link } from "react-router-dom";



function CardCategoriesItem({ name, slug, description, img }){
    return (
       
        <section
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                className="overflow-hidden w-full md:w-5/12"
            >
             <Link className="no-underline" to={`/categorias${slug}`}>
            <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-left ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-xl font-bold text-white sm:text-2xl md:text-4xl">
                    {name}
                </h2>

                <p
                    className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
                >
                    {description}
                </p>

                <div className="mt-4 sm:mt-8">
                    <span
                    className="inline-block rounded-full bg-red-700 px-10 py-3 text-sm font-medium text-white transition hover:bg-[#0D1950] focus:outline-none focus:ring focus:ring-[#0D1950]"
                    >
                    Ver más
                    </span>
                </div>
                </div>
            </div>
            </Link>
            </section>


        
    )

}

export default CardCategoriesItem;





