"use client";

import { useRef } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!mainRef.current || !contentRef.current) return;

    const smoother = ScrollSmoother.create({
      wrapper: mainRef.current,
      content: contentRef.current,
      smooth: 1.2,
      effects: true,
    });

    return () => {
      smoother.kill();
    }
  }, {
    scope: mainRef
  });

  return (
    <div ref={mainRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}
