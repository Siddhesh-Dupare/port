
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="absolute top-2 right-2">
      <Button
        className="font-bold text-base text-primary"
        variant="link">
        Portfolio
      </Button>
      <Button
        className="font-bold text-base text-primary"
        variant="link">
        Contact
      </Button>
    </div>
  )
}
