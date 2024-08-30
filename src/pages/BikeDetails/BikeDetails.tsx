import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import Booking from "../../components/ui/userManagement/Booking";
import { useGetSingleBikeQuery } from "../../redux/features/bikes/bikesApi";

const BikeDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBikeQuery(id);

  const bikeDetails = data?.data;
  console.log(bikeDetails);

  return (
    <div className="">
      <Container>
        <div className="flex justify-between gap-12 items-center min-h-screen ">
          {/* image are */}
          <div className=" flex-1 shadow-2xl">
            <img
              className="w-full rounded-lg p-1 shadow-2xl"
              src={bikeDetails?.image}
              alt=""
            />
          </div>

          {/* content area */}
          <div className=" flex-1  p-4 space-y-2 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold">{bikeDetails?.name}</h3>
            <h3 className="text-lg font-semibold flex items-center gap-1">
              <span> Price per hour: {bikeDetails?.pricePerHour}</span>
              <FaBangladeshiTakaSign />
            </h3>
            <p>
              {bikeDetails?.description?.length > 500
                ? bikeDetails?.description.substring(0, 500) + "..."
                : bikeDetails?.description}
            </p>
            <p>Model: {bikeDetails?.model}</p>
            <p>Brand: {bikeDetails?.brand}</p>
            <p>CC: {bikeDetails?.cc}</p>
            <p>Year: {bikeDetails?.year}</p>
            <p>
              Availability:{" "}
              {bikeDetails?.isAvailable
                ? "available"
                : "sorry this bike already book"}
            </p>

            {/* Modal Trigger Button */}
            <label
              htmlFor="my_modal_10"
              className="btn  bg-[#61adff] hover:bg-[#006ce1] text-white "
            >
              Book now
            </label>

            <Booking id="my_modal_10" bikeId={`${bikeDetails?._id}`} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BikeDetails;
