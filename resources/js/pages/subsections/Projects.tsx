import { faLaravel, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated, useInView, useSpring, useSpringRef, useSprings } from '@react-spring/web';
import { useEffect, useState } from 'react';

const items = [
    {
        src: '/storage/Projects/Meo-Romano.png',
        alt: 'Meo Romano',
        tech: [faLaravel, faReact, faDatabase],
        moreInfo: 'A restaraut website with a fully functioning booking and mailer system',
        url: 'https://meo-romano.georgevanden.co.uk',
    },
    {
        src: '/storage/Projects/Garms.png',
        alt: 'Garms',
        tech: [faLaravel, faReact, faDatabase],
        moreInfo: 'An E-Commerce website with a fully functioning shopping cart and checkout system',
        url: 'https://garms.georgevanden.co.uk',
    },
    {
        src: '/storage/Projects/Ninis-Garments.png',
        alt: 'Ninis Garments',
        tech: [faLaravel, faReact, faDatabase],
        moreInfo: 'An E-Commerce website with a fully functioning shopping cart, checkout system, admin panel, users login, and more',
        url: 'https://ninis-garments.georgevanden.co.uk',
    },
];

const AnimatedFontAwesomeIcon = animated(FontAwesomeIcon);

const duplicatedItems = [...items, ...items, ...items]; // Triple the items for a smoother loop

function Projects() {
    const [iconSize, setIconSize] = useState('2x');

    // Update icon size based on window width
    useEffect(() => {
        const updateIconSize = () => {
            if (window.innerWidth >= 1024) {
                setIconSize('8x');
            } else if (window.innerWidth >= 768) {
                setIconSize('3x');
            } else {
                setIconSize('2x');
            }
        };

        // Initial check
        updateIconSize();

        // Listen for resize events
        window.addEventListener('resize', updateIconSize);

        // Cleanup
        return () => window.removeEventListener('resize', updateIconSize);
    }, []);

    const api = useSpringRef(); // Reference to store the animation

    // Create the spring animation
    const props = useSpring({
        ref: api, // Attach the ref to the animation
        from: { transform: 'translateX(0%)' },
        to: { transform: 'translateX(-194%)' },
        loop: true,
        reset: true,
        config: { duration: 50000 },
    });

    const [fadeUp, fadeUpApi] = useSprings(duplicatedItems.length, (index) => ({
        from: { opacity: 0, transform: 'translateY(0%)' },
        reset: true,
    }));

    const [blur, blurApi] = useSprings(duplicatedItems.length, (index) => ({
        from: { filter: 'blur(0px)' },
        reset: true,
    }));

    // Function to trigger the animation for a specific item
    const handleMouseEnter = (index: number) => {
        api.pause();
        fadeUpApi.start((i) => {
            if (i === index) return { opacity: 1, transform: 'translateY(10%)', immediate: false };
        });
        blurApi.start((i) => {
            if (i === index) return { filter: 'blur(5px)' };
        });
    };

    // Function to reverse the animation for a specific item
    const handleMouseLeave = (index: number) => {
        api.resume();
        fadeUpApi.start((i) => {
            if (i === index) return { opacity: 0, transform: 'translateY(0%)', immediate: false };
        });
        blurApi.start((i) => {
            if (i === index) return { filter: 'blur(0px)' };
        });
    };

    const [ref, fadeDown] = useInView(
        () => ({
            from: { opacity: 0, transform: 'translateY(-100px)' },
            to: { opacity: 1, transform: 'translateY(0px)' },
        }),
        {
            rootMargin: '-40% 0%',
            amount: 'any',
            once: true,
        },
    );

    useEffect(() => {
        api.start();
    }, [api]);

    return (
        <div className="overflow-hidden text-center" id="project">
            <animated.h1 className="title-text py-[10vh]" ref={ref} style={fadeDown}>
                Projects
            </animated.h1>
            <animated.div style={props} className="align-items-center flex text-center whitespace-nowrap">
                {fadeUp.map((item, index) => (
                    <a href={duplicatedItems[index].url} key={`project-${index}`}>
                        <div
                            className="relative m-4 h-64 min-w-96 rounded-lg border p-4 text-wrap lg:h-96 lg:min-w-[800px]"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <animated.div
                                className="border-rounded-lg absolute top-0 left-0 h-full w-full rounded-lg border-gray-300 bg-cover bg-center"
                                style={{
                                    ...blur[index],
                                    backgroundImage: `url(${duplicatedItems[index].src})`,
                                }}
                            />
                            <animated.p className="subtitle-text text-center" style={fadeUp[index]}>
                                {duplicatedItems[index].alt}
                            </animated.p>
                            <animated.p className="text-center" style={fadeUp[index]}>
                                {duplicatedItems[index].moreInfo}
                            </animated.p>
                            <animated.div className="mt-4 flex justify-center gap-4" style={fadeUp[index]}>
                                {duplicatedItems[index].tech.map((icon, iconIndex) => (
                                    <FontAwesomeIcon key={`tech-${iconIndex}`} icon={icon} size={iconSize as any} />
                                ))}
                            </animated.div>
                        </div>
                    </a>
                ))}
            </animated.div>
        </div>
    );
}

export default Projects;
