import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareJs,
  faReact,
  faHtml5,
  faCss3,
  faPhp,
  faLaravel,
  faGit,
  faGitAlt,
  faNodeJs,
  faGithubAlt,
  faGithub,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
export default function TechStack() {
  return (
    <div className="overflow-x-hidden py-10 text-center subtitle-text size-full bg-palette-4">
      <div className="bg-palette-2 py-20 ">
        <h1 className=" decoration-palette-2">Skills</h1>
        <div className=" text-left pt-5 sm:pt-10  flex flex-row sm:flex-cols gap-4 place-content-evenly">
          <div className="rounded-lg bg-palette-4 shadow-lg shadow-palette-4 py-5">
            <p className=" text font-bold pb-4 text-center">Front-end</p>
            <div>
              <div className=" grid grid-cols-2 gap-4">
                <FontAwesomeIcon
                  className="px-5 size-20 align-bottom"
                  icon={faSquareJs}
                />
                <FontAwesomeIcon
                  className="px-5 size-20 align-bottom"
                  icon={faReact}
                />
                <FontAwesomeIcon
                  className="px-5 size-20 align-bottom"
                  icon={faHtml5}
                />
                <FontAwesomeIcon
                  className="px-5 size-20 align-bottom"
                  icon={faCss3}
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-palette-3 shadow-lg shadow-palette-3 py-5">
            <p className="text font-bold pb-4 text-center">Back-end</p>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <FontAwesomeIcon
                  className="px-5 size-20 align-bottom"
                  icon={faPhp}
                />
                <FontAwesomeIcon
                  className="px-5 size-20 align-bottom"
                  icon={faLaravel}
                />
                <FontAwesomeIcon
                  className="px-5 size-20 align-bottom"
                  icon={faNodeJs}
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-palette-1 shadow-lg shadow-palette-1 py-5">
            <p className="text font-bold pb-4 text-center">Misc</p>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <FontAwesomeIcon
                  className="px-5 size-20 align-bottom"
                  icon={faGitAlt}
                />
                <FontAwesomeIcon
                  className="px-5 size-20 align-bottom"
                  icon={faGithubSquare}
                />
                <FontAwesomeIcon
                  className="px-5 size-20 align-bottom"
                  icon={faDatabase}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
