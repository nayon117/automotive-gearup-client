import MenuItem from "./MenuItem";
import { FaJediOrder } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";

const UserMenu = () => {
  return (
    <div>
      <MenuItem
        icon={FaJediOrder}
        label="Order List"
        address="/dashboard/order-list"
      />
      <MenuItem
        icon={TbJewishStarFilled}
        label="Wishlist"
        address="/dashboard/wish-list"
      />
    </div>
  );
};
export default UserMenu;
