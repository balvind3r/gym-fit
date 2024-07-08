import { Exercise } from "@/utils";
import React from "react";
import Loader from "./Loader";
import SimilarExercisesComponent from "./SimilarExercisesComponent";

interface Props {
  exerciseDetail: Exercise;
}

function SimilarExercises(props: Props) {
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

  return (
    <div>
      <div className="mt-[100px] lg:mt-0">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-[#000] font-extrabold genos700 text-[25px] lg:text-[44px] ml-[20px] mb-[33px]">
            Similar{" "}
            <span className="text-[#FF2625] capitalize">Target Muscle</span>{" "}
            exercises
          </div>
          <div className="p-2 relative flex flex-row">
            {target ? (
              <SimilarExercisesComponent target={target} />
            ) : (
              <Loader />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-[#000] font-extrabold genos700 text-[25px] lg:text-[44px] ml-[20px] mt-[60px] lg:mt-[100px] mb-[33px]">
            Similar <span className="text-[#FF2625] capitalize">Equipment</span>{" "}
            exercises
          </div>
          <div className="p-2 relative flex flex-row">
            {equipment ? (
              <SimilarExercisesComponent equipment={equipment} />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimilarExercises;
