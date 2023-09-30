"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              Hello I'm {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Kanxa",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "Learner",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            ;
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div>
            <button className="px-6 inline-block py-3 w-full rounded-full mr-4 bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500 sm:w-fit hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 inline-block py-1 w-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/profile-avatar.png"
              alt="profile avatar"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
