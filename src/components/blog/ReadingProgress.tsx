"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(Math.min(100, percent));
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed left-0 top-0 z-50 h-[3px] bg-primary transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progresso de leitura"
        />
    );
}
