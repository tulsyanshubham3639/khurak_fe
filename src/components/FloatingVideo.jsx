"use client";
import { revealOptions } from "@/constants/scrollRevealOptions";
import React, { useEffect, useRef } from "react";

export function FloatigVideo() {
    const fromTop = useRef(null)
    const fromBottom = useRef(null)
    useEffect(() => {
        async function animate() {
            const sr = (await import("scrollreveal")).default
            if (fromTop.current) {
                sr(revealOptions).reveal(fromTop.current,{ origin: 'top' })
            }
            if (fromBottom.current) {
                sr(revealOptions).reveal(fromBottom.current,{ origin: 'bottom' })
            }
        }
        animate()
    }, [])
    return (
        <div className="w-full">
            <div className="max-w-7xl flex flex-col overflow-hidden mx-auto py-10 px-3">
                <div className="flex flex-col items-center justify-center" ref={fromBottom}>
                    <span className="text-2xl md:text-4xl font-semibold drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)] text-ktheme-500 dark:text-ktheme-500">
                        Why खुRaak
                    </span>
                    <span className="text-4xl md:text-6xl font-bold mt-1 pb-2 leading-none">
                        Word From Founder
                    </span>
                </div>
                <div ref={fromTop} className="relative max-w-5xl mx-auto w-full border-2 md:border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[20px] md:rounded-[30px] shadow-2xl">
                    <div className="absolute md:h-3 h-1 md:w-3 w-1 rounded-full border-[1px] md:border-[2px] border-yellow-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/50 via-black to-black left-[2px] md:left-[6px] top-1/2 flex items-center justify-center" />
                    <div className="relatve h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
                        <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/djv50lQtI2E?si=ABqD2EHMH8DHDzVQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true} ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
