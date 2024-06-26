import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../../api/auth";
import UserDataRow from "../../../components/row/UserDataRow";



const ManageUsers = () => {
  const { data: users = [],refetch } = useQuery({
    queryKey: ['key'],
    queryFn:async()=>await getAllUsers()
  })
  console.log(users);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead className="text-base font-semibold">
          <tr>
            
            <th>Name</th>
            <th>Image</th>
            <th>Role</th>
            <th>Email</th>
            <th>status</th>
             
          </tr>
        </thead>
        <tbody>
          {
            users && users?.map(user => <UserDataRow
              key={user._id}
              user={user}
              refetch={refetch}
            />)
         }
        </tbody>
      </table>
    </div>
  );
};
export default ManageUsers;