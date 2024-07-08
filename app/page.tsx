"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";

import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import HeroExercises from "@/components/HeroExercises";
import { BodyPartList_Local, Exercise, Exercises_Local } from "@/utils";
import { useState } from "react";
import Exercises from "@/components/Exercises";
// import { Navbar } from "@nextui-org/navbar";
import "@/styles/globals.css"
import  {Navbar}  from "@/components/navbar";

export default function Home() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [bodyPart, setBodyPart] = useState("all");
  // console.log(bodyPart);
  
  return (
    <div>
      <div className="w-full min-h-screen">
        {/* <Navbar/> */}
        <Hero />
        <div id="exercise">

        <Search
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        </div>
        {/* <HeroExercises/> */}
        <div className=" my-20 " id="horizontal">
        <HeroExercises  bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
        </div>
        {/* <div id="exercises"> */}
          <Exercises
            exercises={exercises}
            setExercises={setExercises}
            bodyPart={bodyPart}
          />
        {/* </div> */}
        {/* <Footer /> */}
      </div>
    </div>
    // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    //   <div className="inline-block max-w-lg text-center justify-center">
    //     <h1 className={title()}>Make&nbsp;</h1>
    //     <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
    //     <br />
    //     <h1 className={title()}>
    //       websites regardless of your design experience.
    //     </h1>
    //     <h2 className={subtitle({ class: "mt-4" })}>
    //       Beautiful, fast and modern React UI library.
    //     </h2>
    //   </div>

    //   <div className="flex gap-3">
    //     <Link
    //       isExternal
    //       className={buttonStyles({
    //         color: "primary",
    //         radius: "full",
    //         variant: "shadow",
    //       })}
    //       href={siteConfig.links.docs}
    //     >
    //       Documentation
    //     </Link>
    //     <Link
    //       isExternal
    //       className={buttonStyles({ variant: "bordered", radius: "full" })}
    //       href={siteConfig.links.github}
    //     >
    //       <GithubIcon size={20} />
    //       GitHub
    //     </Link>
    //   </div>

    //   <div className="mt-8">
    //     <Snippet hideCopyButton hideSymbol variant="flat">
    //       <span>
    //         Get started by editing <Code color="primary">app/page.tsx</Code>
    //       </span>
    //     </Snippet>
    //   </div>
    // </section>
  );
}
