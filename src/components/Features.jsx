import React from "react";

const Features = ({
  spyware,
  keylogger,
  tracker,
  osCheck,
  threat,
  setting,
}) => {
  return (
    <>
      <section class="features p-5  md:px-16 mt-10">
        <h2 className="hero__h1 text-[22px] lg:text-[35px] font-extrabold text-center mb-10">
          Get your freedom back, stop mobile <br /> spyware today
        </h2>
        <div class="feature-cards bg-white rounded-xl shadow-2xl">
          <div className="lg:flex lg:justify-around lg:items-center">
            <div class="feature-card   flex flex-col items-center py-10 ">
              <img src={spyware} alt="Spyware Detection" />
              <h3 className="hero__h1 text-[22px] font-bold mb-4">
                Spyware detection
              </h3>
              <p className="w-[250px] text-center">
                Our advanced spyware scanner will help you identify if your
                device is compromised by spyware or other malicious software.
              </p>
            </div>
            <div class="feature-card  flex flex-col items-center py-10">
              <img className="mb-4" src={keylogger} alt="Keylogger Detection" />
              <h3 className="hero__h1 text-[22px] font-bold mb-4">
                Keylogger detection
              </h3>
              <p className="w-[250px] text-center">
                Find hidden keyloggers that can track everything you type and
                keep your personal information safe.
              </p>
            </div>
            <div class="feature-card  flex flex-col items-center py-10">
              <img className="mb-4" src={tracker} alt="Find Tracking Apps" />
              <h3 className="hero__h1 text-[22px] font-bold mb-4">
                Find tracking apps
              </h3>
              <p className="w-[250px] text-center">
                We create tools to use your device to spy on you, find out if
                your phone is being used for spying activities in a matter of
                minutes.
              </p>
            </div>
          </div>

          <div className="lg:flex lg:justify-around lg:items-center mb-3">
            <div class="feature-card flex flex-col items-center py-10">
              <img className="mb-4" src={osCheck} alt="OS Integrity Check" />
              <h3 className="hero__h1 text-[22px] font-bold mb-4">
                OS integrity check
              </h3>
              <p className="w-[250px] text-center">
                Analyze your device's system for signs of tampering or
                out-of-date operating security, such as jailbreaking.
              </p>
            </div>
            <div class="feature-card flex flex-col items-center py-10">
              <img className="mb-4" src={threat} alt="Threat Removal" />
              <h3 className="hero__h1 text-[22px] font-bold mb-4">
                Threat removal
              </h3>
              <p className="w-[250px] text-center">
                Our intelligent scans will not only locate threats but allow you
                to remove them for a spyware-free experience.
              </p>
            </div>
            <div class="feature-card flex flex-col items-center py-10">
              <img className="mb-4" src={setting} alt="Threat Removal" />
              <h3 className="hero__h1 text-[22px] font-bold mb-4">
                Easy to use
              </h3>
              <p className="w-[250px] text-center">
                Our intelligent scans will not only locate threats but allow you
                to remove them for a spyware-free experience.
              </p>
            </div>
          </div>

          <div className="py-10 pb-16 flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md: justify-center md:space-x-4">
            <div className="text-center">
              <button className="py-4 px-8 rounded-[30px] bg-[#ffc247] hero__h1 font-bold ">
                Get Certo for iPhone
              </button>
            </div>
            <div className="text-center">
              <button className="border-2 border-blue-950 py-4 px-8 rounded-[30px] hero__h1 font-bold">
                Get Certo for Android
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
