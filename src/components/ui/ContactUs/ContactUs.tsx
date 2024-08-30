import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImSpinner6 } from "react-icons/im";
import { SiHomeadvisor } from "react-icons/si";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { useCreateContactMessageMutation } from "../../../redux/features/contact/contactApi";
import Map from "../Map/Map";

const ContactUs = () => {
  const location = useLocation();
  const [createContactMessage, { isLoading }] =
    useCreateContactMessageMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const contactData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        message: data.message,
      };

      const res = await createContactMessage(contactData);
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        reset();
      }
    } catch (error) {
      toast.error(error?.message);
      console.log("Error", error);
    }
  };

  return (
    <div className="min-h-screen shadow-sm bg-transparent ">
      <div className="relative   ">
        <h2 className="flex justify-center items-center py-24 text-4xl font-semibold">
          Let's Talk To Us
        </h2>
      </div>
      <div className=" min-h-screen ">
        <div className=" w-full">
          <div className="hero">
            <div className=" flex flex-col md:flex-row  rounded-xl justify-between">
              {/* form area */}
              <div className="  flex-shrink-0 shadow-sm">
                <div className="card-body w-[800px] shadow-2xl rounded-xl p-12">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="form-control ">
                        <label className="label m-0 p-0">Name</label>
                        <div className=" border-b-2 border-0">
                          <input
                            type="text"
                            {...register("name", { required: true })}
                            className=" outline-none bg-transparent w-full"
                          />
                        </div>
                        {errors.name && (
                          <span className="text-red-600">Name is required</span>
                        )}
                      </div>

                      <div className="form-control ">
                        <label className="label m-0 p-0">Phone Number</label>
                        <div className=" border-b-2 border-0">
                          <input
                            type="text"
                            {...register("phone", { required: true })}
                            className=" outline-none bg-transparent w-full"
                          />
                        </div>
                        {errors.phone && (
                          <span className="text-red-600">
                            Phone number is required
                          </span>
                        )}
                      </div>

                      <div className="form-control ">
                        <label className="label m-0 p-0">Email</label>
                        <div className=" border-b-2 border-0">
                          <input
                            type="email"
                            {...register("email", { required: true })}
                            className=" outline-none bg-transparent w-full"
                          />
                        </div>
                        {errors.email && (
                          <span className="text-red-600">
                            Email is required
                          </span>
                        )}
                      </div>

                      <div className="form-control ">
                        <label className="label m-0 p-0">Address</label>
                        <div className=" border-b-2 border-0">
                          <input
                            type="text"
                            {...register("address", { required: true })}
                            className=" outline-none bg-transparent w-full"
                          />
                        </div>
                        {errors.address && (
                          <span className="text-red-600">
                            Address is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="form-control mt-3">
                      <label className="label m-0 p-0">Message</label>
                      <div className=" border-b-2 border-0">
                        <textarea
                          type="text"
                          {...register("message", { required: true })}
                          className=" outline-none bg-transparent w-full "
                        />
                      </div>
                      {errors.address && (
                        <span className="text-red-600">
                          message is required
                        </span>
                      )}
                    </div>

                    <button className="btn mt-4  bg-[#61adff] hover:bg-[#006ce1]  w-full">
                      {isLoading ? (
                        <ImSpinner6 size={28} className="animate-spin m-auto" />
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* contact info */}
          <div className=" flex justify-center items-center mt-24">
            <div className="flex  justify-center items-center gap-12">
              <div className="flex  items-center gap-3">
                <div className="rounded-full bg-[#ff7527] size-10 flex justify-center items-center ">
                  <SiHomeadvisor size={25} />
                </div>
                <p>Mohammadpur, Dhaka-1207, Bangladesh.</p>
              </div>

              <div className="flex  items-center gap-3">
                <div className="rounded-full bg-[#ff7527] size-10 flex justify-center items-center ">
                  <FaPhoneAlt size={20} />
                </div>
                <p>+8801754846487</p>
              </div>

              <div className="flex  items-center gap-3">
                <div className="rounded-full bg-[#ff7527] size-10 flex justify-center items-center ">
                  <HiOutlineMail size={25} />
                </div>
                <p>programareza@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map only visible on "/contact-us" */}
      {location.pathname === "/contact-us" && (
        <div>
          <Map />
        </div>
      )}
    </div>
  );
};

export default ContactUs;
