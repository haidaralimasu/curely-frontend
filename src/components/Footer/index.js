import React from "react";
import logo from "../../assets/logo.png";
import { Image, Input } from "@nextui-org/react";
import { CurelyButton } from "../../lib/Button";
import facebookLogo from "../../assets/facebook.svg";
import instagramLogo from "../../assets/instagram.svg";
import twitterLogo from "../../assets/twitter.svg";

const Footer = () => {
  const urls = [
    {
      name: "Services",
      internal: [
        { name: "Online Coaching", path: "/online-coaching" },
        { name: "Corporate Wellness", path: "/corporate-wellness" },
        { name: "Diet Plans", path: "/diet-plans" },
        { name: "Workout Plans", path: "/workout-plans" },
        { name: "Courses", path: "/courses" },
      ],
    },
    {
      name: "Company",
      internal: [
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/services/contact" },
        { name: "Careers", path: "/services/careers" },
        { name: "Help & Support", path: "/services/help" },
      ],
    },
    {
      name: "Legal",
      internal: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        {
          name: "Terms and Conditions",
          path: "/terms-and-conditions",
        },
        {
          name: "Regulations",
          path: "/regulations",
        },
      ],
    },
    {
      name: "Helpful Links",
      internal: [
        { name: "Home", path: "/" },
        {
          name: "Blog",
          path: "/blog",
        },
        {
          name: "Register",
          path: "/sign-up",
        },
      ],
    },
  ];

  const socials = [
    { name: "Facebook", url: "facebook.com/curely", logo: facebookLogo },
    { name: "Instagram", url: "instagram.com/curely", logo: instagramLogo },
    { name: "Twitter", url: "x.com/curely", logo: twitterLogo },
  ];

  return (
    <div>
      <footer className="border-5 border-t  border-gray-200">
        <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2">
                <div>
                  <div className="flex">
                    <Image
                      className="mr-1"
                      src={logo}
                      height="36"
                      width="36"
                      alt="curely logo"
                    />
                    <h2 className="text-2xl font-bold">Curely</h2>
                  </div>

                  <p className="mt-4">
                    Stay informed with the latest in healthcare and wellness,
                    sign up for our newsletter and updates today!
                  </p>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form className="w-full">
                  <div className="p-2 sm:flex sm:items-center sm:gap-4">
                    <Input
                      type="email"
                      placeholder="john@rhcp.com"
                      className="w-full my-3 border-green-800 sm:text-sm"
                    />

                    <CurelyButton className="mt-1 w-full bg-green-800 px-6 py-3 text-sm font-bold tracking-wide text-white transition-none hover:bg-green-900 sm:mt-0 sm:w-auto sm:shrink-0">
                      Subscribe
                    </CurelyButton>
                  </div>
                </form>
              </div>

              {urls.map((url, index) => (
                <div key={index} className="col-span-2 sm:col-span-1">
                  <p className="font-medium text-gray-900">{url.name}</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    {url.internal.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-700 transition hover:opacity-75"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8  pt-8">
            <div className="flex justify-between">
              <p className="text-sm sm:text-center text-green-800">
                &copy; 2024. Curely. All rights reserved.
              </p>

              <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                {socials.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.url}
                      rel="noreferrer"
                      target="_blank"
                      className="text-green-800 transition hover:opacity-75"
                    >
                      <span className="sr-only">{social.name}</span>
                      <Image
                        height="25"
                        width="25"
                        src={social.logo}
                        alt={social.name}
                        className="text-green-800"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
