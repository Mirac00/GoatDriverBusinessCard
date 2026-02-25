'use client';

import { svgPaths } from '@/lib/svg-paths';

export function Logo() {
    return (
        <div className="relative w-[128px] h-[128px]">
            <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
                <circle cx="64" cy="64" fill="url(#paint0_radial_logo)" opacity="0.61" r="64" />
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

            <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-[105px] h-[108px]" fill="none" preserveAspectRatio="none" viewBox="0 0 121.3 124.3">
                    <g filter="url(#filter0_d_logo)">
                        <path
                            clipRule="evenodd"
                            d={svgPaths.p3cc083c0}
                            fill="black"
                            fillRule="evenodd"
                        />
                        <path
                            d={svgPaths.p32ed1700}
                            fill="black"
                        />
                        <path
                            clipRule="evenodd"
                            d={svgPaths.p111e0370}
                            fill="white"
                            fillRule="evenodd"
                        />
                        <path
                            clipRule="evenodd"
                            d={svgPaths.p3cc083c0}
                            fillRule="evenodd"
                            stroke="white"
                            strokeWidth="0.1"
                        />
                        <path
                            d={svgPaths.p32ed1700}
                            stroke="white"
                            strokeWidth="0.1"
                        />
                        <path
                            clipRule="evenodd"
                            d={svgPaths.p111e0370}
                            fillRule="evenodd"
                            stroke="white"
                            strokeWidth="0.1"
                        />
                    </g>
                    <defs>
                        <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="124.3"
                            id="filter0_d_logo"
                            width="121.3"
                            x="0"
                            y="0"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="4.05" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_logo" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_logo" mode="normal" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
