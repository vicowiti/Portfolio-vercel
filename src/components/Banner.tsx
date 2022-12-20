import React from "react";
import { useLottie } from "lottie-react";
import DevAnimation from "../assets/lottie.json";
import Typewriter from "typewriter-effect/dist";

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
              Box Office News!
            </h1>
            <p className="py-6 lg:text-lg text-sm text-center ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
