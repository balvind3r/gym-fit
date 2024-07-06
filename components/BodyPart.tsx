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
    <Stack
      alignItems={`center`}
      justifyContent={`center`}
      className="left-10"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff3f4",
              borderBottomLeftRadius: "20px",
              width: "160px",
              height: "160px",
              cursor: "pointer",
              gap: "87px",
            }
          : {
              background: "#f3f3f4",
              borderBottomLeftRadius: "20px",
              width: "160px",
              height: "160px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        // window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
        <div className="flex flex-col items-center justify-center">
            <img src={`/Assets/icons/HeroExercises/${item}.png`} alt={item} className="h-20"/>
            <Typography fontSize="24px" fontWeight="bold" fontFamily="GenosBold" color="#3A1212" textTransform="capitalize" className="mt-4"> {item}</Typography>
        </div>
      {/* <img src={all.src} alt={item} /> */}
    </Stack>
  );
}

export default BodyPart;
