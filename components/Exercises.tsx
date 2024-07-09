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

interface Props {
  exercises: Exercise[];
  setExercises: (exercises: Exercise[]) => void;
  bodyPart: string;
}

function Exercises(props: Props) {
  const { exercises, setExercises, bodyPart } = props;
  //   console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastExercise = currentPage * itemsPerPage;
  const indexOfFirstExercise = indexOfLastExercise - itemsPerPage;

  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const fetchExerciseData = async() => {
      let exercisesData = [];

      if(bodyPart === "all"){
        exercisesData = Exercises_Local
        setExercises(exercisesData);
      }
      else{
        exercisesData = Exercises_Local;
        const searchedExercises = exercisesData.filter(
          (exercise: any) =>
            exercise.bodyPart.toLowerCase().includes(bodyPart)
        );

        setExercises(searchedExercises);
      }
    }

    fetchExerciseData();
  }, [bodyPart])
  
  return (
     <div id="exercises" className="lg:mx-2 mt-10 flex flex-col">
      <div className="text-[#000] font-extrabold genos700 text-[25px] lg:text-[44px] mx-auto mb-[33px] max-lg:-mt-10 -mt-8">
            Tap any card to{" "}
            <span className="text-[#FF2625] capitalize">know more</span>{" "}
          </div>
      <div>

      
      <div className="min-h-full flex flex-row h-fit flex-wrap justify-center items-center  my-0 sm:gap-12 mx-auto">
        
        {currentExercises.map((exercise: Exercise, index: number) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      {exercises.length > 12 && (
        <div className="mx-auto w-full flex flex-row items-center justify-center mt-2">
        <Pagination
            total={Math.ceil(exercises.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="bordered"
            color="danger"
        />
        </div>
      )}
      </div>
    </div>
  );
}

export default Exercises;
