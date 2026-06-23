"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const platforms = [
  {
    src: "/images/clarity.svg",
    alt: "Clarity by Broadcom",
    tag: "Portfolio",
  },
  {
    src: "/images/rally.svg",
    alt: "Rally by Broadcom",
    tag: "Delivery",
  },
  {
    src: "/images/stb.svg",
    alt: "Stonebranch",
    tag: "Automation",
  },
  {
    src: "/images/ca.svg",
    alt: "ConnectALL by Broadcom",
    tag: "Integration",
  },
];

function PlatformLogo({ platform, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex flex-col items-center transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${300 + index * 120}ms` }}
    >
      <div
        className={`relative flex h-[88px] w-full max-w-[200px] items-center justify-center rounded-2xl border px-6 py-5 transition-all duration-500 sm:h-[100px] sm:max-w-[220px] ${
          hovered
            ? "border-[#ff403a]/50 bg-white/[0.04] shadow-[0_0_35px_rgba(255,64,58,0.15)] -translate-y-1"
            : "border-white/[0.08] bg-white/[0.02]"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#ff403a]/10 to-transparent opacity-0 transition-opacity duration-500 ${
            hovered ? "opacity-100" : ""
          }`}
        />
        <img
          src={platform.src}
          alt={platform.alt}
          className={`relative z-10 h-10 w-auto max-w-full object-contain transition-all duration-500 sm:h-12 ${
            hovered ? "scale-110 brightness-110" : "brightness-90"
          }`}
        />
      </div>

      <span
        className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
          hovered ? "text-[#ff403a]" : "text-white/30"
        }`}
      >
        {platform.tag}
      </span>
    </div>
  );
}

export default function PlatformShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative overflow-hidden bg-black py-14 md:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff403a]/[0.06] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(115deg, transparent 40%, rgba(255,64,58,0.06) 50%, transparent 60%),
              linear-gradient(115deg, transparent 65%, rgba(255,64,58,0.04) 72%, transparent 80%)
            `,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[40px]">
            Plan Smarter. Deliver Faster.{" "}
            <span className="text-[#ff403a]">Automate Everything.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/75 md:text-[20px]">
            Industry-leading platforms that bring strategy, delivery, and
            automation together enabling your teams to move faster with complete
            visibility.
          </p>
        </div>

        {/* Logo grid */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {platforms.map((platform, index) => (
              <PlatformLogo
                key={platform.alt}
                platform={platform}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
