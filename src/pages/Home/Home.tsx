import Banner from "../../components/ui/Banner/Banner";
import ContactUs from "../../components/ui/ContactUs/ContactUs";
import Featured from "../../components/ui/Featured/Featured";
import Testimonials from "../../components/ui/Testimonials/Testimonials";
import WhyChooseUs from "../../components/ui/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <Featured />
      <Testimonials />
      <WhyChooseUs />
      <ContactUs />
    </div>
  );
};

export default Home;
