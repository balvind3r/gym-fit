import { Exercise } from "@/utils";
import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

interface Props {
  exerciseDetail: Exercise;
  exerciseVideos: any;
}

function ExerciseVideos(props: Props) {
  const { exerciseDetail, exerciseVideos } = props;
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

  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="">
      <div className="mt-[20px] lg:mt-5 p-[20px] flex flex-col items-center text-center justify-center">
        <div className="text-[#000] font-extrabold genos700 mb-[33px] text-[25px] lg:text-[44px]">
          Watch <span className="text-[#FF2625] capitalize">{name}</span>{" "}
          exercise videos
        </div>
        <div className="flex w-full flex-col mx-3 justify-between items-center lg:flex-row">
          {exerciseVideos?.slice(0, 3)?.map((item: any, index: any) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="rounded-tl-[20px] w-[30vw] sm:w-[80vw]"
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <div>
                <div className="text-[#000] font-bold genos600  w-[30vw] line-clamp-1 text-[20px] lg:text-[30px]">
                  {item.video.title}
                </div>
                <div className="text-[#000] genos500 text-[20px] mb-5">
                  {item.video.channelName}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "25px" } }}
          fontWeight={700}
          color="#000"
          mb="33px"
        >
          Watch{" "}
          <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
            {name}
          </span>{" "}
          exercise videos
        </Typography>
        <Stack
          sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
        >
          {exerciseVideos?.slice(0, 3)?.map((item:any, index:any) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderTopLeftRadius: "20px" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box>
                <Typography
                  sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                  fontWeight={600}
                  color="#000"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
        </Stack>
      </Box> */}
    </div>
  );
}

export default ExerciseVideos;
