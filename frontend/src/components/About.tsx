import React from "react";
import headshot from "../assets/HeadshotNoBG.png";

export default function About() {
  return (
    <div className="text-center size-full  bg-palette-4 ">
      <h1 className="pt-10 sm:py-20 subtitle-text  font-bold">Who Am I?</h1>
      <div className="my-5 px-10 grid grid-rows-1 sm:grid-cols-2 items-center justify-items-center text font-normal">
        <div className="size-36 md:size-48 lg:size-80 custom-border overflow-hidden border-2 border-palette-4 flex items-center justify-center">
          <img src={headshot} className="bg-palette-2 size-full object-fit" />
        </div>
        <div className="my-5 text-center w-48 sm:w-64">
          <p>
            I am a software engineer with a passion for web development. I love
            throwing myself into every project and I'm always looking for
            something new to learn.
          </p>
        </div>
      </div>
    </div>
  );
}
