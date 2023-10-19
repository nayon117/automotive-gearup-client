import { useLoaderData } from "react-router-dom";
import CartsCard from "./CartsCard";

const MyCart = () => {
    const loadedCarts = useLoaderData()
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                loadedCarts?.map(cart => <CartsCard
                    key={cart._id}
                    cart={cart}
                ></CartsCard>)
             }
        </div>
    );
};

export default MyCart;