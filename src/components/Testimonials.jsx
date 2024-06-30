import React from "react";
import { FaStar } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Testimonials = ({
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor4,
  sponsor5,
  sponsor6,
}) => {
  return (
    <>
      <section class="testimonials  pt-16 bg-[#ffc247]">
        <h2 className="pl-5 md:pl-16 w-full font-poppins hero__h1 text-[30px] leading-[1.3em]  md:w-[500px] lg:w-[700px]  md:text-[40px] md:leading-[1.2em] font-extrabold md:mb-2">
          Loved by thousands of iPhone and Android users alike
        </h2>
        <div class="testimonial-cards p-5  md:px-16    flex space-x-2 overflow py-10 mb-8">
          <div class="testimonial-card  shadow-lg md:shadow-xl w-[310px]  md:w-[400px] px-5 py-7 bg-white rounded-[20px] flex-shrink-0 ">
            <div className="flex star mb-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="hero__h1 mb-3 font-poppins">
              "Does exactly what it says. Easy to understand and use. One of
              thebest ways to make sure your phone is clean and secure."
            </p>
            <p className="hero__h1 font-bold font-poppins">-@clefoblesxuae04</p>
          </div>
          <div class="testimonial-card shadow-lg md:shadow-xl w-[310px] md:w-[400px] px-5 py-7 bg-white rounded-[20px] flex-shrink-0">
            <div className="flex star mb-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="hero__h1 mb-3 font-poppins">
              "Peace of mind and efficiency. Awesome product that has made me
              feel more secure about my phone usage. Thank you Certo!"
            </p>
            <p className="hero__h1 font-bold font-poppins">- Jennie Block</p>
          </div>
          <div class="testimonial-card shadow-lg md:shadow-xl w-[310px] md:w-[400px] px-5 py-7 bg-white rounded-[20px] flex-shrink-0">
            <div className="flex star mb-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="hero__h1 mb-3 font-poppins">
              "Peace of mind and efficiency. Awesome product that has made me
              feel more secure about my phone usage. Thank you Certo!"
            </p>
            <p className="hero__h1 font-bold font-poppins">- Jennie Block</p>
          </div>
          <div class="testimonial-card shadow-lg md:shadow-xl w-[310px] md:w-[400px] px-5 py-7 bg-white rounded-[20px] flex-shrink-0">
            <div className="flex star mb-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="hero__h1 mb-3 font-poppins">
              "This app is good if you need to identify, fix, and prevent any
              kind of spyware. I have used it for years and it never
              disappoints. Highly recommended."
            </p>
            <p className="hero__h1 font-bold font-poppins">
              - Phillip Culligen
            </p>
          </div>
        </div>
        <div class="trusted-logos six eight lg:flex lg:items-center lg:justify-normal pl-5 md:pl-16">
          <p className="mb-10 hero__h1 text-2xl font-bold flex items-center space-x-2">
            <span>Featured in</span>
            <span className=" bg-white rounded-xl">
              <RiArrowDropDownLine className="text-3xl" />
            </span>
          </p>
          <div className="lg:flex lg:items-center lg:space-x-7">
            <div className="flex space-x-14 justify-center sm:space-x-10 sm:justify-normal lg:space-x-16">
              <img
                className=" w-[120px] object-contain sm:w-[90px]"
                src={sponsor1}
                alt="CNBC"
              />

              <img
                className=" w-[120px] object-contain sm:w-[90px]"
                src={sponsor6}
                alt="Wired"
              />

              <img
                className=" w-[120px] object-contain hidden sm:block sm:w-[90px]"
                src={sponsor4}
                alt="ZDNet"
              />
            </div>
            <div className="flex space-x-14 justify-center">
              <img
                className=" w-[120px] object-contain sm:hidden"
                src={sponsor3}
                alt="Financial Times"
              />
              <img
                className=" w-[120px] object-contain sm:hidden"
                src={sponsor4}
                alt="ZDNet"
              />
            </div>
            <div className="flex space-x-14 sm:space-x-10 justify-center sm:justify-normal lg:space-x-16">
              <img
                className=" w-[120px] object-contain hidden sm:block sm:w-[90px]"
                src={sponsor3}
                alt="Financial Times"
              />

              <img
                className=" w-[120px] object-contain sm:w-[90px]"
                src={sponsor5}
                alt="Wired"
              />
              <img
                className=" w-[120px] object-contain sm:w-[90px]"
                src={sponsor2}
                alt="Reader's Digest"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
