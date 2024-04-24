import React from "react";
import { useTrail, animated } from "@react-spring/web";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function AnimatedChevron() {
  // Number of chevrons
  const chevronsCount = 3;

  // useTrail hook for orchestrating the chevron animations
  const [trails, api] = useTrail(3, () => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    loop: { reverse: true }, // Loop with reverse to make it fade back out
    config: { duration: 500 },
    delay: 500,
    pause: true,
  }));

  useEffect(() => {
    // Start the animation with a 2-second delay
    const timer = setTimeout(() => {
      api.start({ pause: false });
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-items-center mt-10">
      {trails.map((props, index) => (
        <animated.div key={index} style={props} className="-my-1">
          <ChevronDownIcon className="w-8 h-8 text-gray-500" />
        </animated.div>
      ))}
    </div>
  );
}
