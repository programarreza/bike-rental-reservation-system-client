import { useGetAllBikesQuery } from "../../../redux/features/bikes/bikesApi";
import { TBike } from "../../../types";
import Container from "../Container/Container";

const Featured = () => {
  const { data: featureBike } = useGetAllBikesQuery(undefined);

  return (
    <div className="min-h-screen pt-12">
      <Container>
        <div className="grid grid-cols-3 gap-8">
          {featureBike?.data?.map((bike: TBike) => (
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img className="w-full" src={bike?.image} alt={bike?.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{bike?.name}</h2>
                <p>model: {bike.model}</p>
                <p>brand: {bike.brand}</p>
                <div className="card-actions justify-end">
                  <button className="btn mt-4  bg-[#61adff] hover:bg-[#006ce1] text-white  ">
                    View Detail
                  </button>
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
