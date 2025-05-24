import { a, useInView, useSpring } from '@react-spring/web';
import { useRef, useState } from 'react';

// Define skills with categories
const skills = [
    { name: 'TypeScript', category: 'Frontend', level: 70 },
    { name: 'Laravel', category: 'Backend', level: 90 },
    { name: 'React', category: 'Frontend', level: 90 },
    { name: 'PHP', category: 'Backend', level: 70 },
    { name: 'TailwindCSS', category: 'Frontend', level: 80 },
    { name: 'MySQL', category: 'Backend', level: 60 },
];

// Define credentials
const credentials = [
    { title: "Master's in Computer Science", institution: 'University of Wolverhampton', year: '2025' },
    { title: 'CompTIA+', institution: 'CompTIA', year: '2024' },
    { title: 'AWS Cloud Practitioner', institution: 'Amazon Web Services', year: '2024' },
];

export default function About() {
    const about = useRef(null);
    // State to track whether skill bars should be animated
    const [skillBarsAnimated, setSkillBarsAnimated] = useState(false);

    // Main content fade up animation
    const [ref, upFade] = useInView(
        () => ({
            from: { opacity: 0, transform: 'translateY(100px)' },
            to: { opacity: 1, transform: 'translateY(0px)' },
            config: { mass: 1, tension: 80, friction: 26 },
            onRest: () => {
                setTimeout(() => {
                    leftFadeApi.resume();
                }, 250);
            },
        }),
        {
            rootMargin: '-20% 0%',
            amount: 'any',
            once: true,
        },
    );

    // Bio paragraph animations
    const [leftFade, leftFadeApi] = useSpring(() => ({
        from: { opacity: 0, transform: 'translateX(50px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { mass: 1, tension: 120, friction: 14 },
        onRest: () => {
            setTimeout(() => {
                rightFadeApi.resume();
            }, 150);
        },
        pause: true,
    }));

    const [rightFade, rightFadeApi] = useSpring(() => ({
        from: { opacity: 0, transform: 'translateX(-50px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { mass: 1, tension: 120, friction: 14 },
        onRest: () => {
            setTimeout(() => {
                credentialsAnimApi.resume();
            }, 150);
        },
        pause: true,
    }));

    // Credentials animation
    const [credentialsAnim, credentialsAnimApi] = useSpring(() => ({
        from: { opacity: 0, transform: 'translateY(30px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { mass: 1, tension: 120, friction: 14 },
        pause: true,
        onRest: () => {
            setTimeout(() => {
                skillsAnimApi.resume();
            }, 250);
        },
    }));

    // Skills animation
    const [skillsAnim, skillsAnimApi] = useSpring(() => ({
        from: { opacity: 0, scale: 0.9 },
        to: { opacity: 1, scale: 1 },
        config: { mass: 1, tension: 120, friction: 14 },
        pause: true,
        onRest: () => {
            // When skills section animation completes, trigger the skill bars animation
            setTimeout(() => {
                setSkillBarsAnimated(true);
            }, 200);
        },
    }));

    return (
        <div className="h-screen px-4 py-16 md:px-8 lg:px-16" id="about" ref={about}>
            {/* Background decoration elements */}
            <div className="bg-palette-1/5 absolute top-1/4 left-0 -z-10 h-64 w-64 rounded-full blur-3xl"></div>
            <div className="bg-palette-3/5 absolute right-0 bottom-1/4 -z-10 h-96 w-96 rounded-full blur-3xl"></div>
            <div className="bg-palette-4/5 absolute bottom-1/3 left-1/4 -z-10 h-48 w-48 rounded-full blur-3xl"></div>

            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <a.h1
                    style={upFade}
                    ref={ref}
                    className="subtitle-text from-palette-1 to-palette-3 mb-8 bg-gradient-to-r bg-clip-text text-center font-bold text-transparent"
                >
                    About Me
                </a.h1>

                <div className="grid grid-cols-1 items-start gap-12 overflow-x-hidden md:grid-rows-2">
                    {/* Bio content */}
                    <div className="space-y-6">
                        <a.div
                            style={leftFade}
                            className="rounded-xl border border-gray-100 bg-white/50 p-6 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-black/20"
                        >
                            <h2 className="text-palette-1 mb-3 text-2xl font-semibold">Background</h2>
                            <p className="text-base leading-relaxed md:text-lg">
                                I was born and raised in Manchester, UK. Whether it's football, gaming or going out for a few drinks, I'm always up
                                for a bit of excitement and adventure.
                            </p>
                        </a.div>

                        <a.div
                            style={rightFade}
                            className="rounded-xl border border-gray-100 bg-white/50 p-6 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-black/20"
                        >
                            <h2 className="text-palette-3 mb-3 text-2xl font-semibold">Passion</h2>
                            <p className="text-base leading-relaxed md:text-lg">
                                I'm a software engineer with a passion for web development. I love throwing myself into every project and I'm always
                                looking for something new to learn and master.
                            </p>
                        </a.div>

                        {/* Credentials card */}
                        <a.div
                            style={credentialsAnim}
                            className="rounded-xl border border-gray-100 bg-white/50 p-6 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-black/20"
                        >
                            <h2 className="text-palette-4 mb-4 text-2xl font-semibold">Credentials</h2>
                            <ul className="space-y-3">
                                {credentials.map((credential, index) => (
                                    <li
                                        key={credential.title}
                                        className="flex flex-col"
                                        style={{
                                            transitionDelay: `${index * 100}ms`,
                                            animation: 'fadeIn 0.5s ease-in-out forwards',
                                            opacity: 0,
                                        }}
                                    >
                                        <div className="flex items-center">
                                            <div className="bg-palette-1/10 mr-3 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-palette-1"
                                                >
                                                    <path d="M21.42 10.922a1 1 0 0 0-.55-1.32l-9-4a.977.977 0 0 0-.84 0l-9 4A1 1 0 0 0 3 11.342v1.77c0 .03 0 .06 0 .09a8.51 8.51 0 0 0 2.41 5.88c1.55 1.58 3.6 2.57 5.59 2.91.2.03.41.03.6 0 1.99-.34 4.04-1.33 5.59-2.91a8.5 8.5 0 0 0 2.41-5.88c0-.03 0-.06 0-.09v-1.77c0-.36-.2-.68-.55-.82z" />
                                                    <path d="M12 7v9" />
                                                    <path d="m15 10-3 3-3-3" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">{credential.title}</h3>
                                                <p className="text-sm text-gray-600">{credential.institution}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </a.div>
                    </div>

                    {/* Skills section */}
                    <a.div
                        style={skillsAnim}
                        className="rounded-xl border border-gray-100 bg-white/50 p-6 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-black/20"
                    >
                        <h2 className="text-palette-4 mb-6 text-2xl font-semibold">Skills & Expertise</h2>

                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <div key={skill.name} className="relative">
                                    <div className="flex flex-col">
                                        <div className="mb-1 flex items-center justify-between">
                                            <span className="font-medium">{skill.name}</span>
                                            <span className="text-xs text-gray-500">{skill.category}</span>
                                        </div>
                                        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                                            <div
                                                className={`h-full rounded-full ${skill.category === 'Frontend' ? 'bg-palette-1' : 'bg-palette-3'}`}
                                                style={{
                                                    width: skillBarsAnimated ? `${skill.level}%` : '0%',
                                                    transition: `width ${0.5 + index * 0.1}s ease-in-out`,
                                                    transitionDelay: `${index * 100}ms`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </a.div>
                </div>
            </div>

            {/* Add keyframes for the fadeIn animation */}
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
