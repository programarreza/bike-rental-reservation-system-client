import { FaDollarSign, FaBicycle, FaHeadset, FaClock } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="border-t shadow-sm py-16 min-h-[80vh] flex justify-center items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold  mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <FaDollarSign size={50} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold ">Best Prices</h3>
            <p className=" mt-2">
              Enjoy competitive pricing with no hidden fees.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaBicycle size={50} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold ">
              Wide Selection
            </h3>
            <p className=" mt-2">
              Choose from a variety of bikes for all your needs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaHeadset size={50} className="text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold ">
              Excellent Customer Service
            </h3>
            <p className=" mt-2">
              We are here to assist you 24/7 with any inquiries.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock size={50} className="text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold ">
              Flexible Hours
            </h3>
            <p className=" mt-2">
              Rent a bike at any time that suits your schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
