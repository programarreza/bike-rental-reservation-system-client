import Swal from "sweetalert2";
import {
  useDeleteBikeMutation,
  useGetAllBikesQuery,
} from "../../redux/features/bikes/bikesApi";
import CreateBike from "./CreateBike";
import UpdateBike from "./UpdateBike";
import { useState } from "react";

const BikeManagement = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [deleteBike] = useDeleteBikeMutation();

  const queryArgs = [];
  if (brand) queryArgs.push({ name: "brand", value: brand });
  if (model) queryArgs.push({ name: "model", value: model });

  const { data } = useGetAllBikesQuery(queryArgs);
  const bikeData = data?.data;

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
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      {!bikeData || bikeData?.length === 0 ? (
        <h2 className="flex justify-center items-center h-screen text-2xl">
          Not Available bikeData{" "}
        </h2>
      ) : (
        <div className="mx-4 mt-8">
          <div className="flex justify-between">
            {/* Filter area */}
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

            <div>
              {/* Modal Trigger Button */}
              <label
                htmlFor="my_modal_6"
                className="btn  bg-[#61adff] hover:bg-[#006ce1] text-white "
              >
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
                {bikeData?.map((bike) => {
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
