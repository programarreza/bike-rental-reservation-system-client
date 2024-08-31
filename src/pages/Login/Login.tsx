import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImSpinner6 } from "react-icons/im";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";

const Login = () => {
  const [isShow, setIsShow] = useState(true);
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userData);

      const user = verifyToken(res?.data?.token);

      dispatch(setUser({ user: user, token: res?.data?.token }));
      console.log(35, res?.data?.token)

      if (res?.data?.success) {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex bg-cover bg-center ">
        <div className="hero">
          <div className="hero-content flex flex-col md:flex-row  rounded-xl justify-between">
            {/* form area */}
            <div className="card w-1/1  flex-shrink-0 shadow-2xl">
              <div className="card-body w-[380px] md:w-[450px] md:px-16 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                  <h2 className="text-center text-3xl font-bold mt-5">Login</h2>

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
                      className="input input-bordered relative"
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
                    {errors.password?.type === "pattern" && (
                      <p className="text-[#006ce1]">
                        Password must have one upper case one lower carse, one
                        number and one special character
                      </p>
                    )}
                    <p
                      onClick={() => setIsShow(!isShow)}
                      className="text-xl absolute cursor-pointer mt-7 ml-[290px]"
                    >
                      {isShow ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
                    </p>

                    <button
                      type="submit"
                      className="btn mt-4  bg-[#61adff] hover:bg-[#006ce1] text-white  "
                    >
                      {isLoading ? (
                        <ImSpinner6 size={28} className="animate-spin m-auto" />
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>
                </form>
                <div className="form-control ">
                  <p className=" text-center mt-2">
                    Are you new user?{" "}
                    <Link to={"/register"}>
                      <span className="font-semibold text-[#006ce1]">
                        Register Now
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
