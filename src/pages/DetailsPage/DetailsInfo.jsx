import { useEffect, useState } from "react";
import Loader from "../../components/shared/Loader";
// import { useLocation, useNavigate } from "react-router-dom";
import DetailModal from "../../components/modal/DetailModal";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axiosPublic from "../../api";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const DetailsInfo = ({ detailInfo }) => {
  const {_id, image, price, description, name } = detailInfo || {};

  const [isOpen, setIsOpen] = useState(false);
  const [itemInfo, setItemInfo] = useState(null);

  const { user } =  useAuth()
  const navigate = useNavigate();
  const [,refetch] = useCart()


  const closeModal = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    console.log("user:", user);
    console.log("detailInfo:", detailInfo);
  
    if (user && detailInfo) {
      const newInfo = {
        userName: user.displayName || "",
        userEmail: user.email || "",
        userImage: user.photoURL || "",
        name: detailInfo?.name || "",
        price: detailInfo?.price || "",
        image: detailInfo?.image || "",
        description: detailInfo?.description || "",
        carId: detailInfo?._id || "",
      };
      setItemInfo(newInfo);
    }
    window.scrollTo(0, 0);
  }, [user, detailInfo]);
  

  if (!itemInfo) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const handleAddToCart =()=> {
   
    if (user && user.email) {
      // send to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        description,
        price
      }
      axiosPublic.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data  ) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart successfully`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch cart to update the cart items count 
            refetch()
          }
      })
    }
    else {
      Swal.fire({
        title: "You are not logged in?",
        text: "Please log in to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log In!"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to login page
          navigate('/login',{state:{from:location}})
        }
      });
    }
  }

  return (
    <div className="section-container my-6 ">
      <div>
        <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
              <img
                src={image}
                alt="Product"
                className="w-4/5 rounded object-cover"
              />
              <hr className="border-white border-2 my-6" />
              <div className="flex flex-wrap items-center gap-y-6 justify-evenly mx-auto mr-12">
                <img
                  src={image}
                  alt="Product1"
                  className="w-24 cursor-pointer"
                />
                <img
                  src={image}
                  alt="Product2"
                  className="w-24 cursor-pointer"
                />
                <img
                  src={image}
                  alt="Product3"
                  className="w-24 cursor-pointer"
                />
              </div>
              <div className="lg:col-span-2 mt-8">
               
                {/* Add to Cart button */}
                <button onClick={handleAddToCart} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
                {/* Payment button */}
                <button
                  className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => setIsOpen(true)}
                >
                  Proceed to Payment
                </button>
                <DetailModal
                  isOpen={isOpen}
                  itemInfo={itemInfo}
                  closeModal={closeModal}
                ></DetailModal>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-800">{name}</h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-gray-800 text-xl font-bold">${price}</p>
                <p className="text-gray-400 text-xl">
                  {" "}
                  <span className="text-sm ml-1">Tax included</span>
                </p>
              </div>
              <div className="flex space-x-2 mt-4">
                <svg
                  className="w-5 fill-gray-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-gray-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-gray-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-gray-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800">
                  About the car
                </h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                  <li>{description}</li>
                </ul>
              </div>
              <div className="mt-8 max-w-md">
                <h3 className="text-lg font-bold text-gray-800">Reviews(10)</h3>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">5.0</p>
                    <svg
                      className="w-5 fill-gray-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-2/3 h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">4.0</p>
                    <svg
                      className="w-5 fill-gray-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-1/3 h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">3.0</p>
                    <svg
                      className="w-5 fill-gray-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-1/6 h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">2.0</p>
                    <svg
                      className="w-5 fill-gray-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-1/12 h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">1.0</p>
                    <svg
                      className="w-5 fill-gray-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-[6%] h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                  </div>
                </div>
                <div className="flex items-start mt-8">
                  <img
                    src="https://readymadeui.com/team-2.webp"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold">John Doe</h4>
                    <div className="flex space-x-1 mt-1">
                      <svg
                        className="w-4 fill-gray-800"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-gray-800"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-gray-800"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <p className="text-xs !ml-2 font-semibold">2 mins ago</p>
                    </div>
                    <p className="text-xs mt-4">
                      The service was amazing. I never had to wait that long for
                      my food. The staff was friendly and attentive, and the
                      delivery was impressively prompt.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded"
                >
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsInfo;
