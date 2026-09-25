"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={loaderRef} className="">
    </div>
  );
}
