import { useState } from "react";

import toast from "react-hot-toast";
import { updateRole } from "../../api/auth";
import UpdateUserModal from "../modal/UpdateUserModal";

const UserDataRow = ({ user, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = async (role) => {
    try {
      const data = await updateRole({ email: user?.email, role });
      console.log(data);
      refetch();
      toast.success("updated user role");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsOpen(false);
    }
  };
  return (
    <tr className="font-semibold">
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.name}</p>
      </td>
      <td className="px-5 py-5  border-b border-gray-200 bg-white text-sm">
        <img
          className="w-10 h-10 rounded-full"
          src={user?.image}
          alt="user"
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.email}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-white leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-first  opacity-80  "
          ></span>
          <span className="relative">Update Role</span>
        </span>
        {/* Modal */}
        <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          user={user}
          modalHandler={modalHandler}
        />
      </td>
    </tr>
  );
};

export default UserDataRow;
