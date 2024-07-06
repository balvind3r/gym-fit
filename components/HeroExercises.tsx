"use client";

import React, { useEffect, useState, useContext } from "react";
import BodyPart from "./BodyPart";
import { BodyPartList_Local } from "@/utils";
import { ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Box, Typography } from '@mui/material';
import RightArrowIcon from '/Assets/icons/right-arrow.png';
import LeftArrowIcon from '/Assets/icons/left-arrow.png';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="flex  flex-col justify-center items-center lg:w-12 cursor-pointer ml-2">
      <KeyboardDoubleArrowLeftIcon className="w-12 h-12"/>
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="flex flex-col justify-center items-center lg:w-12 ursor-pointer mr-2">
      <KeyboardDoubleArrowRightIcon className="w-12 h-12"/>
    </Typography>
  );
};

interface HeroExercisesProps {
  bodyPart: string;
  setBodyPart: (bodyPart: string) => void;
}

const HeroExercises: React.FC<HeroExercisesProps> = ({ bodyPart, setBodyPart }) => {
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      // COMMENT FOR API CALL
      try{
        const bodyPartsData = BodyPartList_Local;
        setBodyParts(["all", ...bodyPartsData]);
      }
      // // UNCOMMENT FOR API CALL
      // try {
      //   const bodyPartsData = await axios.request(getBodyPartList);
      //   setBodyParts(["all", ...bodyPartsData.data]);
      // } 
      catch (error) {
        console.error("Error fetching bodypart data:", error);
      }
    };

    fetchExercisesData();
  }, []);
  
  return (
    <div className="scrollbar-hide">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {bodyParts.map((item, index) => (
          <div key={index.toString()} style={{ margin: '0 10px' }}>
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default HeroExercises;

// "use client";
// const axios = require("axios");

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { AnimatePresence, motion } from "framer-motion";
// import { cn } from "@/utils/cn";
// import { DirectionAwareHover } from "./ui/direction-aware-hover";
// import { getBodyPartList } from "@/utils/fetchData";

// export function HeroExercises() {
//   // const[bodyParts, setBodyParts] = useState([]);
//   // const [bodyParts, setBodyParts] = useState<string[]>([]);
//   const bodyParts = [
//     "Back",
//     "Cardio",
//     "Chest",
//     "Shoulders",
//     "Lower Legs",
//     "Upper Legs",
//     "Lower Arms",
//     "Upper Arms",
//     "Neck",
//     "Waist",
//   ];

//   // useEffect(() => {
//   //     const fetchBodyPart = async () => {
//   //         try {
//   //             // const response = await axios.request(getBodyPartList);
//   //             // setBodyParts([...response.data]);
//   //             setBodyParts([...response.data]);
//   //         } catch (error) {
//   //             console.error('Error fetching body parts:', error);
//   //         }
//   //     };

//   //     fetchBodyPart();
//   // }, []); // The empty dependency array ensures this runs once after the initial render.

//   // useEffect(() => {
//   //     console.log('Updated body parts:', bodyParts);
//   // }, [bodyParts]);

//   return (
//     <div className="my-14 mx-10">
//       <div className="grid grid-cols-2 gap-10">
//         {bodyParts.map((bodyPart, index) => (
//           <div
//             className="flex justify-center items-center h-[30rem]"
//             key={index}
//           >
//             <DirectionAwareHover
//               imageUrl={`/Assets/images/heroBanner/${bodyPart}.png`}
//               imageClassName="h-[]"
//             >

//               <p className="font-bold text-9xl">{bodyPart}</p>
//               {/* <p className="font-normal text-sm">$1299 / night</p> */}
//             </DirectionAwareHover>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
