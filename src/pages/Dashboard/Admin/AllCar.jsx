import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../../api";

const AllCar = () => {
  const { data: carData = [], refetch } = useQuery({
    queryKey: ["allCar"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/cars/all/requests");
      return data;
    },
  });

  const approveClass = async (id) => {
    try {
      const { data } = await axiosPublic.put(`/cars/approve/${id}`);
      console.log(data);
      if (data.status === "approved") {
        await refetch();
        toast.success("Car approved successfully");
      }
    } catch (error) {
      console.error("Error approving class:", error);
    }
  };

  // delete
  const deleteClass = async (id) => {
    try {
      const { data } = await axiosPublic.delete(`/cars/delete/${id}`);

      if (data) {
        await refetch();
        toast.success("Car deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting class:", error);
      toast.error("Failed to delete car");
    }
  };

  // Reverse the order of courseData
  const reversedCarData = [...carData].reverse();

  return (
    <div className="mt-16">
      <div className="overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-300">
          {/* head */}
          <thead className="bg-gradient-to-r from-first to-second text-white font-alt text-xl ">
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Title</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Action</th>
              <th className="py-2">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {reversedCarData.map((carItem, index) => (
              <tr
                key={index}
                className="p__opensans"
                // className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-3 font-medium">{index + 1}</td>
                <td className="py-3 font-medium">{carItem.brand}</td>
                <td className="py-3 font-medium">{carItem.name}</td>
                <td className="py-3 font-medium">{carItem.email}</td>
                <td className="py-3">
                  <button
                    onClick={() => approveClass(carItem._id)}
                    className="btn-style  rounded-2xl hover:text-first hover:bg-white font-medium"
                  >
                    {carItem.status}
                  </button>
                </td>
                <td className="py-3 font-medium">
                  <button onClick={() => deleteClass(carItem._id)}>
                    <MdDeleteForever className=" text-red-500 text-2xl rounded-2xl" />
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

export default AllCar;
