"use client";

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypingEffect() {
 
  const el = useRef(null);

  useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Full Stack Software Engineer', 
                'Especialista en React & Node.js', 
                'Desarrollador WordPress', 
                'Apasionado por DevOps & IA'
            ],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
            });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} className="typing text-blue-500 font-bold"></span>;
}