import React, { useState } from "react";

import Header from "./components/Header";
import {
  logo,
  nav,
  phone,
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor4,
  sponsor5,
  sponsor6,
  womanWithPhone,
  keylogger,
  osCheck,
  spyware,
  tracker,
  setting,
  threat,
  lady,
  phoneSpy,
  detect,
} from "./assets/index";

import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Features from "./components/Features";
import Insights from "./components/Insights";
import Security from "./components/Security";
import Measure from "./components/Measure";
import Footer from "./components/Footer";

const App = () => {
  const [menuSelect, setMenuSelect] = useState(
    "transform translate-y-[-200%] opacity-0"
  );
  const handleClick = () => {
    setMenuSelect(
      menuSelect === "transform translate-y-[-200%]"
        ? "transform translate-y-[0%] opacity-100"
        : "transform translate-y-[-200%]"
    );
  };
  return (
    <>
      <div className="">
        <div className="header">
          <Header
            logo={logo}
            nav={nav}
            onclick={handleClick}
            menuSelect={menuSelect}
          />
        </div>
        <div className="">
          <Hero phone={phone} />
        </div>

        <div>
          <Testimonials
            sponsor1={sponsor1}
            sponsor2={sponsor2}
            sponsor3={sponsor3}
            sponsor4={sponsor4}
            sponsor5={sponsor5}
            sponsor6={sponsor6}
          />
        </div>

        <div>
          <About womanWithPhone={womanWithPhone} />
        </div>

        <div>
          <Features
            spyware={spyware}
            keylogger={keylogger}
            tracker={tracker}
            osCheck={osCheck}
            threat={threat}
            setting={setting}
          />
        </div>

        <div>
          <Insights />
        </div>

        <div>
          <Security />
        </div>

        <div>
          <Measure lady={lady} phoneSpy={phoneSpy} detect={detect} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
