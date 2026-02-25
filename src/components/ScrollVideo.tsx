'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { siteData } from '@/data/data';

const SECTION_IDS = ['hero', 'about', 'services', 'projects', 'reviews', 'contact'];
const SECONDS_PER_SECTION = 5;

export function ScrollVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const currentSectionRef = useRef<number>(-1);
    const timeUpdateHandlerRef = useRef<(() => void) | null>(null);
    const endedHandlerRef = useRef<(() => void) | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isReady, setIsReady] = useState(false);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Cleanup previous listeners
    const cleanupListeners = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;
        if (timeUpdateHandlerRef.current) {
            video.removeEventListener('timeupdate', timeUpdateHandlerRef.current);
            timeUpdateHandlerRef.current = null;
        }
        if (endedHandlerRef.current) {
            video.removeEventListener('ended', endedHandlerRef.current);
            endedHandlerRef.current = null;
        }
    }, []);

    // Get the currently visible section index
    const getActiveSection = useCallback((): number => {
        let activeIndex = 0;
        for (let i = 0; i < SECTION_IDS.length; i++) {
            const el = document.getElementById(SECTION_IDS[i]);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2) {
                    activeIndex = i;
                }
            }
        }
        return activeIndex;
    }, []);

    // Play video segment for a section
    const playSectionSegment = useCallback((sectionIndex: number) => {
        const video = videoRef.current;
        if (!video || !video.duration || isMobile) return;

        // Cleanup previous listeners
        cleanupListeners();

        const isLastSection = sectionIndex === SECTION_IDS.length - 1;
        const startTime = sectionIndex * SECONDS_PER_SECTION;

        // Seek to the section's start time
        video.currentTime = Math.min(startTime, video.duration - 0.5);

        if (isLastSection) {
            // Last section: play to end and hold last frame
            video.loop = false;
            const handler = () => {
                video.currentTime = video.duration - 0.1;
                video.pause();
            };
            endedHandlerRef.current = handler;
            video.addEventListener('ended', handler);
            video.play().catch(() => { });
        } else {
            // Non-last sections: play for SECONDS_PER_SECTION then pause
            video.loop = false;
            const endTime = startTime + SECONDS_PER_SECTION;
            const handler = () => {
                if (video.currentTime >= endTime) {
                    video.pause();
                    video.removeEventListener('timeupdate', handler);
                    timeUpdateHandlerRef.current = null;
                }
            };
            timeUpdateHandlerRef.current = handler;
            video.addEventListener('timeupdate', handler);
            video.play().catch(() => { });
        }
    }, [isMobile, cleanupListeners]);

    // Video ready handler
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleReady = () => {
            setIsReady(true);
        };

        if (video.readyState >= 1) {
            setIsReady(true);
        } else {
            video.addEventListener('loadedmetadata', handleReady, { once: true });
        }

        return () => {
            video.removeEventListener('loadedmetadata', handleReady);
        };
    }, []);

    // Mobile: autoplay loop
    useEffect(() => {
        const video = videoRef.current;
        if (!video || !isReady) return;

        if (isMobile) {
            video.loop = true;
            video.currentTime = 0;
            video.play().catch(() => { });
        } else {
            video.loop = false;
            // Trigger initial section playback
            currentSectionRef.current = -1;
            const sectionIndex = getActiveSection();
            currentSectionRef.current = sectionIndex;
            playSectionSegment(sectionIndex);
        }
    }, [isMobile, isReady, getActiveSection, playSectionSegment]);

    // Desktop: section-based scroll detection
    useEffect(() => {
        if (isMobile || !isReady) return;

        const handleScroll = () => {
            const sectionIndex = getActiveSection();

            if (sectionIndex !== currentSectionRef.current) {
                currentSectionRef.current = sectionIndex;
                playSectionSegment(sectionIndex);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cleanupListeners();
        };
    }, [isMobile, isReady, getActiveSection, playSectionSegment, cleanupListeners]);

    return (
        <div className="fixed inset-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="auto"
            >
                <source src={siteData.video.url} type="video/mp4" />
            </video>
        </div>
    );
}
