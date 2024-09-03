import React from "react";
import arrowIcon from "../../assets/rightArrow.svg";
import calorie from "../../assets/calorie.svg";
import sugar from "../../assets/sugar.svg";
import fitness from "../../assets/fitness.svg";
import robot from "../../assets/robot.svg";

import { Image } from "@nextui-org/react";

const Features = () => {
  const features = [
    {
      title: "Calorie Trakcer",
      description: "Track your calories",
      logo: calorie,
    },
    {
      title: "Sugar Tracker",
      description: "Track your calories",
      logo: sugar,
    },
    {
      title: "AI Personal coach",
      description: "Track your calories",
      logo: fitness,
    },
    {
      title: "One on One guidance",
      description: "Track your calories",
      logo: robot,
    },
  ];

  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h1 className="text-gray-800 font-medium text-4xl xl:text-5xl">
              Healthier, Happier you with
            </h1>
          </div>
          <div className="relative w-full text-center  lg:text-left lg:w-2/4">
            <p className="text-lg font-normal text-gray-500 mb-5">
              We provide all the advantages that can simplify all your financial
              transactions without any further requirements
            </p>
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-green-800 lg:justify-start hover:text-green-900 "
            >
              Button CTA <Image src={arrowIcon} alt="arrow" />
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 first:!bg-red-500 last:!bg-orange-500 odd:bg-blue-600 even:bg-purple-600"
            >
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <Image src={feature.logo} alt="calorie counter" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 capitalize transition-all duration-500 group-hover:text-white">
                {feature.title}
              </h4>
              <p className="text-sm font-normal text-white transition-all duration-500 leading-5 group-hover:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
