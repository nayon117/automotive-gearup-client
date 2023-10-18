
const Testimonial = () => {
    return (
        <div>
        <div className="lg:px-20 md:px-6 px-4 py-12">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold text-center text-gray-800">Hear from our customers</h1>
                <p className="text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 ">Discover what our satisfied customers have to say about their experiences. Read real stories of trust, satisfaction, and exceptional service in the world of automotives.</p>
            </div>
            <div className="w-full lg:flex items-center gap-6 mt-10">
                <div className="lg:w-1/2">
                    <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
                        <div>
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg" alt="commas" />
                        </div>
                        <p className="text-base leading-6 text-gray-600 mt-4">I have been a long-time visitor of this website for car news and reviews. The quality of information and user-friendly design keeps me coming back. Its my go-to source for anything automotive</p>
                        <div className="absolute bottom-0 -mb-4 ml-10">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg" alt="sharp" />
                        </div>
                    </div>
                    <div className="flex items-center mt-7">
                        <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                            <img src="https://i.ibb.co/R6WQhYj/Mask-Group.png" className="w-10 h-10 rounded-full" alt="profile" />
                        </div>
                        <div className="flex flex-col items-start ml-4">
                            <p className="text-base font-semibold leading-4 text-gray-800">Alisha Cooper</p>
                            <p className="text-base leading-4 mt-2 text-center text-gray-600">Happy Car Buyer</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:mt-0 mt-16">
                    <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
                        <div>
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg" alt="commas" />
                        </div>
                        <p className="text-base leading-6 text-gray-600 mt-4">I recently purchased a car from this website, and I couldnt be happier with my choice. The process was smooth, and I found the perfect vehicle. Thank you for making my car-buying experience so easy!</p>
                        <div className="absolute bottom-0 -mb-4 ml-10">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg" alt="sharp" />
                        </div>
                    </div>
                    <div className="flex items-center mt-7">
                        <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                            <img src="https://i.ibb.co/C6bwf12/Mask-Group.png" className="w-10 h-10 rounded-full" alt="profile" />
                        </div>
                        <div className="flex flex-col items-start ml-4">
                            <p className="text-base font-semibold leading-4 text-gray-800">Henry Jack</p>
                            <p className="text-base leading-4 mt-2 text-center text-gray-600">Loyal Automotive Enthusiast</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Testimonial;