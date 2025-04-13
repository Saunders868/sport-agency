"use client";

import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroContent = ({ content }: { content: HeroData }) => {
  const videoWrapRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        scroller: "body",
        trigger: videoWrapRef.current,
        // Animation Start
        pin: true,
        scrub: true,
        start: "top top",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },

      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <Section className="pb-0 sm:pb-0">
      <Container>
        <h1 className="uppercase relative z-10  text-black leading-none  font-coolvetica text-hero text-center">
          <span>Swing</span>
          <span>With</span>
          <br />
          <span className="inline-block">Confidence</span>
        </h1>
        <div
          id="video-wrap"
          ref={videoWrapRef}
          className="flex video-wrap flex-col -mt-[10vh] sm:-mt-[20vh] items-center justify-center w-full sticky h-screen"
        >
          <div
            ref={containerRef}
            className="flex flex-col h-[90%] w-[90%] rounded-3xl overflow-hidden justify-center sticky top-0 z-10 items-center"
          >
            <div className="flex relative z-10 flex-col justify-center items-center h-full">
              <p className="font-coolvetica text-title uppercase text-white">
                {content.cta || "Learn More"}
              </p>
              <button className="bg-highlight-green rounded-full p-6 material-symbols-outlined">
                arrow_downward
              </button>
            </div>

            <p className="text-features z-10 font-coolvetica bottom-0 uppercase text-white absolute">
              {content.tagline || "Elevate your game"}
            </p>

            <div className="h-full w-full overflow-hidden absolute items-start top-0">
              <video
                autoPlay
                muted
                aria-label="video player"
                className="h-full w-full object-cover"
                loop
              >
                <source
                  src={content.heroVideo || "/videos/hero_video.mp4"}
                  type="video/mp4"
                />
                Your browser does not support the video tag
              </video>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroContent;
