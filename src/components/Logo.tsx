'use client';

import { svgPaths } from '@/lib/svg-paths';

export function Logo() {
    return (
        <div className="relative w-[128px] h-[128px]">
            {/* Background Glow */}
            <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
                <circle cx="64" cy="64" fill="url(#paint0_radial_logo)" opacity="0.6" r="64" />
                <defs>
                    <radialGradient
                        cx="0"
                        cy="0"
                        gradientTransform="translate(64 64) rotate(90) scale(64)"
                        gradientUnits="userSpaceOnUse"
                        id="paint0_radial_logo"
                        r="1"
                    >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#999999" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>

            {/* Logo Image with Drop Shadow */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-full h-full flex items-center justify-center">
                    <img
                        src="/logo.ico"
                        alt="GOATDRIVER Logo"
                        className="w-[100px] h-[100px] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] filter brightness-110"
                    />
                </div>
            </div>
        </div>
    );
}
