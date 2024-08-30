import { BsStarFill, BsStar } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Rating from "react-rating";
import Container from "../Container/Container";
import { testimonials } from "../../../utils/testimonialsData";

const Testimonials = () => {
  return (
    <div className=" min-h-[80vh] pt-20 shadow-sm border-t">
      <Container>
        <div className=" flex justify-center items-center">
          <div className="w-full md:w-3/4 lg:w-2/4  m-4 flex justify-center mx-auto ">
            <Swiper
              spaceBetween={30}
              centeredSlides={false}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item._id}>
                  <div>
                    <div className="rounded-3xl">
                      {/* content  */}
                      <div className="card shadow-2xl m-0.5 rounded-xl relative mt-16">
                        <div className="card-body items-center text-center">
                          <h2 className=" mt-8 text-xl font-bold">
                            {item?.userName}
                          </h2>
                          <p className="text-lg"> {item?.title}</p>
                          <p>{item?.feedbackText}</p>
                          <Rating
                            emptySymbol={
                              <BsStar size={30} className="text-gray-400" />
                            }
                            fullSymbol={
                              <BsStarFill
                                size={30}
                                className="text-yellow-400"
                              />
                            }
                            fractions={2}
                            initialRating={item?.rating}
                            readonly
                          />
                        </div>
                        {/* avater */}
                        <div className="avatar absolute -mt-12 ml-40 md:ml-56 lg:ml-48 xl:ml-64">
                          <div className="w-24 rounded-full border-4 border-green-600">
                            <img src={item?.image} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
