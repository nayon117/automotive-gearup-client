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
    
    return(
        <div>
             <p> Working on this page </p>
        </div>
    )
}
export default OrderList;