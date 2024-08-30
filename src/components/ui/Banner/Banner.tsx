import { useState } from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  return (
    <div>
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className=" border min-h-screen flex justify-center items-center text-center">
          <div>
            <h2
              style={{ backdropFilter: "blur(10px)" }}
              className="text-white text-2xl md:text-4xl rounded-xl  px-2 mb-4"
            >
              Ride Into Adventure - Affordable <br /> Bike Rentals Available
              Now!
            </h2>
            <input
              style={{ backdropFilter: "blur(80px)" }}
              className="border text-white bg-transparent py-3 min-w-96 text-center rounded-lg border-[#D1A054] outline-[#D1A054]"
              type="text"
              placeholder="Search by the availability of bike"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
