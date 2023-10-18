import { AiFillCar } from "react-icons/ai";
const Offer = () => {
    return (
        <div className="my-20">
            <div>
                <h2 className="text-3xl font-semibold text-center">What we offer</h2>
            </div>
            <div className="flex items-center gap-8 py-10">
                {/* img */}
                <div className="flex-1">
                    <img className="rounded-md" src="https://i.ibb.co/K5d9smF/offer-img.webp" alt="car image" />
                </div>
                {/* content  */}
                <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-3">
                        <div>
                            <AiFillCar className="text-5xl"></AiFillCar>
                       </div>
                        <div className="space-y-2">
                            <p className="text-xl font-bold">Pre-Sale Preparation</p>
                            <p>We are able to offer financing rates that many other car dealers cant offer.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <AiFillCar className="text-5xl"></AiFillCar>
                       </div>
                        <div className="space-y-2">
                            <p className="text-xl font-bold">Financing</p>
                            <p>We are able to offer financing rates that many other car dealers cant offer.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <AiFillCar className="text-5xl"></AiFillCar>
                       </div>
                        <div className="space-y-2">
                            <p className="text-xl font-bold">Trade-In Service</p>
                            <p>Our service allows you to purchase a new car at an attractive price, while saving you all the trouble of handling your old car</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;