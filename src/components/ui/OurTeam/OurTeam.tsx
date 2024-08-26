import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import team1 from "../../../assets/team1.jpg";
import team2 from "../../../assets/team2.jpg";
import team3 from "../../../assets/team3.jpg";

const OurTeam = () => {
  return (
    <div>
      <div
        className="px-4 md:px-6 lg:px-12 xl:px-24 min-h-screen "
        id="projects"
      >
        <h2 className="pb-12 text-5xl font-bold text-center pt-12 md:py-24 ">
          Our Team Members
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* team-1 */}
          <div>
            <div className="group  relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow">
              <div className=" border">
                <img
                  className="h-[300px] w-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
                  src={team1}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[95%]  group-hover:translate-y-0 translate-all duration-500 ">
                <div className="flex gap-6 mt-12">
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#f57c48]/50 hover:bg-[#f57c48] border-[#f57c48]  ">
                      <FaFacebookF color="#fff" />
                    </p>
                  </Link>
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#f57c48]/50 hover:bg-[#f57c48] border-[#f57c48]  ">
                      <FaTwitter color="#fff" />
                    </p>
                  </Link>
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#f57c48]/50 hover:bg-[#f57c48] border-[#f57c48]">
                      <FaLinkedinIn color="#fff" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-3xl font-semibold">Shafikul Islam</h2>
              <h3 className="uppercase">founder</h3>
            </div>
          </div>

          {/* team-2 */}
          <div>
            <div className="group  relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow">
              <div className=" border">
                <img
                  className="h-[300px] w-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
                  src={team2}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[95%] group-hover:translate-y-0 translate-all duration-500 ">
                <div className="flex gap-6 mt-12">
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#f57c48]/50 hover:bg-[#f57c48] border-[#f57c48]  ">
                      <FaFacebookF color="#fff" />
                    </p>
                  </Link>
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#f57c48]/50 hover:bg-[#f57c48] border-[#f57c48]  ">
                      <FaTwitter color="#fff" />
                    </p>
                  </Link>
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#f57c48]/50 hover:bg-[#f57c48] border-[#f57c48]">
                      <FaLinkedinIn color="#fff" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-3xl font-semibold">Rayhan Kabir</h2>
              <h3 className="uppercase">Engineer</h3>
            </div>
          </div>

          {/* team-3 */}
          <div>
            <div className="group  relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow">
              <div className=" border">
                <img
                  className="h-[300px] w-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
                  src={team3}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[95%] group-hover:translate-y-0 translate-all duration-500 ">
                <div className="flex gap-6 mt-12">
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#f57c48]/50 hover:bg-[#f57c48] border-[#f57c48]  ">
                      <FaFacebookF color="#fff" />
                    </p>
                  </Link>
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#f57c48]/50 hover:bg-[#f57c48] border-[#f57c48]  ">
                      <FaTwitter color="#fff" />
                    </p>
                  </Link>
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#f57c48]/50 hover:bg-[#f57c48] border-[#f57c48]">
                      <FaLinkedinIn color="#fff" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-3xl font-semibold">Sakib All Hasan</h2>
              <h3 className="uppercase">Engineer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
