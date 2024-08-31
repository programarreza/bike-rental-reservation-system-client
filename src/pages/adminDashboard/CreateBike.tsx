/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ImSpinner6 } from "react-icons/im";
import { useAddBikeMutation } from "../../redux/features/bikes/bikesApi";
import { toast } from "sonner";
import { imageUpload } from "../../utils/utils";

const CreateBike = ({ my_modal_6 }: { my_modal_6: string }) => {
  const [addBike, { isLoading }] = useAddBikeMutation();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const image = data?.image[0];
      const imageData = await imageUpload(image);

      const bikeData = {
        name: data.name,
        description: data.description,
        pricePerHour: Number(data.pricePerHour),
        cc: Number(data.cc),
        year: Number(data.year),
        model: data.model,
        brand: data.brand,
        image: imageData?.data?.display_url,
      };

      const res = await addBike(bikeData);

      if (res?.data?.success) {
        reset();
        toast.success(res?.data?.message);
        // Close the modal by unchecking the checkbox
        const modalCheckbox = document.getElementById(
          my_modal_6
        ) as HTMLInputElement;
        if (modalCheckbox) {
          modalCheckbox.checked = false;
        }
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong", {
        duration: 1000,
      });
      console.log("Error", error);
    }
  };

  return (
    <div className="">
      <input type="checkbox" id={my_modal_6} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative p-12 bg-[#001E2B]">
          <label
            htmlFor={my_modal_6}
            className="absolute top-0 right-0 p-4 cursor-pointer"
          >
            <AiOutlineCloseCircle size={30} />
          </label>

          <div className="card card-compact bg-[#162C46]">
            {/* Form content */}
            <div className="hero">
              <div className="hero-content flex flex-col md:flex-row  rounded-xl justify-between">
                {/* form area */}
                <div className="card flex-shrink-0 shadow-2xl">
                  <div className="card-body w-[300px] md:w-[370px]  rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                      <div className="form-control">
                        <label className="label"></label>
                        <input
                          type="text"
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
                          {...register("description", { required: true })}
                          placeholder="description"
                          className="input input-bordered bg-[#001E2B] "
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
                          type="number"
                          {...register("pricePerHour", { required: true })}
                          placeholder="pricePerHour"
                          className="input input-bordered bg-[#001E2B] "
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
                          {...register("cc", { required: true })}
                          placeholder="cc"
                          className="input input-bordered bg-[#001E2B] "
                        />
                        {errors.cc && (
                          <span className="text-[#006ce1]">
                            Cc per hour is required
                          </span>
                        )}
                      </div>
                      <div className="form-control">
                        <label className="label"></label>
                        <input
                          type="number"
                          {...register("year", { required: true })}
                          placeholder="year"
                          className="input input-bordered bg-[#001E2B] "
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
                          {...register("model", { required: true })}
                          placeholder="model"
                          className="input input-bordered bg-[#001E2B] "
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
                          {...register("brand", { required: true })}
                          placeholder="brand"
                          className="input input-bordered bg-[#001E2B] "
                        />
                        {errors.brand && (
                          <span className="text-[#006ce1]">
                            Brand is required
                          </span>
                        )}
                      </div>

                      <div>
                        <label htmlFor="image" className="block mb-2 text-sm">
                          Select Bike Image:
                        </label>
                        <input
                          {...register("image", { required: true })}
                          required
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
                          className="btn mt-4  bg-[#61adff] hover:bg-[#006ce1] text-white  "
                        >
                          {isLoading ? (
                            <ImSpinner6
                              size={28}
                              className="animate-spin m-auto"
                            />
                          ) : (
                            "Submit Now"
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBike;
