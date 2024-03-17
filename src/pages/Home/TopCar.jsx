import  { useEffect, useState } from 'react';
import Cards from '../../components/shared/Cards';

const TopCar = () => {
  const [topCars, setTopCars] = useState([]);

  useEffect(() => {
    const fetchTopCars = async () => {
      try {
        const res = await fetch('http://localhost:5000/cars');
        const data = await res.json();

        // Sort the cars based on price
        const sortedCars = data.sort((a, b) => a.price - b.price);

        // Get the top 6 cars
        const topSixCars = sortedCars.slice(0, 6);
        
        setTopCars(topSixCars);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopCars();
  }, []);

  return (
    <div className="section-container mt-12">
      <div className="text-center space-y-3">
        <h1 className="title">Top Picks</h1>
        <p className="subtitle">Discover the best deals on top-rated cars</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {topCars.map((car) => (
          <Cards key={car._id} item={car} />
        ))}
      </div>
    </div>
  );
};

export default TopCar;
