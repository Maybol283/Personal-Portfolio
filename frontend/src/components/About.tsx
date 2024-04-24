import React from "react";

export default function About() {
  return (
    <div className="text-right size-full md:my-20 ">
      <div className="py-5 px-10 grid grid-cols-1 justify-items-center text font-normal">
        <div className="my-5 text-center sm:w-64 md:w-80">
          <h1 className="sm:pt-5 sm:py-10 subtitle-text  font-bold">About</h1>
          <p>
            I was born and raised Manchester, UK. Whether it's football, gaming
            or going out for a few drinks I'm always up for a bit of excitement
            and adventure
          </p>
          <br />
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
