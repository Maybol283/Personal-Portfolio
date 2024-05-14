import React from "react";
import { useEffect } from "react";
import {
  useSpring,
  animated,
  useSpringRef,
  useInView,
  useSprings,
} from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareJs,
  faReact,
  faLaravel,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import Markdown from "../assets/Markdown-Previewer.png";
import MeoRomano from "../assets/Meo-Romano.png";
import QuoteGen from "../assets/Quote-Generator.png";

const items = [
  {
    src: MeoRomano,
    alt: "Meo Romano",
    tech: [faLaravel, faReact, faJsSquare],
    moreInfo:
      "A restaraut website with a fully functioning booking and mailer system",
    url: "https://meo-romano.georgevanden.co.uk",
  },
  {
    src: Markdown,
    alt: "Markdown Maker",
    tech: [faReact, faSquareJs],
    moreInfo: "A text editor which parses text as markdown",
    url: "https://meo-romano.georgevanden.co.uk",
  },
  {
    src: QuoteGen,
    alt: "Quote Generator",
    tech: [faReact, faSquareJs],
    moreInfo: "A quote generator which access an api to produce random quotes",
    url: "https://meo-romano.georgevanden.co.uk",
  },
];

const AnimatedFontAwesomeIcon = animated(FontAwesomeIcon);

const duplicatedItems = [...items, ...items, ...items]; // Triple the items for a smoother loop

function Projects() {
  const api = useSpringRef(); // Reference to store the animation

  // Create the spring animation
  const props = useSpring({
    ref: api, // Attach the ref to the animation
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(-194%)" },
    loop: true,
    reset: true,
    config: { duration: 50000 },
  });

  const [fadeUp, fadeUpApi] = useSprings(duplicatedItems.length, (index) => ({
    from: { opacity: 0, transform: "translateY(0%)" },
    reset: true,
  }));

  const [blur, blurApi] = useSprings(duplicatedItems.length, (index) => ({
    from: { filter: "blur(0px)" },
    reset: true,
  }));

  // Function to trigger the animation for a specific item
  const handleMouseEnter = (index) => {
    api.pause();
    fadeUpApi.start((i) => {
      if (i === index)
        return { opacity: 1, transform: "translateY(10%)", immediate: false };
    });
    blurApi.start((i) => {
      if (i === index) return { filter: "blur(5px)" };
    });
  };

  // Function to reverse the animation for a specific item
  const handleMouseLeave = (index) => {
    api.resume();
    fadeUpApi.start((i) => {
      if (i === index)
        return { opacity: 0, transform: "translateY(0%)", immediate: false };
    });
    blurApi.start((i) => {
      if (i === index) return { filter: "blur(0px)" };
    });
  };

  const [ref, fadeDown] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(-100px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
    }),
    {
      rootMargin: "-40% 0%",
      amount: "any",
      once: true,
    }
  );

  useEffect(() => {
    api.start();
  }, [api]);

  return (
    <div className="size-full text-center overflow-hidden my-10" id="project">
      <animated.h1 className="title-text py-20" ref={ref} style={fadeDown}>
        Projects
      </animated.h1>
      <animated.div
        style={props}
        className="flex h-1/2 whitespace-nowrap text-center"
      >
        {fadeUp.map((item, index) => (
          <a href={duplicatedItems[index].url}>
            <div
              key={index}
              className="m-4 p-4 border relative min-w-96 lg:min-w-[800px] h-64 lg:h-96 rounded-lg text-wrap"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <animated.div
                className="border-rounded-lg border-gray-300 rounded-lg absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                  ...blur[index],
                  backgroundImage: `url(${duplicatedItems[index].src})`,
                }}
              />
              <animated.p
                className="text-center subtitle-text"
                style={fadeUp[index]}
              >
                {duplicatedItems[index].alt}
              </animated.p>
              <animated.p className="text-center" style={fadeUp[index]}>
                {duplicatedItems[index].moreInfo}
              </animated.p>
              {duplicatedItems[index].tech.map((icon) => (
                <AnimatedFontAwesomeIcon
                  icon={icon}
                  className="mx-1 size-10 md:size-16 lg:size-48"
                  style={fadeUp[index]}
                />
              ))}
            </div>
          </a>
        ))}
      </animated.div>
    </div>
  );
}

export default Projects;
