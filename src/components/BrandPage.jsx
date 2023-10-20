import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
import { useEffect, useState } from "react";
import Slider from "./Slider";
 

const BrandPage = () => {
  const [cars,setCars] = useState([])
  const brandCars = useLoaderData();
   
  useEffect(() => {
    if (brandCars) {
      setCars(brandCars)
    }
  },[brandCars])
   
  return (
    <div>
      {cars.length === 0 ? (
        <p className="flex items-center justify-center text-3xl font-semibold min-h-screen">Products not available</p>
        ) : (
          <div>
           <Slider></Slider>
           
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {cars?.map((car) => (
              <BrandCard key={car._id} car={car}></BrandCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandPage;
