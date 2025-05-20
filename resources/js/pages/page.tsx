import PortfolioLayout from '@/layouts/portfolio-layout';
import { Head } from '@inertiajs/react';
import { useRef } from 'react';
import About from './subsections/About';
import Contact from './subsections/Contact';
import IntroPage from './subsections/Intro';
import Projects from './subsections/Projects';
import TechStack from './subsections/TechStack';

// Define the page component with proper Inertia structure
export default function Page() {
    const aboutRef = useRef<HTMLElement>(null);
    const projectRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    return (
        <>
            <Head title="George Vanden - Portfolio" />
            <PortfolioLayout>
                {/* Scroll snap container */}
                <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
                    <section id="intropage" className="h-screen snap-start snap-always">
                        <IntroPage />
                    </section>

                    <section id="about" ref={aboutRef} className="h-screen snap-start snap-always">
                        <About />
                    </section>

                    <section id="techstack" className="h-screen snap-start snap-always">
                        <TechStack />
                    </section>

                    <section id="project" ref={projectRef} className="h-screen snap-start snap-always">
                        <Projects />
                    </section>

                    <section id="contact" ref={contactRef} className="h-screen snap-start snap-always">
                        <Contact />
                    </section>
                </div>
            </PortfolioLayout>
        </>
    );
}
