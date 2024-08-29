import { useEffect, useState } from "react";
import { useMyRentQuery } from "../../redux/features/rent/rentApi";
import moment from "moment";

const MyRentals = () => {
  const [isPaidTab, setIsPaidTab] = useState(true);
  const { data, refetch } = useMyRentQuery(isPaidTab.toString());
  const myRent = data?.data;

  // Refetch data whenever the isPaidTab state changes
  useEffect(() => {
    refetch();
  }, [isPaidTab, refetch]);

  return (
    <div>
      <div className="border border-red-500 mt-6 flex gap-4">
        <button className={`btn `} onClick={() => setIsPaidTab(false)}>
          Unpaid Tab
        </button>
        <button className={`btn `} onClick={() => setIsPaidTab(true)}>
          Paid Tab
        </button>
      </div>
      {!myRent || myRent.length === 0 ? (
        <h2 className="flex justify-center items-center h-screen text-2xl">
          Not found Rent
        </h2>
      ) : (
        <div className="mx-4 mt-8">
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-[#FAFAFA]">
                <tr className="uppercase font-bold">
                  <th>Bike image</th>
                  <th>Bike name</th>
                  <th>start time</th>
                  <th>return time</th>
                  <th>total cost</th>
                  <th>advanced</th>
                  <th>transactionId</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {myRent?.map((rent) => (
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
                    <td>
                      {/* Include action buttons or additional functionality here if needed */}
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

export default MyRentals;
