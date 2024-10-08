"use client";
import { fitnessPhrases } from "@/config/phrases";
import React, { useEffect, useState } from "react";
import { Placeholder } from "./ui/Placeholder";
import {
  exerciseOptions,
  fetchData,
  getBodyPartList,
} from "../utils/fetchData";

import HeroExercises from "./HeroExercises";
import { BodyPartList_Local, Exercise, Exercises_Local } from "@/utils";
const axios = require("axios");

interface SearchProps {
  setExercises: any;
  bodyPart: string;
  setBodyPart: (bodyPart: string) => void;
}

const Search : React.FC<SearchProps> = ({ setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  const handleSearch = async () => {
    if (search) {
      try {
        // // UNCOMMENT FOR API CALL
        // const response = await axios.request(exerciseOptions);
        // const exercisesData = response.data; // Accessing the data property
        const exercisesData: Exercise[] = Exercises_Local;
        const searchedExercises = exercisesData.filter(
          (exercise: Exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
        );

        setSearch("");
        setExercises(searchedExercises);

        // Scroll to exercises component
        const exercisesElement = document.getElementById("horizontal-scroll");
        if (exercisesElement) {
          exercisesElement.scrollIntoView({ behavior: "smooth" });
        }
        // console.log(searchedExercises);
      } catch (error) {
        console.error("Error fetching exercises data:", error);
      }

    }
  };
  return (
    <>
    
    <div className="genosBold flex flex-col justify-center items-center mx-auto">
      <p className="mt-12 text-2xl md:w-full w-[60vw] text-center lg:mt-20 lg:text-4xl">
        What&apos;s your next workout gonna be?
      </p>
      <div className="mt-4 w-[90vw] md:mt-8 md:w-[70vw] lg:mt-8 lg:w-2/3">
        <Placeholder
          placeholders={fitnessPhrases}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          onSubmit={handleSearch}
        />
      </div>
      </div>
      </>
  );
};

export default Search;
