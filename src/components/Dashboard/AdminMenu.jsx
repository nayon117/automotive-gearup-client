import { FaUserCog } from "react-icons/fa";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc"
import { MdFlightClass } from "react-icons/md";
import MenuItem from "./MenuItem";


const AdminMenu = () => {
  return (
    <>
    
    <MenuItem
      icon={VscGitPullRequestGoToChanges }
      label="Seller Request"
      address="/dashboard/seller-request"
    />
    <MenuItem
      icon={FaUserCog}
      label="Manage Users"
      address="/dashboard/manage-users"
    />
    <MenuItem
      icon={MdFlightClass }
      label="All Cars"
      address="/dashboard/all-cars"
    />
  </>
  );
};
export default AdminMenu;