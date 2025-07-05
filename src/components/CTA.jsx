import React from "react";

const CTA = () => {
  return (
    <section className="relative h-[580px] bg-[url('/BG.svg')] bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="flex flex-col items-center justify-center ">
        <img
          src="PlayButton.svg"
          className="flex items-center justify-center w-10 h-10"
          alt=""
        />
        <h2 className="flex text-white">How do we help you to grow?</h2>
        <p className="text-[19px] leading-8 font-[400] text-white">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      //{" "}
    </section>
    // <section>
    //   <img src="/Video.svg" className="" alt="" />
    // </section>
  );
};

export default CTA;
