import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import useCart from "../../../hooks/useCart";
import axiosPublic from "../../../api";

const WishList = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const totalFixedPrice = totalPrice.toFixed(2);

  const handleDelete = (id) => {
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
        axiosPublic.delete(`/carts/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
     <div className="flex flex-col md:flex-row items-center justify-between py-6">
     <h2 className="text-base md:text-xl lg:text-2xl mb-3 mt-3  text-center font-semibold">
       Wishlist Cars: {cart?.length}
      </h2>
      <h2 className="text-base md:text-xl lg:text-2xl mb-3 mt-3  text-center font-semibold">
        Total:$ {totalFixedPrice}
      </h2>
     </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-800">
          {/* head */}
          <thead className="bg-gradient-to-r from-second to-first text-white font-alt text-xl">
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Title</th>
              <th className="py-2">Price</th>
              <th className="py-2">Action</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {cart?.map((item, index) => (
              <tr key={item._id} className="p__opensans">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{item.name}</td>
                <td className="py-2">${item.price}</td>
                <td className="py-2">
                  <Link to={`/details/${item.menuId}`}>
                    <button className="btn-style">Pay</button>
                  </Link>
                </td>

                <td className="py-2 text-red-500 font-semibold cursor-pointer">
                  <button onClick={() => handleDelete(item._id)}>
                    <MdDelete className="text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
