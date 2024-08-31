/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ImSpinner6 } from "react-icons/im";
import { toast } from "sonner";
import { imageUpload } from "../../utils/utils";
import {
  useGetSingleBikeQuery,
  useUpdateBikeMutation,
} from "../../redux/features/bikes/bikesApi";

type TUpdateBikeProps = {
  my_modal_7: string;
  bikeId: string;
};

const UpdateBike = ({ my_modal_7, bikeId }: TUpdateBikeProps) => {
  const [updateBike, { isLoading }] = useUpdateBikeMutation();
  const { data, isLoading: isFetching } = useGetSingleBikeQuery(bikeId);
  const bikeData = data?.data;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    try {
      const image = formData?.image[0];
      const imageData = image ? await imageUpload(image) : null;

      const bike = {
        name: formData.name,
        description: formData.description,
        pricePerHour: Number(formData.pricePerHour),
        cc: Number(formData.cc),
        year: Number(formData.year),
        model: formData.model,
        brand: formData.brand,
        image: imageData?.data?.display_url || bikeData?.image,
      };

      const bikeInfo = { bike, bikeId };
      const res = await updateBike(bikeInfo);

      if (res?.data?.success) {
        reset();
        toast.success(res?.data?.message);

        // Close the modal by unchecking the checkbox
        const modalCheckbox = document.getElementById(
          my_modal_7
        ) as HTMLInputElement;
        if (modalCheckbox) {
          modalCheckbox.checked = false;
        }
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong", {
        duration: 1000,
      });
      console.error("Error", error);
    }
  };

  return (
    <div >
      <input type="checkbox" id={my_modal_7} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative p-12 bg-[#001E2B]">
          <label
            htmlFor={my_modal_7}
            className="absolute top-0 right-0 p-4 cursor-pointer"
          >
            <AiOutlineCloseCircle size={30} />
          </label>

          {!isFetching && bikeData ? (
            <div className="card card-compact bg-[#162C46]">
              {/* Form content */}
              <div className="hero">
                <div className="hero-content flex flex-col md:flex-row rounded-xl justify-between p-0 md:p-4">
                  {/* form area */}
                  <div className="card flex-shrink-0 shadow-2xl">
                    <div className="card-body w-[290px] md:w-[370px] rounded-md">
                      <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="form-control">
                          <label className="label"></label>
                          <input
                            type="text"
                            defaultValue={bikeData?.name}
                            {...register("name", { required: true })}
                            placeholder="Name"
                            className="input input-bordered bg-[#001E2B]"
                          />
                          {errors.name && (
                            <span className="text-[#006ce1]">
                              Name is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label"></label>
                          <input
                            type="text"
                            defaultValue={bikeData?.description}
                            {...register("description", { required: true })}
                            placeholder="Description"
                            className="input input-bordered bg-[#001E2B]"
                          />
                          {errors.description && (
                            <span className="text-[#006ce1]">
                              Description is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label"></label>
                          <input
                            defaultValue={bikeData?.pricePerHour}
                            type="number"
                            {...register("pricePerHour", { required: true })}
                            placeholder="Price per Hour"
                            className="input input-bordered bg-[#001E2B]"
                          />
                          {errors.pricePerHour && (
                            <span className="text-[#006ce1]">
                              Price per hour is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label"></label>
                          <input
                            type="number"
                            defaultValue={bikeData?.cc}
                            {...register("cc", { required: true })}
                            placeholder="CC"
                            className="input input-bordered bg-[#001E2B]"
                          />
                          {errors.cc && (
                            <span className="text-[#006ce1]">
                              CC is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label"></label>
                          <input
                            type="number"
                            defaultValue={bikeData?.year}
                            {...register("year", { required: true })}
                            placeholder="Year"
                            className="input input-bordered bg-[#001E2B]"
                          />
                          {errors.year && (
                            <span className="text-[#006ce1]">
                              Year is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label"></label>
                          <input
                            type="text"
                            defaultValue={bikeData?.model}
                            {...register("model", { required: true })}
                            placeholder="Model"
                            className="input input-bordered bg-[#001E2B]"
                          />
                          {errors.model && (
                            <span className="text-[#006ce1]">
                              Model is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label"></label>
                          <input
                            type="text"
                            defaultValue={bikeData?.brand}
                            {...register("brand", { required: true })}
                            placeholder="Brand"
                            className="input input-bordered bg-[#001E2B]"
                          />
                          {errors.brand && (
                            <span className="text-[#006ce1]">
                              Brand is required
                            </span>
                          )}
                        </div>

                        <div className="mt-4">
                          <label htmlFor="image" className="block mb-2 text-sm">
                            Select Bike Image:
                          </label>
                          <input
                            {...register("image", { required: false })}
                            type="file"
                            id="image"
                            accept="image/*"
                          />
                          {errors.image && (
                            <span className="text-[#D1A054]">
                              Image is required
                            </span>
                          )}
                        </div>

                        <div className="w-full flex justify-center">
                          <button
                            type="submit"
                            className="btn mt-4 bg-[#61adff] hover:bg-[#006ce1] text-white"
                          >
                            {isLoading ? (
                              <ImSpinner6
                                size={28}
                                className="animate-spin m-auto"
                              />
                            ) : (
                              "Update Now"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateBike;
