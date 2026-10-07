"use client";

import Script from 'next/script';

export default function SmokeBackground() {
  return (
    <>
      <canvas 
        id="canvas" 
        className="fixed top-0 left-0 w-full h-full -z-10 bg-[#151515]"
      ></canvas>

      <Script src="/js/smoke-simulation.js" strategy="lazyOnload" />
    </>
  );
}