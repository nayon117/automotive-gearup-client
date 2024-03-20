import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import MenuItem from "./MenuItem";

const SellerMenu = () => {
  return (
    <>
      <MenuItem
        icon={IoMdAddCircleOutline}
        label="Add Car"
        address="add-car"
      />
      <MenuItem icon={MdOutlineTipsAndUpdates} label="Update Car" address="update-car" />
    </>
  );
};
export default SellerMenu;
