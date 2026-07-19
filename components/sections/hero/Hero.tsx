"use client";

import { MoveRight, ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useRef } from "react";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    SplitText.create("h1", {
      type: "lines",
      mask: "lines",
      linesClass: "split-child",
      onSplit: (self) => {
        return gsap.from(self.lines, {
          duration: 1.5,
          yPercent: 100,
          ease: "power4",
          stagger: 0.1,
        });
      }
    });
  }, { scope: containerRef});

  return (
    <div ref={containerRef} className="relative h-full mx-2 text-primary">
      <div className="text-6xl sm:text-[11rem] sm:text-center uppercase">
        <h1>Where logic</h1>
        <h1 className="md:mx-50 text-left">becomes</h1>
        <h1>pixels</h1>
      </div>
      <div className="absolute bottom-0 left-0 text-2xl">
        <div className="mb-10">
          <p>I&apos;m Siddhesh Dupare.</p>
          <p>I belive every idea deserves to become real.</p>
        </div>
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
