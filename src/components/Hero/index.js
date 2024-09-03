import { React } from "react";
import { CurelyButton } from "../../lib/Button";
import { Input, Image } from "@nextui-org/react";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <section className="mt-24 mx-auto max-w-screen-lg pb-4 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-gray-800 font-medium text-4xl xl:text-5xl">
            Healthier, Happier you with
            <span className="text-green-800"> Curely.</span>
          </h1>
          <p className="max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Get tailored support and advice for your health conditions.
          </p>
          <div>
            <p className="text-gray-500 py-3">
              Get health tips and updates subscribe to Curely’s newsletter.
            </p>
            <form
              style={{ marginLeft: "-15px" }}
              className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start"
            >
              <Input
                type="text"
                size="lg"
                placeholder="Enter your email"
                className="text-gray-800 outline-none p-1 w-full sm:w-72"
              />
              <CurelyButton
                size="lg"
                className="outline-none mx-2 bg-green-800 text-white text-center  py-3  shadow w-full sm:w-auto"
              >
                Subscribe
              </CurelyButton>
            </form>
          </div>
        </div>
        <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
          <Image
            src={heroImg}
            alt="hero image"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
