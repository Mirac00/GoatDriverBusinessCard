'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const sections = [
    { id: 'hero', label: 'GOAT DRIVER' },
    { id: 'about', label: 'O MNIE' },
    { id: 'services', label: 'MOJE USŁUGI' },
    { id: 'projects', label: 'PROJEKTY' },
    { id: 'reviews', label: 'OPINIE' },
    { id: 'contact', label: 'KONTAKT' }
];

export function NavigationMenu() {
    const [activeSection, setActiveSection] = useState(0);
    const [scrollbarHeight, setScrollbarHeight] = useState(600);
    const sliderHeight = 64; // Height of the "capsule" slider
    const CLEARANCE = 140; // Clearance above and below to match footer height

    // Calculate position for a given section index
    const getPositionForIndex = useCallback((index: number) => {
        // Distribute markers evenly along the scrollbarHeight
        return (index / (sections.length - 1)) * scrollbarHeight;
    }, [scrollbarHeight]);

    useEffect(() => {
        const updateHeight = () => {
            // Scale scrollbar height: available screen minus double clearance for symmetry
            const h = Math.max(window.innerHeight - (2 * CLEARANCE), 200);
            setScrollbarHeight(h);
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            let currentSection = 0;
            sections.forEach((section, index) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    const elementBottom = elementTop + rect.height;

                    if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
                        currentSection = index;
                    }
                }
            });

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div
            className="relative z-[60] flex items-center gap-6"
            style={{
                height: `${scrollbarHeight}px`,
            }}
        >
            <div className="relative flex flex-col items-end gap-0 h-full justify-center pr-10">
                <div className="relative w-full" style={{ height: `${scrollbarHeight}px` }}>
                    {/* Main vertical line track */}
                    <div
                        className="absolute right-0 top-0 w-[2px] h-full bg-white/10"
                        style={{
                            background: 'linear-gradient(to bottom, transparent, rgba(230,0,11,0.3), transparent)'
                        }}
                    />

                    {/* Section Markers (Ticks) and Labels */}
                    {sections.map((section, index) => {
                        const yPos = getPositionForIndex(index);
                        const isActive = activeSection === index;

                        return (
                            <div
                                key={section.id}
                                className="absolute right-0 flex items-center group cursor-pointer"
                                style={{ top: `${yPos}px`, transform: 'translateY(-50%)' }}
                                onClick={() => scrollToSection(section.id)}
                            >
                                {/* Section Label */}
                                <motion.span
                                    animate={{
                                        color: isActive ? '#e6000b' : '#666',
                                        opacity: isActive ? 1 : 0.6,
                                        scale: isActive ? 1.05 : 1
                                    }}
                                    className="mr-6 text-[10px] tracking-[0.3em] font-black uppercase whitespace-nowrap"
                                    style={{
                                        fontFamily: 'Orbitron, sans-serif',
                                        textShadow: isActive ? '0 0 15px rgba(230, 0, 11, 0.6)' : 'none'
                                    }}
                                >
                                    {section.label}
                                </motion.span>

                                {/* Vertical tick line */}
                                <motion.div
                                    animate={{
                                        width: isActive ? '16px' : '8px',
                                        backgroundColor: isActive ? '#e6000b' : 'rgba(255,255,255,0.2)'
                                    }}
                                    className="h-[1.5px] transition-all"
                                    style={{
                                        boxShadow: isActive ? '0 0 10px #e6000b' : 'none'
                                    }}
                                />
                            </div>
                        );
                    })}

                    {/* The "Capsule" Snapping Slider */}
                    <motion.div
                        className="absolute right-[-7px] w-4 z-20 pointer-events-none"
                        initial={false}
                        animate={{
                            y: getPositionForIndex(activeSection) - (sliderHeight / 2)
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 20,
                            mass: 1
                        }}
                        style={{ height: `${sliderHeight}px` }}
                    >
                        <div className="relative w-full h-full flex flex-col">
                            {/* Metallic top cap */}
                            <div className="h-2 w-full bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-full shadow-lg" />

                            {/* Red Glowing Core */}
                            <div
                                className="flex-1 w-full relative"
                                style={{
                                    background: 'linear-gradient(90deg, #b00008 0%, #e6000b 50%, #b00008 100%)',
                                    boxShadow: '0 0 20px #e6000b, 0 0 40px rgba(230, 0, 11, 0.5), inset 0 0 10px rgba(0,0,0,0.5)'
                                }}
                            >
                                {/* Internal mechanical detail (middle line) */}
                                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/40 -translate-y-1/2" />
                                <div className="absolute top-1/2 left-0 right-0 flex flex-col gap-1 -translate-y-1/2 px-0.5">
                                    <div className="h-[2px] w-full bg-black/20" />
                                    <div className="h-[2px] w-full bg-black/20" />
                                </div>
                            </div>

                            {/* Metallic bottom cap */}
                            <div className="h-2 w-full bg-gradient-to-b from-gray-500 to-gray-300 rounded-b-full shadow-lg" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
