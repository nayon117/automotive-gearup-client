import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const BrandPage = () => {
  const brandCars = useLoaderData();
   
  return (
    <div>
      {brandCars.length === 0 ? (
        <p>No data found</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {brandCars.map((car) => (
              <BrandCard key={car._id} car={car}></BrandCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandPage;
