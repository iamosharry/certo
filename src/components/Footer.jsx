import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#050864] p-5  md:px-16 pt-24 pb-12 ">
        <div className="footer-content footer_grid">
          <div className="footer-section  sm:max-w-[360px] mb-10">
            <h4 className="text-white font-bold text-2xl mb-10">
              Scan. Detect. Remove.
            </h4>
            <div className="social-links flex space-x-10 mb-10">
              <a href="#">
                <FaTwitter className="bg-white text-4xl p-1 rounded" />
              </a>
              <a href="#">
                <FaFacebookF className="bg-white text-4xl p-1 rounded" />
              </a>
              <a href="#">
                <FaYoutube className="bg-white text-4xl p-1 rounded" />
              </a>
            </div>

            <div className="text-white flex space-x-5 mb-10">
              <a href="#" className="underline text-lg">
                Privacy Policy
              </a>
              <a href="#" className="underline text-lg">
                Terms of Service
              </a>
            </div>
            <p className="text-white mb-10 sm:w-[360px]">
              Copyright &copy; 2024 Certo Software Limited Registered in England
              & Wales No. 10072645
            </p>
            <p className="text-white">
              Designed by <span className="underline">Bigger Picture</span>{" "}
              <br /> Developed by Olajide
            </p>
          </div>

          <div className="footer-section mb-10 sm:max-w-[360px] ">
            <h2 className="text-white text-4xl font-bold mb-7">Certo</h2>
            <div className="mb-7">
              <hr className="w-[200px]" />
            </div>
            <ul className="text-[#ffc247] font-bold text-lg  sm:max-w-[360px]">
              <li className="my_before">
                <a href="#">iPhone</a>
              </li>
              <li className="my_before">
                <a href="#">Android</a>
              </li>
              <li className="my_before">
                <a href="#">Help</a>
              </li>
              <li className="my_before">
                <a href="#">About</a>
              </li>
              <li className="my_before">
                <a href="#">Insights</a>
              </li>
            </ul>
          </div>

          <div className="footer-section bg-[#ffc247] sm:max-w-[360px] p-8 rounded-[30px]">
            <h4 className="text-[#050864] font-bold text-4xl mb-10">
              Sign up to our newsletter
            </h4>
            <p className="font-medium mb-14">
              Receive the latest mobile security news, exclusive discounts &
              offers straight to your inbox!
            </p>
            <form action="#" className=" w-full h-[50px] flex">
              <input
                className="h-full w-[70%] px-4 rounded-l-[30px] outline-none"
                type="email"
                placeholder="Email address"
              />
              <div className="h-full w-[30%]">
                <button
                  className="text-center h-full w-full text-white font-bold bg-[#050864] rounded-r-[30px]"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="footer-bottom">
          <p>&copy; 2024 Certo Software. All rights reserved.</p>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
