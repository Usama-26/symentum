import React from "react";
import Container from "../container";
import CTAButton from "../cta-button";

export default function Hero() {
  return (
    <Container id="hero">
      <div className="lg:h-[49rem] h-[35rem] flex flex-col md:gap-4 gap-6  items-center justify-center md:rounded-[3rem] rounded-[1.25rem] md:bg-gradient-to-r bg-gradient-to-b from-[#D2EFFF] via-white to-[#F1E6FF]">
        <h1 className="font-display font-semibold md:text-[4.4rem] text-[2.5rem] leading-12 max-w-5xl mx-auto text-center md:leading-21.5 md:tracking-[-1.6px] md:mt-0 mt-8">
          Software That
          <span className="text-primary"> Moves</span> Your{" "}
          <br className="hidden md:block" /> Business
          <span className="text-primary"> Forward</span>
        </h1>
        <p className="text-center text-black/70 max-w-lg mx-auto md:leading-8 leading-6 text-lg">
          From design to development to marketing — we build solutions that make
          an impact.
        </p>
        <div className="">
          <CTAButton variant="primary">{"Let's Collaborate"}</CTAButton>
        </div>
      </div>
    </Container>
  );
}
