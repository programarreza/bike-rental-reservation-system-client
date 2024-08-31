import moment from "moment";
import {
  useAddReturnBikeMutation,
  useGetReturnRentQuery,
} from "../../redux/features/rent/rentApi";
import { toast } from "sonner";
import { TRent } from "../../types";
import { ImSpinner6 } from "react-icons/im"; // Import the spinner icon

const ReturnBike = () => {
  const { data, isLoading } = useGetReturnRentQuery(undefined);
  const [addReturnBike] = useAddReturnBikeMutation();

  const returnData = data?.data;

  const handleReturnBike = async (id: string) => {
    const res = await addReturnBike(id);

    if (res?.data?.success) {
      toast.success(res?.data?.message);
    }
  };

  return (
    <div className="text-white bg-[#162C46] min-h-screen pt-6 xl:pt-0">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ImSpinner6 size={50} className="animate-spin m-auto" />
        </div>
      ) : !returnData || returnData.length === 0 ? (
        <h2 className="flex justify-center items-center h-screen text-2xl">
          No Rent Data Found
        </h2>
      ) : (
        <div className="mx-4 pt-8">
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-[#001E2B] text-white">
                <tr className="uppercase font-bold">
                  <th>Bike image</th>
                  <th>Bike name</th>
                  <th>User name</th>
                  <th>start time</th>
                  <th>advanced</th>
                  <th>transactionId</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {returnData?.map((rent: TRent) => (
                  <tr key={rent._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={rent?.bikeId?.image || "N/A"}
                              alt={rent?.bikeId?.name || "No Image"}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-bold">{rent?.bikeId?.name || "N/A"}</td>
                    <td className="font-bold">{rent?.userId?.name || "N/A"}</td>
                    <td>
                      {moment(new Date(rent?.startTime)).format(
                        "dddd, Do MMMM YYYY, h:mm:ss a"
                      ) || "N/A"}
                    </td>
                    <td>
                      {rent?.advanced !== undefined ? rent.advanced : "N/A"}
                    </td>
                    <td>{rent?.transactionId || "N/A"}</td>
                    <td>
                      <button
                        onClick={() => handleReturnBike(rent?._id)}
                        className="btn border-non btn-sm"
                      >
                        Calculate
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReturnBike;
