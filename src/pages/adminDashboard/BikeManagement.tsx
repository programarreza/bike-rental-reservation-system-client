import { useGetAllBikesQuery } from "../../redux/features/bikes/bikesApi";
import CreateBike from "./CreateBike";

const BikeManagement = () => {
  const { data } = useGetAllBikesQuery(undefined);
  const bikeData = data?.data;

  return (
    <div>
      {!bikeData || bikeData?.length === 0 ? (
        <h2 className="flex justify-center items-center h-screen text-2xl">
          Not Available bikeData{" "}
        </h2>
      ) : (
        <div className="ml-4">
          <div className="flex justify-between"> 
            <div>
              filter area
            </div>
            <div>
              {/* Modal Trigger Button */}
              <label htmlFor="my_modal_6" className="btn btn-primary">
                Add New Bike
              </label>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#FAFAFA]">
                <tr className="uppercase font-bold">
                  <th>Image</th>
                  <th>name</th>
                  <th>description</th>
                  <th>cc</th>
                  <th>year</th>
                  <th>brand</th>
                  <th>model</th>
                  <th>action</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {bikeData?.map((bike) => (
                  <tr key={bike._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={bike?.image} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-bold">{bike?.name}</td>
                    <td>
                      <div className="">
                        {bike?.description.length > 30
                          ? bike?.description.substring(0, 30) + "..."
                          : bike?.description}
                      </div>
                    </td>

                    <td>{bike?.cc}</td>
                    <td>{bike?.year}</td>
                    <td>{bike?.brand}</td>
                    <td>{bike?.model}</td>

                    <th>
                      <button className="btn border-non btn-xs">Update</button>
                    </th>
                    <th>
                      <button className="btn border-non btn-xs">Delete</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* CreateBike Modal */}
      <CreateBike my_modal_6="my_modal_6" />
    </div>
  );
};

export default BikeManagement;
