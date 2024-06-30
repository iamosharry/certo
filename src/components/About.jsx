import React from "react";

const About = ({ womanWithPhone }) => {
  return (
    <>
      <section className="about p-5  md:px-16 pt-24">
        <div className="about-content flexAbout1 lg:justify-center">
          <div className="flexAbout2">
            <h2 className="hero__h1 text-2xl lg:text-4xl lg:leading-[1.3em] font-bold mb-10">
              At Certo, mobile security is not an afterthought, it’s what we do.
            </h2>
            <div className="deleteLady mb-7 about-image relative w-[330px] h-[340px] bg-[#ffc247] my-0 mx-auto ">
              <img
                className="w-[325px] object-contain absolute transformer"
                src={womanWithPhone}
                alt="Woman with phone"
              />
            </div>
            <p className="hero__h1 font-poppins mb-5">
              With years of experience in mobile security and spyware detection,
              our products have helped countless people safeguard their devices
              and find peace of mind.
            </p>
            <div className="cta-buttons flex items-center space-x-2 mb-10 ">
              <button className="hero_btn hero__h1 font-bold text-[14px] py-4 px-5 rounded-[30px]">
                Get Certo for iPhone
              </button>
              <button className="font-bold py-4 px-5 rounded-[30px] text-[14px] hero__h1 border-2 border-blue-950  md:ml-7">
                Get Certo for Android
              </button>
            </div>
          </div>
          <div className=" hidden showLady mb-7 about-image relative w-[330px] h-[340px] bg-[#ffc247] my-0 mx-auto sm:mx-0">
            <img
              className="w-[325px] object-contain absolute transformer"
              src={womanWithPhone}
              alt="Woman with phone"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
