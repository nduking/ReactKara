import React from "react";
import Heading from "./mini-component/Heading";
import Button from "./mini-component/Button";

const Info = () => {
  return (
    <section>
      <div>
        <Heading
          className={`text-3xl font-bold`}
          headingText={`Experienced experts are giving advices.`}
        />
        <p>
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
        <Button
          className={`bg-brainyWavePurple text-white rounded-md p-2 px-4`}
          btnText={`Learn how we work`}
        />
      </div>
    </section>
  );
};

export default Info;
