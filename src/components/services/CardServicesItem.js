import { Link } from "react-router-dom";




function CardServicesItem ({ category, img }) {
    return (
      <div className="h-[350px] w-[400px]"> 
      <Link to="#" className="group relative overflow-hidden">
      
        <div className="relative border border-gray-100 bg-white p-6">
          <button
            className="block w-full rounded text-white bg-red-700 p-4 text-sm font-medium transition hover:scale-105"
          >
            {category}
          </button>
        </div>
        <img
          src={img}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 "
        />
      </Link>
    </div>
    )


}

export default CardServicesItem;

