"use client";

import MyImage from "@/public/assets/MyImage";

export default function Hero() {

  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <div
        className="w-[90%]"
      >
        <MyImage />
      </div>
    </div>
  );
}
