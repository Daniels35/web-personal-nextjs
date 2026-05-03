"use client";

import React from 'react';

interface NextSectionButtonProps {
  target: string;
  text?: string;
}

export default function NextSectionButton({ target, text = "Siguiente Sección" }: NextSectionButtonProps) {
  return (
    <div className="w-full flex justify-center mt-10 pb-8">
      <a
        href={`#${target}`}
        className="group flex flex-col items-center justify-center text-[var(--skin-color)] transition-transform duration-300 hover:scale-110"
        aria-label={`Ir a ${target}`}
      >
        <span className="text-sm font-medium mb-2 opacity-80 transition-opacity group-hover:opacity-100">
          {text}
        </span>
        <i className="fa fa-chevron-down text-2xl animate-bounce"></i>
      </a>
    </div>
  );
}