import { useState } from "react";
import { useGetAllBikesQuery } from "../../redux/features/bikes/bikesApi";
import { Link } from "react-router-dom";
import { TBike } from "../../types";

const BikeListing = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  // Convert selected filters to query arguments
  const queryArgs = [];
  if (brand) queryArgs.push({ name: "brand", value: brand });
  if (model) queryArgs.push({ name: "model", value: model });

  const { data } = useGetAllBikesQuery(queryArgs);

  const bikeData = data?.data ?? [];

  const handleClearFilter = () => {
    setBrand("");
    setModel("");
  };

  return (
    <div className="flex gap-12">
      {/* Filter area */}
      <div className=" w-1/3 p-4 shadow-xl rounded-lg min-h-screen">
        <h2 className="text-2xl font-bold text-center py-4">Find Your Bike</h2>

        {/* Filter by brand */}
        <select
          className="select select-bordered w-full max-w-xs mb-4"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="" disabled selected>
            Select Brand
          </option>
          <option value="Yamaha">Yamaha</option>
          <option value="hero">Hero</option>
        </select>

        {/* Filter by model */}
        <select
          className="select select-bordered w-full max-w-xs"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="" disabled selected>
            Select Model
          </option>
          <option value="fzs v3">fzs v3</option>
          <option value="hero x100">hero x100</option>
        </select>

        <button
          onClick={handleClearFilter}
          className="btn mt-4 w-full bg-[#61adff] hover:bg-[#006ce1] text-white  "
        >
          Clear Filter
        </button>
      </div>

      {/* Bike info area */}
      <div className="  w-full p-4 shadow-xl rounded-lg">
        {bikeData?.length > 0 ? (
          bikeData?.map((bike: TBike) => (
            <div key={bike._id} className="mb-4 flex justify-between ">
              <div className=" flex-1 ">
                <img src={bike?.image} alt="" />
              </div>
              <div className=" flex-1 ">
                <h3 className="text-lg font-semibold">{bike.name}</h3>
                <p>
                  {bike.description.length > 40
                    ? bike.description.substring(0, 40) + "..."
                    : bike.description}
                </p>
                <p>Model: {bike.model}</p>
                <p>Brand: {bike.brand}</p>

                <Link to={`/bike-details/${bike?._id}`}>
                  <button className="btn mt-4  bg-[#61adff] hover:bg-[#006ce1] text-white  ">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No bikes found</p>
        )}
      </div>
    </div>
  );
};

export default BikeListing;
