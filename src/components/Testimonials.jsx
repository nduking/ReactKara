import React from "react";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      userImg: "/lady-oval.svg",
      quote:
        "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      userName: "Isabella Chavez",
      userJD: "Graphic Designer",
    },
    {
      id: 2,
      userImg: "/guy-Oval.svg",
      quote:
        "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
      userName: "Curtis Rhodes",
      userJD: "Digital Marketer",
    },
    {
      id: 3,
      userImg: "/glass-Oval.svg",
      quote:
        "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      userName: "Isabella Chavez",
      userJD: "Graphic Designer",
    },
  ];

  if (testimonialData.length === 0) {
    return (
      <div className="text-3xl font-bold text-red-500 capitalize min-h-[50vh] flex items-center justify-center">
        No data points in the response
      </div>
    );
  }

  if (!testimonialData) {
    <div className="text-3xl font-bold text-red-500 capitalize min-h-[50vh] flex items-center justify-center">
      Data did not come
    </div>;
  }
  return (
    <section className="min-h-screen">
      <div className="flex flex-col items-center justify-center mt-7">
        <h2 className="text-[36px] font-bold leading-6">
          What people say about us
        </h2>
        <p className="font-light text-[19px] w-[50%] flex items-center justify-center text-center mt-7">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-20 w-[70%] mx-auto">
        {testimonialData.map(({ id, userImg, userJD, userName, quote }) => (
          <div key={id} className="p-5 border rounded-md shadow-lg">
            <img src={userImg} alt={userName} />
            <p className="py-4">{quote}</p>
            <div>
              <span className="font-bold">{userName}</span>
              <span className="font-extralight text-[#161C2D]">{userJD}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
