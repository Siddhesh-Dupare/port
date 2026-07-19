"use client";

import { MoveRight, ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useRef, useState } from "react";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const [timeline] = useState(() => gsap.timeline());

  return (
    <div className="relative h-full mx-2 text-primary">
      <BoldText timeline={timeline} />
      <div className="absolute bottom-0 left-0 md:mx-4">
        <IntroText timeline={timeline} />
        <Button
          className="text-xl pl-0 mb-4 underline underline-offset-6"
          variant="ghost">
          Get in touch
          <MoveRight className="ml-2 size-6" />
        </Button>
      </div>
      <div className="absolute bottom-0 right-0 text-sm text-muted-foreground pr-0 mb-4">
        <span className="flex gap-2">
          SCROLL
          <ArrowDown className="size-4" />
        </span>
      </div>
    </div>
  )
}

function BoldText({ timeline }: { timeline: gsap.core.Timeline }) {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    SplitText.create("p", {
      type: "lines",
      mask: "lines",
      linesClass: "split-child",
      onSplit: (self) => {
        return timeline.from(self.lines, {
          duration: 1.5,
          yPercent: 100,
          ease: "power4",
          stagger: 0.5,
        });
      }
    });
  }, { scope: textRef });

  return (
    <div ref={textRef} className="text-5xl sm:text-[11rem] sm:text-center uppercase">
      <p>Where logic</p>
      <p className="md:mx-50 text-left">becomes</p>
      <p>pixels</p>
    </div>
  );
}

function IntroText({ timeline }: { timeline: gsap.core.Timeline }) {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    SplitText.create("p", {
      type: "lines",
      mask: "lines",
      linesClass: "split-child",
      onSplit: (self) => {
        return timeline.from(self.lines, {
          duration: 0.7,
          yPercent: 100,
          ease: "power4",
          stagger: 0.1,
        });
      }
    });
  }, { scope: textRef });

  return (
    <div ref={textRef} className="mb-10 uppercase text-2xl md:text-4xl">
      <p>I&apos;m Siddhesh Dupare.</p>
      <p>I belive every idea deserves to become real.</p>
    </div>
  );
}
