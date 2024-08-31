import { useMemo, useState } from "react";
import { useGetAllBikesQuery } from "../../redux/features/bikes/bikesApi";
import { Link } from "react-router-dom";
import { TBike } from "../../types";
import { ImSpinner6 } from "react-icons/im";

const BikeListing = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  // Convert selected filters to query arguments
  const queryArgs = useMemo(() => {
    const args = [];
    if (brand) args.push({ name: "brand", value: brand });
    if (model) args.push({ name: "model", value: model });
    return args;
  }, [brand, model]);

  const { data } = useGetAllBikesQuery(queryArgs);

  const bikeData = useMemo(() => data?.data ?? [], [data]);

  // Get unique brands and models dynamically
  const uniqueBrands = useMemo(() => {
    return [...new Set(bikeData.map((bike) => bike.brand))];
  }, [bikeData]);

  const uniqueModels = useMemo(() => {
    return [...new Set(bikeData.map((bike) => bike.model))];
  }, [bikeData]);

  const handleClearFilter = () => {
    setBrand("");
    setModel("");
  };

  return (
    <div className="flex gap-4 lg:gap-6 text-white bg-[#162C46]">
      {/* Filter area */}
      <div className="w-1/3 p-4 hidden md:block shadow-xl rounded-lg min-h-screen">
        <h2 className="ml-6 lg:text-2xl font-bold text-center py-4">
          Find Your Bike
        </h2>

        {/* Filter by brand */}
        <select
          className="select select-bordered w-full max-w-xs mb-4 bg-[#001E2B]"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="" disabled>
            Select Brand
          </option>
          {uniqueBrands.map((brandOption) => (
            <option key={brandOption} value={brandOption}>
              {brandOption}
            </option>
          ))}
        </select>

        {/* Filter by model */}
        <select
          className="select select-bordered w-full max-w-xs bg-[#001E2B]"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="" disabled>
            Select Model
          </option>
          {uniqueModels.map((modelOption) => (
            <option key={modelOption} value={modelOption}>
              {modelOption}
            </option>
          ))}
        </select>

        <button
          onClick={handleClearFilter}
          className="btn mt-4 w-full bg-[#61adff] hover:bg-[#006ce1] text-white"
        >
          Clear Filter
        </button>
      </div>

      {/* Bike info area */}
      <div className="w-full p-4 shadow-xl rounded-lg">
        {bikeData.length > 0 ? (
          bikeData.map((bike: TBike) => (
            <div
              key={bike._id}
              className="mb-4 flex flex-col md:flex-row justify-between shadow-2xl p-2 gap-12 lg:gap-6"
            >
              <div className="flex-1">
                <img className="h-full w-full" src={bike.image} alt="" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{bike.name}</h3>
                <p>
                  {bike.description.length > 40
                    ? bike.description.substring(0, 40) + "..."
                    : bike.description}
                </p>
                <p>Model: {bike.model}</p>
                <p>Brand: {bike.brand}</p>

                <Link to={`/bike-details/${bike._id}`}>
                  <button className="btn mt-4 bg-[#61adff] hover:bg-[#006ce1] text-white">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center min-h-screen">
            {data ? (
              <p className="text-xl font-bold">Bike not available</p>
            ) : (
              <ImSpinner6 size={50} className="animate-spin m-auto" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BikeListing;
