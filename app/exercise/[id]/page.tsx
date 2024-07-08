"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Detail from "@/components/Detail";
import ExerciseVideos from "@/components/ExerciseVideos";
import SimilarExercises from "@/components/SimilarExercises";
import { Exercise, Exercises_Local } from "@/utils";
import { fetchData, youtubeOptions } from "@/utils/fetchData";
const axios = require("axios");

interface Props {
  params: {
    id: string;
  };
}

const ExerciseDetails = ({ params }: Props) => {
  const [exerciseDetail, setExerciseDetail] = useState<Exercise>();
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<String>();
  const [equipmentExercises, setEquipmentExercises] = useState<String>();
  const { id } = params;

  useEffect(() => {
    const fetchExercisesData = async () => {
      //   console.log(id);
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = Exercises_Local.find(
        (exercise: Exercise) => exercise.id === id
      );
      setExerciseDetail(exerciseDetailData);
    //   console.log(exerciseDetailData);
      

      if (exerciseDetailData != null) {

        try {
            console.log('API Key:', process.env.REACT_APP_RAPID_API_KEY);
            const response = await axios.get(`${youtubeSearchUrl}/search`, {
                params: { query: `${exerciseDetailData.name} exercise` },
                headers: {
                  'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
                  'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
                }
              });
          
            //   console.log(response.data.contents);
              setExerciseVideos(response.data.contents);
            
          } catch (error) {
            console.error('Error fetching exercise videos:', error);
          }

       
        const targetMuscleExercisesData = exerciseDetailData.target;
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equimentExercisesData = exerciseDetailData.equipment;
        setEquipmentExercises(equimentExercisesData);
      }

      //   console.log(exerciseDetailData);
        // console.log(exerciseVideos);
    };

    fetchExercisesData();
  }, [id]);
  if (!exerciseDetail) return <div>No Data!</div>;
  return (
    <Box>
      {exerciseDetail && (
        <>
          <Detail exerciseDetail={exerciseDetail} />
          <ExerciseVideos
            exerciseDetail={exerciseDetail}
            exerciseVideos={exerciseVideos}
            // name={exerciseDetail.name}
          />
          <SimilarExercises
            exerciseDetail={exerciseDetail}
          />
        </>
      )}
    </Box>
  );
};

export default ExerciseDetails;
