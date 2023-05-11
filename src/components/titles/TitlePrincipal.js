import { Link } from "react-router-dom";



function TitlePrincipal({ title, subtitle, slug }) {

    return (
        <>
            <div className="flex flex-row justify-between items-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex flex-col text-3xl font-medium">
                    <span className="text-[#0D1950] ">{title}</span>
                    <span className="text-red-700">{subtitle}</span>
                </div>
                <Link to={`/categorias/${slug}`} className="bg-[#0D1950] p-1 w-2/12 rounded-md inline-flex justify-center items-center gap-2 ">
                    <span className="text-white text-md font-medium">Ver todo</span>
                    <svg
                        className="h-5 w-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                        </svg>
                </Link>
            
            </div>
        </>
    )

}

export default TitlePrincipal;















