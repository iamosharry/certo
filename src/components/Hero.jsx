import React from "react";

const Hero = ({ phone }) => {
  return (
    <>
      <section class="hero p-5 pt-7 xl:pt-16 md:px-16 xl:flex xl:items-center">
        <div class="hero-content xl:w-[60%]">
          <h1 className="hero__h1 font-extrabold text-[45px] font-roboto leading-[1.2em] mb-4">
            Your mobile privacy is our mission
          </h1>
          <p className="font-poppins  hero__h1 mb-4 md:w-[500px]">
            Think your phone has been hacked? Our trusted apps make it easy for
            you to scan, detect and remove threats from your iPhone and Android
            devices.
          </p>
          <div class="mb-[100px]">
            <button className="hero_btn hero__h1 font-bold py-4 px-8 rounded-[30px] mb-3">
              Get Certo for iPhone
            </button>
            <button className="font-bold py-4 px-7 rounded-[30px] hero__h1 border-2 border-blue-950 float-right md:float-none md:ml-7">
              Get Certo for Android
            </button>
          </div>
        </div>
        <div class="hero-image  w-full h-[400px] background-img box__blue py-3 md:py-3 xl:w-[60%]">
          <img
            className="w-[60%] md:w-[30%] h-[70%] mt-14 object-contain transform scale-150"
            src={phone}
            alt="Phone image"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
