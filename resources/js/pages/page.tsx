import { Head } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import Header from './SmallComponents/Header';
import About from './subsections/About';
import Contact from './subsections/Contact';
import IntroPage from './subsections/Intro';
import Projects from './subsections/Projects';

// Define the page component with proper Inertia structure
export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Prevent default scroll behavior to use our custom implementation
        const preventDefaultScroll = (e: WheelEvent) => {
            if (e.ctrlKey) return; // Allow zoom
            e.preventDefault();
        };

        // Handle scroll for consistent snap behavior
        const handleScroll = (e: WheelEvent) => {
            if (e.ctrlKey) return; // Allow zoom

            const sections = containerRef.current ? Array.from(containerRef.current.querySelectorAll('section')) : [];

            const currentIndex = sections.findIndex((section) => {
                const rect = section.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom > 100;
            });

            if (currentIndex === -1) return;

            // Determine scroll direction
            const direction = e.deltaY > 0 ? 1 : -1;
            const targetIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));

            // Scroll to target with consistent behavior
            sections[targetIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        };

        // Apply to document for global scrollbar
        document.addEventListener('wheel', preventDefaultScroll, { passive: false });
        document.addEventListener('wheel', handleScroll);

        return () => {
            document.removeEventListener('wheel', preventDefaultScroll);
            document.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <>
            <Head title="George Vanden - Portfolio" />

            <div ref={containerRef} className="relative" style={{ scrollSnapType: 'y mandatory' }}>
                <Header />
                <section id="intropage" className="h-screen snap-start scroll-mt-20">
                    <IntroPage />
                </section>

                <section id="about" className="h-screen snap-start scroll-mt-20">
                    <About />
                </section>

                <section id="project" className="h-screen snap-start scroll-mt-20">
                    <Projects />
                </section>

                <section id="contact" className="snap-start scroll-mt-20">
                    <Contact />
                </section>
            </div>
        </>
    );
}
