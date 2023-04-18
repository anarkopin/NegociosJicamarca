import { Link } from "react-router-dom";




function CarItem ({ category, img }) {
    return (
        <Link to="#" className="group relative block overflow-hidden">
            <img
                src={img}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className="relative border border-gray-100 bg-white p-6">
                <form className="mt-4">
                <button
                    className="block w-full rounded text-white bg-[#0D1950] p-4 text-sm font-medium transition hover:scale-105"
                >
                    {category}
                </button>
                </form>
            </div>
            </Link>
    )


}

export default CarItem;


















