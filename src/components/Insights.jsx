import React from "react";

const Insights = () => {
  return (
    <>
      <div class="p-5  md:px-16 py-16 bg-white md:flex md:items-center md:space-x-10 lg:space-x-36 lg:justify-center">
        <div class="card bg-[#ffc247] py-12 px-10 rounded-[30px] mb-10 ">
          <h2 className="mb-3 text-[#081831] font-bold text-2xl">
            Read our story
          </h2>
          <p className="mb-10 w-[350px] wrap">
            Find out why thousands trust Certo to secure their mobile world.
          </p>
          <a
            className="bg-[#043a8a] text-white py-3 font-poppins font-bold px-8 rounded-[25px]"
            href="#"
          >
            About us
          </a>
        </div>
        <div class="help-center p-2 ">
          <h2 className="text-[#051122] font-semibold font-poppins mb-3 text-2xl">
            Help Center
          </h2>
          <p className="text-[#051122] mb-8 ">
            Help topics, getting started guides and FAQs.
          </p>
          <a
            className="border-2 border-[#031735] text-[#082146] py-3 font-poppins font-bold px-8 rounded-[25px]"
            href="#"
          >
            Visit help center
          </a>
        </div>
      </div>
    </>
  );
};

export default Insights;
