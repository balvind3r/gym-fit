import { exerciseOptions, fetchData } from "@/utils/fetchData";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Exercise, Exercises_Local } from "@/utils";
import ExerciseCard from "./ExerciseCard";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/pagination";
import SimilarExercises from "./SimilarExercises";

interface Props {
//   exercises: Exercise[];
//   setExercises: (exercises: Exercise[]) => void;
//   bodyPart: string;
    target?: string;
    equipment?: string;
}

function SimilarExercisesComponent(props: Props) {
  const { target, equipment } = props;
  const [CurrentExercises, setExercises] = useState <Exercise[]>([]);
  //   console.log(exercises);
 

  useEffect(() => {
    const fetchExerciseData = async() => {
      let exercisesData = [];

      if(target){
        exercisesData = Exercises_Local;
        const searchedExercises = exercisesData.filter(
          (exercise: any) =>
            exercise.target.toLowerCase().includes(target)
        ).slice(0, 4);
        setExercises(searchedExercises);
      }
      else if(equipment){
        exercisesData = Exercises_Local;
        const searchedExercises = exercisesData.filter(
          (exercise: any) =>
            exercise.equipment.toLowerCase().includes(equipment)
        ).slice(0, 4);
        setExercises(searchedExercises);
      }
    }

    fetchExerciseData();
  }, [])
  
  return (
     <div id="" className="lg:mx-2 mt-10">
      <div className="min-h-full flex flex-row h-fit flex-wrap justify-center items-center  my-0 sm:gap-12 mx-auto">
        {CurrentExercises.map((exercise: Exercise, index: number) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}

export default SimilarExercisesComponent;
