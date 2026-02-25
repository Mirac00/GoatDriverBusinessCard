'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const sections = [
    { id: 'hero', label: 'GOAT DRIVER' },
    { id: 'about', label: 'O MNIE' },
    { id: 'services', label: 'MOJE USŁUGI' },
    { id: 'projects', label: 'PROJEKTY' },
    { id: 'reviews', label: 'OPINIE' },
    { id: 'contact', label: 'KONTAKT' }
];

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsOpen(false);
    };

    return (
        <>
            {/* Hamburger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 right-6 z-[100] md:hidden flex flex-col justify-center items-center w-14 h-14 rounded-xl transition-all duration-300 active:scale-95"
                style={{
                    background: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(230, 0, 11, 0.5)',
                    boxShadow: '0 0 15px rgba(230, 0, 11, 0.2)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                }}
                aria-label="Menu"
            >
                <div className="flex flex-col items-center gap-1.5 scale-[0.85]">
                    <div className="flex flex-col gap-1">
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="block w-6 h-[2px] bg-[#e6000b]"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.2 }}
                            className="block w-6 h-[2px] bg-[#e6000b]"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="block w-6 h-[2px] bg-[#e6000b]"
                        />
                    </div>
                    {!isOpen && (
                        <span className="text-[8px] font-black tracking-[0.2em] text-[#e6000b] mt-0.5" style={{ margin: 0, padding: 0 }}>
                            MENU
                        </span>
                    )}
                </div>
            </button>

            {/* Fullscreen overlay menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[90] md:hidden flex flex-col items-center justify-center"
                        style={{
                            background: 'rgba(0, 0, 0, 0.98)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                        }}
                    >
                        {/* Red glow line at top */}
                        <div
                            className="absolute top-0 left-0 right-0 h-[2px]"
                            style={{
                                background: '#e6000b',
                                boxShadow: '0 0 20px #e6000b, 0 0 40px rgba(230, 0, 11, 0.5)',
                            }}
                        />

                        <nav className="flex flex-col items-center gap-10">
                            {sections.map((section, index) => (
                                <motion.button
                                    key={section.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                    onClick={() => scrollToSection(section.id)}
                                    className="text-lg tracking-[0.4em] uppercase transition-colors duration-300 hover:text-[#e6000b] text-gray-300 font-black cursor-pointer"
                                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                                >
                                    {section.label}
                                </motion.button>
                            ))}
                        </nav>

                        {/* Decorative bottom line */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-[2px]"
                            style={{
                                background: '#e6000b',
                                boxShadow: '0 0 20px #e6000b, 0 0 40px rgba(230, 0, 11, 0.5)',
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
