import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const BrandPage = () => {
  const brandCars = useLoaderData();
   
   
  return (
    <div>
      {brandCars.length === 0 ? (
        <p className="flex items-center justify-center text-3xl font-semibold min-h-screen">Products not available</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {brandCars?.map((car) => (
              <BrandCard key={car._id} car={car}></BrandCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandPage;
