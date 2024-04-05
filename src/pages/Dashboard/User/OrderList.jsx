import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?userEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [user?.email]);
  console.log(orderList);

  return (
    <div>
      <div className="">
        <div className="overflow-x-auto">
          <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
            <thead>
              <tr className="bg-gradient-to-r from-second to-first text-white font-alt text-xl">
                <th className="py-4 px-6 text-lg text-left border-b">
                  Product Image
                </th>
                <th className="py-4 px-6 text-lg text-left border-b">
                  Product Name
                </th>
                <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                orderList.map((order, index) => (
                  <tr key={index} className="bg-gray-100">
                    <td className="py-4 px-6 border-b">
                      <img
                        className="w-20 h-20 object-cover"
                        src={order?.image}
                        alt=""
                      />
                    </td>
                    <td className="py-4 px-6 border-b">{order?.name}</td>
                    <td className="py-4 px-6 border-b">{order?.price}</td>
                    <td className="py-4 px-6 border-b text-end">
                      <button className="bg-red-500 text-white px-4 py-1 rounded-md">
                        Processing
                      </button>
                    </td>
                    <td className="py-4 px-6 border-b text-end">
                      <button className="bg-red-500 text-white px-4 py-1 rounded-md">
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))
              }
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default OrderList;
