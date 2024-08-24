import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}>
			
		</div>
    </div>
  );
};

export default Banner;
