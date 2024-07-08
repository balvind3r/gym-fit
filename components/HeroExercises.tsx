import React, { useEffect, useState, useContext } from "react";
import BodyPart from "./BodyPart";
import { BodyPartList_Local } from "@/utils";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Box, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="flex flex-col justify-center items-center lg:w-12 cursor-pointer ml-2">
      <KeyboardDoubleArrowLeftIcon className="w-12 h-12" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="flex flex-col justify-center items-center lg:w-12 cursor-pointer mr-2">
      <KeyboardDoubleArrowRightIcon className="w-12 h-12" />
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
      try {
        const bodyPartsData = BodyPartList_Local;
        setBodyParts(["all", ...bodyPartsData]);
      } catch (error) {
        console.error("Error fetching bodypart data:", error);
      }
    };

    fetchExercisesData();
  }, []);

  return (
    <div className="scrollbar-hide " id="horizontal-scroll">
      <div className="max-md:hidden">

        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {bodyParts.map((item, index) => (
            <div key={index.toString()} style={{ margin: '0 10px' }}>
              <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </div>
          ))}
        </ScrollMenu>
      </div>
      <div className="md:hidden">
          <div className="flex flex-row overflow-x-scroll scrollbar-hide mt-0 mx-5">
          {bodyParts.map((item, index) => (
            <div key={index.toString()} style={{ margin: '0 10px' }}>
              <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default HeroExercises;



// "use client";

// import React, { useEffect, useState, useContext } from "react";
// import BodyPart from "./BodyPart";
// import { BodyPartList_Local } from "@/utils";
// import { ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
// import 'react-horizontal-scrolling-menu/dist/styles.css';
// import { Box, Typography } from '@mui/material';
// import RightArrowIcon from '/Assets/icons/right-arrow.png';
// import LeftArrowIcon from '/Assets/icons/left-arrow.png';
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
// import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="flex  flex-col justify-center items-center lg:w-12 cursor-pointer ml-2">
//       <KeyboardDoubleArrowLeftIcon className="w-12 h-12"/>
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="flex flex-col justify-center items-center lg:w-12 cursor-pointer mr-2">
//       <KeyboardDoubleArrowRightIcon className="w-12 h-12"/>
//     </Typography>
//   );
// };

// interface HeroExercisesProps {
//   bodyPart: string;
//   setBodyPart: (bodyPart: string) => void;
// }

// const HeroExercises: React.FC<HeroExercisesProps> = ({ bodyPart, setBodyPart }) => {
//   const [bodyParts, setBodyParts] = useState<string[]>([]);
  
//   useEffect(() => {
//     const fetchExercisesData = async () => {
//       // COMMENT FOR API CALL
//       try{
//         const bodyPartsData = BodyPartList_Local;
//         setBodyParts(["all", ...bodyPartsData]);
//       }
//       // // UNCOMMENT FOR API CALL
//       // try {
//       //   const bodyPartsData = await axios.request(getBodyPartList);
//       //   setBodyParts(["all", ...bodyPartsData.data]);
//       // } 
//       catch (error) {
//         console.error("Error fetching bodypart data:", error);
//       }
//     };

//     fetchExercisesData();
//   }, []);
  
//   return (
//     <div className="scrollbar-hide">
//       <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//         {bodyParts.map((item, index) => (
//           <div key={index.toString()} style={{ margin: '0 10px' }}>
//             <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
//           </div>
//         ))}
//       </ScrollMenu>
//     </div>
//   );
// };

// export default HeroExercises;
