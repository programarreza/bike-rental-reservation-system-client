import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImSpinner6 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useSignUpMutation } from "../../redux/features/auth/authApi";
import { imageUpload } from "../../utils/utils";

const Register = () => {
  const [isShow, setIsShow] = useState(true);
  const [signUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const image = data?.image[0];

      const imageData = await imageUpload(image);

      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        address: data.address,
        image: imageData?.data?.display_url,
      };

      const res = await signUp(userInfo);
      console.log(res);

      if (res?.data?.success) {
        toast.success(res?.data?.message);
        navigate("/login");
      }

      if (res?.error?.status == 409) {
        toast.error(error?.data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.error?.message);
    }
  };

  return (
    <div>
      <div className="w-full min-h-screen flex bg-cover bg-center ">
        <div className="hero">
          <div className="hero-content flex flex-col md:flex-row  rounded-xl justify-between">
            <div className="card w-1/1  flex-shrink-0 shadow-2xl">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body w-[380px] md:w-[450px] md:px-16 rounded-md"
              >
                <h2 className="text-center text-3xl font-bold mt-5">
                  Register Now
                </h2>

                <div className="form-control">
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Full Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-[#D1A054]">Name is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("phone", { required: true })}
                    placeholder="Phone Number"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-[#D1A054]">
                      Phone number is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    {...register("address", { required: true })}
                    placeholder="Address"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-[#D1A054]">Name is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered "
                  />
                  {errors.email && (
                    <span className="text-[#006ce1]">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type={isShow ? "password" : "text"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
                    placeholder="Password"
                    className="input input-bordered  relative"
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-[#006ce1]">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-[#006ce1]">
                      Password must be 6 Character
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-[#006ce1]">
                      Password must be less den 20 Character
                    </p>
                  )}

                  <p
                    onClick={() => setIsShow(!isShow)}
                    className="text-xl absolute cursor-pointer mt-7 ml-[290px]"
                  >
                    {isShow ? (
                      <FaEyeSlash size={25} />
                    ) : (
                      <FaEye size={25} />
                    )}
                  </p>
                </div>

                <div>
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Select Profile Image:
                  </label>
                  <input
                    {...register("image", { required: true })}
                    required
                    type="file"
                    id="image"
                    accept="image/*"
                  />
                  {errors.image && (
                    <span className="text-[#D1A054]">Image is required</span>
                  )}
                </div>

                <div className="form-control mt-2">
                  <button
                    type="submit"
                    className="btn mr-5 bg-[#61adff] hover:bg-[#006ce1] text-white  "
                  >
                    {isLoading ? (
                      <ImSpinner6 size={28} className="animate-spin m-auto" />
                    ) : (
                      "Register Now"
                    )}
                  </button>
                  <p className=" text-center mt-2">
                    Already have Account ?
                    <Link to={"/login"}>
                      <span className="font-semibold text-[#006ce1]">
                        Login Now
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
