"use client"
import React from "react";
import "@/styles/globals.css";
import { Button } from "@nextui-org/button";

const Hero = () => {
  const gradientStyle = {
    background:
      "linear-gradient(35deg, rgba(209,33,47,1) 0%, rgba(255,3,146,1) 92%, rgba(255,0,209,1) 100%)",
    color: "white", // Ensure the text color is white for better visibility
  };
  const handleScroll = () => {
    const exercisediv = document.getElementById("exercise");
    if (exercisediv) {
      exercisediv.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="">
      {/* <div className="h-[25rem] md:h-[30rem] lg:h-[35rem]  flex flex-col "> */}
      <div className=" flex flex-col ">
        <div className="flex flex-col gap-10 mt-10 lg:mt-16 md:mt-14  lg:flex-row  md:gap-0">
          <img
            src="/Assets/images/Hero1.png"
            alt=""
            className="w-[20rem] mx-auto md:w-[40rem] lg:w-[35rem] lg:ml-20 items-center"
          />
          <div className="flex flex-col text-3xl md:text-4xl md:mt-14   lg:my-auto lg:mx-auto items-center">
            <div className="">
            <h2 className="genosBold text-center">Check out the most</h2>
            <h2 className="genosBold text-center">effective exercises, </h2>
            <h2 className="genosBold text-center">personalised for you.</h2>
            </div>
            <Button
              onPress={handleScroll}
              radius="md"
              style={gradientStyle}
              className="shadow-md w-auto h-10 font-serif mt-8 md:mt-10 lg:mt-8 text-lg md:text-xl lg:h-11 md:h-14"
            >
              Explore Exercises
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
