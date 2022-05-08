import React from "react";

const Statistic = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                Our hounarable client and deals statistic will help you to
                improve our business.
              </h1>
              <div className="leading-relaxed">
                All our clients and deals Statistic shows which services we
                provided for cycle bazar and cycle shop. These cycle is fully
                design and manufacturer by our team and active hounarable
                workers.
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.6K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.5K
              </h2>
              <p className="leading-relaxed">Deals</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.6K
              </h2>
              <p className="leading-relaxed">Transport</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                5K
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="https://i.pinimg.com/550x/bd/ba/a0/bdbaa0747799ed3f4db00880aaa9c286.jpg"
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistic;
