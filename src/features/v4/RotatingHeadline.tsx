"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const phrases = ["Aumenta tus ventas.", "Haz tu empresa más productiva.", "Automatiza lo repetitivo.", "Mejora tu atención al cliente.", "Software & automatización IA."];

export default function RotatingHeadline() {
  const text = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const typed = new Typed(text.current, { strings: phrases, typeSpeed: 48, backSpeed: 25, backDelay: 1900, loop: true, showCursor: true, cursorChar: "|" });
    return () => typed.destroy();
  }, []);
  return <div className="rotating-headline"><span className="sr-only">Software, ventas y automatización con inteligencia artificial.</span><span ref={text} aria-hidden="true">{phrases[0]}</span></div>;
}
