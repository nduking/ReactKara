import React from "react";

const HeroSample = ({ className, heroSampleText, heroSampleImg }) => {
  return (
    <section className="grid items-center grid-cols-2">
      <div className={className}>
        <h1 className={`${className}`}>{heroSampleText.title}</h1>
        <p className={`${className}`}>{heroSampleText.description}</p>
      </div>
      <div>
        <img src={heroSampleImg} alt="" className={`${className}`} />
      </div>
    </section>
  );
};

export default HeroSample;
