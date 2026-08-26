"use client";

import Contact from "../contact/Contact";

export default function Footer() {

  return (
    <div className="sm:flex sm:justify-around sm:items-center sm:p-5 bg-accent-foreground text-white">
      <div className="w-full sm:px-10">
        <Contact />
      </div>
      <div className="w-full">
      </div>
    </div>
  );
}
