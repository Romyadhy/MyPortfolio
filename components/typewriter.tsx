"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
    className?: string;
}

export function Typewriter({
    text,
    speed = 100,
    onComplete,
    className = "",
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [completed, setCompleted] = useState(false);
    
    // Store the latest callback in a ref so its reference changes don't restart the effect
    const onCompleteRef = useRef(onComplete);
    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        let index = 0;
        setDisplayedText("");
        setCompleted(false);

        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1));
            index++;
            if (index >= text.length) {
                clearInterval(interval);
                setCompleted(true);
                setTimeout(() => {
                    onCompleteRef.current?.();
                }, 400);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <span className={className}>
            {displayedText}
            <span
                className={`cursor-blink inline-block ml-0.5 font-light ${completed ? "opacity-0" : ""
                    }`}
            >
                |
            </span>
        </span>
    );
}
