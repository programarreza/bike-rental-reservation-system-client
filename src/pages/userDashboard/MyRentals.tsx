import { useEffect, useState } from "react";
import {
  useCreatePaymentMutation,
  useMyRentQuery,
} from "../../redux/features/rent/rentApi";
import moment from "moment";
import { ImSpinner6 } from "react-icons/im";
import { TRent } from "../../types";

const MyRentals = () => {
  const [isPaidTab, setIsPaidTab] = useState(false);
  const { data, refetch, isLoading } = useMyRentQuery(isPaidTab.toString());
  const [createPayment] = useCreatePaymentMutation();
  const myRent = data?.data;

  // Refetch data whenever the isPaidTab state changes
  useEffect(() => {
    refetch();
  }, [isPaidTab, refetch]);

  const handlePayment = async (transactionId: string) => {
    const tranInfo = {
      transactionId,
    };

    const res = await createPayment(tranInfo);

    if (res?.data?.data) {
      window.location.replace(res?.data?.data);
      console.log(res?.data?.data);
    }
  };

  return (
    <div className="bg-[#162C46] text-white min-h-screen">
      <div className="mx-4 ">
        {!myRent || myRent.length === 0 ? (
          <div className="flex justify-center items-center min-h-screen">
            {data ? (
              <p className="text-xl font-bold">Bike not available</p>
            ) : (
              <ImSpinner6 size={50} className="animate-spin m-auto" />
            )}
          </div>
        ) : (
          <div>
            <div className="pl-12 xl:pl-0 py-6 flex gap-4">
              <button
                className={`btn bg-[#61adff] text-white ${
                  !isPaidTab ? "bg-[#006ce1]" : ""
                }`}
                onClick={() => setIsPaidTab(false)}
              >
                Unpaid Tab
              </button>
              <button
                className={`btn bg-[#61adff] text-white ${
                  isPaidTab ? "bg-[#006ce1]" : ""
                }`}
                onClick={() => setIsPaidTab(true)}
              >
                Paid Tab
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="bg-[#001E2B] text-white">
                  <tr className="uppercase font-bold">
                    <th>Bike image</th>
                    <th>Bike name</th>
                    <th>start time</th>
                    <th>return time</th>
                    <th>total cost</th>
                    <th>advanced</th>
                    <th>transactionId</th>
                    {!isPaidTab ? <th>action</th> : null}
                  </tr>
                </thead>
                <tbody>
                  {myRent?.map((rent: TRent) => (
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
                      <td className="font-bold">
                        {rent?.bikeId?.name || "N/A"}
                      </td>
                      <td>
                        {moment(new Date(rent?.startTime)).format(
                          "dddd, Do MMMM YYYY, h:mm:ss a"
                        ) || "N/A"}
                      </td>
                      <td>
                        {rent?.returnTime &&
                        new Date(rent.returnTime).getTime() !== 0
                          ? moment(new Date(rent.returnTime)).format(
                              "dddd, Do MMMM YYYY, h:mm:ss a"
                            )
                          : "N/A"}
                      </td>
                      <td>
                        {rent?.totalCost !== undefined ? rent.totalCost : "N/A"}
                      </td>
                      <td>
                        {rent?.advanced !== undefined ? rent.advanced : "N/A"}
                      </td>
                      <td>{rent?.transactionId || "N/A"}</td>
                      {!isPaidTab && rent?.totalCost > 0 ? (
                        <td>
                          <button
                            onClick={() => handlePayment(rent?.transactionId)}
                            className="btn w-24 bg-[#61adff] hover:bg-[#006ce1] text-white"
                          >
                            {isLoading ? (
                              <ImSpinner6
                                size={28}
                                className="animate-spin m-auto"
                              />
                            ) : (
                              "Pay Now"
                            )}
                          </button>
                        </td>
                      ) : (
                        !isPaidTab && (
                          <td>
                            <button disabled className="btn w-24">
                              Pay Now
                            </button>
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRentals;
