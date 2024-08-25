import Banner from "../../components/ui/Banner/Banner";
import ContactUs from "../../components/ui/ContactUs/ContactUs";
import Featured from "../../components/ui/Featured/Featured";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <Featured />
      <ContactUs/>
    </div>
  );
};

export default Home;
