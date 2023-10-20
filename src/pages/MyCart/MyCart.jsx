import { useLoaderData } from "react-router-dom";
import CartsCard from "./CartsCard";
import { useEffect, useState } from "react";
 

const MyCart = () => {
    const [carts,setCarts] = useState([])
    const loadedCarts = useLoaderData()
    
    useEffect(() => {
      
        if (loadedCarts) {
            setCarts(loadedCarts)
        }
    },[loadedCarts])
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {carts.length === 0 ? (
            <p className="flex items-center justify-center min-h-[60vh] text-3xl font-semibold">You have not added any cart yet</p>
        ) : (
            carts.map((cart) => (
                <CartsCard
                    key={cart._id}
                    cart={cart}
                    carts={carts}
                    setCarts={setCarts}
                ></CartsCard>
            ))
        )}
    </div>
    );
};

export default MyCart;