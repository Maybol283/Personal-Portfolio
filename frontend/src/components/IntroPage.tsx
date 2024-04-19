import React from "react";
import headshot from "../assets/HeadshotNoBG.png";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function () {
  return (
    <div className="flex flex-col px-20 gap-20 justify-center items-center w-full font-bold bg-red-600 size-full">
      <div>
        <h1 className="text-5xl md:text-7xl lg:text-9xl w-30 m-auto align-center">
          Hi I'm <span className="italic">George</span>
          <p className="text-5xl md:text-7xl lg:text-9xl">Software Engineer</p>
        </h1>
      </div>
      <button
        type="button"
        className="h-20 self-center rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <ArrowDownIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
