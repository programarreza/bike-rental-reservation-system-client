import { MdOutlineDone } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Container from "../../components/ui/Container/Container";

const PaymentSuccessful = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const amount = params.get("amount") || "N/A";
  const dateStr = params.get("date");
  const date = dateStr ? new Date(dateStr).toLocaleString() : "N/A";
  const tranId = location.pathname.split("/").pop() || "N/A";

  return (
    <div className="pt-24 flex justify-center items-center min-h-screen">
      <Container>
        <div>
          <div className="flex justify-center items-center flex-col">
            <div className="border-4 border-[#4BB543] p-4 flex justify-center items-center rounded-full">
              <MdOutlineDone color="#4BB543" size={40} />
            </div>

            <h2 className="text-3xl font-semibold mt-4">Payment Successful</h2>
            <p className="text-lg mt-2">Thank you for your purchase!</p>
          </div>

          <div className="mt-6 space-y-2 shadow-xl p-6 rounded-md ">
            <h3 className="text-lg">
              Amount Paid: <span className="font-medium">{amount} BDT</span>
            </h3>
            <h3 className="text-lg">
              Date & Time: <span className="font-medium">{date}</span>
            </h3>
            <h3 className="text-lg">
              Transaction Number: <span className="font-medium">{tranId}</span>
            </h3>
          </div>
          <div className=" flex justify-center items-center">
            <Link to="/">
              <button className="btn mt-4  bg-[#61adff] hover:bg-[#006ce1] text-white  ">
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentSuccessful;
