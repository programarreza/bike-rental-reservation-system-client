import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImSpinner6 } from "react-icons/im";
import { SiHomeadvisor } from "react-icons/si";
import { toast } from "sonner";
import { useCreateContactMessageMutation } from "../../../redux/features/contact/contactApi";

const ContactUs = () => {
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
    <div className="min-h-screen shadow-2xl bg-transparent ">
      <div className="relative  min-h-[40vh] ">
        <h2 className="flex justify-center items-center pt-24 text-4xl font-semibold">
          Let's Talk To Us
        </h2>
      </div>
      <div className=" min-h-screen ">
        <div className=" -mt-14 absolute w-full">
          <div className="hero">
            <div className=" flex flex-col md:flex-row  rounded-xl justify-between">
              {/* form area */}
              <div className="  flex-shrink-0 shadow-2xl">
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
          <div className=" flex justify-center items-center mt-14">
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

          <h2 className="text-5xl font-semibold flex items-center justify-center mt-20">
            Find Us Here
          </h2>
        </div>
      </div>

      {/* map */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.842524506133!2d90.36778332230463!3d23.76800882178184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1fc30a25999%3A0xa09246455a007f98!2sPrime%20Minister&#39;s%20Residence%20(Ganabhaban)!5e0!3m2!1sen!2sbd!4v1724612033736!5m2!1sen!2sbd"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
