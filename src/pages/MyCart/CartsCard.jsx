import PropTypes from "prop-types";
import Swal from "sweetalert2";

const CartsCard = ({ cart, carts, setCarts }) => {
  const { _id, name, brand, description, image } = cart || {};

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
              const remaining = carts.filter((cas) => cas._id !== _id);
              setCarts(remaining);
            }
          });
      }
    });
  };

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
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-neutral"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartsCard.propTypes = {
  cart: PropTypes.object,
  carts: PropTypes.array,
  setCarts: PropTypes.func,
};

export default CartsCard;
