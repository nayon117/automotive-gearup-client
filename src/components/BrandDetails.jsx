import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {
    const details = useLoaderData()
    const {name,brand,type,price,description,rating,image} = details || {}
    return (
        <div>
            <img className="rounded-md" src={image} alt="" />
            <div className="space-y-2 my-2 text-lg font-medium">
            <h2>Name: { name}</h2>
            <h2>Brand: { brand}</h2>
            <h2>Type: { type}</h2>
            <h2>Price: {price}</h2>
            <h2>Rating: { rating}</h2>
            <h2>Description: {description}</h2>
           </div>
             <button className="btn btn-neutral">Add to cart</button>
        </div>
    );
};

export default BrandDetails;