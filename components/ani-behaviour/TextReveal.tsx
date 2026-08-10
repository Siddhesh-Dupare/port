"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

export default function TextReveal({ children, animationOnScroll = true, delay = 0 }: { children: React.ReactNode; animationOnScroll?: boolean; delay?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const lines = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {

    // NOTE: It ensures the dom is ready before applyin the animations
    if (!containerRef.current) return;

    elementRef.current = [];
    splitRef.current = [];
    lines.current = [];

    // NOTE: store the wrapped texts to the elements
    let elements: HTMLElement[] = [];
    if (containerRef.current.hasAttribute("data-copy-wrapper")) {
      elements = Array.from(containerRef.current.children) as HTMLElement[];
    } else {
      elements = [containerRef.current];
    }

    elements.forEach((element) => {
      elementRef.current.push(element as HTMLDivElement);

      const split = SplitText.create(element as HTMLDivElement, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
      });

      splitRef.current.push(split);

      const computedStyle = window.getComputedStyle(element as HTMLDivElement);
      const textIndent = computedStyle.textIndent;

      if (textIndent && textIndent !== "0px") {
        if (split.lines.length > 0) {
          (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
        }
        element.style.textIndent = "0px";
      }

      lines.current.push(...split.lines as HTMLDivElement[]);
    });

    gsap.set(lines.current, {
      y: "100%"
    });

    const animationProps = {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      delay: delay,
    };

    if (animationOnScroll) {
      gsap.to(lines.current, {
        ...animationProps,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        }
      });
    } else {
      gsap.to(lines.current, animationProps);
    }

    return () => {
      splitRef.current.forEach((split) => {
        if (split) {
          split.revert();
        }
      });
    }

  }, {
    scope: containerRef,
    dependencies: [animationOnScroll, delay]
  });

  if (React.Children.count(children) === 0) {
    return React.cloneElement(children as React.ReactElement<{ ref?: React.Ref<HTMLDivElement> }>, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
