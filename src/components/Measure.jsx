import React from "react";

const Measure = ({ lady, phoneSpy, detect }) => {
  return (
    <>
      <section class="p-5  md:px-16 py-14 font-poppins">
        <h2 className="font-bold text-3xl lg:text-4xl font-poppins text-center mb-10">
          Latest insights
        </h2>
        <div class="insight-cards my-grid mb-7  ">
          <div class="insight-card sm:max-w-[360px] relative  rounded-tl-[30px] rounded-tr-[30px] mb-10 bg-white rounded-bl-[30px] rounded-br-[30px] pb-10 shadow-lg">
            <div className="w-full h-[170px] rounded-tl-[30px] rounded-tr-[30px] mb-10">
              <img
                className="w-full h-full object-cover object-top rounded-tl-[30px] rounded-tr-[30px]"
                src={lady}
                alt=""
              />
            </div>
            <div className="px-10">
              <h3 className="font-bold text-2xl mb-5">
                Signs Your Ex Is <br /> Spying On You
              </h3>
              <p className="w-[250px] font-poppins">
                In today's world, after a breakup, you need to know if your ex
                is spying on you. Find out what they can do, and how to protect
                yourself.
              </p>
              <span className="font-bold bg-[#fff]  py-3 px-7 rounded-[20px] absolute top-4 left-4">
                Expertise
              </span>
            </div>
          </div>

          <div class="insight-card sm:max-w-[360px] relative  rounded-tl-[30px] rounded-tr-[30px] mb-10 bg-white rounded-bl-[30px] rounded-br-[30px] pb-10 shadow-lg">
            <div className="w-full h-[170px] rounded-tl-[30px] rounded-tr-[30px] mb-10">
              <img
                className="w-full h-full object-cover object-top rounded-tl-[30px] rounded-tr-[30px]"
                src={phoneSpy}
                alt=""
              />
            </div>
            <div className="px-10">
              <h3 className="font-bold text-2xl mb-5">
                How to Remove an <br />
                Hacker from Your <br />
                Samsung Phone
              </h3>
              <p className="w-[250px] font-poppins">
                Samsung is one of the most hacked phones in the world. Learn how
                to protect yourself and get hackers out of your phone.
              </p>
              <span className="font-bold bg-[#fffffffd]  py-3 px-7 rounded-[20px] absolute top-4 left-4">
                Guides
              </span>
            </div>
          </div>

          <div class="insight-card sm:max-w-[360px] relative  rounded-tl-[30px] rounded-tr-[30px] mb-10 bg-white rounded-bl-[30px] rounded-br-[30px] pb-10 shadow-lg">
            <div className="w-full h-[170px] rounded-tl-[30px] rounded-tr-[30px] mb-10">
              <img
                className="w-full h-full object-cover object-top rounded-tl-[30px] rounded-tr-[30px]"
                src={detect}
                alt=""
              />
            </div>
            <div className="px-10">
              <h3 className="font-bold text-2xl mb-5">
                Is Your Cell <br /> Phone Under <br /> Surveillance?
              </h3>
              <p className="w-[250px] font-poppins">
                In today's surveillance state, it is crucial to know if your
                phone is being monitored. Learn how to detect and prevent being
                spied on.
              </p>
              <span className="font-bold bg-[#fff]  py-3 px-7 rounded-[20px] absolute top-4 left-4">
                Expertise
              </span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#ffc247] font-bold text-2xl p-4 px-10 rounded-[30px] font-poppins shadow-xl">
            View all insights
          </button>
        </div>
      </section>
    </>
  );
};

export default Measure;
