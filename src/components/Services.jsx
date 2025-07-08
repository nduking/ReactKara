import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Services = () => {
  const serviceData = [
    {
      id: "1",
      serviceTitle: "Digital Marketing",
      serviceImg: "/digital-marketing.svg",
      serviceText:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      serviceCta: "Learn more",
    },
    {
      id: "2",
      serviceTitle: "Business Growth",
      serviceImg: "/business-growth.svg",
      serviceText:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      serviceCta: "Learn more",
    },
    {
      id: "3",
      serviceTitle: "Content Marketing",
      serviceImg: "/content-marketing.svg",
      serviceText:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      serviceCta: "Learn more",
    },
  ];
  if (serviceData.length === 0) {
    return (
      <div className="text-3xl font-bold text-red-500 capitalize min-h-[50vh] flex items-center justify-center">
        Please wait
      </div>
    );
  }
  if (!serviceData) {
    <div className="text-3xl font-bold text-red-500 capitalize min-h-[50vh] flex items-center justify-center">
      Please try agin later.
    </div>;
  }
  return (
    <section className="min-h-screen bg-[#F4F7FA] py-20">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[36px] font-bold leading-6">
          Services we offer for you
        </h3>
        <p className="font-light text-[19px] w-[50%] flex items-center justify-center text-center mt-7">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-20 w-[70%] mx-auto">
        {serviceData.map(
          ({ id, serviceCta, serviceImg, serviceText, serviceTitle }) => (
            <div key={id} className="">
              <h6 className="py-4 font-bold">{serviceTitle}</h6>
              <img src={serviceImg} alt={serviceTitle} className="rounded-md" />
              <p className="py-3 text-base text-[#161C2D] font-light">
                {serviceText}
              </p>
              <span className="text-[#473BF0] font-bold flex flex-row items-center">
                {serviceCta} <BiRightArrowAlt />
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
