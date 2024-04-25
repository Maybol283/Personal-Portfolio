import React from "react";
import { useTrail, animated } from "@react-spring/web";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export function AnimatedChevron() {
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

export const Trail = ({ children, delayAmount, pulse, setMonikers }) => {
  const items = React.Children.toArray(children);
  const [open, setOpen] = useState(true); // State to control open/close
  const [initialDelayDone, setInitialDelayDone] = useState(false); // State to manage the initial delay
  const [firstLoopDone, setFirstLoopDone] = useState(false);

  const [trail, api] = useTrail(items.length, () => ({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: {
      opacity: open ? 1 : 0,
      transform: open ? "translateY(0px)" : "translateY(20px)",
    },
    loop: pulse ? { reverse: true } : null,
    config: { duration: 1000, mass: 5, tension: 2000, friction: 200 },
    delay: initialDelayDone ? 0 : delayAmount, // Conditional delay based on whether initial delay is done
    onRest: () => {
      if (!firstLoopDone) {
        console.log("loop done called");
        setMonikers(["Next", "Name"]);
        setFirstLoopDone(true); // Ensure setMonikers is called only once after the first loop
      }
    },
  }));

  return (
    <div>
      {trail.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className={items[index].props.className}
        >
          {" "}
          {items[index].props.children}
        </animated.span>
      ))}
    </div>
  );
};
