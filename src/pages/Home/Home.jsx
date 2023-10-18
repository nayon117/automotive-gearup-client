import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import CarsCard from "../../components/CarsCard";

const Home = () => {
    const loadedCars = useLoaderData()
    
    console.log(loadedCars);

 
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
                {
                    loadedCars?.map(car => <CarsCard
                        key={car._id}
                        car={car}
                         
                    ></CarsCard>)
                }
            </div>
        </div>
    );
};

export default Home;