import React from "react";

const Hero = () => {
  return (
    <div className="relative mx-auto flex max-w-screen-xl flex-col items-center p-8 px-4 sm:px-6 md:flex-row">
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pr-10 md:pt-10">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            Hero
            <span className="font-bold text-blue-500">Section</span>
            <span className="text-blueGray-500 rounded-full text-xl font-semibold">
              2.0
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vulputate dignissim augue, Nullam vulputate dignissim augue.
          </p>
          <div className="mt-5 sm:flex md:mt-8">
            <div className="rounded-md shadow">
              <a
                href=""
                className="focus:shadow-outline-blue flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none md:px-10 md:py-4 md:text-lg"
              >
                Getting started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
              <a
                href=""
                className="focus:shadow-outline-blue flex h-full w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:outline-none md:px-10 md:py-4 md:text-lg"
              >
                Contribute
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pl-10 md:pt-10">
        <div className="relative w-full rounded p-3  md:p-8">
          <div className="w-full rounded-lg bg-white text-black">
            <img src="https://picsum.photos/400/300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
