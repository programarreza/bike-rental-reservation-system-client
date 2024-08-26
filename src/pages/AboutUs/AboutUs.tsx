import Container from "../../components/ui/Container/Container";
import about from "../../assets/about2.png";
import ContactUs from "../../components/ui/ContactUs/ContactUs";
import OurTeam from "../../components/ui/OurTeam/OurTeam";


const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Container>
        <div>
          {/* our mission and vision */}
          <div className="py-20">
            <h2 className="text-center text-5xl font-bold">About US</h2>
          </div>
          <div className="flex justify-between gap-12">
            {/* image  */}
            <div className="w-full shadow-xl rounded-md">
              <img src={about} alt="about image" />
            </div>

            {/* content */}
            <div className="w-full shadow-xl  space-y-6 p-4 rounded-md">
              <h3 className="font-medium uppercase text-xl">About Us</h3>
              <h2 className="text-6xl font-bold">
                Million Ideas for Your Single Journey
              </h2>
              <p>
                Bike Rental Service, we’re committed to making your ride smooth
                and enjoyable with well-maintained bikes, flexible rentals, and
                affordable rates. Let’s ride together!
              </p>
              <div className="space-y-2">
                <hr />
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p>
                  Our mission is to offer easy, affordable bike rentals that
                  promote eco-friendly transportation, with a focus on
                  sustainability and customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* our team */}
          <div>
            <OurTeam />
          </div>

          {/* contact */}
          <div className="pt-12">
            <ContactUs />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
