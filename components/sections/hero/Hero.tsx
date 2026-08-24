"use client";

import { useRef } from "react";

import { MoveRight, ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(SplitText, ScrollSmoother);

export default function Hero() {
  return (
    <div className="mx-2 flex min-h-svh text-primary flex-col py-6">
      {/* NOTE: Top text */}
      <TopText />

      {/* NOTE: Bottom text */}
      <div className="mt-auto pb-4">
        {/* NOTE: Intro text */}
        <MyIntro />

        <div className="flex justify-between mt-20">
          <div className="flex items-center">
            <Button
              className="text-xl pl-0 underline underline-offset-6"
              variant="ghost">
              Get in touch
            </Button>
            <MoveRight className="size-6" />
          </div>

            <div className="flex items-center text-muted-foreground">
              <span className="uppercase">scroll</span>
              <ArrowDown className="size-6" />
            </div>
          </div>
      </div>
    </div>
  );
}

function TopText() {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const text = new SplitText(textRef.current, { type: "lines", mask: "lines",  });
    gsap.from(text.lines, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "power2.out",
    });

    return () => {
      gsap.killTweensOf(text.lines);
    }
  });

  return (
    <div ref={textRef} className="text-5xl font-extrabold text-center space-y-4 uppercase">
      <span className="block ml-10">Where logic</span>
      <span className="block mr-30">becomes</span>
      <span className="block">pixels</span>
    </div>
  );
}

function MyIntro() {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const text = new SplitText(textRef.current, { type: "lines", mask: "lines" });
    gsap.from(text.lines, {
      delay: 0.5,
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.5,
      ease: "power1.out",
    });

    return () => {
      gsap.killTweensOf(text.lines);
    }
  })

  return (
    <div ref={textRef} className="flex flex-col text-2xl uppercase">
      <span className="">I&apos;m Siddhesh Dupare.</span>
      <span> I believe every idea deserves to become real.</span>
    </div>
  );
}
