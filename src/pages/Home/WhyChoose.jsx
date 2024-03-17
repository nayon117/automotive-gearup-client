import { TbBrandBandlab } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BiDollar } from "react-icons/bi";

const WhyChoose = () => {
  return (
    <div className="my-12">
      <section className="relative block  py-10 md:py-20 md:px-10  border-t border-b section-container">
        <div className="relative section-container text-center">
          <span className="title">
            Why choose us
          </span>
          <p className="subtitle mt-3">
            We provide top-tier service and seamless experiences, making your
            automotive journey truly exceptional.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md border border-neutral-800   p-8 text-center shadow">
            <TbBrandBandlab className="text-3xl mx-auto"></TbBrandBandlab>
            <h3 className="mt-6 text-gray-800">Wide range of brands</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-600">
              Discover a diverse collection of top automotive brands, providing
              options to suit every taste and requirement
            </p>
          </div>

          <div className="rounded-md border border-neutral-800  p-8 text-center shadow">
            <VscWorkspaceTrusted className="text-3xl mx-auto"></VscWorkspaceTrusted>
            <h3 className="mt-6 text-gray-800">Trusted by our clients</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-600">
              Our commitment to excellence has earned us the trust and loyalty
              of our valued clients.
            </p>
          </div>

          <div className="rounded-md border border-neutral-800  p-8 text-center shadow">
            <BiDollar className="text-3xl mx-auto"></BiDollar>
            <h3 className="mt-6 text-gray-800">Fast & easy financing</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-600">
              Experience the convenience of our fast and easy car financing
              solutions. Get behind the wheel of your dream car in no time.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"></div>
        <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"></div>
      </section>
    </div>
  );
};

export default WhyChoose;
