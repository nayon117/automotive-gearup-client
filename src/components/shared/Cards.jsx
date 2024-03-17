/* eslint-disable react/prop-types */

const Cards = ({ item }) => {
  const { image, description, price, name } = item || {};
  
  return (
    <div className=" my-4 bg-white rounded-xl overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Cars" />
      <div className="p-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base whitespace-nowrap">
          {description?.length > 20 ? description.slice(0, 20)+"..." : description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-700 font-semibold">${price}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
