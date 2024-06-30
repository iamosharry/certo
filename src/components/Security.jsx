import React from "react";

const Security = () => {
  return (
    <>
      <div class="p-5  md:px-16 cta_2 py-14">
        <h1 className="text-white text-center font-poppins font-bold text-2xl mb-5">
          Is someone spying on your phone?
        </h1>
        <p className="text-white text-center font-poppins mb-8">
          Find out with Certo
        </p>
        <div class="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-5">
          <a
            href="#"
            className=" w-[250px] py-4 px-5 rounded-[30px] hero__h1 bg-[#ffc247] font-bold text-center"
          >
            Get Certo for iPhone
          </a>
          <a
            href="#"
            className="border-2 border-white-950 font-bold w-[250px] py-4 px-5 rounded-[30px] text-white text-center"
          >
            Get Certo for Android
          </a>
        </div>
      </div>
    </>
  );
};

export default Security;
