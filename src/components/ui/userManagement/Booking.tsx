import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateRentMutation } from "../../../redux/features/rent/rentApi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Booking = ({ id, bikeId }) => {
  const { register, handleSubmit, reset } = useForm();
  const [createRent, { isLoading }] = useCreateRentMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const rentData = {
        bikeId,
        startTime: data.startTime,
        advanced: 100,
      };
      const res = await createRent(rentData);

      if (res?.data?.data) {
        reset();
        window.location.replace(res?.data?.data);
        console.log(res?.data?.data);
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
        <label
            htmlFor={id}
            className="absolute top-0 right-0 p-4 cursor-pointer"
          >
            <AiOutlineCloseCircle size={30} />
          </label>
          <h2 className="text-center text-xl ">Advanced pay 100 Taka</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label>Start Time</label>
              <input
                type="datetime-local"
                {...register("startTime", { required: true })}
                className="input input-bordered"
              />
            </div>
            <div className="modal-action">
              <button type="submit" className="btn">
                {isLoading ? "Processing..." : "Pay & Confirm"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
