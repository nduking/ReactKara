import React from "react";
import Heading from "./mini-component/Heading";
import Content from "./mini-component/Content";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="grid grid-cols-5  bg-brainyWaveBlack w-[1400px] h-[350px] py-12 px-[180px] space-x-8 items-center justify-center mx-auto">
      <div>
        <Heading
          className={`text-[28px] font-bold text-white py-5`}
          headingText={`Brainwave.io`}
        />
        <Content
          className={`text-[15px] text-white/30`}
          contentText={`With lots of unique blocks, you can easily build a page without coding. Build your next landing page.`}
        />
        <div className="flex flex-row gap-5 mt-5 text-white/50">
          <FaTwitter className="text-[#68D585]" />
          <FaFacebookSquare />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      {/* Company */}
      <div>
        <Heading
          className={`text-[15px] text-white/30 py-5`}
          headingText={`Company`}
        />
        <ul className="flex flex-col text[17px] text-white">
          <Link to="/">About us</Link>
          <Link to="/">Contact us</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Press</Link>
        </ul>
      </div>
      {/* Product */}
      <div>
        <Heading
          className={`text-[15px] text-white/30 py-5`}
          headingText={`Product`}
        />
        <ul className="flex flex-col text-[17px] text-white">
          <Link to="/">Features</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">News</Link>
          <Link to="/">Help desk</Link>
          <Link to="/">Support</Link>
        </ul>
      </div>
      {/* Services */}
      <div>
        <Heading
          className={`text-[15px] text-white/30 py-5`}
          headingText={`Services`}
        />
        <ul className="flex flex-col text-white text-[17px]">
          <Link to="/">Digital Marketing</Link>
          <Link to="/">Content Writing</Link>
          <Link to="/">SEO for Business</Link>
          <Link to="/">UI Design</Link>
        </ul>
      </div>
      {/* Legal */}
      <div>
        <Heading
          className={`text-[15px] text-white/30 py-5`}
          headingText={`Legal`}
        />
        <ul className="flex flex-col text-[17px] text-white ">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Return Policy</Link>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
