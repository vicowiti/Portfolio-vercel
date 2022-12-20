import React from "react";
import { useLottie } from "lottie-react";
import DevAnimation from "../assets/lottie.json";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const options = {
    animationData: DevAnimation,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <div>
      <div className="bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
          <div className="w-[300px] lg:w-full">{View}</div>
          <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
            <h1 className="text-secondary lg:text-5xl font-bold">
              <Typewriter
                options={{
                  strings: ["Hello, I am Victor", "A Software Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="py-6 lg:text-lg text-sm text-left ">
              I am a web developer with a strong background in React. As a
              developer, I have a passion for creating intuitive and engaging
              user experiences through clean, efficient code. My experience with
              React has allowed me to build dynamic and responsive websites and
              applications that can handle large amounts. I am always looking
              for new challenges and opportunities to grow as a developer.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
