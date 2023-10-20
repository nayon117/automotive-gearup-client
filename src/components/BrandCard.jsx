import PropTypes from "prop-types";
import { Link } from "react-router-dom";
 

const BrandCard = ({ car }) => {
  const { _id, name, brand, description, image } = car || {};
  return (
    <div className="my-12">
     
      <div className="relative  flex w-full max-w-[50rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative flex-1 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img src={image} alt="image" className="object-cover w-full h-full" />
        </div>
        <div className="p-6 flex-1">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            {name}
          </h6>

          <h4 className="text-xl font-semibold">{brand}</h4>

          <p className="block py-3 text-base antialiased font-medium leading-relaxed ">
            {description}
          </p>
          <div className="flex items-center gap-5">
            <Link to={`/update/${_id}`}>
            <button className="btn btn-sm btn-neutral">update</button>
            </Link>
            <Link to={`/details/${_id}`}>
              <button className="btn btn-sm btn-neutral">details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandCard.propTypes = {
  car: PropTypes.object,
};

export default BrandCard;
