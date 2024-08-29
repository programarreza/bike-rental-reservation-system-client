import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Container from "../../components/ui/Container/Container";

const PaymentFailed = () => {
  return (
    <div className="pt-24 flex justify-center items-center min-h-screen">
      <Container>
        <div>
          <div className="flex justify-center items-center flex-col">
            <div className="border-4 border-[#d3246c] p-4 flex justify-center items-center rounded-full">
              <IoCloseSharp color="#d3246c" size={40} />
            </div>

            <h2 className="text-3xl font-semibold mt-4 text-[#d3246c]">
              Payment Failed{" "}
            </h2>
            <p className="text-lg mt-2">Please try again!</p>
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

export default PaymentFailed;
