import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import axiosPublic from "../../../api";

const ManageCars = () => {
  const [myCar, setMyCar] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://automotive-gearup-server.vercel.app/car-add/requests?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyCar(data));
  }, [user?.email]);

  const handleDeleteClass = (carItem) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/car-add/${carItem._id}`);
        console.log(res.data);
        if (res.data) {
          setMyCar((prevClasses) =>
            prevClasses.filter((item) => item._id !== carItem._id)
          );
          Swal.fire({
            title: "Deleted!",
            text: `${carItem.name}file has been deleted`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead className="text-base">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myCar.map((carItem, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{carItem.name}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img src={carItem.image} />
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <Link to={`/dashboard/update-car/${carItem._id}`}>
                  <button className="text-xl">
                    <FaEdit />
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="text-xl"
                  onClick={() => handleDeleteClass(carItem)}
                >
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ManageCars;
