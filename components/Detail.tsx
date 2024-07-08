import { Exercise } from "@/utils";
import { Stack, Typography } from "@mui/material";
import React from "react";
import BodyPartImage from "@/public/Assets/icons/body-part.png";
import TargetImage from "@/public/Assets/icons/target.png";
import EquipmentImage from "@/public/Assets/icons/equipment.png";
import { Button } from "@nextui-org/button";

interface Props {
  exerciseDetail: Exercise;
}

function Detail(props: Props) {
  const { exerciseDetail } = props;
  const {
    bodyPart,
    equipment,
    gifUrl,
    id,
    name,
    target,
    secondaryMuscles,
    instructions,
  } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="gap-16 flex lg:flex-row flex-col items-center p-5 lg:-mt-8">
      <div className="lg:w-[35rem] lg:ml-10 lg:h-[35rem] w-72 h-72 mt-10 border-2 border-[#FF2625] overflow-clip">
        <img
          src={gifUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full "
        />
      </div>
      <div className="lg:gap-9 lg:mr-10 h-fit flex flex-col max-lg:items-center max-lg:max-w-[80vw]">
        <div className="lg:text-7xl text-4xl lg:-mb-5 lg:mt-8 -mt-6 mb-3 genos500 font-extrabold capitalize  max-lg:text-center">{name}</div>
        
        <div className="lg:text-2xl text-xl genos font-semibold text-[#4F4C4C] ">
          <ul className="list-disc">
            {instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="max-lg:items-start max-lg:justify-start lg:-mt-5 mt-3 ">
        {extraDetail?.map((item) => (
            <div key={item.name} className="flex flex-row gap-6 items-center lg:mb-4">

                <Button className="bg-[#FFF2DB] max-lg:mb-6 rounded-full w-fit h-fit">
                    <img
                    src={item.icon.src}
                    alt={bodyPart}
                    className="lg:w-70px lg:h-70px m-3"
                    // style={{ width: "70px", height: "50px" }}
                />
                </Button>
                <div className="capitalize lg:text-2xl text-xl genos">
                    {item.name}
                </div>
            </div>
        ))}
        </div>
        
      </div>
      
      {/* <img src={gifUrl} alt={name} loading="lazy" className="lg:w-[900px] object-cover"/> */}
    </div>
  );
}

export default Detail;
