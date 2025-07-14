import React from "react";
import Heading from "../components/mini-component/Heading";
import Button from "../components/mini-component/Button";

const Updates = () => {
  return (
    <section>
      <div className="flex flex-col items-center py-20 mx-auto">
        <img src="/Email-Icon.svg" alt="email" />
        <Heading
          className={`text-3xl font-bold py-4 text-center text-brainyWaveBlack`}
          headingText={`Get our latest updates`}
        />
        <p className="text-brainyWaveBlack/30 w-[40%] text-center  py-1">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
        <form className="py-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-sm h-[40px] px-5"
          />
          <Button
            className={`bg-brainyWavePurple text-white text-[16px] rounded-md px-6 h-[40px]`}
            btnText={`Subscribe`}
          />
        </form>
        <span className="text-center text-brainyWaveBlack/30 w-[30%] text-[15px]">
          We’ll never share your details with third parties. View our Privacy
          Policy for more info.
        </span>
      </div>
    </section>
  );
};

export default Updates;
