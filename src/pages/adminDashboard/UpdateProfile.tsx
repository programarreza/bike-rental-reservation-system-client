import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ImSpinner6 } from "react-icons/im";
import { toast } from "sonner";
import { imageUpload } from "../../utils/utils";
import {
  useGetMeQuery,
  useUpdateMeMutation,
} from "../../redux/features/user/userApi";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const UpdateProfile = ({ my_modal_8 }) => {
  const currentUser = useAppSelector(selectCurrentUser);
  const { data: userData, isLoading: isFetching } = useGetMeQuery(
    currentUser?.email
  );
  const user = userData?.data;

  const [updateMe, { isLoading }] = useUpdateMeMutation();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    console.log(formData);
    try {
      const image = formData?.image[0];
      const imageData = image ? await imageUpload(image) : null;

      const profile = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        image: imageData?.data?.display_url || user?.image,
      };

      const res = await updateMe(profile);

      if (res?.data?.success) {
        reset();
        toast.success(res?.data?.message);

        // Close the modal by unchecking the checkbox
        const modalCheckbox = document.getElementById(my_modal_8);
        if (modalCheckbox) {
          modalCheckbox.checked = false;
        }
      }
    } catch (error) {
      toast.error(error?.data?.message || "Something went wrong", {
        duration: 1000,
      });
      console.error("Error", error);
    }
  };

  return (
    <div className="text-black">
      <input type="checkbox" id={my_modal_8} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative p-12">
          <label
            htmlFor={my_modal_8}
            className="absolute top-0 right-0 p-4 cursor-pointer"
          >
            <AiOutlineCloseCircle size={30} />
          </label>

          {!isFetching && user ? (
            <div className="card card-compact">
              <h2 className=" text-center text-xl font-bold">
                Update your profile
              </h2>
              {/* Form content */}
              <div className="hero">
                <div className="hero-content flex flex-col md:flex-row rounded-xl justify-between">
                  {/* form area */}
                  <div className="card flex-shrink-0 shadow-2xl">
                    <div className="card-body w-[300px] md:w-[390px] rounded-md">
                      <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="form-control">
                          <input
                            type="text"
                            defaultValue={user?.name}
                            {...register("name", { required: false })}
                            placeholder="Full Name"
                            className="input input-bordered"
                          />
                          {errors.name && (
                            <span className="text-[#D1A054]">
                              Name is required
                            </span>
                          )}
                        </div>

                        {/* <div className="form-control">
                        <label className="label"></label>
                        <input
                          type="email"
                          defaultValue={user?.email}
                          {...register("email", { required: true })}
                          placeholder="Email"
                          className="input input-bordered "
                        />
                        {errors.email && (
                          <span className="text-[#006ce1]">
                            Email is required
                          </span>
                        )}
                      </div> */}

                        <div className="form-control">
                          <label className="label"></label>
                          <input
                            type="text"
                            defaultValue={user?.phone}
                            {...register("phone", { required: false })}
                            placeholder="Phone Number"
                            className="input input-bordered"
                          />
                          {errors.phone && (
                            <span className="text-[#D1A054]">
                              Phone number is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label"></label>
                          <input
                            type="text"
                            defaultValue={user?.address}
                            {...register("address", { required: false })}
                            placeholder="Address"
                            className="input input-bordered"
                          />
                          {errors.address && (
                            <span className="text-[#D1A054]">
                              Address is required
                            </span>
                          )}
                        </div>

                        <div>
                          <label htmlFor="image" className="block mb-2 text-sm">
                            Select Profile Image:
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

export default UpdateProfile;
