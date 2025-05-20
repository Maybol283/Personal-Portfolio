import { animated, useTrail } from '@react-spring/web';
import { ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';

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
        <div className="mt-10 flex flex-col items-center justify-items-center">
            {trails.map((props, index) => (
                <animated.div key={index} style={props} className="-my-1">
                    <ChevronDown className="h-8 w-8 text-gray-500" />
                </animated.div>
            ))}
        </div>
    );
}

export const Trail = ({ children, delayAmount }) => {
    const items = React.Children.toArray(children);
    const [firstPass, setFirstPass] = useState(true);
    const [trail, api] = useTrail(items.length, () => ({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        loop: false,
        config: { duration: 1000, mass: 5, tension: 2000, friction: 200 },
        delay: delayAmount, // Conditional delay based on whether initial delay is done
    }));

    return (
        <div>
            {trail.map((props, index) => (
                <animated.span key={index} style={props} className={items[index].props.className}>
                    {' '}
                    {items[index].props.children}
                </animated.span>
            ))}
        </div>
    );
};

export const PulseTrail = ({ children, delayAmount, monikerChooser }) => {
    const items = React.Children.toArray(children);

    const [trail, pulseApi] = useTrail(items.length, () => ({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 1000, mass: 5, tension: 2000, friction: 200 },
        delay: delayAmount, // Conditional delay based on whether initial delay is done
    }));

    return (
        <div>
            {trail.map((props, index) => (
                <animated.span key={index} style={props} className={items[index].props.className}>
                    {' '}
                    {items[index].props.children}
                </animated.span>
            ))}
        </div>
    );
};
