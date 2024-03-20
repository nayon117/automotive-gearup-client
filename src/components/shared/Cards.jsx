/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  const {_id, image, description, price, name } = item || {};

  return (
    <div data-aos="fade-up"
    data-aos-duration="1000" className=" my-4 bg-white rounded-xl overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Cars" />
      <div className="p-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base whitespace-nowrap">
          {description?.length > 20
            ? description.slice(0, 20) + "..."
            : description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-700 font-semibold">${price}</p>
          <Link to={`/details/${_id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
