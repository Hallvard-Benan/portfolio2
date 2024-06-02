import React from "react";

export default function HeroSection() {
  return (
    <section
      className="h-[100dvh] bg-custom-gradient gap-8 max-w-full justify-center items-end "
      id="hero"
    >
      this is the menu
      <div className="flex flex-wrap ">
        <h1 className="grid gap-gap-hero-content font-accent text-txt-light-1">
          <div className=" leading-[1.2]">
            <div className=" text-hero font-fw-hero-s">Hi, my name is</div>
            <div className="text-hero-lg font-fw-hero-l">Hallvard Benan</div>
          </div>
          <div className="leading-[1.2]">
            <div className="text-hero font-fw-hero-s">I&apos;m a</div>
            <div className="text-hero-lg font-fw-hero-l">
              Front-end developer
            </div>
          </div>
        </h1>
        <div>
          {" "}
          <img src="/public/images/Auctionhouse-desktop-.webp" alt="" />
        </div>
      </div>
      <button>see my projects</button>
    </section>
  );
}
