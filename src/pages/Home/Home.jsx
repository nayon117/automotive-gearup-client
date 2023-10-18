import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import CarsCard from "../../components/CarsCard";
import Testimonial from "../../components/Testimonial";
import WhyChoose from "../../components/WhyChoose";

const Home = () => {
    const loadedCars = useLoaderData()
    
    console.log(loadedCars);

 
    return (
        <div>
            <Banner></Banner>
            <div>
                <div className="pt-12 text-center text-3xl font-semibold">
                    <h2>Our latest Brands</h2>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
                {
                    loadedCars?.map(car => <CarsCard
                        key={car._id}
                        car={car}
                         
                    ></CarsCard>)
                }
            </div>
            </div>
            <WhyChoose></WhyChoose>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;