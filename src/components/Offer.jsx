import { AiFillCar } from "react-icons/ai";
import { motion } from "framer-motion"
import { fadeIn } from "../variants";
const Offer = () => {
    return (
        <div className="mt-20 mb-6">
            <motion.div
                 variants={fadeIn("up", 0.3)}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{once:false, amount:0.7}}
            >
                <h2 className="text-3xl font-semibold text-center">What we offer</h2>
            </motion.div>
            <div className="flex flex-col md:flex-row items-center gap-8 py-10">
                {/* img */}
                <motion.div
                     variants={fadeIn("up", 0.4)}
                     initial="hidden"
                     whileInView={'show'}
                     viewport={{once:false, amount:0.7}}
                    className="flex-1">
                    <img className="rounded-md" src="https://i.ibb.co/K5d9smF/offer-img.webp" alt="car image" />
                </motion.div>
                {/* content  */}
                <motion.div
                     variants={fadeIn("up", 0.4)}
                     initial="hidden"
                     whileInView={'show'}
                     viewport={{once:false, amount:0.7}}
                    className="flex-1 space-y-6">
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
                </motion.div>
            </div>
        </div>
    );
};

export default Offer;