
import { MoveRight, ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative h-full mx-2 text-primary">
      <div className="text-6xl sm:text-9xl">
        <p>Where logic</p>
        <p>becomes pixels</p>
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
