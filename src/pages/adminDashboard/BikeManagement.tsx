import Swal from "sweetalert2";
import {
  useDeleteBikeMutation,
  useGetAllBikesQuery,
} from "../../redux/features/bikes/bikesApi";
import CreateBike from "./CreateBike";
import UpdateBike from "./UpdateBike";
import { useMemo, useState } from "react";
import { TBike } from "../../types";
import { ImSpinner6 } from "react-icons/im"; // Import the spinner icon

const BikeManagement = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [deleteBike] = useDeleteBikeMutation();

  const queryArgs = [];
  if (brand) queryArgs.push({ name: "brand", value: brand });
  if (model) queryArgs.push({ name: "model", value: model });

  const { data, isLoading } = useGetAllBikesQuery(queryArgs);
  const bikeData = data?.data;

    // Get unique brands and models dynamically
    const uniqueBrands = useMemo(() => {
      return [...new Set(bikeData?.map((bike) => bike.brand))];
    }, [bikeData]);
  
    const uniqueModels = useMemo(() => {
      return [...new Set(bikeData?.map((bike) => bike.model))];
    }, [bikeData]);

  const handleDeleteBike = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBike(id);
        Swal.fire({
          title: "Deleted!",
          text: "The bike has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="bg-[#162C46] min-h-screen text-white">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ImSpinner6 size={50} className="animate-spin m-auto" />
        </div>
      ) : !bikeData || bikeData.length === 0 ? (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl font-bold">Bike not available</p>
        </div>
      ) : (
        <div className="mx-4 pt-8">
          <div className="flex justify-between">
            {/* Filter area */}
             {/* Filter by brand */}
             <select
              className="select select-bordered w-full max-w-xs mb-4 bg-[#001E2B]"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="" disabled selected>
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
              <option value="" disabled selected>
                Select Model
              </option>
              {uniqueModels.map((modelOption) => (
                <option key={modelOption} value={modelOption}>
                  {modelOption}
                </option>
              ))}
            </select>


            <div>
              {/* Modal Trigger Button */}
              <label
                htmlFor="my_modal_6"
                className="btn bg-[#61adff] hover:bg-[#006ce1] text-white"
              >
                Add New Bike
              </label>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#001E2B] text-white">
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
                {bikeData?.map((bike: TBike) => {
                  const modalId = `modal_${bike._id}`; // Unique ID for each bike
                  return (
                    <tr key={bike._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={bike?.image} alt={bike?.name} />
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
                        {/* Modal Trigger Button */}
                        <label
                          htmlFor={modalId}
                          className="btn border-non btn-xs"
                        >
                          Update
                        </label>
                      </th>
                      <th>
                        <button
                          onClick={() => handleDeleteBike(bike?._id)}
                          className="btn border-non btn-xs"
                        >
                          Delete
                        </button>
                      </th>
                      {/* UpdateBike Modal */}
                      <UpdateBike my_modal_7={modalId} bikeId={bike._id} />
                      <CreateBike my_modal_6="my_modal_6" />
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default BikeManagement;
