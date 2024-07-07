import { exerciseOptions, fetchData } from '@/utils/fetchData'
import { Box, Stack, Typography } from '@mui/material'
import  Pagination  from '@mui/material/Pagination'
import React, { useEffect, useState } from 'react'
import { Exercise } from '@/utils'
import ExerciseCard from './ExerciseCard'

interface Props {
    exercises: Exercise[];
    setExercises: (exercises: Exercise[]) => void;
    bodyPart: string;
}

function Exercises(props: Props) {
    const {exercises, setExercises, bodyPart} = props
    console.log(exercises);
    
    return (
        <div id="exercises">
            <div>
                Showing Results
            </div>
            <Stack direction = "row" sx={{gap: {lg: '110px', xs: '50px'}}} flexWrap="wrap"  justifyContent="center">
                {
                    // {exercises.map((exercise, index) => (
                    //     <ExerciseCard key = {index} exercise = {exercise}/>
                    // ))}
                }
            </Stack>
        </div>
    )
}

export default Exercises
