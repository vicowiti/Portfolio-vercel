import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg-base-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
          <div>
            <img
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
