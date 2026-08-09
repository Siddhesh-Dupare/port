"use client";

import { MoveRight, ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="mx-2 flex min-h-svh text-primary flex-col py-6">
      {/* NOTE: Top text */}
      <div className="text-5xl font-extrabold text-center">
        <span className="block ml-10">Where logic</span>
        <span className="block mr-30">becomes</span>
        <span className="block">pixels</span>
      </div>

      {/* NOTE: Bottom text */}
      <div className="mt-auto pb-4">
        {/* NOTE: Intro text */}
        <div className="flex flex-col text-2xl uppercase">
          <span className="">I&apos;m Siddhesh Dupare.</span>
          <span> I believe every idea deserves to become real.</span>
        </div>

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
