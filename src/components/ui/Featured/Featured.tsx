import { Link } from "react-router-dom";
import { useGetAllBikesQuery } from "../../../redux/features/bikes/bikesApi";
import { TBike } from "../../../types";
import Container from "../Container/Container";
import { ImSpinner6 } from "react-icons/im";

const Featured = () => {
  const { data: featureBike, isLoading } = useGetAllBikesQuery([]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ImSpinner6 size={50} className="animate-spin" />
      </div>
    );
  }

  if (!featureBike?.data?.length) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl font-bold">No featured bikes available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {featureBike.data.map((bike: TBike) => (
            <div
              key={bike._id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img className="w-full" src={bike.image} alt={bike.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{bike.name}</h2>
                <p>Model: {bike.model}</p>
                <p>Brand: {bike.brand}</p>
                <div className="card-actions justify-end">
                  <Link to={`/bike-details/${bike._id}`}>
                    <button className="btn mt-4 bg-[#61adff] hover:bg-[#006ce1] text-white">
                      View Detail
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Featured;
