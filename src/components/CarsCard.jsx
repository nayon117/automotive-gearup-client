import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CarsCard = ({ car }) => {
  const { brand, image } = car || {};
  return (
    <Link to={`/cars/${brand}`}>
      <div className="card card-compact   bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="cars" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto ">Brand: {brand}</h2>
      </div>
    </div>
    </Link>
  );
};

CarsCard.propTypes = {
  car: PropTypes.object,
};

export default CarsCard;
