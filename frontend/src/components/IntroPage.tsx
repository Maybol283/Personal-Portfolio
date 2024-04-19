import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function () {
  return (
    <div className="pt-20 flex flex-col px-20 sm:gap-20 justify-center items-center w-full font-bold bg-palette-4 size-full">
      <div className="text-center">
        <h1 className="subtitle-text w-30 m-auto">
          Hi I'm <span className="italic text-palette-1">George</span>
        </h1>
        <p className="title-text">Software Engineer</p>
      </div>
      <ArrowDownIcon
        href=""
        className="size-1/3 sm:size-1/6"
        aria-hidden="true"
      />
    </div>
  );
}
