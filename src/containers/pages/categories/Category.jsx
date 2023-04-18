import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"
import Navbar from "../../../components/navigation/Navbar";
import IndexLayout from "../../../hocs/layouts/IndexLayout";


function Category() {
    const category = useParams();

    console.log(category)

    return (
        <>
            <IndexLayout >
            <Helmet>
                <meta name="description" content="Encuentra los mejores negocios en Jicamarca. Ofrecemos una amplia gama de productos y servicios que satisfacen las necesidades de la comunidad. ¡Visítanos!" />
                <title>{`${category.category.charAt(0).toUpperCase()}${category.category.slice(1)}`} | Lo que necesitas de Jicamarca a un click</title>
                <meta name="keywords" content='negocios en Jicamarca, productos en Jicamarca, servicios en Jicamarca' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.jicamarcanegocios.com/" />
                <meta name="author" content='Jicamarca Negocios' />
                <meta name="publisher" content='Jicamarca Negocios' />

                {/* Social Media Tags */}
                <meta property="og:title" content='Jicamarca Negocios | Lo que necesitas de Jicamarca a un click' />
                <meta property="og:description" content='Encuentra los mejores negocios en Jicamarca. Ofrecemos una amplia gama de productos y servicios que satisfacen las necesidades de la comunidad. ¡Visítanos!' />
                <meta property="og:url" content="https://www.jicamarcanegocios.com/" />
                <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

                <meta name="twitter:title" content={`Jicamarca Negocios ${category.category} | Lo que necesitas de Jicamarca a un click`} />
                <meta
                    name="twitter:description"
                    content='Encuentra los mejores negocios en Jicamarca. Ofrecemos una amplia gama de productos y servicios que satisfacen las necesidades de la comunidad. ¡Visítanos!'
                />
                <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div>
                <h1>{category.category}</h1>
            </div>
            </IndexLayout>
        </>
        
    )

}

export default Category;