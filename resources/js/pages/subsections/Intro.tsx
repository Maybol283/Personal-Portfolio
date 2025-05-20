import { animated, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { AnimatedChevron, Trail } from '../SmallComponents/AnimatedItems';

export default function IntroPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [monikers, setMonikers] = useState(['Software', 'Engineer']);

    // Define the image path from storage
    const headshotImage = '/storage/HeadshotNoBG.png';

    const monikerChooser = () => {
        const monikerList = [
            ['Software', 'Engineer'],
            ['Bug', 'Creator'],
            ['Web', 'Designer'],
            ['Error', 'Enthusiast'],
        ];

        setCurrentIndex((prevIndex: number) => {
            const newIndex = (prevIndex + 1) % monikerList.length; // Wrap around using modulus
            setMonikers(monikerList[newIndex]); // Set monikers based on the new index
            return newIndex;
        });
    };

    const [pulse, pulseApi] = useSpring(() => ({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: async (next, cancel) => {
            await next({ opacity: 1, transform: 'translateY(0px)' });
            pulseApi.pause();
            setTimeout(() => {
                pulseApi.resume();
            }, 2000);
            await next({ opacity: 0, transform: 'translateY(20px)' });

            await monikerChooser();
        },
        delay: 1000,
        loop: { reverse: true },
        reset: true,
    }));

    const [textChange, textChangeApi] = useSpring(() => ({
        from: { opacity: 0, y: -5, x: -5 },
        to: { opacity: 1, y: 0, x: 0 },
        config: { duration: 1000, mass: 5, tension: 2000, friction: 200 },
        delay: 500,
    }));

    const [bubbleEffect, bubbleApi] = useSpring(() => ({
        borderTopLeftRadius: '350px',
        borderTopRightRadius: '350px',
        borderBottomLeftRadius: '350px',
        borderBottomRightRadius: '350px',
        config: { duration: 1000 },
    }));

    const popUp = useSpring({
        from: { opacity: 0, scale: 0 },
        to: { opacity: 1, scale: 1 },
        config: {
            mass: 2, // Mass of the spring object; increasing it makes the movement feel heavier
            tension: 250, // Tension of the spring; decreasing it makes the spring less stiff
            friction: 20, // Friction that opposes the motion; decreasing it allows the spring to oscillate longer
        },
        delay: 2000,
    });

    useEffect(() => {
        const changeBorderRadius = () => {
            bubbleApi.start({
                borderTopLeftRadius: `${Math.round(Math.random() * 200 + 350)}px`,
                borderTopRightRadius: `${Math.round(Math.random() * 200 + 350)}px`,
                borderBottomLeftRadius: `${Math.round(Math.random() * 200 + 350)}px`,
                borderBottomRightRadius: `${Math.round(Math.random() * 200 + 350)}px`,
            });
        };

        changeBorderRadius(); // Initial change
        const interval = setInterval(changeBorderRadius, 1000); // Change every 1000ms (1s)
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [bubbleApi]);

    return (
        <div className="flex h-screen flex-col items-center justify-center pt-20 font-bold" id="intropage">
            <div className="grid min-w-full grid-cols-1 items-center justify-items-center gap-4 sm:grid-cols-2">
                <div className="">
                    <animated.div style={{ ...popUp, ...bubbleEffect }} className="size-48 overflow-hidden sm:size-56 md:size-80 lg:size-96">
                        <img src={headshotImage} alt="Headshot of George Vanden" className="bg-palette-1 object-fit size-full" />
                    </animated.div>
                </div>
                <div className="w-full overflow-hidden pb-1 text-center">
                    <h1 className="subtitle-text">
                        <Trail delayAmount={500}>
                            <span>Hi</span>
                            <span>I'm</span>
                            <span className="text-palette-1 italic">George</span>
                        </Trail>
                    </h1>
                    <p className="title-text pb-5">
                        <animated.span style={pulse} className="block">
                            {monikers[0]}
                        </animated.span>
                        <animated.span style={pulse} className="block">
                            {monikers[1]}
                        </animated.span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-items-center sm:mt-10">
                <AnimatedChevron />
            </div>
        </div>
    );
}
