import PropTypes from 'prop-types';

const CartsCard = ({ cart }) => {
    const {  name, brand, description, image } = cart || {};
 
    console.log(cart);
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
               
                <button className="btn btn-sm btn-neutral">delete</button>
             
            </div>
          </div>
        </div>
      </div>
    );
};

CartsCard.propTypes = {
    cart:PropTypes.object
};

export default CartsCard;