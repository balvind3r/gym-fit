import { Stack, Typography } from "@mui/material";
import React from "react";
import all from "../public/Assets/icons/HeroExercises/lower arms.png";
import "@/styles/globals.css"
interface Props {
  item: string;
  bodyPart: string;
  setBodyPart: (bodyPart: string) => void;
}

function BodyPart(props: Props) {
  const { item, bodyPart, setBodyPart } = props;

  return (
    <div className="">
      <Stack
        alignItems="center"
        justifyContent="center"
        className={`left-10 ${bodyPart === item ? "border-t-4 border-[#FF2625] bg-[#fff3f4]" : "bg-[#f3f3f4]"} 
                    cursor-pointer rounded-bl-3xl gap-20 md:w-40 md:h-40 w-32 h-32`}
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        }}
      >
        <div className="flex flex-col items-center justify-center md:w-40 md:h-40 w-40 h-40">
          <img src={`/Assets/icons/HeroExercises/${item}.png`} alt={item} className="md:h-20 h-16" />
          <div className="md:text-2xl text-lg font-[GenosBold] font-bold capitalize md:mt-4 mt-3">
            {item}
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default BodyPart;
