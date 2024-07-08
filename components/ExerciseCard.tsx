import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Exercise } from "@/utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  key?: number;
  exercise: Exercise;
}

function ExerciseCard(props: Props) {
  const { key, exercise } = props;

  return (
    // <div className="flex flex-col justify-between items-center mb-10 ">
    <Link href={`/exercise/${exercise.id}`}>
    <div className="max-sm:mb-8 md:-mt-10 -mt-7">
      <div className="exercise-card ">
        <img
          src={exercise.gifUrl}
          alt={exercise.id}
          loading="lazy"
          className="lg:w-64 mx-auto w-56"
        />
        <div className="flex flex-row justify-between cursor-default ">
          <Button
            className="ml-3 lg:font-semibold font-medium font-genos h-fit py-1 my-0 text-white lg:text-lg text-base rounded-2xl capitalize w-fit"
            color="danger"
          >
            {exercise.bodyPart}
          </Button>
          <Button
            className="mr-3 lg:font-semibold font-medium font-genos h-fit py-1 my-0 text-white lg:text-lg text-base rounded-2xl capitalize w-fit"
            color="warning"
          >
            {exercise.target}
          </Button>
        </div>
      </div>
      <div className="lg:w-60 w-56 h-20 overflow-hidden text-center genos600 text-3xl mt-2 capitalize mx-auto"
             style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
          {exercise.name}
        </div>
    </div>
    </Link>
  );
}

export default ExerciseCard;
